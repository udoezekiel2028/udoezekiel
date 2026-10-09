import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/terms-of-service")({ head: () => pageHead("Terms of Service", "Terms of Service \u2014 Udo Ezekiel website services."), component: Page });
function Page() { return <InformationPage title="Terms of Service" />; }
