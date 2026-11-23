import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/site/home-sections";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Udo Ezekiel | Freelance Website Designer in Lagos, Nigeria" },
      {
        name: "description",
        content:
          "Get more customers with a website designed to grow your business. Mobile responsive, SEO optimized websites by Udo Ezekiel in Lagos.",
      },
      { property: "og:title", content: "Udo Ezekiel | Website Designer in Lagos" },
      {
        property: "og:description",
        content: "Websites that look great on every device and are built to be found on Google.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Udo Ezekiel",
          url: "https://udoezekiel.dev/",
          logo: "https://udoezekiel.dev/__l5e/assets-v1/d73154b0-2f04-4609-8a7c-2aab89d8b049/udo-ezekiel-logo.png",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() { return <HomeContent />; }
