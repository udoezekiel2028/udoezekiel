import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Send,
  User,
  X,
  Maximize2,
  MessageCircle,
} from "lucide-react";

import portraitAsset from "@/assets/kenneth-portrait.jpg.asset.json";
import logoAsset from "@/assets/udo-ezekiel-logo.png.asset.json";

const SITE = "https://kennethben.com";
const U = `${SITE}/wp-content/uploads`;
const HERO_IMG = `${U}/2025/08/ken-services-page.jpg`;
const HERO_PORTRAIT = portraitAsset.url;
const LOGO = logoAsset.url;

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
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: Index,
});

const SERVICES_MENU = [
  ["Corporate Websites", "/services/corporate-websites/"],
  ["ECommerce Websites", "/services/ecommerce-websites/"],
  ["ELearning Websites", "/services/elearning-websites/"],
  ["Landing Page Designs", "/services/landing-pages/"],
  ["SEO Services", "/services/seo/"],
  ["Digital Strategies", "/services/digital-marketing/"],
].map(([l, p]) => ({ label: l, href: `${SITE}${p}` }));

const NAV = [
  { label: "Home", href: "/" },
  { label: "My Services", href: `${SITE}/services/`, menu: true },
  { label: "Pricing", href: `${SITE}/services/pricing/` },
  { label: "Products", href: `${SITE}/shop/` },
  { label: "My Portfolio", href: `${SITE}/portfolio/` },
  { label: "Blog", href: `${SITE}/blog/` },
  { label: "Contact", href: `${SITE}/contact/` },
];

const SOCIAL_SHARE = [
  { Icon: Facebook, label: "Share on Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=https://kennethben.com/" },
  { Icon: X, label: "Share on X", href: "https://x.com/share?url=https://kennethben.com/" },
  { Icon: Linkedin, label: "Share on LinkedIn", href: "https://www.linkedin.com/shareArticle?mini=true&url=https://kennethben.com/" },
  { Icon: Send, label: "Share on Telegram", href: "https://telegram.me/share/url?url=https://kennethben.com/" },
];

const COLLAGE = [
  "Bible-Davids1", "CBD-Oil1", "Mapstat-Global", "ihepsut-skincare1", "Goli-Gummies1", "Bluepictures-Distribution",
  "ECommHive1", "Bluepictures-Cinema", "MichaelRalph-Consult1", "Joy-Odiete", "Utospices1", "Ethel-Women-Initiative1",
  "Ekhome-Empire1", "SLI1", "iFluence-Academy1", "Big-Teens-9ja1", "Eagles-Cathedral1", "Shakaaraah-LLC1",
  "Ngwa-Youth1", "Slloyd1", "Avaz-Kitchen",
].map((n) => `${U}/2025/01/${n}.jpg`);

const BRANDS = [
  "iFluence-Academy", "SandBros-Nigeria", "AvazTV", "Pianogodess-Academy", "Mapstat-Consult", "Ngwa-Youth", "ForXers",
  "EasyJapa", "Goli-Nigeria-1", "EAStores", "Bluepictures-Ent", "EliteWares", "FONDCUP", "Supernatural-Nation",
  "iHepsut-Skincare", "Learning-Questa", "Maulies-Care", "Bible-Davids-Ministries", "Shakaaraah-Communications",
  "Sotectonic-Blog", "The-Scoop-Nigeria", "Uto-Spices", "ViewPoint-Immigration-Services",
];

const PORTFOLIO = [
  { name: "Pianogoddess", cats: "eCommerce, Online Courses", slug: "pianogoddess-academy", img: "Pianogoddess-Academy-thumb" },
  { name: "EA Global Stores", cats: "eCommerce, Landing Pages", slug: "ea-global-stores", img: "EA-Global-Stores-thumb" },
  { name: "ForXers Academy", cats: "Landing Pages, Online Courses", slug: "forxers-academy", img: "ForXers-thumb" },
  { name: "EasyJapa", cats: "Corporate Sites", slug: "easyjapa", img: "EasyJapa-thumb" },
  { name: "The Scoop Nigeria", cats: "News Sites", slug: "the-scoop-nigeria", img: "The-Scoop-Nigeria-Thumbnail" },
  { name: "Shakaaraah LLC", cats: "Corporate Sites", slug: "shakaaraah-llc", img: "Shakaraah-thumb" },
];

const SERVICES = [
  { t: "ECommerce Websites", d: "Let's build attractive online stores that offer a smooth shopping experience to your customers, from product selection to making payment seamlesly online." },
  { t: "Corporate Websites", d: "We create modern, user-friendly websites that look great and function perfectly across all devices, designed to meet your specific business needs." },
  { t: "Landing Pages/Sales Funnel", d: "Let's enhance your website to better convert visitors into leads and sales, using strategies focused on increasing conversion and sales" },
  { t: "Search Engine Optimization", d: "Boost your site's visibility on search engines to draw more targeted traffic, using proven SEO techniques that help you rank higher." },
  { t: "Digital Marketing Strategy", d: "Improve your online efficiency with smart digital strategies, including sponsored ads, email marketing, sales funnels, & automations." },
];

const STEPS = [
  { n: "01.", t: "Complete our web design questionnaire", d: "We'll take it from here and get back to you within 48 hours!", href: `${SITE}/consultation/` },
  { n: "02.", t: "You will get a very detailed proposal", d: "We'll create a tailored proposal highlighting features & pricing", href: `${SITE}/services/pricing/` },
  { n: "03.", t: "You get a new website that works in 2025", d: "A beautiful and functional website is good for business", href: `${SITE}/portfolio/` },
];

const POSTS = [
  { cat: "Domain and Hosting", t: "Hostinger Coupon Code 2026: Get 20% Off Hosting & Domain | How to Buy Hostinger", date: "September 14, 2026", ex: "If you are planning to build a website for your business, personal brand, online store, blog, portfolio, professional service, or digit...", slug: "hostinger-coupon-code", img: `${U}/2023/03/Badge_brand_dark_640×240.webp` },
  { cat: "eCommerce, How To", t: "How to Fix WooCommerce Status Not Showing", date: "December 28, 2024", ex: "WooCommerce status not showing on dashboard when you are done with the required setup and checklist can be really annoying. And if you ...", slug: "how-to-fix-woocommerce-status-not-showing-on-dashboard", img: `${U}/2025/01/ECommHive1.jpg` },
  { cat: "Affiliate Marketing", t: "Expertnaire Review: Affiliate Marketing in Nigeria", date: "December 28, 2024", ex: "What Is Expertnaire? How To Start Affiliate Marketing in Nigeria? Those 2 questions above are frequently asked by curious and scared in...", slug: "expertnaire-review-affiliate-marketing-in-nigeria", img: `${U}/2022/04/Screenshot-2022-04-01-at-15.00.54.png` },
  { cat: "Digital Marketing", t: "Google My Business in Nigeria – How to Register", date: "December 28, 2024", ex: "In this post, we are going to be discussing about Google My Business Nigeria. If you are running a small or medium business in Africa ...", slug: "google-my-business-nigeria", img: `${U}/2022/01/Verify-business.png` },
];

const FAQ = [
  { q: "Can I just book a consultation instead?", a: (<>Yea sure, If you prefer to have a conversation about your business before you fill out the questionnaire, I am happy to get on a call with you. You can <a className="text-brand underline" href={`${SITE}/consultation/`}>book a free consultation up to 30 minutes</a>.</>) },
  { q: "Do you provide after-sales web support?", a: "Yes, after your website goes live, I will always be here to provide free support for 2 months, and showing you around the dashboard in the event that you want to modify things by yourself after the 2 month free support is over." },
  { q: "Can I modify my website design anytime?", a: "Sure, you can; your website dashboard gives you a great deal of control. However, you will be charged a fee to fix your website if you break it while attempting to edit it, and our 2 months free service does not cover any part of the site that you modify. For more detailed information on what you can and cannot modify, please contact me within the 2 months free support period." },
  { q: "Do you write content and design logo too?", a: "Yea sure, for a modest additional price. I can write your website content for all pages and design your logo if you don’t have any yet. However, you have to provide as much information as possible, including your old logo or logo idea, product prices in the case of eCommerce, as well as your company profile and background." },
];

const WHATSAPP = "https://api.whatsapp.com/send?phone=2348168303550&text=Hi%20Ken,%20I%20am%20messaging%20you%20from%20your%20website";

const btn = "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const btnBrand = `${btn} bg-brand text-brand-foreground hover:bg-brand/85`;
const btnInk = `${btn} bg-ink text-paper hover:bg-ink-soft`;
const btnOutline = `${btn} border-2 border-current hover:bg-brand hover:border-brand hover:text-brand-foreground`;
const h2 = "font-display text-3xl font-black md:text-[42px] md:leading-[1.15]";

function Header() {
  const [open, setOpen] = useState(false);
  const [svc, setSvc] = useState(false);
  return (
    <header className="bg-ink text-paper">
      <div className="mx-auto flex h-[88px] max-w-[1222px] items-center justify-between gap-4 border-b border-paper/10 px-4">
        <a href="/" aria-label="Udo Ezekiel home" className="shrink-0">
          <img src={LOGO} alt="Udo Ezekiel – helping businesses succeed online" width={1345} height={380} className="h-12 w-auto" />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) =>
            n.menu ? (
              <div key={n.label} className="group relative" onMouseLeave={() => setSvc(false)}>
                <button
                  aria-expanded={svc}
                  aria-haspopup="true"
                  onClick={() => setSvc((v) => !v)}
                  onMouseEnter={() => setSvc(true)}
                  className="flex items-center gap-1 text-[15px] font-bold hover:text-brand"
                >
                  {n.label} <ChevronDown className="h-3 w-3" />
                </button>
                {svc && (
                  <div className="absolute left-1/2 top-full z-30 w-60 -translate-x-1/2 pt-4">
                    <ul className="rounded-sm bg-paper py-3 text-ink shadow-xl">
                      <li><a href={n.href} className="block px-5 py-2 text-sm font-bold hover:text-brand">All Services</a></li>
                      {SERVICES_MENU.map((s) => (
                        <li key={s.label}><a href={s.href} className="block px-5 py-2 text-sm font-semibold hover:text-brand">{s.label}</a></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <a key={n.label} href={n.href} className={`text-[15px] font-bold hover:text-brand ${n.label === "Home" ? "text-paper/70" : ""}`}>{n.label}</a>
            ),
          )}
          <span className="h-5 w-px bg-paper/30" />
          <a href={`${SITE}/my-account/`} aria-label="My account" className="grid h-10 w-10 place-items-center rounded-full border-2 border-brand bg-paper text-ink">
            <User className="h-5 w-5" />
          </a>
          <a href={`${SITE}/my-account/`} className={`${btnBrand} px-5 py-2.5`}>My Dashboard</a>
        </nav>
        <button className="lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-b border-paper/10 px-4 pb-6 lg:hidden">
          {NAV.map((n) => (
            <div key={n.label} className="border-b border-paper/10">
              {n.menu ? (
                <>
                  <button aria-expanded={svc} onClick={() => setSvc((v) => !v)} className="flex w-full items-center justify-between py-3 font-bold">
                    {n.label} <ChevronDown className={`h-4 w-4 transition-transform ${svc ? "rotate-180" : ""}`} />
                  </button>
                  {svc && (
                    <ul className="pb-3 pl-4">
                      {SERVICES_MENU.map((s) => (<li key={s.label}><a href={s.href} className="block py-2 text-sm">{s.label}</a></li>))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={n.href} className="block py-3 font-bold">{n.label}</a>
              )}
            </div>
          ))}
          <a href={`${SITE}/my-account/`} className={`${btnBrand} mt-5 w-full`}>My Dashboard</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <img src={HERO_PORTRAIT} alt="Udo Ezekiel, website designer" className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[60%] object-cover object-top opacity-90 md:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--ink)_40%,transparent)] md:block" />
      <div className="relative mx-auto max-w-[1222px] px-4 pb-20 pt-20 md:pt-32">
        <h1 className="font-display text-[34px] font-black italic leading-[1.2] sm:text-5xl md:text-[58px]">
          Get More Customers<br />
          With A <span className="text-brand">Website Designed</span><br />
          <span className="text-brand">To Grow</span> Your Business
        </h1>
        <form action={`${SITE}/domain-search/`} method="get" className="mt-10 flex max-w-[435px] rounded-sm bg-paper p-1.5">
          <label htmlFor="domain" className="sr-only">Domain name</label>
          <input id="domain" name="domain" placeholder="Get a new domain name :)" className="min-w-0 flex-1 bg-transparent px-3 text-ink outline-none placeholder:text-ink/50" />
          <button className={`${btnBrand} gap-2 px-5 uppercase`}><Search className="h-4 w-4 sm:hidden" /><span className="hidden sm:inline">Search</span></button>
        </form>
        <div className="mt-6 flex gap-5">
          {SOCIAL_SHARE.map(({ Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-brand"><Icon className="h-4 w-4" /></a>
          ))}
        </div>
        <ul className="mt-16 flex flex-wrap gap-y-2 text-[15px] font-semibold">
          {SERVICES_MENU.map((s, i) => (
            <li key={s.label} className={i ? "border-l border-paper/30 pl-3 ml-3" : ""}>
              <a href={s.href} className="hover:text-brand">{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="grid bg-paper lg:grid-cols-[600px_1fr]">
      <div className="flex flex-col justify-center bg-brand px-6 py-16 text-brand-foreground md:px-14 lg:py-24">
        <h2 className="font-display text-2xl font-black italic leading-tight md:text-[28px]">We build mobile responsive &amp; SEO optimized websites</h2>
        <p className="mt-6 text-[15px] font-medium leading-relaxed">
          We build websites that not only look great on every device but also built to be found on Google. we focus on performance, visibility, and real results. Your website should stand out!. Let’s make sure your business isn’t the one getting left behind.
        </p>
        <a href={`${SITE}/consultation/`} className={`${btnInk} mt-8 self-start`}>Book A Free 30mins Call</a>
      </div>
      <div className="relative h-[420px] overflow-hidden lg:h-auto">
        <div className="grid grid-cols-3 gap-6 p-6 sm:grid-cols-4">
          {COLLAGE.slice(0, 12).map((src) => (
            <img key={src} src={src} alt="Udo Ezekiel - Freelance website designer in Lagos Nigeria" loading="lazy" width={300} height={420} className="aspect-[3/4] w-full border border-ink/10 object-cover object-top shadow-md" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Trusted() {
  return (
    <section className="bg-navy py-20 text-paper">
      <div className="mx-auto max-w-[1222px] px-4">
        <h2 className="text-center font-display text-3xl font-black md:text-4xl">Trusted by Forward-<br />Thinking Brands</h2>
        <div className="mt-12 grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-4 md:grid-cols-6">
          {BRANDS.map((b) => (
            <img key={b} src={`${U}/2025/07/${b}.png`} alt={b.replace(/-1$/, "").replace(/-/g, " ")} loading="lazy" className="mx-auto max-h-10 w-auto opacity-80 brightness-0 invert transition-opacity hover:opacity-100" />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-paper py-24 text-ink">
      <div className="mx-auto grid max-w-[1222px] items-center gap-12 px-4 md:grid-cols-2">
        <img src={`${U}/2025/01/admin-interface.webp`} alt="Website Designer in Lagos Nigeria" loading="lazy" className="w-full" />
        <div>
          <h2 className={h2}>Solutions with greater efficiency of work.</h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75">
            We build noteworthy websites, set up digital marketing strategies, and teach business owners like you how to maximize &amp; scale their businesses, so you can <strong className="text-ink">mind your business</strong> and let me make you look good online!
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`${SITE}/consultation/`} className={btnBrand}>Request a Quote</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`${btnOutline} text-ink`}>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [zoom, setZoom] = useState<string | null>(null);
  return (
    <section className="bg-ink py-24 text-paper">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={h2}>Take a Look at <span className="text-brand">Our Portfolio</span></h2>
          <p className="mt-4 text-paper/70">Explore some websites We’ve built for clients globally, crafted with purpose, strategy, and conversion in mind.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p) => {
            const src = `${U}/2025/07/${p.img}-768x960.jpg`;
            return (
              <article key={p.slug} className="group">
                <div className="relative overflow-hidden">
                  <img src={src} alt={`${p.name} website by Udo Ezekiel`} loading="lazy" width={768} height={960} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                    <button onClick={() => setZoom(src)} aria-label={`View ${p.name} large`} className="grid h-11 w-11 place-items-center rounded-full bg-paper text-ink hover:bg-brand hover:text-brand-foreground"><Maximize2 className="h-4 w-4" /></button>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold"><a href={`${SITE}/portfolio/${p.slug}/`} className="hover:text-brand">{p.name}</a></h3>
                <p className="text-sm text-paper/60">{p.cats}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-12 text-center"><a href={`${SITE}/portfolio/`} className={btnBrand}>See more of our work</a></div>
      </div>
      {zoom && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4" onClick={() => setZoom(null)}>
          <button autoFocus aria-label="Close" className="absolute right-5 top-5 text-paper"><X className="h-7 w-7" /></button>
          <img src={zoom.replace("-768x960", "")} alt="" className="max-h-full max-w-full" />
        </div>
      )}
    </section>
  );
}

function Services() {
  return (
    <section className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className={h2}>Services that help your business grow.</h2>
          <p className="text-ink/70">The web is an ever-changing market. We’ve helped so many business owners over the past years adapt to effectively promote their brand with these services.</p>
        </div>
        <div className="mt-14 grid border-l border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={s.t} className="border-b border-r border-ink/10 p-8 transition-colors hover:bg-ink hover:text-paper">
              <span className="font-display text-sm font-black text-brand">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-extrabold">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed opacity-75">{s.d}</p>
            </div>
          ))}
          <div className="flex items-center justify-center border-b border-r border-ink/10 bg-brand p-8">
            <a href={`${SITE}/services/`} className={btnInk}>See all services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="bg-ink-soft py-24 text-paper">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={h2}>Get A Beautiful And Functional Website in 3 Simple Steps</h2>
          <p className="mt-4 text-paper/70">We professionally design websites that convert visitors into customers <strong className="text-brand">guaranteed.</strong></p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((s) => (
            <a key={s.n} href={s.href} className="group block border-t-2 border-brand pt-6">
              <span className="font-display text-5xl font-black italic text-brand">{s.n}</span>
              <h3 className="mt-4 font-display text-xl font-extrabold group-hover:text-brand">{s.t}</h3>
              <p className="mt-2 text-paper/70">{s.d}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-[1222px] px-4">
        <h2 className={`${h2} text-center`}>Insights from my blog</h2>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p) => {
            const href = `${SITE}/${p.slug}/`;
            return (
              <article key={p.slug} className="flex flex-col bg-background shadow-sm">
                <a href={href} className="block overflow-hidden bg-ink">
                  <img src={p.img} alt={p.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform hover:scale-105" />
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand">{p.cat}</span>
                  <h3 className="mt-2 font-display text-base font-extrabold leading-snug"><a href={href} className="hover:text-brand">{p.t}</a></h3>
                  <p className="mt-2 text-xs text-ink/55">{p.date} · Posted by Udo Ezekiel</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.ex}</p>
                  <a href={href} className="mt-4 text-sm font-bold text-brand hover:underline">Continue reading</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-ink py-24 text-paper">
      <div className="mx-auto grid max-w-[1222px] gap-14 px-4 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-brand">RELAX, WE'VE GOT THIS!</p>
          <h2 className={`${h2} mt-3`}>Ready to unlock growth? Let's Talk!</h2>
          <a href={`${SITE}/consultation/`} className={`${btnBrand} mt-8`}>Tell Us About Your Business</a>
          <div className="mt-10 flex items-center gap-4 text-sm text-paper/70">
            Share to your friends
            {SOCIAL_SHARE.map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-paper hover:text-brand"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-black md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y divide-paper/15 border-y border-paper/15">
            {FAQ.map((f, i) => (
              <div key={f.q}>
                <h3>
                  <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-bold hover:text-brand">
                    {f.q}
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180 text-brand" : ""}`} />
                  </button>
                </h3>
                <div id={`faq-${i}`} hidden={open !== i} className="pb-5 text-[15px] leading-relaxed text-paper/70">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const social = [
    { Icon: Facebook, href: "https://www.facebook.com/iamkennethben", label: "Facebook" },
    { Icon: X, href: "https://x.com/iamkennethben", label: "X" },
    { Icon: Instagram, href: "https://instagram.com/iamkennethben", label: "Instagram" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/iamkennethben/", label: "LinkedIn" },
  ];
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-[1222px] gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={LOGO} alt="Udo Ezekiel" loading="lazy" width={1345} height={380} className="h-10 w-auto" />
          <p className="mt-4 text-sm text-paper/60">Freelance website designer in Lagos, Nigeria — helping businesses succeed online.</p>
          <div className="mt-5 flex gap-4">
            {social.map(({ Icon, href, label }) => (<a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-brand"><Icon className="h-4 w-4" /></a>))}
          </div>
        </div>
        <div>
          <h3 className="font-display font-extrabold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            {NAV.map((n) => (<li key={n.label}><a href={n.href} className="hover:text-brand">{n.label}</a></li>))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-extrabold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            {SERVICES_MENU.map((s) => (<li key={s.label}><a href={s.href} className="hover:text-brand">{s.label}</a></li>))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-extrabold">Let's Talk</h3>
          <p className="mt-4 text-sm text-paper/70">Have a project in mind? Send a message on WhatsApp.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`${btnBrand} mt-5 gap-2`}><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1222px] flex-col gap-3 px-4 py-6 text-xs text-paper/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Udo Ezekiel. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            <li><a href={`${SITE}/terms-of-service/`} className="hover:text-brand">Terms Of Service</a></li>
            <li><a href={`${SITE}/privacy-policy/`} className="hover:text-brand">Privacy Policy</a></li>
            <li><a href={`${SITE}/refer-a-friend/`} className="hover:text-brand">Refer A Friend</a></li>
          </ul>
        </div>
      </div>
      <a href="#top" aria-label="Scroll to top" className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg"><ChevronUp className="h-5 w-5" /></a>
    </footer>
  );
}

function Index() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Trusted />
        <About />
        <Portfolio />
        <Services />
        <Steps />
        <Blog />
        <ContactFaq />
      </main>
      <Footer />
    </div>
  );
}
