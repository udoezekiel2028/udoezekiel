import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { PortfolioContent } from "@/components/site/portfolio-content";

export const Route = createFileRoute("/portfolio/")({
  head: () =>
    pageHead(
      "Portfolio & Case Studies | Udo Ezekiel",
      "Explore authentic digital platforms, eCommerce stores, eLearning academies, and corporate websites engineered for business growth by Udo Ezekiel.",
    ),
  component: Page,
});

function Page() {
  return <PortfolioContent />;
}
