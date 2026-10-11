import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import { sendTemplateEmail } from "@/lib/email-templates/send-email";
import type { Database } from "@/integrations/supabase/types";
import { buildRows, firstOf, pageLabel } from "./request-fields";

// Server-only: writes the submission, then sends the visitor's confirmation and
// a copy to the owner. Never import the email helper from browser code.

const OWNER_EMAIL = "udoezekiel2028@gmail.com";
const SITE_URL = "https://udoezekiel.dev";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldValue = z.union([z.string().max(20000), z.array(z.string().max(20000)).max(60)]);

const submissionShape = z.object({
  page: z.string().min(1).max(200),
  fields: z
    .record(fieldValue)
    .refine((v) => Object.keys(v).length <= 60, "too many fields")
    .refine((v) => JSON.stringify(v).length <= 50000, "submission too large"),
});

export const submitProjectRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => submissionShape.parse(data))
  .handler(async ({ data }): Promise<{ ok: boolean; error?: string }> => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) {
      console.error("[requests] Supabase server environment variables are missing");
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    const supabase = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      // Opaque sb_ keys aren't JWTs; send only apikey, not the default Authorization bearer.
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    // Generated up front so the email sends can be deduped against this exact submission.
    const submissionId = crypto.randomUUID();
    const { error } = await supabase
      .from("form_submissions")
      .insert({ id: submissionId, page: data.page, fields: data.fields });

    if (error) {
      console.error("[requests] submission rejected", error.message);
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    const visitorEmail = firstOf(data.fields['field2'] || data.fields['email']).trim();
    const emailValid = EMAIL_RE.test(visitorEmail);
    const visitorName = firstOf(data.fields['field1'] || data.fields['name']).trim();
    const from = pageLabel(data.page);
    const submittedAt = new Date().toLocaleString("en-GB", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Lagos",
    });

    try {
      if (emailValid) {
        await sendTemplateEmail("request-received", visitorEmail, {
          templateData: { siteName: "Udo Ezekiel", siteUrl: SITE_URL, name: visitorName, email: visitorEmail },
          idempotencyKey: `request-received-${submissionId}`,
        });
      }
      await sendTemplateEmail(
        "request-copy",
        OWNER_EMAIL,
        {
          templateData: {
            siteName: "Udo Ezekiel",
            pageName: from,
            submittedAt,
            visitorEmail: emailValid ? visitorEmail : "",
            rows: buildRows(data.fields),
          },
          idempotencyKey: `request-copy-${submissionId}`,
          ...(emailValid ? { replyTo: visitorEmail } : {}),
        }
      );
    } catch (sendError) {
      // The request is already saved; a failed email must not lose or repeat it.
      console.error("[requests] email notification failed", sendError);
    }

    return { ok: true };
  });
