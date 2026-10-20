# Payments: close the gaps

## What changes for you
1. **Monthly plan:** a new "Website Care Plan" at $100/month, shown on the /pay page next to the one-time "pay your quote" option. (I picked the plan name myself, so tell me if you want a different one.)
2. **Payments recorded:** every confirmed payment, renewal, failed payment and cancellation shows up in a new "Payments" tab on your private requests page, with the client's email, amount, plan, status, date and next renewal date.
3. **Email alerts:** you get an email at both of your addresses whenever a payment comes in, and when a monthly plan fails to renew or gets cancelled.
4. **No client accounts:** the placeholder "My Account" and "Lost password" pages are removed. Clients pay as guests. Their receipt email lets them update their card or cancel their monthly plan on the payment company's own site.
5. **Pay Now link:** a "Pay Now" link in the footer of every page.
6. **Policies ready for going live:** Terms, Privacy and refund wording name **Joy Aniekan** as the seller (trading as Udo Ezekiel). They also say Paddle.com is the official seller of record and handles billing, have a 30-day refund window with no "no refunds" wording, and say payment details are shared with Paddle.

## Technical details
- Product catalog: `website_care_plan` / `website_care_monthly`, 10000 usd, monthly, quantity 1–1. The existing `website_project_100` stays as it is.
- Database: a `payments` table (environment, Paddle transaction/subscription/customer IDs, email, product/price external IDs, amount, currency, status, period end, timestamps), unique on event key. Grants go to service_role plus admin-only SELECT through `has_role`. There's no anon access.
- Webhook (`/api/public/payments/webhook`): verifies the Paddle signature using `@paddle/paddle-node-sdk` through the gateway client, with the `env` query param. It handles transaction.completed, transaction.payment_failed and subscription.created/updated/canceled. It upserts into `payments` with the service-role client, which is loaded inside the handler, looks up the customer email through the gateway, and sends a new owner notification email template (idempotent per event).
- `/pay`: a tab switch between "One-time project" and "Monthly care plan". The resolver allowlist gets the new price.
- `/requests`: a Payments tab that reads `payments` as the signed-in admin.
- Remove the `my-account*` routes and their links and sitemap entries. Add the footer link in `home-sections.tsx`.
- Update `src/data/policies.ts`. Add tests for the amount rules (existing) and for mapping webhook events to the stored status.

## How to test in the preview
1. Open /pay and choose an option (for example $300 one-time, or the monthly plan).
2. Pay with test card **4242 4242 4242 4242**, any future expiry date, CVC **123**, and any name and email.
3. You should land on the "Thank you" page. Then open /requests, go to Payments, and the payment appears within a minute. You also get the alert email.
4. To try a declined card, use **4000 0000 0000 0002**. To try a monthly plan that fails at renewal, use **4000 0027 6000 3184**.
5. Test payments never charge real money. Real payments start only after you finish verification and publish.
