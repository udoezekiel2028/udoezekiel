import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/services/")({ head: () => pageHead("Digital Marketing Services", "Digital Marketing Services \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <ServicesPage  />; }
