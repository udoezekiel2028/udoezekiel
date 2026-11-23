import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ServicesIndexContent } from "@/components/site/services-index-content";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead(
      "Digital Solutions & Web Development Services | Udo Ezekiel",
      "Explore comprehensive digital solutions by Udo Ezekiel: Corporate Websites, eCommerce Platforms, eLearning LMS, Conversion Landing Pages, and SEO Growth.",
    ),
  component: Page,
});

function Page() {
  return <ServicesIndexContent />;
}
