import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/contact")({ head: () => pageHead("Contact", "Contact \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <ReferencePage pageKey="contact" />; }
