import { createFileRoute } from "@tanstack/react-router";
import { PricingPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/services/pricing")({ head: () => pageHead("Website Design Pricing", "Compare website and eCommerce design packages from Udo Ezekiel."), component: Page });
function Page() { return <PricingPage  />; }
