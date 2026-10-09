import { checkDomain, type DomainResult } from "@/lib/domain.functions";
import { useState } from "react";
import type React from "react";
import { ArrowRight, Check, ChevronDown, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "./site-link";
import { CONTACT_PHONE, CONTACT_TEL } from "./contact-details";
import { Portfolio, Blog, ContactFaq } from "./home-sections";
import data from "@/data/reference-pages.json";
import portrait from "@/assets/kenneth-portrait.jpg.asset.json";

type PageData = { title: string; blocks: { tag: string; text: string }[]; images: string[] };
const pages: Record<string, PageData> = data.pages;
const wrap = "mx-auto max-w-[1222px] px-5";

export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Udo Ezekiel` }, { name: "description", content: description }, { property: "og:title", content: `${title} | Udo Ezekiel` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
}

export function PageHeading({ title, subtitle }: { title: string; subtitle?: string | undefined }) {
  return <section className="bg-ink py-16 text-paper md:py-24"><div className={wrap}><p className="mb-5 text-sm text-paper/60"><SiteLink href="/" className="hover:text-brand">Home</SiteLink> / {title}</p><h1 className="max-w-4xl font-display text-4xl font-black italic leading-tight md:text-5xl">{title}</h1>{subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">{subtitle}</p>}</div></section>;
}

export function CallToAction() {
  return <section className="bg-brand py-16 text-brand-foreground"><div className={`${wrap} flex flex-col items-start justify-between gap-8 md:flex-row md:items-center`}><h2 className="max-w-2xl font-display text-3xl font-black">Ready to grow your business online?</h2><Button asChild size="lg" className="h-auto bg-ink px-7 py-4 text-paper hover:bg-ink-soft"><SiteLink href="/consultation">Book A Free Discovery Call <ArrowRight /></SiteLink></Button></div></section>;
}

const services = [
  { title: "Website Design", path: "website-design", image: 1, copy: "Your website is your first opportunity to wow potential customers online. Let's craft a beautiful, mobile-responsive website that inspires trust." },
  { title: "eCommerce Websites", path: "ecommerce-website-designer", image: 2, copy: "Attract new customers and retain them with a seamless, automated online shopping experience." },
  { title: "Landing Page Design", path: "landing-page-designer-in-lagos-nigeria", image: 3, copy: "Visually compelling, mobile-optimized landing pages that convert clicks to sales." },
  { title: "eLearning and Membership Websites", path: "lms", image: 4, copy: "Launch your online academy, sell digital courses, and give students an engaging learning experience." },
  { title: "Digital Marketing Strategy", path: "digital-marketing", image: 5, copy: "Sponsored ads, email marketing, sales funnels, and automations focused on business growth." },
  { title: "Search Engine Optimization", path: "seo", image: 5, copy: "Boost your visibility on search engines and attract more targeted traffic to your website." },
];

export function ServicesPage() {
  return <><PageHeading title="A Full Complement of Digital Marketing Services" subtitle="Digital marketing has changed. Choose from the services below and let's make you look good online." /><section className="bg-paper text-ink"><div className={wrap}>{services.map((s, i) => <article key={s.path} className="grid items-center gap-10 border-b border-ink/10 py-16 md:grid-cols-2"><img src={pages["services"]?.images[s.image] || pages["services"]?.images[0]} alt={s.title} className={`mx-auto aspect-[4/3] w-full max-w-md object-contain ${i % 2 ? "md:order-2" : ""}`} /><div><span className="text-sm font-bold text-brand">0{i + 1}</span><h2 className="mt-3 font-display text-3xl font-black">{s.title}</h2><p className="mt-5 leading-relaxed text-ink/70">{s.copy}</p><Button asChild size="lg" className="mt-7"><SiteLink href={`/services/${s.path}`}>Learn More <ArrowRight /></SiteLink></Button></div></article>)}</div></section><CallToAction /></>;
}

export function ServicePage({ pageKey, title }: { pageKey: string; title: string }) {
  const p = pages[pageKey];
  const blocks = p?.blocks.filter(b => !b.text.includes("Related") && !b.text.includes("View Large") && !b.text.includes("Share with") && !b.text.includes("Pianogoddess") && !b.text.includes("Frequently Asked") && !b.text.includes("Kenneth")) || [];
  const intro = blocks.find(b => b.tag === "p" || b.text.length > 120)?.text;
  return <><PageHeading title={title} subtitle={intro} /><nav className="border-b border-ink/10 bg-paper"><div className={`${wrap} flex flex-wrap gap-6 py-5 text-sm font-bold`}><SiteLink href="/services">All Services</SiteLink><SiteLink href="/portfolio">Portfolio</SiteLink><SiteLink href="/faq">FAQs</SiteLink><SiteLink href="/services/pricing">Pricing</SiteLink><SiteLink href="/consultation">Consultation</SiteLink></div></nav>{p?.images[0] && <section className="bg-paper py-12"><img src={p.images[0]} alt={title} className="mx-auto max-h-[500px] w-full max-w-5xl object-contain px-5" /></section>}<section className="bg-paper py-12 text-ink"><div className={`${wrap} max-w-4xl`}>{blocks.slice(0, 32).map((b, i) => b.tag.startsWith("h") ? <h2 key={i} className="mb-5 mt-12 font-display text-2xl font-black leading-snug md:text-3xl">{b.text}</h2> : <p key={i} className="mb-5 leading-8 text-ink/75">{b.text}</p>)}{!p && <p className="leading-8">Improve your online efficiency with digital strategies including sponsored ads, email marketing, sales funnels, and automations tailored to your business.</p>}</div></section><Portfolio /><ContactFaq /><CallToAction /></>;
}

export function PricingPage() {
  const [category, setCategory] = useState("Website");
  const plans = category === "Website" ? data.plans.slice(0, 3) : category === "eCommerce" ? data.plans.slice(3) : [];
  return <><PageHeading title="Pricing Plan" subtitle="Find the right website package for your business." /><section className="bg-paper py-16 text-ink"><div className={wrap}><div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Service pricing">{["Website", "eCommerce", "Landing Page", "eLearning", "SEO"].map(t => <Button key={t} role="tab" aria-selected={category === t} variant={category === t ? "default" : "outline"} onClick={() => setCategory(t)}>{t} Pricing</Button>)}</div><h2 className="mb-8 font-display text-3xl font-black">{category} Design Pricing</h2><div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">{plans.map(p => <article key={p.name} className="overflow-hidden rounded border border-ink/15 bg-background"><div className="bg-ink p-7 text-paper"><h3 className="font-display text-2xl font-black">{p.name}</h3><p className="mt-3 text-sm text-paper/65">{p.description}</p></div><div className="p-7"><p className="font-display text-4xl font-black text-brand">{p.price}</p><ul className="my-7 space-y-3">{p.features.map(f => <li key={f} className="flex items-start gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{f}</li>)}</ul><Button asChild className="w-full"><SiteLink href="/questionnaire">Get Started</SiteLink></Button><p className="mt-5 text-xs leading-5 text-ink/60">Domain and hosting are not included. I can work with your hosting provider or recommend one.</p></div></article>)}</div>{!plans.length && <div className="border-t border-ink/15 py-10"><h3 className="font-display text-2xl font-black">A package tailored to your requirements</h3><Button asChild className="mt-6"><SiteLink href="/questionnaire">Request a personalized quote</SiteLink></Button></div>}</div></section><CallToAction /></>;
}

export function PortfolioPage() { return <><PageHeading title="Portfolio" subtitle="A selection of websites crafted with purpose, strategy, and conversion in mind." /><Portfolio /><CallToAction /></>; }
export function BlogPage() { return <><PageHeading title="Blog" subtitle="Insights on web design, eCommerce, and growing your business online." /><Blog /><section className="bg-paper pb-16 text-ink"><div className={`${wrap} grid gap-8 md:grid-cols-2`}>{Object.entries(pages).filter(([k]) => !k.includes('_') && !["services", "blog", "portfolio", "contact", "consultation", "questionnaire"].includes(k) && !["hostinger-coupon-code", "how-to-fix-woocommerce-status-not-showing-on-dashboard", "expertnaire-review-affiliate-marketing-in-nigeria", "google-my-business-nigeria"].includes(k)).map(([slug, p]) => <article key={slug} className="border-t border-ink/15 pt-6"><h2 className="font-display text-xl font-black"><SiteLink href={`/${slug}`} className="hover:text-brand">{p.title}</SiteLink></h2><p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/65">{p.blocks.find(b => b.tag === "p")?.text}</p><SiteLink href={`/${slug}`} className="mt-5 inline-block font-bold text-brand">Continue reading →</SiteLink></article>)}</div></section></>; }

export function ArticlePage({ pageKey }: { pageKey: string }) {
  const p = pages[pageKey];
  if (!p) return <PageHeading title="Article unavailable" />;
  return <><PageHeading title={p.title} /><section className="bg-paper py-16 text-ink"><article className={`${wrap} max-w-4xl`}><div className="mb-10 flex items-center gap-3 border-b border-ink/10 pb-6"><img src={portrait.url} alt="Udo Ezekiel" className="h-12 w-12 rounded-full object-cover object-top" /><p className="text-sm">Posted by <strong>Udo Ezekiel</strong></p></div>{p.images[0] && <img src={p.images[0]} alt={p.title} className="mb-10 max-h-[480px] w-full object-contain" />}{p.blocks.map((b, i) => b.tag.startsWith("h") ? <h2 key={i} className="mb-5 mt-10 font-display text-2xl font-black">{b.text}</h2> : <p key={i} className="mb-5 leading-8 text-ink/75">{b.text}</p>)}<Button asChild variant="outline" className="mt-10"><SiteLink href="/blog">Back to the blog</SiteLink></Button></article></section></>;
}

export function ProjectPage({ pageKey, title }: { pageKey: string; title: string }) {
  const p = pages[pageKey];
  return <><PageHeading title={title} /><section className="bg-paper py-16 text-ink"><div className={`${wrap} grid items-start gap-12 lg:grid-cols-[2fr_1fr]`}>{p?.images[0] && <img src={p.images[0]} alt={`${title} full website design`} className="w-full" />}<div><h2 className="font-display text-3xl font-black">{title}</h2>{p?.blocks.filter(b => b.tag === "p").slice(0, 3).map((b,i) => <p key={i} className="mt-6 leading-8 text-ink/70">{b.text}</p>)}<dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10"><div className="py-4"><dt className="text-sm text-ink/50">Client</dt><dd className="mt-1 font-bold">{title}</dd></div><div className="py-4"><dt className="text-sm text-ink/50">Designed by</dt><dd className="mt-1 font-bold">Udo Ezekiel</dd></div></dl><Button asChild className="mt-8"><SiteLink href="/portfolio">Back to portfolio</SiteLink></Button></div></div></section><CallToAction /></>;
}

const field = "mt-2 w-full rounded border border-ink/20 bg-background px-4 py-3 text-ink outline-none focus:border-brand";
export function InquiryPage({ questionnaire = false }: { questionnaire?: boolean }) {
  const [step, setStep] = useState(1);
  return <><PageHeading title={questionnaire ? "Pre-Web Design Questionnaire" : "It's high time you get an unbeatable online presence"} subtitle={questionnaire ? "Let's understand your requirements, goals, and budget." : "In this free strategy session, we'll discuss your business objectives and the best solutions for your brand."} /><section className="bg-paper py-16 text-ink"><div className={`${wrap} grid gap-12 md:grid-cols-2`}><div><img src={portrait.url} alt="Udo Ezekiel" className="max-h-[600px] w-full object-cover object-top" /><h2 className="mt-8 font-display text-3xl font-black">Talk is cheap, let's take action!</h2><p className="mt-4 flex items-center gap-2"><Clock className="h-5 w-5 text-brand" />Free 30-minute discovery call</p></div><form onSubmit={e => e.preventDefault()} className="self-start"><h2 className="font-display text-2xl font-black">{questionnaire ? `Your project · Step ${step} of 2` : "Book a discovery call"}</h2><div className="mt-8 space-y-5"><div hidden={questionnaire && step === 2}><label className="block">Your name<input className={field} autoComplete="name" required /></label><label className="mt-5 block">Email address<input className={field} type="email" autoComplete="email" required /></label><label className="mt-5 block">Business name<input className={field} /></label><label className="mt-5 block">What do you need?<select className={field}><option>New website</option><option>Redesign my current website</option><option>eCommerce website</option><option>Landing page</option><option>Online course website</option></select></label></div><div hidden={questionnaire && step === 1}><label className="block">Tell me about your project<textarea className={`${field} min-h-36`} rows={5} /></label>{questionnaire && <><label className="mt-5 block">Current website<input className={field} type="url" placeholder="https://" /></label><label className="mt-5 block">Budget<input className={field} /></label><label className="mt-5 block">Preferred launch date<input className={field} type="date" /></label></>}</div>{questionnaire && <div className="flex gap-3">{step === 2 && <Button variant="outline" type="button" onClick={() => setStep(1)}>Back</Button>}{step === 1 && <Button type="button" onClick={() => setStep(2)}>Next <ArrowRight /></Button>}</div>}<p role="status" className="border-l-2 border-brand pl-4 text-sm text-ink/65">{questionnaire ? "Project requests are not accepting submissions yet." : "Appointment booking is not open yet."}</p><Button disabled type="submit">{questionnaire ? "Submit Questionnaire" : "Request Consultation"}</Button></div></form></div></section></>;
}

export function ContactPage() { return <><PageHeading title="Get In Touch" subtitle="Let's Connect! Whether you're ready to start your project, need a quick consultation, or just want to ask a few questions." /><section className="bg-paper py-20 text-ink"><div className={`${wrap} grid gap-12 md:grid-cols-2`}><div><h2 className="font-display text-3xl font-black">Working with clients globally</h2><p className="mt-5 leading-8 text-ink/70">I work with brands and individuals who are ready to grow online and stand out. If that sounds like you, let's talk!</p><Button asChild size="lg" className="mt-8"><SiteLink href="/consultation">Book a consultation <ArrowRight /></SiteLink></Button><Button asChild variant="outline" size="lg" className="mt-4 ml-0 md:ml-3"><SiteLink href="/questionnaire">Tell me about your project</SiteLink></Button></div><div className="border-l-2 border-brand pl-8"><Phone className="mb-5 h-9 w-9 text-brand" /><h2 className="font-display text-2xl font-black">Let's talk about your business</h2><SiteLink href={CONTACT_TEL} className="mt-4 inline-block text-brand">{CONTACT_PHONE}</SiteLink></div></div></section><ContactFaq /></>; }

export function AccountPage({ reset = false }: { reset?: boolean }) {
  const [show, setShow] = useState(false);
  return <><PageHeading title={reset ? "Reset Password" : "My Account"} /><section className="bg-paper py-16 text-ink"><form onSubmit={e => e.preventDefault()} className={`${wrap} max-w-xl`}><h2 className="font-display text-3xl font-black">{reset ? "Lost your password?" : "Login"}</h2><label className="mt-8 block">Username or email address<input className={field} type="email" autoComplete="email" /></label>{!reset && <><label className="mt-5 block">Password<input className={field} type={show ? "text" : "password"} autoComplete="current-password" /></label><label className="mt-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={show} onChange={e => setShow(e.target.checked)} />Show password</label><SiteLink href="/my-account/lost-password" className="mt-5 block text-sm text-brand">Lost your password?</SiteLink></>}<p role="status" className="my-6 text-sm text-ink/60">Account access is not available yet.</p><Button disabled>{reset ? "Reset password" : "Log in"}</Button></form></section></>;
}

export function InformationPage({ title }: { title: string }) { return <><PageHeading title={title} /><section className="bg-paper py-20 text-ink"><div className={`${wrap} max-w-3xl`}><p className="leading-8 text-ink/70">{title === "Refer A Friend" ? "Know someone who needs a website? Let's talk about their project." : "This page is awaiting the final business policy."}</p><Button asChild className="mt-7"><SiteLink href="/contact">Contact Udo Ezekiel</SiteLink></Button></div></section></>; }
export function AboutPage() { return <><PageHeading title="Meet Udo Ezekiel" subtitle="Helping businesses succeed online." /><section className="bg-paper py-16 text-ink"><div className={`${wrap} grid items-center gap-12 md:grid-cols-2`}><img src={portrait.url} alt="Udo Ezekiel" className="max-h-[620px] w-full object-cover object-top" /><div><h2 className="font-display text-3xl font-black">Solutions with greater efficiency of work.</h2><p className="mt-6 leading-8 text-ink/70">We build noteworthy websites, set up digital marketing strategies, and help business owners maximize and scale their businesses.</p><Button asChild className="mt-8"><SiteLink href="/consultation">Let's talk</SiteLink></Button></div></div></section><CallToAction /></>; }
export function FaqPage() { return <><PageHeading title="Frequently Asked Questions" /><ContactFaq /></>; }
const HOSTINGER_REFERRAL = "NMHUDOEZECWS";
export function DomainPage() {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState("");
  const [results, setResults] = useState<DomainResult[] | null>(null);
  const buyUrl = (d: string) => `https://www.hostinger.com?REFERRALCODE=${HOSTINGER_REFERRAL}`;
  const search = async (e: React.FormEvent) => {
    e.preventDefault();
    let clean = domain.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0] ?? "";
    if (/^[a-z0-9-]+$/.test(clean)) clean += ".com";
    if (!/^[a-z0-9-]{1,63}\.[a-z0-9.-]{2,20}$/.test(clean)) { setError("Please enter a valid domain name, e.g. yourbusiness.com"); return; }
    setError(""); setLoading(true); setResults(null); setChecking(clean);
    try {
      const r = await checkDomain({ data: { domain: clean } });
      if (r.error) setError(r.error); else setResults(r.results);
    } catch { setError("Could not check this domain right now. Please try again."); }
    finally { setLoading(false); }
  };
  return <><PageHeading title="Domain Search" subtitle="Check if your domain is available — my Hostinger discount is applied automatically." /><section className="bg-paper py-20 text-ink"><form onSubmit={search} className={`${wrap} max-w-2xl`}><label className="block">Your preferred domain name<input className={field} value={domain} onChange={e => setDomain(e.target.value)} placeholder="yourbusiness.com" required /></label>{error && <p role="alert" className="mt-3 text-sm text-destructive">{error}</p>}<Button type="submit" className="mt-6" disabled={loading}>{loading ? "Checking..." : <>Check availability <ArrowRight /></>}</Button>{loading && <div role="status" aria-live="polite" className="search-loading text-ink/75"><span className="search-loading-track" aria-hidden="true" /><span>Checking {checking}…</span></div>}
    {results && <ul className="mt-8 space-y-3">{results.length === 0 && <li>No results found. Try another name.</li>}{results.map(r => <li key={r.domain} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-ink/15 p-4"><span className="font-semibold">{r.domain} — <span className={r.available ? "text-primary" : "text-ink/60"}>{r.available ? "Available" : "Taken"}</span></span>{r.available && <Button asChild size="sm"><a href={buyUrl(r.domain)} target="_blank" rel="noopener noreferrer">Get it with my discount <ArrowRight /></a></Button>}</li>)}</ul>}
    <p className="mt-6 text-sm text-ink/65">Available domains link to Hostinger with my referral discount (code {HOSTINGER_REFERRAL}) already applied.</p><Button asChild variant="outline" className="mt-7"><SiteLink href="/questionnaire">Include a domain in my project request</SiteLink></Button></form></section></>;
}