import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/portfolio/the-scoop-nigeria")({ head: () => pageHead("The Scoop Nigeria", "Explore the The Scoop Nigeria website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ProjectPage pageKey="portfolio_the-scoop-nigeria" title="The Scoop Nigeria" />; }
