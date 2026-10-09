import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ReferencePage } from "@/components/site/reference-page";
export const Route = createFileRoute("/promote-your-business-online")({ head: () => pageHead("How To Promote Your Business Online in Nigeria", "You can Promote Your Business online in many ways. But before you can get started, you should familiarize yourself with how these digital channels work, which o"), component: Page });
function Page() { return <ReferencePage pageKey="promote-your-business-online" />; }
