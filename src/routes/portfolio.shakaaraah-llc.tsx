import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/portfolio/shakaaraah-llc")({ head: () => pageHead("Shakaaraah LLC", "Explore the Shakaaraah LLC website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ProjectPage pageKey="portfolio_shakaaraah-llc" title="Shakaaraah LLC" />; }
