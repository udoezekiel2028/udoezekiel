import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/portfolio/forxers-academy")({ head: () => pageHead("ForXers Academy", "Explore the ForXers Academy website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ProjectPage pageKey="portfolio_forxers-academy" title="ForXers Academy" />; }
