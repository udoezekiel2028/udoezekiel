import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/services/ecommerce-website-designer")({ head: () => pageHead("Reach More Buyers With An Online Store", "Reach More Buyers With An Online Store. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ServicePage pageKey="services_ecommerce-website-designer" title="Reach More Buyers With An Online Store" />; }
