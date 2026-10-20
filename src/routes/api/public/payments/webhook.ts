import { createFileRoute } from "@tanstack/react-router";
import { verifyWebhook, gatewayFetch, type PaddleEnv } from "@/lib/paddle.server";
import { mapEvent, NOTIFY_STATUSES, PRODUCT_LABELS } from "@/lib/payment-events";
import { OWNER_EMAILS } from "@/components/site/contact-details";

async function customerEmail(env: PaddleEnv, customerId: string | null): Promise<string | null> {
  if (!customerId) return null;
  try {
    const res = await gatewayFetch(env, `/customers/${encodeURIComponent(customerId)}`);
    const json = (await res.json()) as { data?: { email?: string } };
    return json.data?.email ?? null;
  } catch {
    return null;
  }
}

export const Route = createFileRoute("/api/public/payments/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const envParam = new URL(request.url).searchParams.get("env");
        if (envParam !== "sandbox" && envParam !== "live") return new Response("Bad env", { status: 400 });
        const env: PaddleEnv = envParam;
        let event: any;
        try {
          event = await verifyWebhook(request, env);
        } catch (e) {
          console.error("Payment webhook signature failed", e);
          return new Response("Invalid signature", { status: 400 });
        }
        const row = mapEvent(event, env);
        if (!row) return Response.json({ received: true });

        const email = await customerEmail(env, row.customer_id);
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin
          .from("payments")
          .upsert({ ...row, customer_email: email, updated_at: new Date().toISOString() }, { onConflict: "event_key" });
        if (error) {
          console.error("Saving payment failed", error);
          return new Response("Save failed", { status: 500 });
        }

        if (NOTIFY_STATUSES.has(row.status)) {
          const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
          for (const owner of OWNER_EMAILS) {
            try {
              await sendTemplateEmail("payment-alert", owner, {
                idempotencyKey: `payment-alert-${row.event_key}-${owner}`,
                templateData: {
                  status: row.status,
                  plan: (row.product_id && PRODUCT_LABELS[row.product_id]) || "Payment",
                  amount: row.amount_cents != null ? `${(row.amount_cents / 100).toFixed(2)} ${row.currency ?? "USD"}` : "",
                  email: email ?? "",
                  testMode: env === "sandbox",
                },
              });
            } catch (e) {
              console.error("Payment alert email failed", e);
            }
          }
        }
        return Response.json({ received: true });
      },
    },
  },
});
