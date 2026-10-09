import { createFileRoute } from "@tanstack/react-router";
import { AboutPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/about")({ head: () => pageHead("About Udo Ezekiel", "About Udo Ezekiel \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <AboutPage  />; }
