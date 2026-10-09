import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/services/landing-page-designer-in-lagos-nigeria")({ head: () => pageHead("Increase Your ROI With Pixel-Perfect Landing Pages", "Increase Your ROI With Pixel-Perfect Landing Pages. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ServicePage pageKey="services_landing-page-designer-in-lagos-nigeria" title="Increase Your ROI With Pixel-Perfect Landing Pages" />; }
