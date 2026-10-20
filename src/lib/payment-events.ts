// Pure mapping from payment-provider webhook events to stored payment rows.
// Kept free of server imports so it can be unit tested.

export const PRICE_TO_PRODUCT: Record<string, string> = {
  website_project_100: "website_project_payment",
  website_care_monthly: "website_care_plan",
};

export const PRODUCT_LABELS: Record<string, string> = {
  website_project_payment: "Website project (one-time)",
  website_care_plan: "Website Care Plan (monthly)",
};

export type PaymentRow = {
  event_key: string;
  environment: "sandbox" | "live";
  kind: "payment" | "subscription";
  status: string;
  transaction_id: string | null;
  subscription_id: string | null;
  customer_id: string | null;
  product_id: string | null;
  price_id: string | null;
  amount_cents: number | null;
  currency: string | null;
  period_end: string | null;
};

/** Which events should email the owner. */
export const NOTIFY_STATUSES = new Set(["paid", "renewal_paid", "payment_failed", "canceled"]);

export function mapEvent(event: { eventId: string; eventType: string; data: any }, env: "sandbox" | "live"): PaymentRow | null {
  const d = event.data ?? {};
  const priceId: string | null = d.items?.[0]?.price?.importMeta?.externalId ?? null;
  const productId = priceId ? PRICE_TO_PRODUCT[priceId] ?? null : null;
  const base = {
    event_key: event.eventId,
    environment: env,
    customer_id: d.customerId ?? null,
    price_id: priceId,
    product_id: productId,
  };
  switch (event.eventType) {
    case "transaction.completed":
    case "transaction.payment_failed": {
      const total = d.details?.totals?.grandTotal ?? d.details?.totals?.total;
      const failed = event.eventType === "transaction.payment_failed";
      const renewal = d.origin === "subscription_recurring";
      return {
        ...base,
        kind: "payment",
        status: failed ? "payment_failed" : renewal ? "renewal_paid" : "paid",
        transaction_id: d.id ?? null,
        subscription_id: d.subscriptionId ?? null,
        amount_cents: total != null ? Number(total) : null,
        currency: d.currencyCode ?? null,
        period_end: d.billingPeriod?.endsAt ?? null,
      };
    }
    case "subscription.created":
    case "subscription.updated":
    case "subscription.canceled":
      return {
        ...base,
        kind: "subscription",
        status: event.eventType === "subscription.canceled" ? "canceled" : String(d.status ?? "active"),
        transaction_id: null,
        subscription_id: d.id ?? null,
        amount_cents: null,
        currency: null,
        period_end: d.currentBillingPeriod?.endsAt ?? null,
      };
    default:
      return null;
  }
}
