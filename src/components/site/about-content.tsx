import { SiteLink } from "./site-link";
import { WHATSAPP_URL } from "./contact-details";
import portraitAsset from "@/assets/udo-ezekiel-portrait.jpg.asset.json";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Target,
  Layers,
  Clock,
  Code2,
  Sparkles,
  MessageCircle,
  Building2,
  ShoppingBag,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const HERO_PORTRAIT = portraitAsset.url;

export function AboutContent() {
  const problemsSolved = [
    {
      title: "Outdated Brand Image",
      desc: "Websites that look dated or unprofessional erode buyer trust before a sales conversation even begins. We engineer clean, authoritative digital presences aligned with international benchmarks.",
    },
    {
      title: "Low Visitor-to-Lead Conversion",
      desc: "Getting traffic is meaningless if visitors bounce. We structure pages around customer psychology, clear value propositions, and frictionless conversion pathways.",
    },
    {
      title: "Sluggish Loading & Poor SEO",
      desc: "Slow sites lose 50%+ of mobile visitors. We optimize Core Web Vitals, asset delivery, and technical search structure so your site ranks higher and loads instantly.",
    },
    {
      title: "Fragmented Operations & Broken Integrations",
      desc: "From clunky payment gateways to manual order management, we automate checkouts, intake questionnaires, course access, and customer notifications.",
    },
  ];

  const whoWeServe = [
    {
      icon: Building2,
      title: "Corporate & Consulting Firms",
      desc: "Established companies, B2B service providers, and professional consultancies looking to assert market authority, attract corporate clients, and streamline client intake.",
    },
    {
      icon: ShoppingBag,
      title: "eCommerce & Retail Brands",
      desc: "Product businesses and modern retail brands needing robust storefronts with automated inventory sync, frictionless mobile checkouts, and international payment gateways.",
    },
    {
      icon: GraduationCap,
      title: "Educators & Academy Creators",
      desc: "Course creators, training institutions, and subject matter experts looking to monetize their knowledge with scalable, gated LMS portals and automated certification.",
    },
    {
      icon: Globe,
      title: "International Startups & Businesses",
      desc: "Founders and businesses in the UK, US, Canada, Europe, and Nigeria seeking elite full-stack digital execution without excessive agency overhead.",
    },
  ];

  const pillars = [
    {
      icon: Target,
      title: "Commercial Outcomes First",
      desc: "Code and design are not art projects — they are commercial assets. Every wireframe, interaction, and headline is engineered to solve a concrete business bottleneck and generate revenue.",
    },
    {
      icon: Code2,
      title: "Modern, Scalable Engineering",
      desc: "We build with modern industry standards: fast loading speeds, responsive layouts across every viewport, robust security, and clean code that is easy to maintain.",
    },
    {
      icon: ShieldCheck,
      title: "Direct, Transparent Communication",
      desc: "You collaborate directly with a senior engineer and strategist. No junior account managers, no radio silence — just clear milestones, weekly video check-ins, and proactive updates.",
    },
    {
      icon: Clock,
      title: "True Post-Launch Partnership",
      desc: "We stand firmly behind our work. Every client receives 2 months of complimentary post-launch technical support, administrative dashboard training, and continuous advisory.",
    },
  ];

  return (
    <div className="bg-paper text-ink">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(237,75,27,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="mx-auto max-w-[1222px] px-4 relative z-10">
          <p className="mb-4 text-sm text-paper/60">
            <SiteLink href="/" className="hover:text-brand">
              Home
            </SiteLink>{" "}
            / About Udo Ezekiel
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> Full-Stack Developer &amp; Digital Solutions Partner
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight sm:text-5xl md:text-6xl">
            Building Digital Experiences That <br className="hidden sm:inline" />
            <span className="text-brand">Move Businesses Forward.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 md:text-xl">
            We design and develop high-performing websites, eCommerce stores, and online learning platforms that help businesses attract customers, simplify operations, and scale online.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <SiteLink
              href="/consultation/"
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-7 py-3.5 font-display text-sm font-bold text-brand-foreground shadow hover:bg-brand/90 transition-all cursor-pointer"
            >
              Book a Strategy Call <ArrowRight className="size-4" />
            </SiteLink>
            <SiteLink
              href="/portfolio/"
              className="inline-flex items-center gap-2 rounded-sm border border-paper/20 bg-paper/5 px-7 py-3.5 font-display text-sm font-bold text-paper hover:bg-paper/10 transition-colors"
            >
              Explore Our Portfolio
            </SiteLink>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER STORY & POSITIONING */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] items-center">
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-ink shadow-2xl">
                <img
                  src={HERO_PORTRAIT}
                  alt="Udo Ezekiel – Founder & Senior Digital Solutions Consultant"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 rounded-sm border border-ink/10 bg-white p-5 shadow-sm">
                <p className="font-display text-lg font-black text-ink">Udo Ezekiel</p>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Founder &amp; Technical Lead</p>
                <p className="mt-2 text-xs text-ink/70">
                  Full-stack developer and conversion strategist with over 6 years of experience engineering high-impact digital solutions.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-brand">Who We Are</p>
              <h2 className="mt-2 font-display text-3xl font-black md:text-4xl leading-tight">
                A Strategic Digital Partner, Not Just Another Freelance Web Designer
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
                <p>
                  Most businesses don’t need another generic website template. They need a <strong>revenue-generating digital asset</strong> that communicates their unique value, builds instant market credibility, and seamlessly converts casual visitors into paying clients.
                </p>
                <p>
                  Over the past 6+ years, I have worked with growing businesses, founders, corporate institutions, and digital creators across Nigeria, the United Kingdom, the United States, and Europe to turn fragmented web presences into coherent, high-performing growth engines.
                </p>
                <p>
                  Whether engineering an interactive online academy for thousands of students, deploying an automated eCommerce storefront with international multi-currency checkouts, or structuring a B2B corporate authority platform, my approach combines <strong>technical precision</strong> with <strong>commercial strategy</strong>.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6">
                <div>
                  <span className="font-display text-3xl font-black text-brand">25+</span>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink/70">Platforms Deployed</p>
                  <p className="text-xs text-ink/60">Across retail, edtech, fintech &amp; consulting</p>
                </div>
                <div>
                  <span className="font-display text-3xl font-black text-brand">100%</span>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink/70">Verified 5-Star Reviews</p>
                  <p className="text-xs text-ink/60">From verified global &amp; Nigerian clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE SERVE */}
      <section className="bg-ink-soft py-24 text-paper border-b border-paper/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-wider text-brand">Target Audience</p>
            <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">Who We Partner With</h2>
            <p className="mt-4 text-paper/70 leading-relaxed">
              We work with ambitious organizations that value quality, strategic thinking, and reliable execution over cheap shortcuts.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="rounded-sm border border-paper/15 bg-ink p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-sm bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-black text-paper">{w.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-paper/75">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROBLEMS WE SOLVE */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-wider text-brand">Direct Commercial Impact</p>
            <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">The Problems We Solve for You</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              We identify and eliminate the friction points holding your business back online.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {problemsSolved.map((p) => (
              <div key={p.title} className="rounded-sm border border-ink/10 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-brand shrink-0" />
                  <h3 className="font-display text-xl font-black text-ink">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORKING PHILOSOPHY & PILLARS */}
      <section className="bg-paper py-24 text-ink border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-wider text-brand">Our Development Philosophy</p>
            <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">Why Clients Trust Udo Ezekiel</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              We operate with uncompromising standards to deliver enterprise-grade performance, transparency, and peace of mind.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {pillars.map((pi) => {
              const Icon = pi.icon;
              return (
                <div key={pi.title} className="flex gap-5 rounded-sm border border-ink/10 bg-white p-8">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-brand/10 text-brand">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-black text-ink">{pi.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink/75">{pi.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-[1222px] px-4 text-center">
          <span className="inline-block rounded-full bg-ink/15 px-4 py-1 text-xs font-black uppercase tracking-wider text-ink">
            Start Your Transformation
          </span>
          <h2 className="mt-6 mx-auto max-w-3xl font-display text-3xl font-black md:text-5xl leading-tight">
            Ready to Build Something That Moves Your Business Forward?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-brand-foreground/90 md:text-xl leading-relaxed">
            Let's discuss your commercial goals, technical needs, and timeline in a free 30-minute discovery call.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <SiteLink
              href="/consultation/"
              className="inline-flex items-center justify-center rounded-sm bg-ink px-8 py-4 font-display text-sm font-bold text-paper shadow hover:bg-ink-soft transition-all"
            >
              Book a Free Discovery Call <ArrowRight className="ml-2 size-4" />
            </SiteLink>
            <SiteLink
              href="/questionnaire/"
              className="inline-flex items-center justify-center rounded-sm border-2 border-ink px-8 py-3.5 font-display text-sm font-bold text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Fill Project Questionnaire
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
    </div>
  );
}
