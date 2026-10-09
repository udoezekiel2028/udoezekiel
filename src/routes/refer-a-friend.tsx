import { createFileRoute } from "@tanstack/react-router";
import { InformationPage, pageHead } from "@/components/site/content-pages";
export const Route = createFileRoute("/refer-a-friend")({ head: () => pageHead("Refer A Friend", "Refer A Friend \u2014 Udo Ezekiel website services."), component: Page });
function Page() { return <InformationPage title="Refer A Friend" />; }
