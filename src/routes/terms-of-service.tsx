import { createFileRoute } from "@tanstack/react-router";
import { pageHead, PolicyPage } from "@/components/site/content-pages";
import { termsPolicy } from "@/data/policies";

export const Route = createFileRoute("/terms-of-service")({
  head: () => pageHead(
    "Terms of Service",
    "How website projects with Udo Ezekiel work: quotes, deposits, refunds, who owns the finished site, and the rules for using udoezekiel.dev.",
  ),
  component: Page,
});

function Page() {
  return <PolicyPage doc={termsPolicy} />;
}
