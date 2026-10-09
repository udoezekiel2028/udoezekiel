import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/services/website-design")({ head: () => pageHead("A Beautiful Website Is Good for Business", "A Beautiful Website Is Good for Business. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ServicePage pageKey="services_website-design" title="A Beautiful Website Is Good for Business" />; }
