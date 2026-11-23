import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/services/digital-marketing")({ head: () => pageHead("Digital Marketing Strategy", "Digital Marketing Strategy. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ServicePage pageKey="services_digital-marketing" title="Digital Marketing Strategy" />; }
