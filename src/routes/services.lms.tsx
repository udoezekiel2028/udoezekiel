import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/services/lms")({ head: () => pageHead("Online Course and Membership Websites", "Online Course and Membership Websites. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ServicePage pageKey="services_lms" title="Online Course and Membership Websites" />; }
