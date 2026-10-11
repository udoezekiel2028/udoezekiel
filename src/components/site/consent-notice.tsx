import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "ue-consent-choice";

export function ConsentNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (choice: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // storage unavailable; just hide the notice
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consent notice"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-2xl sm:flex-row sm:items-center">
        <p className="text-sm leading-relaxed text-card-foreground">
          This website uses cookies and similar technologies to keep things working and to
          understand how visitors use it. You can accept or reject; your choice is remembered
          on this device. Read the{" "}
          <Link to="/privacy-policy" className="font-semibold text-brand underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
