import twineReview from "@/assets/udo-ezekiel-half-saint-review.png.asset.json";
import fiverrReview from "@/assets/udo-ezekiel-fiverr-review.png.asset.json";
import fiverrEcommerceReview from "@/assets/udo-ezekiel-fiverr-ecommerce-review.png.asset.json";

export type Testimonial = {
  id: string;
  title: string;
  src: string;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "half-saint-review",
    title: "Half Saint client review",
    src: twineReview.url,
    source: "Twine client review",
  },
  {
    id: "fiverr-client-review",
    title: "Fiverr client review",
    src: fiverrReview.url,
    source: "Fiverr review",
  },
  {
    id: "fiverr-ecommerce-review",
    title: "eCommerce client review",
    src: fiverrEcommerceReview.url,
    source: "Fiverr eCommerce review",
  },
];