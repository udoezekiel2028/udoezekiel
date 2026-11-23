import blogAffiliate from "@/assets/blog-affiliate.jpg";
import blogGmb from "@/assets/blog-google-business.jpg";
import { SiteLink } from "./site-link";
import { Testimonials } from "./testimonials";
import { checkDomain, type DomainResult } from "@/lib/domain.functions";
import { WHATSAPP_URL, SOCIAL_PROFILES } from "./contact-details";
import { Button } from "@/components/ui/button";
import { useState, useEffect, type FormEvent } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Send,
  X,
  Maximize2,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Globe,
  Sparkles,
  Laptop,
  ShoppingBag,
  GraduationCap,
  Target,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  Layers,
  Code2,
  Clock,
  Compass,
  Palette,
  Rocket,
  Wrench,
} from "lucide-react";

import portraitAsset from "@/assets/udo-ezekiel-portrait.jpg.asset.json";
import logoAsset from "@/assets/udo-ezekiel-logo.png.asset.json";
import eaGlobalAsset from "@/assets/ea-global-stores-portfolio.jpg.asset.json";
import shakaaraahAsset from "@/assets/shakaaraah-portfolio.jpg.asset.json";
import pianogoddessAsset from "@/assets/pianogoddess-portfolio.jpg.asset.json";
import forxersAsset from "@/assets/forxers-academy-portfolio.jpg.asset.json";
import easyjapaAsset from "@/assets/easyjapa-portfolio.jpg.asset.json";
import theScoopAsset from "@/assets/the-scoop-nigeria-portfolio.jpg.asset.json";

const HERO_PORTRAIT = portraitAsset.url;
const LOGO = logoAsset.url;

export const SERVICES_MENU = [
  { label: "Corporate Websites", href: "/services/website-design/" },
  { label: "eCommerce Websites", href: "/services/ecommerce-website-designer/" },
  { label: "eLearning & Academies", href: "/services/lms/" },
  { label: "Landing Pages & Funnels", href: "/services/landing-page-designer-in-lagos-nigeria/" },
  { label: "Website Redesign", href: "/services/website-design/" },
  { label: "SEO & Digital Growth", href: "/services/seo/" },
];

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/", menu: true },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

const SOCIAL_SHARE = [
  { Icon: Facebook, label: "Share on Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=https://udoezekiel.dev/" },
  { Icon: X, label: "Share on X", href: "https://x.com/share?url=https://udoezekiel.dev/" },
  { Icon: Linkedin, label: "Share on LinkedIn", href: "https://www.linkedin.com/shareArticle?mini=true&url=https://udoezekiel.dev/" },
  { Icon: Send, label: "Share on Telegram", href: "https://telegram.me/share/url?url=https://udoezekiel.dev/" },
];

export const BRANDS = [
  "iFluence-Academy", "SandBros-Nigeria", "AvazTV", "Pianogodess-Academy", "Mapstat-Consult", "Ngwa-Youth", "ForXers",
  "EasyJapa", "Goli-Nigeria-1", "EAStores", "Bluepictures-Ent", "EliteWares", "FONDCUP", "Supernatural-Nation",
  "iHepsut-Skincare", "Learning-Questa", "Maulies-Care", "Bible-Davids-Ministries", "Shakaaraah-Communications",
  "Sotectonic-Blog", "The-Scoop-Nigeria", "Uto-Spices", "ViewPoint-Immigration-Services",
];

export const FEATURED_PROJECTS = [
  {
    name: "Pianogoddess Academy",
    industry: "Music Education & Digital Learning",
    solution: "eLearning LMS, Video Course Portal & Digital Store",
    tech: "WordPress · LearnDash LMS · WooCommerce · Paystack",
    slug: "pianogoddess-academy",
    src: pianogoddessAsset.url,
  },
  {
    name: "EA Global Stores",
    industry: "eCommerce & Multi-Category Retail",
    solution: "High-Volume Online Store & Automated Order Management",
    tech: "WooCommerce · Stripe · Automated Inventory · Shipping Calc",
    slug: "ea-global-stores",
    src: eaGlobalAsset.url,
  },
  {
    name: "ForXers Academy",
    industry: "Financial Markets & Trading Education",
    solution: "High-Converting Enrollment Funnel & Membership Portal",
    tech: "Responsive Landing Page · Lead Capture · Membership Gateway",
    slug: "forxers-academy",
    src: forxersAsset.url,
  },
  {
    name: "EasyJapa",
    industry: "Immigration & Relocation Consulting",
    solution: "Corporate Authority Website & Client Intake System",
    tech: "Corporate CMS · Intake Automation · Booking Integration",
    slug: "easyjapa",
    src: easyjapaAsset.url,
  },
  {
    name: "The Scoop Nigeria",
    industry: "Digital Publishing & Media",
    solution: "High-Traffic News Portal, Ad Infrastructure & Editorial CMS",
    tech: "High-Traffic News Architecture · SEO & AMP · Ad Placement",
    slug: "the-scoop-nigeria",
    src: theScoopAsset.url,
  },
  {
    name: "Shakaaraah LLC",
    industry: "Creative Agency & Brand Communications",
    solution: "Modern Corporate Showcase & Creative Portfolio Experience",
    tech: "Custom Visual Design · Fast Edge CDN · Interactive Showcase",
    slug: "shakaaraah-llc",
    src: shakaaraahAsset.url,
  },
];

export const SOLUTIONS = [
  {
    id: "01",
    title: "Corporate Website Development",
    desc: "Bespoke, high-credibility websites designed for growing companies, consulting firms, and modern enterprises looking to project market authority and win enterprise clients.",
    benefits: ["Instant executive market credibility", "Optimized B2B lead generation funnels", "Responsive mobile-first user journeys"],
    href: "/services/website-design/",
    icon: Laptop,
  },
  {
    id: "02",
    title: "eCommerce Website Development",
    desc: "Robust, conversion-focused online stores engineered for fast checkouts, multi-currency international payments, real-time inventory sync, and scalable catalog growth.",
    benefits: ["Automated 24/7 ordering and payments", "Optimized cart flows reducing drop-offs", "Seamless Stripe, PayPal & Paystack integration"],
    href: "/services/ecommerce-website-designer/",
    icon: ShoppingBag,
  },
  {
    id: "03",
    title: "eLearning & Online Academies",
    desc: "Complete digital learning platforms (LMS) with student enrollment, structured multimedia courses, progress tracking, interactive quizzes, and automated certification.",
    benefits: ["Monetize proprietary knowledge globally", "Gated curriculum and content protection", "Automated student onboarding & tracking"],
    href: "/services/lms/",
    icon: GraduationCap,
  },
  {
    id: "04",
    title: "Landing Pages & Conversion Funnels",
    desc: "High-impact, single-focus landing pages and promotional funnels engineered specifically for paid ad campaigns, product debuts, and aggressive lead acquisition.",
    benefits: ["Maximize Return on Ad Spend (ROAS)", "Distraction-free conversion pathways", "A/B testing-ready page architecture"],
    href: "/services/landing-page-designer-in-lagos-nigeria/",
    icon: Target,
  },
  {
    id: "05",
    title: "Website Redesign & Optimization",
    desc: "Strategic modernization of outdated or underperforming websites to revamp brand positioning, accelerate Core Web Vitals, and dramatically lift conversion rates.",
    benefits: ["Reclaim lost traffic and stalled sales", "Lightning-fast page load performance", "Modern UI aligned with international standards"],
    href: "/services/website-design/",
    icon: RefreshCw,
  },
  {
    id: "06",
    title: "SEO & Digital Growth Solutions",
    desc: "Technical SEO architecture, semantic structure, structured schema markup, and content strategy engineered to capture high-intent commercial search traffic on Google.",
    benefits: ["Sustainable organic search visibility", "Dominance in target commercial keywords", "Lower long-term customer acquisition costs"],
    href: "/services/seo/",
    icon: TrendingUp,
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your commercial goals, target audience, competitive landscape, and digital requirements to chart an exact roadmap for growth.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Planning & Design",
    desc: "We architect intuitive user flows, conversion wireframes, and modern visual interfaces crafted specifically to engage and convert your ideal buyers.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development & Integrations",
    desc: "We build your platform using clean, scalable code, integrating payments, booking workflows, email automations, and custom business logic.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing & Launch",
    desc: "Rigorous quality assurance across browsers, mobile devices, security protocols, and page speed tests before executing a flawless public launch.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Support & Optimization",
    desc: "We provide comprehensive dashboard onboarding, 2-month post-launch technical support, and continuous advisory to scale your operations smoothly.",
    icon: Wrench,
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Business-Focused Architecture",
    desc: "We don't just build pretty layouts. Every page, section, and call-to-action is engineered to solve a commercial bottleneck and generate measurable revenue.",
    icon: Target,
  },
  {
    title: "Modern & Responsive Engineering",
    desc: "Flawless rendering and micro-interactions across smartphones, tablets, laptops, and ultra-wide screens using modern front-end standards.",
    icon: Laptop,
  },
  {
    title: "Frictionless User Experience",
    desc: "Intuitive information architecture that removes cognitive load and guides prospective clients smoothly from curiosity to conversion.",
    icon: Layers,
  },
  {
    title: "High Performance & Technical SEO",
    desc: "Semantic HTML5, clean code, optimized assets, structured schema, and stellar Core Web Vitals that search engines rank higher.",
    icon: TrendingUp,
  },
  {
    title: "Direct, Reliable Communication",
    desc: "No middlemen or opaque agencies. You collaborate directly with a senior digital engineer who understands business strategy and keeps commitments.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Post-Launch Partnership",
    desc: "Your launch is just the beginning. We provide 2 months of complimentary post-launch support, dashboard training, and ongoing technical guidance.",
    icon: Clock,
  },
];

const POSTS = [
  { cat: "Domain & Hosting", t: "Hostinger Coupon Code 2026: Get 20% Off Hosting & Domain | How to Buy Hostinger", date: "September 14, 2026", ex: "If you are planning to build a website for your business, personal brand, online store, or portfolio, here is how to secure reliable hosting at the best rate.", slug: "hostinger-coupon-code", img: "/images/hostinger-badge.webp" },
  { cat: "eCommerce & Tech", t: "How to Fix WooCommerce Status Not Showing on Dashboard", date: "September 28, 2026", ex: "WooCommerce status not showing on your store dashboard when you are done with setup can be frustrating. Here is the step-by-step technical fix.", slug: "how-to-fix-woocommerce-status-not-showing-on-dashboard", img: "/images/ecomm-hive.jpg" },
  { cat: "Affiliate & Growth", t: "Expertnaire Review: Affiliate Marketing in Nigeria", date: "September 28, 2026", ex: "A comprehensive, realistic assessment of digital affiliate marketing platforms in Nigeria, how they work, and strategies for sustainable monetization.", slug: "expertnaire-review-affiliate-marketing-in-nigeria", img: blogAffiliate },
  { cat: "Local SEO & Business", t: "Google My Business in Nigeria – How to Register & Rank", date: "September 28, 2026", ex: "Essential steps to set up, verify, and optimize your Google Business profile so local customers discover your products and services instantly.", slug: "google-my-business-nigeria", img: blogGmb },
];

const FAQ = [
  {
    q: "Can I book a consultation call before deciding on my project?",
    a: (
      <>
        Yes, absolutely. If you prefer to discuss your business requirements, technical scope, and timeline before filling out a formal questionnaire, I am happy to meet with you. You can{" "}
        <SiteLink className="text-brand underline font-bold" href="/consultation/">
          book a free 30-minute discovery consultation
        </SiteLink>
        .
      </>
    ),
  },
  {
    q: "Do you serve international clients outside Nigeria?",
    a: "Yes. I actively work with business owners, founders, and companies across the United States, United Kingdom, Canada, Europe, Nigeria, and internationally. All project workflows, milestone reviews, and communications are conducted seamlessly across video calls, WhatsApp, and email with multi-currency payment options (USD via Stripe/PayPal/Wire).",
  },
  {
    q: "What is included in your post-launch support?",
    a: "Every custom build includes 2 months of complimentary post-launch technical support. This covers bug fixes, performance monitoring, security checkups, and 1-on-1 dashboard walkthroughs to ensure you or your team feel completely confident managing your platform.",
  },
  {
    q: "Can I manage and update content on my website after launch?",
    a: "Yes. All platforms are engineered with intuitive, user-friendly administrative dashboards (such as WordPress or custom CMS setups). You can easily update text, change images, upload new blog posts, add products, or edit course materials without writing code.",
  },
  {
    q: "Do you assist with copywriting, logos, and branding assets?",
    a: "Yes. While clients typically provide their existing brand materials, I offer professional copywriting, conversion-focused messaging, logo design, and brand visual guidelines as part of tailored project packages.",
  },
];

const HOSTINGER_REFERRAL = "NMHUDOEZECWS";

const btn = "inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer";
const btnBrand = `${btn} bg-brand text-brand-foreground hover:bg-brand/90 shadow-md`;
const btnInk = `${btn} bg-ink text-paper hover:bg-ink-soft`;
const btnOutline = `${btn} border border-paper/30 text-paper hover:border-brand hover:text-brand bg-paper/5 backdrop-blur-sm`;
const h2 = "font-display text-3xl font-black md:text-4xl lg:text-[44px] md:leading-[1.15]";

export function Header() {
  const [open, setOpen] = useState(false);
  const [svc, setSvc] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    setOpen(false);
    setSvc(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      <div className="mx-auto flex h-[88px] max-w-[1222px] items-center justify-between gap-4 border-b border-paper/10 px-4">
        <SiteLink href="/" aria-label="Udo Ezekiel home" className="shrink-0">
          <img src={LOGO} alt="Udo Ezekiel – Digital Experiences That Help Businesses Grow" width={1744} height={380} className="h-[3.1059rem] w-auto" />
        </SiteLink>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) =>
            n.menu ? (
              <div key={n.label} className="group relative" onMouseLeave={() => setSvc(false)}>
                <Button
                  variant="ghost"
                  aria-expanded={svc}
                  aria-haspopup="true"
                  onClick={() => setSvc((v) => !v)}
                  onMouseEnter={() => setSvc(true)}
                  className="flex items-center gap-1 text-[15px] font-bold hover:text-brand cursor-pointer"
                >
                  {n.label} <ChevronDown className="h-3 w-3" />
                </Button>
                {svc && (
                  <div className="absolute left-1/2 top-full z-30 w-72 -translate-x-1/2 pt-3">
                    <ul className="rounded-sm border border-ink/10 bg-paper py-3 text-ink shadow-2xl">
                      <li className="border-b border-ink/10 pb-2 mb-1 px-5">
                        <SiteLink href={n.href} className="text-xs font-black uppercase tracking-wider text-brand hover:underline">
                          Explore All Services →
                        </SiteLink>
                      </li>
                      {SERVICES_MENU.map((s) => (
                        <li key={s.label}>
                          <SiteLink href={s.href} className="block px-5 py-2 text-sm font-semibold hover:text-brand hover:bg-ink/5">
                            {s.label}
                          </SiteLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <SiteLink
                key={n.label}
                href={n.href}
                className={`text-[15px] font-bold transition-colors hover:text-brand ${
                  pathname === n.href || (n.href !== "/" && pathname.startsWith(n.href))
                    ? "text-brand"
                    : "text-paper/90"
                }`}
              >
                {n.label}
              </SiteLink>
            ),
          )}
          <SiteLink href="/consultation/" className={`${btnBrand} ml-2 text-xs uppercase tracking-wider`}>
            Book Consultation
          </SiteLink>
        </nav>
        <Button variant="ghost" className="lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-b border-paper/10 px-4 pb-6 lg:hidden bg-ink">
          {NAV.map((n) => (
            <div key={n.label} className="border-b border-paper/10">
              {n.menu ? (
                <>
                  <Button variant="ghost" aria-expanded={svc} onClick={() => setSvc((v) => !v)} className="flex w-full items-center justify-between py-3 font-bold text-left">
                    {n.label} <ChevronDown className={`h-4 w-4 transition-transform ${svc ? "rotate-180" : ""}`} />
                  </Button>
                  {svc && (
                    <ul className="pb-3 pl-4 space-y-2">
                      <li>
                        <SiteLink href={n.href} className="block py-1 text-sm font-bold text-brand">
                          All Services Overview →
                        </SiteLink>
                      </li>
                      {SERVICES_MENU.map((s) => (
                        <li key={s.label}>
                          <SiteLink href={s.href} className="block py-1 text-sm text-paper/80">
                            {s.label}
                          </SiteLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <SiteLink href={n.href} className="block py-3 font-bold">
                  {n.label}
                </SiteLink>
              )}
            </div>
          ))}
          <div className="pt-4">
            <SiteLink href="/consultation/" className={`${btnBrand} w-full text-center text-xs uppercase tracking-wider`}>
              Book Consultation
            </SiteLink>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState("");
  const [results, setResults] = useState<DomainResult[] | null>(null);
  const [showDomainTool, setShowDomainTool] = useState(false);

  const search = async (e: FormEvent) => {
    e.preventDefault();
    let clean = domain.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0] ?? "";
    if (/^[a-z0-9-]+$/.test(clean)) clean += ".com";
    if (!/^[a-z0-9-]{1,63}\.[a-z0-9.-]{2,20}$/.test(clean)) {
      setError("Please enter a valid domain name, e.g. yourbusiness.com");
      return;
    }
    setError("");
    setLoading(true);
    setResults(null);
    setChecking(clean);
    try {
      const r = await checkDomain({ data: { domain: clean } });
      if (r.error) setError(r.error);
      else setResults(r.results);
    } catch {
      setError("Could not check this domain right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28 lg:py-32">
      {/* Background portrait element */}
      <img
        src={HERO_PORTRAIT}
        alt="Udo Ezekiel – Full-stack digital solutions partner"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[55%] -scale-x-100 object-cover object-top opacity-85 md:block"
      />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--ink)_45%,rgba(17,19,24,0.85)_70%,transparent)] md:block" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_-20%,rgba(237,75,27,0.18),rgba(255,255,255,0))] pointer-events-none" />

      <div className="relative mx-auto max-w-[1222px] px-4">
        {/* Positioning Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
          <Sparkles className="size-3.5" /> High-Performing Digital Solutions Partner
        </div>

        {/* Master Headline */}
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-black italic leading-[1.12] sm:text-5xl md:text-6xl lg:text-[64px]">
          We Build Digital Experiences <br />
          That Help <span className="text-brand">Businesses Grow.</span>
        </h1>

        {/* Supporting Description */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85 sm:text-xl">
          We design and develop high-performing websites, eCommerce stores and online learning platforms that help businesses attract customers, simplify operations and scale online.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <SiteLink href="#portfolio" className={`${btnBrand} text-base px-8 py-4`}>
            Explore Our Work <ArrowRight className="ml-2 size-4" />
          </SiteLink>
          <SiteLink href="/consultation/" className={`${btnOutline} text-base px-8 py-4`}>
            Book a Free Consultation
          </SiteLink>
        </div>

        {/* Quick Credibility Tags */}
        <div className="mt-12 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-bold uppercase tracking-wider text-paper/70">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-brand" /> International Delivery Standards
          </span>
          <span className="flex items-center gap-2">
            <Globe className="size-4 text-brand" /> Nigeria · UK · US · Worldwide
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-brand" /> 2-Month Post-Launch Guarantee
          </span>
        </div>

        {/* Optional Domain Search Tool */}
        <div className="mt-10 max-w-xl border-t border-paper/10 pt-6">
          <button
            type="button"
            onClick={() => setShowDomainTool((v) => !v)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-paper/60 hover:text-brand cursor-pointer transition-colors"
          >
            <Search className="size-3.5" />
            <span>Need a new domain name? Check availability</span>
            <ChevronDown className={`size-3.5 transition-transform ${showDomainTool ? "rotate-180" : ""}`} />
          </button>

          {showDomainTool && (
            <div className="mt-4 rounded-sm border border-paper/15 bg-paper/5 p-4 backdrop-blur-sm">
              <form onSubmit={search} className="flex rounded-sm bg-paper p-1">
                <label htmlFor="domain" className="sr-only">Domain name</label>
                <input
                  id="domain"
                  name="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="e.g. yourbusiness.com (20% off)"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink outline-none placeholder:text-ink/50"
                />
                <Button type="submit" variant="ghost" disabled={loading} className={`${btnBrand} gap-1.5 px-4 text-xs uppercase`}>
                  {loading ? "Checking..." : "Search"}
                </Button>
              </form>

              {loading && (
                <p className="mt-2 text-xs text-paper/70 animate-pulse">Checking {checking}…</p>
              )}
              {error && <p role="alert" className="mt-2 text-xs font-semibold text-brand">{error}</p>}
              {results && (
                <div className="mt-3 space-y-2">
                  {results.map((r) => (
                    <div key={r.domain} className={`rounded-sm border-l-4 px-4 py-2.5 text-xs ${r.available ? "border-green-500 bg-green-950/40 text-green-200" : "border-red-500 bg-red-950/40 text-red-200"}`}>
                      <p className="font-bold">{r.available ? `✓ "${r.domain}" is available!` : `✕ "${r.domain}" is taken.`}</p>
                      {r.available && (
                        <a href={`https://www.hostinger.com?REFERRALCODE=${HOSTINGER_REFERRAL}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-brand underline font-semibold">
                          Get 20% Off Domain &amp; Fast Hosting Here →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const stats = [
    { value: "25+", label: "Deployed Platforms", sub: "Websites, eCommerce & LMS" },
    { value: "100%", label: "Client Satisfaction", sub: "Verified 5-Star Reviews" },
    { value: "6", label: "Core Industries", sub: "Fintech, Edtech, Retail & Corporate" },
    { value: "Global", label: "Delivery Standard", sub: "Nigeria, UK, US & Worldwide" },
  ];

  const techStack = [
    "WordPress", "WooCommerce", "LearnDash LMS", "React", "Next.js", "TypeScript",
    "Tailwind CSS", "Make.com Automation", "Stripe", "Paystack", "Paddle", "PostgreSQL",
  ];

  return (
    <section className="bg-navy py-16 text-paper border-y border-paper/10">
      <div className="mx-auto max-w-[1222px] px-4">
        {/* Verified Stats Bar */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 pb-12 border-b border-paper/10">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-brand pl-4">
              <span className="font-display text-3xl font-black text-brand md:text-4xl">{s.value}</span>
              <p className="mt-1 font-display text-base font-bold text-paper">{s.label}</p>
              <p className="text-xs text-paper/60">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Brand Logos Marquee */}
        <div className="pt-12 text-center">
          <p className="text-xs font-black uppercase tracking-wider text-brand">Proven Track Record</p>
          <h2 className="mt-2 font-display text-2xl font-black md:text-3xl text-paper">
            Trusted by Forward-Thinking Brands &amp; Growing Businesses
          </h2>

          <div className="mt-10 overflow-hidden" role="region" aria-label="Brand logos marquee">
            <div className="brand-marquee flex items-center gap-x-14">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <img
                  key={`${b}-${i}`}
                  src={`/brands/${b}.png`}
                  alt={i < BRANDS.length ? b.replace(/-1$/, "").replace(/-/g, " ") : ""}
                  loading="lazy"
                  aria-hidden={i >= BRANDS.length}
                  className="h-8 w-auto shrink-0 opacity-70 brightness-0 invert transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Badge Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-paper/10">
          <span className="text-xs font-bold uppercase tracking-wider text-paper/50 mr-2">Core Tech Stack:</span>
          {techStack.map((tech) => (
            <span key={tech} className="rounded-sm border border-paper/15 bg-paper/5 px-3 py-1 text-xs font-semibold text-paper/80">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="bg-paper py-24 text-ink border-b border-ink/10" id="services">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-wider text-brand">Core Digital Solutions</p>
          <h2 className={`${h2} mt-2`}>Tailored Digital Services Built for Business Growth</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
            We partner with businesses to deliver modern, high-converting platforms that attract qualified customers, automate workflows, and project indisputable credibility.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                className="group relative flex flex-col justify-between rounded-sm border border-ink/10 bg-white p-8 transition-all duration-300 hover:border-brand/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-sm bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-display text-sm font-black text-ink/40">{s.id}</span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-black text-ink group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">
                    {s.desc}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-ink/10 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand">Business Benefits:</p>
                    <ul className="space-y-1.5 text-xs text-ink/70">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-brand shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <SiteLink
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-transform group-hover:translate-x-1"
                  >
                    Explore Service Scope <ArrowRight className="size-4" />
                  </SiteLink>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 rounded-sm border border-brand/20 bg-brand/5 p-8 text-center md:flex md:items-center md:justify-between md:text-left">
          <div>
            <h3 className="font-display text-2xl font-black">Need a custom enterprise architecture or tailored scope?</h3>
            <p className="mt-1 text-sm text-ink/75">Let’s discuss your unique business objectives, integrations, and operational workflows.</p>
          </div>
          <SiteLink href="/consultation/" className={`${btnBrand} mt-6 shrink-0 md:mt-0`}>
            Book a Strategy Call
          </SiteLink>
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <section className="bg-ink py-24 text-paper" id="portfolio">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-wider text-brand">Featured Case Studies</p>
          <h2 className={`${h2} mt-2`}>Proven Work That Delivers Commercial Results</h2>
          <p className="mt-4 text-paper/70">
            Explore authentic digital platforms engineered for clients across education, eCommerce, consulting, and media — designed for performance and scale.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-sm border border-paper/15 bg-ink-soft transition-all duration-300 hover:border-brand/50"
            >
              <SiteLink href={`/portfolio/${p.slug}/`} aria-label={`View ${p.name} case study`} className="block">
                <div className="relative overflow-hidden aspect-[4/3] bg-ink">
                  <img
                    src={p.src}
                    alt={`${p.name} digital platform by Udo Ezekiel`}
                    loading="lazy"
                    width={768}
                    height={576}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink/70 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="ghost"
                      aria-label={`View ${p.name} preview`}
                      className="grid h-11 w-11 place-items-center rounded-full bg-paper text-ink hover:bg-brand hover:text-brand-foreground cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setZoom(p.src);
                      }}
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SiteLink>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">{p.industry}</span>
                  <h3 className="mt-2 font-display text-xl font-black text-paper group-hover:text-brand transition-colors">
                    <SiteLink href={`/portfolio/${p.slug}/`}>{p.name}</SiteLink>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/75">{p.solution}</p>
                  <p className="mt-3 text-xs font-mono text-paper/50">{p.tech}</p>
                </div>

                <div className="mt-6 border-t border-paper/10 pt-4">
                  <SiteLink
                    href={`/portfolio/${p.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:underline"
                  >
                    Read Full Case Study <ArrowRight className="size-3.5" />
                  </SiteLink>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <SiteLink href="/portfolio/" className={`${btnBrand} px-8 py-4`}>
            Explore Complete Portfolio &amp; Case Studies
          </SiteLink>
        </div>
      </div>

      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setZoom(null)}
        >
          <Button variant="ghost" autoFocus aria-label="Close" className="absolute right-5 top-5 text-paper">
            <X className="h-7 w-7" />
          </Button>
          <img src={zoom} alt="Project detail view" className="max-h-[90vh] max-w-full rounded-sm object-contain" />
        </div>
      )}
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-paper py-24 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-wider text-brand">Why Partner With Us</p>
          <h2 className={`${h2} mt-2`}>A Strategic Digital Solutions Partner, Not Just a Freelance Coder</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
            We bridge the gap between creative visual design, robust software engineering, and strategic business growth. Here is why ambitious businesses choose to work with Udo Ezekiel.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPOSITIONS.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-sm border border-ink/10 bg-white p-8">
                <div className="flex size-11 items-center justify-center rounded-sm bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-black text-ink">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-ink-soft py-24 text-paper border-b border-paper/10">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-wider text-brand">Our Structured Methodology</p>
          <h2 className={`${h2} mt-2`}>A Transparent 5-Step Path to a Successful Launch</h2>
          <p className="mt-4 text-paper/70">
            No guessing, no surprises. We adhere to a proven development framework that guarantees predictable timelines, high quality, and transparent delivery.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-5">
          {PROCESS_STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative flex flex-col justify-between rounded-sm border border-paper/15 bg-ink p-6 transition-all hover:border-brand/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-black italic text-brand">{s.step}</span>
                    <div className="flex size-9 items-center justify-center rounded-full bg-paper/5 text-brand">
                      <Icon className="size-4" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-black text-paper">{s.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-paper/70">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <SiteLink href="/questionnaire/" className={`${btnBrand} px-8 py-3.5`}>
            Start With Step 1: Project Questionnaire <ArrowRight className="ml-2 size-4" />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-brand-foreground md:py-24">
      <div className="mx-auto max-w-[1222px] px-4 text-center">
        <span className="inline-block rounded-full bg-ink/15 px-4 py-1 text-xs font-black uppercase tracking-wider text-ink">
          Let’s Build Something Exceptional
        </span>
        <h2 className="mt-6 mx-auto max-w-3xl font-display text-3xl font-black md:text-5xl lg:text-[54px] leading-tight">
          Ready to Build Something That Moves Your Business Forward?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-brand-foreground/90 md:text-xl leading-relaxed">
          Let’s discuss your project and create a digital solution that supports your business goals.
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <SiteLink href="/questionnaire/" className={`${btnInk} text-base px-8 py-4`}>
            Start Your Project <ArrowRight className="ml-2 size-4" />
          </SiteLink>
          <SiteLink href="/consultation/" className="inline-flex items-center justify-center rounded-sm border-2 border-ink px-8 py-3.5 text-base font-bold text-ink hover:bg-ink hover:text-paper transition-colors">
            Book a Free Consultation
          </SiteLink>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  return (
    <section className="bg-paper py-24 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-brand">Insights &amp; Resources</p>
            <h2 className={`${h2} mt-2`}>Practical Guides for Growing Online</h2>
          </div>
          <SiteLink href="/blog/" className="text-sm font-bold text-brand hover:underline">
            View All Articles →
          </SiteLink>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p) => {
            const href = `/${p.slug}/`;
            return (
              <article key={p.slug} className="flex flex-col rounded-sm border border-ink/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <SiteLink href={href} className="block overflow-hidden bg-ink aspect-[16/10]">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                </SiteLink>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand">{p.cat}</span>
                  <h3 className="mt-2 font-display text-base font-extrabold leading-snug">
                    <SiteLink href={href} className="hover:text-brand transition-colors">
                      {p.t}
                    </SiteLink>
                  </h3>
                  <p className="mt-2 text-xs text-ink/50">{p.date}</p>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-ink/70 line-clamp-3">{p.ex}</p>
                  <SiteLink href={href} className="mt-4 text-xs font-bold text-brand hover:underline">
                    Read Article →
                  </SiteLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ink py-24 text-paper">
      <div className="mx-auto grid max-w-[1222px] gap-14 px-4 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Transparent Collaboration</p>
          <h2 className={`${h2} mt-3`}>Have Questions Before We Begin?</h2>
          <p className="mt-4 text-paper/75 leading-relaxed">
            Starting a digital project is an important commercial investment. Here are direct answers to common questions about our engagement process, pricing, timelines, and post-launch support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <SiteLink href="/consultation/" className={`${btnBrand}`}>
              Book a Free Discovery Call
            </SiteLink>
            <SiteLink href="/questionnaire/" className={`${btnOutline}`}>
              Fill Project Questionnaire
            </SiteLink>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-paper/60">
            Share this with colleagues:
            {SOCIAL_SHARE.map(({ Icon, label, href }) => (
              <SiteLink key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-paper/70 hover:text-brand">
                <Icon className="h-4 w-4" />
              </SiteLink>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-black text-paper mb-6">Frequently Asked Questions</h3>
          <div className="divide-y divide-paper/15 border-y border-paper/15">
            {FAQ.map((f, i) => (
              <div key={f.q}>
                <h4>
                  <Button
                    variant="ghost"
                    aria-expanded={open === i}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display font-bold text-base whitespace-normal hover:text-brand cursor-pointer"
                  >
                    <span>{f.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180 text-brand" : ""}`} />
                  </Button>
                </h4>
                <div id={`faq-${i}`} hidden={open !== i} className="pb-5 text-sm leading-relaxed text-paper/75">
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const social = [
    { Icon: Facebook, href: SOCIAL_PROFILES.facebook, label: "Facebook" },
    { Icon: X, href: SOCIAL_PROFILES.x, label: "X" },
    { Icon: Instagram, href: SOCIAL_PROFILES.instagram, label: "Instagram" },
    { Icon: Linkedin, href: SOCIAL_PROFILES.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-[1222px] gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={LOGO} alt="Udo Ezekiel – Digital Solutions Partner" loading="lazy" width={1744} height={380} className="h-auto w-[260px] max-w-full sm:w-[280px]" />
          <p className="mt-4 text-sm leading-relaxed text-paper/70">
            We design and develop high-performing websites, eCommerce stores, and online learning platforms that help businesses attract customers, simplify operations, and scale online.
          </p>
          <div className="mt-5 flex gap-4">
            {social.map(({ Icon, href, label }) => (
              <SiteLink key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-brand">
                <Icon className="h-4 w-4" />
              </SiteLink>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-black text-sm uppercase tracking-wider text-brand">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/75">
            {NAV.map((n) => (
              <li key={n.label}>
                <SiteLink href={n.href} className="hover:text-brand">
                  {n.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-black text-sm uppercase tracking-wider text-brand">Solutions</h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/75">
            {SERVICES_MENU.map((s) => (
              <li key={s.label}>
                <SiteLink href={s.href} className="hover:text-brand">
                  {s.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-black text-sm uppercase tracking-wider text-brand">Start a Project</h3>
          <p className="mt-4 text-sm leading-relaxed text-paper/75">
            Ready to build a digital solution that supports your business goals? Let's connect.
          </p>
          <div className="mt-5 space-y-3">
            <SiteLink href="/questionnaire/" className={`${btnBrand} w-full text-center text-xs uppercase tracking-wider`}>
              Project Questionnaire
            </SiteLink>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-sm border border-paper/20 bg-paper/5 px-4 py-2.5 text-xs font-bold text-paper hover:border-brand hover:text-brand transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1222px] flex-col gap-3 px-4 py-6 text-xs text-paper/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Udo Ezekiel. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <SiteLink href="/pay" className="font-bold text-brand hover:underline">
                Pay Now
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/terms-of-service/" className="hover:text-brand">
                Terms Of Service
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/privacy-policy/" className="hover:text-brand">
                Privacy Policy
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/refund-policy" className="hover:text-brand">
                Refund Policy
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/refer-a-friend/" className="hover:text-brand">
                Refer A Friend &amp; Earn 10%
              </SiteLink>
            </li>
          </ul>
        </div>
      </div>

      <SiteLink href="#top" aria-label="Scroll to top" className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg hover:bg-brand/90 transition-transform hover:scale-105">
        <ChevronUp className="h-5 w-5" />
      </SiteLink>
    </footer>
  );
}

export function HomeContent() {
  return (
    <>
      <Hero />
      <TrustSection />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <Blog />
      <FinalCta />
      <ContactFaq />
    </>
  );
}
