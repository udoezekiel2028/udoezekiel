import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/why-you-should-plan-your-online-business-strategy")({ head: () => pageHead("Why You Should Plan Your Online Business Strategy", "So you want to know more about online business strategy, or perhaps improve your current strategy? In this article, I\u2019ll explain how creating an online business"), component: Page });
function Page() { return <ReferencePage pageKey="why-you-should-plan-your-online-business-strategy" />; }
