import twineReview from "@/assets/udo-ezekiel-half-saint-review.png.asset.json";
import fiverrReview from "@/assets/udo-ezekiel-fiverr-review.png.asset.json";
import fiverrEcommerceReview from "@/assets/udo-ezekiel-fiverr-ecommerce-review.png.asset.json";

export type Testimonial = {
  id: string;
  format: "video" | "screenshot";
  title: string;
  src?: string;
  source: string;
  youtubeId?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "ai-automation-testimonial",
    format: "video",
    title: "Client review for website development and AI automation",
    source: "Video testimonial",
    youtubeId: "l__IoQVaYIQ",
  },
  {
    id: "fiverr-pitbullmedia-review",
    format: "screenshot",
    title: "Make.com automation client review - pitbullmedia",
    src: "/images/reviews/fiverr-pitbullmedia-automation-review.png",
    source: "Fiverr automation review",
  },
  {
    id: "half-saint-review",
    format: "screenshot",
    title: "Half Saint client review",
    src: twineReview.url,
    source: "Twine client review",
  },
  {
    id: "fiverr-peacehouse-review",
    format: "screenshot",
    title: "Website troubleshooting & support review - peacehouse",
    src: "/images/reviews/fiverr-peacehouse-review.png",
    source: "Fiverr review",
  },
  {
    id: "fiverr-fxpipsguru-review",
    format: "screenshot",
    title: "Make.com automation project review - fxpipsguru",
    src: "/images/reviews/fiverr-fxpipsguru-automation-review.jpg",
    source: "Fiverr automation review",
  },
  {
    id: "fiverr-client-review",
    format: "screenshot",
    title: "Fiverr client review",
    src: fiverrReview.url,
    source: "Fiverr review",
  },
  {
    id: "fiverr-lonnie22-review",
    format: "screenshot",
    title: "Repeat client website collaboration review - lonnie22",
    src: "/images/reviews/fiverr-lonnie22-review.png",
    source: "Fiverr review",
  },
  {
    id: "fiverr-ecommerce-review",
    format: "screenshot",
    title: "eCommerce client review",
    src: fiverrEcommerceReview.url,
    source: "Fiverr eCommerce review",
  },
];
