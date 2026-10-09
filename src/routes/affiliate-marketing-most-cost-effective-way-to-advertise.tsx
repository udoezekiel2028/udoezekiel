import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/affiliate-marketing-most-cost-effective-way-to-advertise")({ head: () => pageHead("Affiliate Marketing: Most Cost-Effective Advertising", "Ever heard of affiliate programs? These are forms of Online advertising that reward the affiliates for driving traffic to the advertiser or for other transactio"), component: Page });
function Page() { return <ReferencePage pageKey="affiliate-marketing-most-cost-effective-way-to-advertise" />; }
