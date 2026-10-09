import { createFileRoute } from "@tanstack/react-router";
import { FaqPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/faq")({ head: () => pageHead("Frequently Asked Questions", "Frequently Asked Questions \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <FaqPage  />; }
