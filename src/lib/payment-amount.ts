// Browser-safe rules for the "pay for your project" amount picker.
export const PAYMENT_STEP_USD = 100;
export const PAYMENT_MIN_USD = 200;
export const PAYMENT_MAX_USD = 10000;

/** Snap any typed amount to a valid payable amount ($200 minimum, $100 steps). */
export function normalizeAmount(usd: number): number {
  if (!Number.isFinite(usd)) return PAYMENT_MIN_USD;
  const stepped = Math.round(usd / PAYMENT_STEP_USD) * PAYMENT_STEP_USD;
  return Math.min(PAYMENT_MAX_USD, Math.max(PAYMENT_MIN_USD, stepped));
}

/** Number of $100 units charged at checkout for a dollar amount. */
export function unitsFor(usd: number): number {
  return normalizeAmount(usd) / PAYMENT_STEP_USD;
}
