// Browser-safe shared description of what a submitted form actually means.
// Used by the private requests page, the email templates and the submit handler
// so every surface names the same questions the same way.

// Human-readable labels for the questionnaire's internal field names.
export const FIELD_LABELS: Record<string, string> = {
  field40: "How did you find me?",
  field17: "What do you want?",
  field18: "Link to your current website",
  field20: "Do you have domain & hosting?",
  field21: "What is your domain name?",
  field24: "Suggested domain names",
  field22: "Wants domain & hosting recommendation?",
  field39: "Type of website wanted",
  field10: "Business or website name",
  field1: "Name",
  field2: "Email address",
  field11: "Phone number",
  field13: "Preferred start date",
  field6: "Main goal of the project",
  field14: "Expected actions on the site",
  field15: "Image to portray",
  field16: "Accepting online payments?",
  field25: "Special features wanted",
  field26: "Reference websites",
  field27: "Menu items / site map",
  field28: "Is website content ready?",
  field30: "Can upload content now?",
  field32: "Is the logo ready?",
  files: "Uploaded files",
};

export function fieldLabel(key: string) {
  const clean = key.replace(/\[\]$/, "");
  return FIELD_LABELS[clean] ?? clean;
}

// Where a submission came from, in the visitor's words.
export const PAGE_LABELS: Record<string, string> = {
  questionnaire: "project questionnaire",
  contact: "contact message",
  consultation: "consultation booking",
};

export function pageLabel(page: string) {
  return PAGE_LABELS[page] ?? page;
}

export type RequestRow = { label: string; value: string };

export function firstOf(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value.find((v) => v.trim()) ?? "";
  return value ?? "";
}

/** Turns raw form fields into readable label/value rows, skipping blanks. */
export function buildRows(fields: Record<string, string | string[]>): RequestRow[] {
  const rows: RequestRow[] = [];
  for (const [key, raw] of Object.entries(fields)) {
    if (key.startsWith("_") || key.toLowerCase().includes("honeypot")) continue;
    const value = (Array.isArray(raw) ? raw.join(", ") : raw).trim();
    if (!value) continue;
    rows.push({ label: fieldLabel(key), value: value.length > 600 ? `${value.slice(0, 600)}…` : value });
  }
  return rows;
}
