import { describe, expect, it } from "vitest";
import { mapEvent } from "@/lib/payment-events";

const item = (id: string) => [{ price: { importMeta: { externalId: id } } }];

describe("payment event mapping", () => {
  it("records a first payment as paid", () => {
    const r = mapEvent({ eventId: "e1", eventType: "transaction.completed", data: { id: "txn", origin: "web", items: item("website_project_100"), details: { totals: { grandTotal: "30000" } }, currencyCode: "USD" } }, "sandbox");
    expect(r?.status).toBe("paid");
    expect(r?.amount_cents).toBe(30000);
    expect(r?.product_id).toBe("website_project_payment");
  });
  it("records a monthly renewal as renewal_paid", () => {
    const r = mapEvent({ eventId: "e2", eventType: "transaction.completed", data: { origin: "subscription_recurring", items: item("website_care_monthly") } }, "live");
    expect(r?.status).toBe("renewal_paid");
  });
  it("records failed and cancelled plans", () => {
    expect(mapEvent({ eventId: "e3", eventType: "transaction.payment_failed", data: {} }, "live")?.status).toBe("payment_failed");
    expect(mapEvent({ eventId: "e4", eventType: "subscription.canceled", data: { status: "canceled" } }, "live")?.status).toBe("canceled");
  });
  it("ignores unrelated events", () => {
    expect(mapEvent({ eventId: "e5", eventType: "customer.created", data: {} }, "live")).toBeNull();
  });
});
