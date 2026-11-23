import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/services/landing-page-designer-in-lagos-nigeria")({ head: () => pageHead("Increase Your ROI With Pixel-Perfect Landing Pages", "Increase Your ROI With Pixel-Perfect Landing Pages. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ReferencePage pageKey="services_landing-page-designer-in-lagos-nigeria" />; }
