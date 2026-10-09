import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/piggyvest-review-2022")({ head: () => pageHead("PiggyVest Review 2022 \u2013 Read Before Signing Up", "I f you are a Nigerian reading this post, you will agree with me that one big problem endemic to us, and maybe the rest of Africa is \u201csavings\u201d. Starting and com"), component: Page });
function Page() { return <ArticlePage pageKey="piggyvest-review-2022" />; }
