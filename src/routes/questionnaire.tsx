import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ProjectEnquiryForm } from "@/components/site/project-enquiry-form";

export const Route = createFileRoute("/questionnaire")({
  head: () =>
    pageHead(
      "Start Your Project | Project Questionnaire & Strategy Brief | Udo Ezekiel",
      "Share your business goals, technical requirements, and project scope. Receive a detailed proposal and discovery consultation from Udo Ezekiel.",
    ),
  component: Page,
});

function Page() {
  return <ProjectEnquiryForm />;
}
