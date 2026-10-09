import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/product/social-media-resources")({ head: () => pageHead("Social Media Resources Template (Google Sheets Edition)", "Explore Social Media Resources Template (Google Sheets Edition) in the Udo Ezekiel digital product store."), component: Page });
function Page() { return <ProductPage index={1} />; }
