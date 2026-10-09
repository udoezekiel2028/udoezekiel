DROP POLICY IF EXISTS "Anyone can submit forms" ON public.form_submissions;
CREATE POLICY "Anyone can submit valid forms" ON public.form_submissions
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(page) BETWEEN 1 AND 200
  AND jsonb_typeof(fields) = 'object'
  AND pg_column_size(fields) <= 50000
  AND created_at >= now() - interval '5 minutes'
  AND created_at <= now() + interval '5 minutes'
);