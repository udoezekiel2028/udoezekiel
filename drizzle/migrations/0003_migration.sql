CREATE TABLE public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_key text NOT NULL UNIQUE,
  environment text NOT NULL,
  kind text NOT NULL,
  status text NOT NULL,
  transaction_id text,
  subscription_id text,
  customer_id text,
  customer_email text,
  product_id text,
  price_id text,
  amount_cents bigint,
  currency text,
  period_end timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX payments_created_idx ON public.payments(created_at DESC);
CREATE INDEX payments_subscription_idx ON public.payments(subscription_id);
GRANT SELECT ON public.payments TO authenticated;
GRANT ALL ON public.payments TO service_role;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins read payments" ON public.payments FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));