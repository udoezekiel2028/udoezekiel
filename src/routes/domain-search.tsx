import { createFileRoute } from "@tanstack/react-router";
import { DomainPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/domain-search")({ head: () => pageHead("Domain Search", "Domain Search \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <DomainPage  />; }
