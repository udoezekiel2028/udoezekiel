import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/services/pricing")({ head: () => pageHead("Website Design Pricing", "Compare website and eCommerce design packages from Udo Ezekiel."), component: Page });
function Page() { return <ReferencePage pageKey="services_pricing" />; }
