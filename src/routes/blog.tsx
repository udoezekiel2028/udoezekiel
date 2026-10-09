import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/blog")({ head: () => pageHead("Blog", "Blog \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <ReferencePage pageKey="blog" />; }
