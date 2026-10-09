import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/portfolio/pianogoddess-academy")({ head: () => pageHead("Pianogoddess Academy", "Explore the Pianogoddess Academy website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ProjectPage pageKey="portfolio_pianogoddess-academy" title="Pianogoddess Academy" />; }
