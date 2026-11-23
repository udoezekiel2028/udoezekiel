import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ConsultationContent } from "@/components/site/consultation-content";

export const Route = createFileRoute("/consultation")({
  head: () =>
    pageHead(
      "Book a Free Strategy Consultation | Udo Ezekiel",
      "Schedule a free 30-minute discovery consultation with Udo Ezekiel to discuss your website, eCommerce, LMS, or platform development goals.",
    ),
  component: Page,
});

function Page() {
  return <ConsultationContent />;
}
