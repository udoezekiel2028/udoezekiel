import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/portfolio/ea-global-stores")({ head: () => pageHead("EA Global Stores", "Explore the EA Global Stores website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ProjectPage pageKey="portfolio_ea-global-stores" title="EA Global Stores" />; }
