import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/services/lms")({ head: () => pageHead("Online Course and Membership Websites", "Online Course and Membership Websites. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ReferencePage pageKey="services_lms" />; }
