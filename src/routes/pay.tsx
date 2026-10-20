import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading, pageHead } from "@/components/site/content-pages";
import { getPaddleEnvironment, getPaddlePriceId, initializePaddle } from "@/lib/paddle";
import { PAYMENT_MIN_USD, PAYMENT_STEP_USD, PAYMENT_MAX_USD, normalizeAmount, unitsFor } from "@/lib/payment-amount";

export const Route = createFileRoute("/pay")({
  head: () => pageHead("Pay For Your Project", "Securely pay Udo Ezekiel for website design and development, starting from $200."),
  component: PayPage,
});

const QUICK = [200, 500, 1000, 2000];
const field = "mt-2 w-full rounded border border-ink/20 bg-background px-4 py-3 text-ink outline-none focus:border-brand";

function PayPage() {
  const [amount, setAmount] = useState(PAYMENT_MIN_USD);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const pay = async (e: React.FormEvent) => {
    e.preventDefault();
    const final = normalizeAmount(amount);
    setAmount(final);
    setError("");
    setLoading(true);
    try {
      await initializePaddle();
      const priceId = await getPaddlePriceId("website_project_100");
      window.Paddle.Checkout.open({
        items: [{ priceId, quantity: unitsFor(final) }],
        customer: email.trim() ? { email: email.trim() } : undefined,
        settings: { displayMode: "overlay", variant: "one-page", allowLogout: false, successUrl: `${window.location.origin}/payment-success` },
      });
    } catch {
      setError("Checkout could not open right now. Please try again or contact me.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {getPaddleEnvironment() === "sandbox" && (
        <div className="w-full border-b border-brand/40 bg-brand/10 px-4 py-2 text-center text-sm text-ink">
          Test mode: payments made in the preview are not real.
        </div>
      )}
      <PageHeading title="Pay For Your Project" subtitle="Enter the amount from your quote. Projects start from $200." />
      <section className="bg-paper py-16 text-ink">
        <form onSubmit={pay} className="mx-auto max-w-xl px-5">
          <p className="font-bold">Choose an amount (USD)</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {QUICK.map((q) => (
              <Button key={q} type="button" variant={amount === q ? "default" : "outline"} onClick={() => setAmount(q)}>
                ${q.toLocaleString()}
              </Button>
            ))}
          </div>
          <label className="mt-6 block">
            Or enter your quoted amount
            <input className={field} type="number" min={PAYMENT_MIN_USD} max={PAYMENT_MAX_USD} step={PAYMENT_STEP_USD} value={amount} onChange={(e) => setAmount(Number(e.target.value))} onBlur={() => setAmount(normalizeAmount(amount))} required />
          </label>
          <p className="mt-2 text-sm text-ink/60">Amounts go up in $100 steps, from ${PAYMENT_MIN_USD} to ${PAYMENT_MAX_USD.toLocaleString()}.</p>
          <label className="mt-6 block">
            Email for your receipt (optional)
            <input className={field} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
          <Button type="submit" size="lg" className="mt-8 w-full" disabled={loading}>
            {loading ? "Opening checkout..." : <>Pay ${normalizeAmount(amount).toLocaleString()} <ArrowRight /></>}
          </Button>
          <p className="mt-4 text-xs text-ink/55">Payments are processed securely by Paddle.com, our online reseller and Merchant of Record.</p>
        </form>
      </section>
    </>
  );
}
