import { describe, expect, it } from "vitest";
import { PROJECT_STARTING_AT_USD, WEBSITE_CARE_MONTHLY_USD } from "@/data/public-pricing";

describe("public pricing", () => {
  it("matches the stated project starting price and monthly care plan", () => {
    expect(PROJECT_STARTING_AT_USD).toBe(200);
    expect(WEBSITE_CARE_MONTHLY_USD).toBe(100);
  });
});