import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/portfolio/easyjapa")({ head: () => pageHead("EasyJapa", "Explore the EasyJapa website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ProjectPage pageKey="portfolio_easyjapa" title="EasyJapa" />; }
