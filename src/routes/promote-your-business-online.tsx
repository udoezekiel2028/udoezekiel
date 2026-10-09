import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/promote-your-business-online")({ head: () => pageHead("How To Promote Your Business Online in Nigeria", "You can Promote Your Business online in many ways. But before you can get started, you should familiarize yourself with how these digital channels work, which o"), component: Page });
function Page() { return <ArticlePage pageKey="promote-your-business-online" />; }
