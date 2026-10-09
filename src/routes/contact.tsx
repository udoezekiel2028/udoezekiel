import { createFileRoute } from "@tanstack/react-router";
import { ContactPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/contact")({ head: () => pageHead("Contact", "Contact \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <ContactPage  />; }
