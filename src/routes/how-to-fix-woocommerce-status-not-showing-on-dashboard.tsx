import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/how-to-fix-woocommerce-status-not-showing-on-dashboard")({ head: () => pageHead("How to Fix WooCommerce Status Not Showing", "WooCommerce status not showing on dashboard when you are done with the required setup and checklist can be really annoying. And if you have experienced this I b"), component: Page });
function Page() { return <ArticlePage pageKey="how-to-fix-woocommerce-status-not-showing-on-dashboard" />; }
