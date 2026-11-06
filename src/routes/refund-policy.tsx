import { createFileRoute } from "@tanstack/react-router";
import { pageHead, PolicyPage } from "@/components/site/content-pages";
import { refundPolicy } from "@/data/policies";

export const Route = createFileRoute("/refund-policy")({
  head: () => pageHead(
    "Refund Policy",
    "Read the 30-day refund request window for website project payments and recurring services from Udo Ezekiel, including how to request help through Paddle.",
  ),
  component: Page,
});

function Page() {
  return <PolicyPage doc={refundPolicy} />;
}