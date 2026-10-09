import { createFileRoute } from "@tanstack/react-router";
import { InquiryPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/consultation")({ head: () => pageHead("Free Discovery Call", "Free Discovery Call \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <InquiryPage  />; }
