import { createFileRoute } from "@tanstack/react-router";
import { AccountPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/my-account/")({ head: () => pageHead("My Account", "My Account \u2014 website design and digital business services by Udo Ezekiel."), component: Page });
function Page() { return <AccountPage  />; }
