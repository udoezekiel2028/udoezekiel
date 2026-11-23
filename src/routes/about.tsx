import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { AboutContent } from "@/components/site/about-content";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Udo Ezekiel | Digital Solutions Partner & Full-Stack Developer",
      "Learn about Udo Ezekiel — full-stack developer and digital solutions partner helping businesses in Nigeria, the UK, US, and internationally design and engineer high-performing websites, eCommerce stores, and online platforms.",
    ),
  component: Page,
});

function Page() {
  return <AboutContent />;
}
