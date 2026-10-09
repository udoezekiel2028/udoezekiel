import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/portfolio/the-scoop-nigeria")({ head: () => pageHead("The Scoop Nigeria", "Explore the The Scoop Nigeria website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ReferencePage pageKey="portfolio_the-scoop-nigeria" />; }
