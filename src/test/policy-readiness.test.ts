import { describe, expect, it } from "vitest";
import { privacyPolicy, refundPolicy, termsPolicy } from "@/data/policies";

const policyText = (policy: typeof termsPolicy) =>
  [policy.summary, ...policy.intro, ...policy.sections.flatMap((section) => [section.heading, ...(section.paras ?? []), ...(section.bullets ?? []), section.after ?? ""])].join(" ").toLowerCase();

describe("payment policy readiness", () => {
  it("identifies Udo Ezekiel as seller in the terms and privacy policy", () => {
    expect(policyText(termsPolicy)).toContain("udo ezekiel is the seller");
    expect(policyText(privacyPolicy)).toContain("udo ezekiel is the seller");
  });

  it("discloses Paddle as reseller and Merchant of Record in the terms", () => {
    const text = policyText(termsPolicy);
    expect(text).toContain("online reseller paddle.com");
    expect(text).toContain("merchant of record for all our orders");
  });

  it("identifies Paddle as a payment data recipient in the privacy policy", () => {
    expect(policyText(privacyPolicy)).toContain("paddle.com, our online reseller and merchant of record");
  });

  it("states a 30-day window and Paddle's refund request process", () => {
    const text = policyText(refundPolicy);
    expect(text).toContain("30-day change-of-mind refund request period");
    expect(text).toContain("submit your request at paddle.net");
  });
});