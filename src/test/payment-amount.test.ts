import { describe, expect, it } from "vitest";
import { normalizeAmount, unitsFor } from "@/lib/payment-amount";

describe("project payment amount", () => {
  it("never goes below $200", () => {
    expect(normalizeAmount(50)).toBe(200);
  });
  it("rounds to $100 steps", () => {
    expect(normalizeAmount(340)).toBe(300);
    expect(normalizeAmount(350)).toBe(400);
  });
  it("charges one unit per $100", () => {
    expect(unitsFor(200)).toBe(2);
    expect(unitsFor(1500)).toBe(15);
  });
});
