import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/site/home-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Udo Ezekiel | Digital Experiences, Websites & Platforms That Help Businesses Grow" },
      {
        name: "description",
        content:
          "We design and develop high-performing websites, eCommerce stores and online learning platforms that help businesses attract customers, simplify operations and scale online. Serving clients in Nigeria, the UK, US, and internationally.",
      },
      {
        property: "og:title",
        content: "Udo Ezekiel | Digital Experiences, Websites & Platforms That Help Businesses Grow",
      },
      {
        property: "og:description",
        content:
          "High-performing websites, eCommerce stores and online learning platforms engineered for business growth and international standards.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://udoezekiel.dev/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Udo Ezekiel",
          url: "https://udoezekiel.dev/",
          logo: "https://udoezekiel.dev/__l5e/assets-v1/d73154b0-2f04-4609-8a7c-2aab89d8b049/udo-ezekiel-logo.png",
          description:
            "Digital experiences, websites and platforms that help businesses attract customers, simplify operations and scale online.",
          telephone: "+2348089228800",
          priceRange: "$$",
          areaServed: ["NG", "GB", "US", "Worldwide"],
          knowsAbout: [
            "Corporate Website Development",
            "eCommerce Website Development",
            "eLearning and LMS Platforms",
            "Landing Page Design",
            "Website Redesign and Optimization",
            "Technical SEO and Growth Strategy",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomeContent />;
}
