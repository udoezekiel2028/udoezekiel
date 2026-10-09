import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/hostinger-coupon-code")({ head: () => pageHead("Hostinger Coupon Code 2026: Get 20% Off Hosting & Domain | How to Buy Hostinger", "If you are planning to build a website for your business, personal brand, online store, blog, portfolio, professional service, or digital product, two things yo"), component: Page });
function Page() { return <ArticlePage pageKey="hostinger-coupon-code" />; }
