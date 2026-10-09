import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/web-design-getting-started")({ head: () => pageHead("How to Start Your Website Design Journey", "Free Domain Privacy"), component: Page });
function Page() { return <ReferencePage pageKey="web-design-getting-started" />; }
