import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/portfolio/")({ head: () => pageHead("Portfolio", "Portfolio \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <PortfolioPage  />; }
