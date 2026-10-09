import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/expertnaire-review-affiliate-marketing-in-nigeria")({ head: () => pageHead("Expertnaire Review: Affiliate Marketing in Nigeria", "What Is Expertnaire? How To Start Affiliate Marketing in Nigeria?"), component: Page });
function Page() { return <ArticlePage pageKey="expertnaire-review-affiliate-marketing-in-nigeria" />; }
