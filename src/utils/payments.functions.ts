import { createServerFn } from "@tanstack/react-start";
import { gatewayFetch, type PaddleEnv } from "@/lib/paddle.server";

const ALLOWED_PRICES = new Set(["website_project_100"]);

export const resolvePaddlePrice = createServerFn({ method: "GET" })
  .inputValidator((data: { priceId: string; environment: PaddleEnv }) => {
    if (!ALLOWED_PRICES.has(data.priceId)) throw new Error("Unknown price");
    if (data.environment !== "sandbox" && data.environment !== "live") throw new Error("Bad environment");
    return data;
  })
  .handler(async ({ data }) => {
    const response = await gatewayFetch(data.environment, `/prices?external_id=${encodeURIComponent(data.priceId)}`);
    const result = (await response.json()) as { data?: { id: string }[] };
    const id = result.data?.[0]?.id;
    if (!id) throw new Error("Price not found");
    return id;
  });
