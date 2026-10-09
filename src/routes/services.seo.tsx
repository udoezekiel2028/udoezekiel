import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/services/seo")({ head: () => pageHead("Search Engine Optimization", "Search Engine Optimization. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ServicePage pageKey="services_seo" title="Search Engine Optimization" />; }
