import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/how-to-fix-woocommerce-status-not-showing-on-dashboard")({ head: () => pageHead("How to Fix WooCommerce Status Not Showing", "WooCommerce status not showing on dashboard when you are done with the required setup and checklist can be really annoying. And if you have experienced this I b"), component: Page });
function Page() { return <ReferencePage pageKey="how-to-fix-woocommerce-status-not-showing-on-dashboard" />; }
