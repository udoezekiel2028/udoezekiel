import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ServiceDetailPage } from "@/components/site/service-detail";
import { SERVICES_DATA } from "@/data/services-data";

const data = SERVICES_DATA["seo"];

export const Route = createFileRoute("/services/seo")({
  head: () =>
    pageHead(
      `${data.title} | Udo Ezekiel`,
      `${data.title}: ${data.subtitle}`,
    ),
  component: Page,
});

function Page() {
  return <ServiceDetailPage data={data} />;
}
