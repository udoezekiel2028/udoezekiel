import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/content-pages";
import { ContactContent } from "@/components/site/contact-content";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact Udo Ezekiel | Digital Solutions & Platform Inquiries",
      "Get in touch with Udo Ezekiel. Reach out via contact form, direct email, phone, or WhatsApp for digital solutions, website development, and consultation.",
    ),
  component: Page,
});

function Page() {
  return <ContactContent />;
}
