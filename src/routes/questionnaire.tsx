import { createFileRoute } from "@tanstack/react-router";
import { InquiryPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/questionnaire")({ head: () => pageHead("Project Questionnaire", "Project Questionnaire \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <InquiryPage questionnaire />; }
