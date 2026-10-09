import { createFileRoute } from "@tanstack/react-router";
import { ShopPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/shop")({ head: () => pageHead("Digital Products", "Digital Products \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <ShopPage  />; }
