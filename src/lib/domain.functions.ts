import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type DomainResult = { domain: string; available: boolean };

export const checkDomain = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z.object({ domain: z.string().regex(/^[a-z0-9-]{1,63}\.[a-z0-9.-]{2,20}$/) }).parse(data),
  )
  .handler(async ({ data }): Promise<{ results: DomainResult[]; error?: string }> => {
    const token = process.env['HOSTINGER_API_TOKEN'];
    if (!token) return { results: [], error: "Domain search is not configured." };
    const [name, ...rest] = data.domain.split(".");
    const tld = rest.join(".");
    const res = await fetch("https://developers.hostinger.com/api/domains/v1/availability", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ domain: name, tlds: [tld], with_alternatives: true }),
    });
    if (!res.ok) {
      console.error("Hostinger availability error", res.status, await res.text());
      return { results: [], error: "Could not check this domain right now. Please try again." };
    }
    const json = (await res.json()) as Array<{ domain: string | null; is_available: boolean }>;
    return {
      results: json.filter((r) => r.domain).map((r) => ({ domain: r.domain as string, available: r.is_available })),
    };
  });
