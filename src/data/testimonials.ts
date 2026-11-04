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
    id: "half-saint-review",
    format: "screenshot",
    title: "Half Saint client review",
    src: twineReview.url,
    source: "Twine client review",
  },
  {
    id: "fiverr-client-review",
    format: "screenshot",
    title: "Fiverr client review",
    src: fiverrReview.url,
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