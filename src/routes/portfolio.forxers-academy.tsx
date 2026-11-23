import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { CaseStudyPage } from "@/components/site/case-study";
import { CASE_STUDIES } from "@/data/case-studies";

const study = CASE_STUDIES["forxers-academy"];

export const Route = createFileRoute("/portfolio/forxers-academy")({
  head: () =>
    pageHead(
      `${study.title} Case Study | Udo Ezekiel`,
      `${study.title} case study: ${study.subtitle}. Built by digital solutions partner Udo Ezekiel.`,
    ),
  component: Page,
});

function Page() {
  return <CaseStudyPage data={study} />;
}
