import { createFileRoute } from "@tanstack/react-router";

// One-time project payments need no stored state; acknowledge deliveries so
// the payment provider does not retry. Nothing private is read or returned.
export const Route = createFileRoute("/api/public/payments/webhook")({
  server: {
    handlers: {
      POST: async () => Response.json({ received: true }),
    },
  },
});
