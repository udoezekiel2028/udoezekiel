import { createFileRoute } from "@tanstack/react-router";
import { BlogPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/blog")({ head: () => pageHead("Blog", "Blog \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <BlogPage  />; }
