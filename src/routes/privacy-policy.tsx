import { createFileRoute } from "@tanstack/react-router";
import { pageHead, PolicyPage } from "@/components/site/content-pages";
import { privacyPolicy } from "@/data/policies";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead(
    "Privacy Policy",
    "What udoezekiel.dev collects from the project questionnaire, call bookings and server logs, who it is shared with, how long it is kept, and how to ask for a copy or a deletion.",
  ),
  component: Page,
});

function Page() {
  return <PolicyPage doc={privacyPolicy} />;
}
