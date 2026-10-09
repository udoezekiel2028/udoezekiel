import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/portfolio/ea-global-stores")({ head: () => pageHead("EA Global Stores", "Explore the EA Global Stores website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ReferencePage pageKey="portfolio_ea-global-stores" />; }
