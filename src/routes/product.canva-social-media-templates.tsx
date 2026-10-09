import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/product/canva-social-media-templates")({ head: () => pageHead("5000+ Canva Social Templates", "Explore 5000+ Canva Social Templates in the Udo Ezekiel digital product store."), component: Page });
function Page() { return <ProductPage index={0} />; }
