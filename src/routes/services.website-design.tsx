import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/services/website-design")({ head: () => pageHead("A Beautiful Website Is Good for Business", "A Beautiful Website Is Good for Business. Discover tailored website and marketing services from Udo Ezekiel."), component: Page });
function Page() { return <ReferencePage pageKey="services_website-design" />; }
