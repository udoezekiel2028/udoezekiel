import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/web-design-getting-started")({ head: () => pageHead("How to Start Your Website Design Journey", "Free Domain Privacy"), component: Page });
function Page() { return <ArticlePage pageKey="web-design-getting-started" />; }
