import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/privacy-policy")({ head: () => pageHead("Privacy Policy", "Privacy Policy \u2014 Udo Ezekiel website services."), component: Page });
function Page() { return <InformationPage title="Privacy Policy" />; }
