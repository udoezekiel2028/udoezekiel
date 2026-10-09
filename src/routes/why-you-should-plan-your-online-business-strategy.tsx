import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/why-you-should-plan-your-online-business-strategy")({ head: () => pageHead("Why You Should Plan Your Online Business Strategy", "So you want to know more about online business strategy, or perhaps improve your current strategy? In this article, I\u2019ll explain how creating an online business"), component: Page });
function Page() { return <ArticlePage pageKey="why-you-should-plan-your-online-business-strategy" />; }
