import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/flutterwave-store-review")({ head: () => pageHead("Flutterwave Store Review: How to Set It Up", "Flutterwave store is undoubtedly the easiest way to create and launch an online store as a busy, non-techie entrepreneur, you don\u2019t need to create a website fro"), component: Page });
function Page() { return <ArticlePage pageKey="flutterwave-store-review" />; }
