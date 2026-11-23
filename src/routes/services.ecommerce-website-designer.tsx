import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/services/ecommerce-website-designer")({ head: () => pageHead("Reach More Buyers With An Online Store", "Reach More Buyers With An Online Store. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ReferencePage pageKey="services_ecommerce-website-designer" />; }
