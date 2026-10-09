import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/product/500-glowing-animated-reels")({ head: () => pageHead("500+ Glowing Animated Reels", "Explore 500+ Glowing Animated Reels in the Udo Ezekiel digital product store."), component: Page });
function Page() { return <ProductPage index={3} />; }
