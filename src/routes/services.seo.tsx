import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/services/seo")({ head: () => pageHead("Search Engine Optimization", "Search Engine Optimization. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ReferencePage pageKey="services_seo" />; }
