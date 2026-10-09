import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/expertnaire-review-affiliate-marketing-in-nigeria")({ head: () => pageHead("Expertnaire Review: Affiliate Marketing in Nigeria", "What Is Expertnaire? How To Start Affiliate Marketing in Nigeria?"), component: Page });
function Page() { return <ReferencePage pageKey="expertnaire-review-affiliate-marketing-in-nigeria" />; }
