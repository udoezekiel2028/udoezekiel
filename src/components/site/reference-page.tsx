import { useEffect, useState } from "react";
import parse, { attributesToProps, domToReact, Element, type DOMNode, type HTMLReactParserOptions } from "html-react-parser";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { submitProjectRequest } from "@/lib/requests.functions";
import { SiteLink } from "./site-link";
import portrait from "@/assets/kenneth-portrait.jpg.asset.json";
import logo from "@/assets/udo-ezekiel-logo.png.asset.json";
import parentPlanTransparent from "@/assets/parent-plan-website-transparent.png";
import transportTransparent from "@/assets/transport-website-transparent.png";
import choiceTransparent from "@/assets/choice-website-design-transparent.png";
import pulseTransparent from "@/assets/pulse-coding-website-transparent.png";
import notaryTransparent from "@/assets/notary-website-transparent.png";

// Gallery images re-rendered with transparent backgrounds replace their originals by filename.
const IMAGE_URL_MAP: Record<string, string> = {
  "parent-plan-website.png": parentPlanTransparent,
  "transport-website.png": transportTransparent,
  "choice-website-design.png": choiceTransparent,
  "pulse-coding-website.png": pulseTransparent,
  "notary-website.png": notaryTransparent,
};
import layouts from "@/data/reference-layouts.json";
import "./reference-layouts.css";
import "./reference-page.css";

const pages: Record<string, { html: string }> = layouts;
const CALENDLY_URL = "https://calendly.com/zikeyrehtse/website-consultation?hide_gdpr_banner=1&primary_color=ed4b1b";

function textOf(node: Element): string {
  let out = "";
  for (const child of node.children) {
    if (child instanceof Element) out += textOf(child);
    else if ("data" in child) out += String((child as { data?: unknown }).data ?? "");
  }
  return out;
}


function ReferenceAccordion({ node, options }: { node: Element; options: HTMLReactParserOptions }) {
  const [open, setOpen] = useState(false);
  const elements = node.children.filter((child): child is Element => child instanceof Element);
  const title = elements[0];
  const content = elements[1];
  if (!title || !content) return <></>;
  return <div className="elementor-accordion-item"><Button variant="ghost" className={`elementor-tab-title reference-accordion-trigger ${open ? "elementor-active" : ""}`} aria-expanded={open} onClick={() => setOpen(!open)}>{domToReact(title.children as DOMNode[], options)}</Button><div {...attributesToProps(content.attribs)} className={`elementor-tab-content ${open ? "elementor-active" : ""}`} hidden={!open}>{domToReact(content.children as DOMNode[], options)}</div></div>;
}

function ReferenceForm({ attrs, pageKey, children }: { attrs: Record<string, string>; pageKey: string; children: React.ReactNode }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { "data-inactive": _inactive, method: _method, action: _action, ...rest } = attrs;
  if (pageKey.includes("my-account")) {
    const login = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = String(data.get("username") ?? "").trim();
      const password = String(data.get("password") ?? "");
      if (!email || !password) { setStatus("error"); return; }
      setStatus("sending");
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) { setStatus("error"); return; }
      setStatus("sent");
      window.location.assign("/requests");
    };
    return <form {...attributesToProps(rest)} onSubmit={login}><fieldset disabled={status === "sending"} className="contents">{children}</fieldset>{status !== "idle" && <p className="reference-status" role="status">{status === "sending" ? "Signing in…" : status === "sent" ? "Signed in, redirecting…" : "Incorrect email or password. Please try again."}</p>}</form>;
  }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields: Record<string, string | string[]> = {};
    new FormData(event.currentTarget).forEach((value, key) => {
      if (typeof value !== "string" || !value.trim()) return;
      const prev = fields[key];
      fields[key] = prev === undefined ? value : Array.isArray(prev) ? [...prev, value] : [prev, value];
    });
    setStatus("sending");
    const result = await submitProjectRequest({ data: { page: pageKey, fields } });
    setStatus(result.ok ? "sent" : "error");
    if (result.ok) event.currentTarget?.reset?.();
  }
  return <form {...attributesToProps(rest)} onSubmit={submit}><fieldset disabled={status === "sending"} className="contents">{children}</fieldset>{status !== "idle" && <p className="reference-status" role="status">{status === "sending" ? "Sending…" : status === "sent" ? "Thank you! Your request has been received, I'll get back to you shortly." : "Something went wrong. Please try again."}</p>}</form>;
}

export function ReferencePage({ pageKey }: { pageKey: string }) {
  const [filter, setFilter] = useState("*");
  const [zoom, setZoom] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);
  useEffect(() => {
    if (!booking) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setBooking(false); };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = previousOverflow; };
  }, [booking]);

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
      if (node.name === "img") {
        const mapped = Object.entries(IMAGE_URL_MAP).find(([key]) => attrs['src']?.includes(key));
        if (mapped) return <img {...attributesToProps(attrs)} src={mapped[1]} alt={attrs['alt'] || "Website project"} />;
      }
      if (node.name === "img" && !attrs['src']) return <></>;
      if (node.name === "a") {
        if (textOf(node).replace(/\s+/g, " ").trim().toUpperCase() === "BOOK A FREE CALL") return <Button className={cls} onClick={() => setBooking(true)}>{children()}</Button>;
        if (attrs['data-zoom-src']) return <Button variant="ghost" className={cls} onClick={() => setZoom(attrs['data-zoom-src'] || null)}>{children()}</Button>;

        const href = attrs['href'] || "#";
        if (href === "#") return <span className={cls}>{children()}</span>;
        return <SiteLink href={href} className={cls} target={attrs['target']} rel={attrs['rel']}>{children()}</SiteLink>;
      }
      if (node.name === "form") return <ReferenceForm attrs={attrs} pageKey={pageKey}>{children()}</ReferenceForm>;
      if (node.name === "button" || (node.name === "input" && attrs['type'] === "submit")) return <Button type={attrs['type'] === "submit" ? "submit" : "button"} className={cls}>{node.name === "input" ? attrs['value'] : children()}</Button>;
      if (cls.includes("elementor-counter-number") && attrs['data-to-value']) return <span {...attributesToProps(attrs)}>{attrs['data-to-value']}</span>;
      return undefined;
    },
  };
  return <div className="reference-page"><div className="reference-root elementor-kit-11">{parse(page.html, options)}</div>{zoom && <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-5" role="dialog" aria-modal="true" aria-label="Project image"><Button variant="outline" className="absolute right-5 top-5" onClick={() => setZoom(null)}>Close</Button><img src={zoom} alt="Website project" className="max-h-[90vh] max-w-full object-contain" /></div>}{booking && <div className="fixed inset-0 z-50 flex flex-col bg-ink/95 p-4 md:p-8" role="dialog" aria-modal="true" aria-label="Book a free discovery call"><div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 pb-3"><p className="font-display text-lg font-black text-paper">Book a free discovery call</p><Button variant="outline" size="sm" onClick={() => setBooking(false)}>Close</Button></div><iframe title="Calendly booking calendar" src={CALENDLY_URL} className="mx-auto w-full max-w-5xl flex-1 rounded-lg border-0 bg-paper" loading="lazy" /></div>}</div>;
}