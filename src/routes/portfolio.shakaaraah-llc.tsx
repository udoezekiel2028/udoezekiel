import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/portfolio/shakaaraah-llc")({ head: () => pageHead("Shakaaraah LLC", "Explore the Shakaaraah LLC website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ReferencePage pageKey="portfolio_shakaaraah-llc" />; }
