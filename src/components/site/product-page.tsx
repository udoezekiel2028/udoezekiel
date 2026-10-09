import { Button } from "@/components/ui/button";
import { PageHeading } from "./content-pages";
import { SiteLink } from "./site-link";
import data from "@/data/reference-pages.json";

export const products = [
  { slug: "canva-social-media-templates", name: "5000+ Canva Social Templates", price: "₦3,500.00" },
  { slug: "social-media-resources", name: "Social Media Resources Template (Google Sheets Edition)", price: "₦3,000.00" },
  { slug: "faceless-digital-marketing", name: "Faceless Digital Marketing Blueprint", price: "₦3,000.00" },
  { slug: "500-glowing-animated-reels", name: "500+ Glowing Animated Reels", price: "₦3,000.00" },
];

export function ProductPage({ index }: { index: number }) {
  const product = products[index];
  if (!product) return <PageHeading title="Product unavailable" />;
  return <><PageHeading title={product.name} /><section className="bg-paper py-16 text-ink"><div className="mx-auto grid max-w-[1222px] items-start gap-12 px-5 md:grid-cols-2"><img src={data.pages.shop.images[index]} alt={product.name} className="aspect-square w-full object-contain" /><div><p className="text-sm font-bold text-brand">DIGITAL RESOURCES</p><h2 className="mt-4 font-display text-3xl font-black">{product.name}</h2><p className="mt-6 font-display text-3xl font-black text-brand">{product.price}</p><p className="mt-8 border-t border-ink/10 pt-6 text-ink/65">Purchases are not available yet.</p><Button disabled className="mt-6">Add to cart</Button><div className="mt-8"><Button asChild variant="outline"><SiteLink href="/shop">Back to products</SiteLink></Button></div></div></div></section></>;
}