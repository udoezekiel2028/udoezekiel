import { useState } from "react";
import parse, { attributesToProps, domToReact, Element, type DOMNode, type HTMLReactParserOptions } from "html-react-parser";
import { Button } from "@/components/ui/button";
import { SiteLink } from "./site-link";
import portrait from "@/assets/kenneth-portrait.jpg.asset.json";
import logo from "@/assets/udo-ezekiel-logo.png.asset.json";
import layouts from "@/data/reference-layouts.json";
import "./reference-layouts.css";
import "./reference-page.css";

const pages: Record<string, { html: string }> = layouts;

function ReferenceAccordion({ node, options }: { node: Element; options: HTMLReactParserOptions }) {
  const [open, setOpen] = useState(false);
  const elements = node.children.filter((child): child is Element => child instanceof Element);
  const title = elements[0];
  const content = elements[1];
  if (!title || !content) return <></>;
  return <div className="elementor-accordion-item"><Button variant="ghost" className={`elementor-tab-title reference-accordion-trigger ${open ? "elementor-active" : ""}`} aria-expanded={open} onClick={() => setOpen(!open)}>{domToReact(title.children as DOMNode[], options)}</Button><div {...attributesToProps(content.attribs)} className={`elementor-tab-content ${open ? "elementor-active" : ""}`} hidden={!open}>{domToReact(content.children as DOMNode[], options)}</div></div>;
}

export function ReferencePage({ pageKey }: { pageKey: string }) {
  const [filter, setFilter] = useState("*");
  const [zoom, setZoom] = useState<string | null>(null);
  const page = pages[pageKey];
  if (!page) return null;
  const options: HTMLReactParserOptions = {
    replace(node) {
      if (!(node instanceof Element)) return;
      const attrs = node.attribs;
      const cls = attrs['class'] || "";
      const children = () => domToReact(node.children as DOMNode[], options);
      if (node.name === "script" || node.name === "style") return <></>;
      if (cls.split(" ").includes("elementor-accordion-item")) return <ReferenceAccordion node={node} options={options} />;
      if (node.name === "a" && cls.includes("elementor-accordion-title")) return <span>{children()}</span>;
      if (node.name === "li" && attrs['data-filter']) return <li className={filter === attrs['data-filter'] ? "wd-active" : ""}><Button variant="ghost" onClick={() => setFilter(attrs['data-filter'] || "*")}>{children()}</Button></li>;
      if (node.name === "article" && cls.includes("portfolio-entry") && filter !== "*" && !cls.split(" ").includes(filter.slice(1))) return <></>;
      if (node.name === "img" && attrs['data-portrait']) return <img {...attributesToProps(attrs)} src={portrait.url} alt="Udo Ezekiel" />;
      if (node.name === "img" && attrs['src']?.includes("animated_light_logo")) return <span className="reference-brand-mark"><img src={logo.url} alt="Udo Ezekiel" /></span>;
      if (node.name === "img" && !attrs['src']) return <></>;
      if (node.name === "a") {
        if (attrs['data-zoom-src']) return <Button variant="ghost" className={cls} onClick={() => setZoom(attrs['data-zoom-src'] || null)}>{children()}</Button>;
        const href = attrs['href'] || "#";
        if (href === "#") return <span className={cls}>{children()}</span>;
        if (href.includes("add-to-cart") || cls.includes("add_to_cart_button")) return <Button disabled className={cls}>Add to cart</Button>;
        return <SiteLink href={href} className={cls}>{children()}</SiteLink>;
      }
      if (node.name === "form") return <form {...attributesToProps(attrs)} onSubmit={event => event.preventDefault()}>{children()}<p className="reference-status" role="status">{pageKey.includes("my-account") ? "Account access is not available yet." : "Project requests are not accepting submissions yet."}</p></form>;
      if (node.name === "button" || (node.name === "input" && attrs['type'] === "submit")) return <Button disabled className={cls}>{node.name === "input" ? attrs['value'] : children()}</Button>;
      if (cls.includes("elementor-counter-number") && attrs['data-to-value']) return <span {...attributesToProps(attrs)}>{attrs['data-to-value']}</span>;
      return undefined;
    },
  };
  return <div className="reference-page"><div className="reference-root elementor-kit-11">{parse(page.html, options)}</div>{zoom && <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-5" role="dialog" aria-modal="true" aria-label="Project image"><Button variant="outline" className="absolute right-5 top-5" onClick={() => setZoom(null)}>Close</Button><img src={zoom} alt="Website project" className="max-h-[90vh] max-w-full object-contain" /></div>}</div>;
}