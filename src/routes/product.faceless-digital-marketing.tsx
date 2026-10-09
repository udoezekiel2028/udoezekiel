import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/product/faceless-digital-marketing")({ head: () => pageHead("Faceless Digital Marketing Blueprint", "Explore Faceless Digital Marketing Blueprint in the Udo Ezekiel digital product store."), component: Page });
function Page() { return <ProductPage index={2} />; }
