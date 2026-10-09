CREATE TABLE public.form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL CHECK (char_length(page) <= 200),
  fields JSONB NOT NULL CHECK (pg_column_size(fields) < 50000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.form_submissions TO anon, authenticated;
GRANT ALL ON public.form_submissions TO service_role;
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit forms" ON public.form_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);