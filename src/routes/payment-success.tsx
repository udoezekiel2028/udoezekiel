import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeading, pageHead } from "@/components/site/content-pages";
import { SiteLink } from "@/components/site/site-link";

export const Route = createFileRoute("/payment-success")({
  head: () => pageHead("Payment Received", "Thank you for your payment to Udo Ezekiel."),
  component: () => (
    <>
      <PageHeading title="Thank you, payment received" subtitle="Your receipt is on its way to your email. I'll be in touch shortly about the next steps for your project." />
      <section className="bg-paper py-16 text-ink">
        <div className="mx-auto max-w-xl px-5">
          <Button asChild size="lg"><SiteLink href="/">Back to homepage</SiteLink></Button>
        </div>
      </section>
    </>
  ),
});
