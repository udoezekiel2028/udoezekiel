import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/google-my-business-nigeria")({ head: () => pageHead("Google My Business in Nigeria \u2013 How to Register", "In this post, we are going to be discussing about Google My Business Nigeria."), component: Page });
function Page() { return <ArticlePage pageKey="google-my-business-nigeria" />; }
