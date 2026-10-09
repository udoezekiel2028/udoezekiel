import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/portfolio/pianogoddess-academy")({ head: () => pageHead("Pianogoddess Academy", "Explore the Pianogoddess Academy website project in the Udo Ezekiel portfolio."), component: Page });
function Page() { return <ReferencePage pageKey="portfolio_pianogoddess-academy" />; }
