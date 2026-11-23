import { SiteLink } from "./site-link";
import { WHATSAPP_URL } from "./contact-details";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Code2,
  Calendar,
  Building,
  Target,
  Wrench,
  Sparkles,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export type CaseStudyData = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  services: string[];
  websiteUrl?: string;
  image: string;
  overview: string[];
  challenge: string;
  objectives: string[];
  solution: string;
  solutionPoints: string[];
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
  outcomes: string[];
};

export function CaseStudyPage({ data }: { data: CaseStudyData }) {
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
            /{" "}
            <SiteLink href="/portfolio/" className="hover:text-brand">
              Portfolio
            </SiteLink>{" "}
            / {data.title}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> Case Study · {data.industry}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight sm:text-5xl md:text-6xl">
            {data.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/80 md:text-xl">
            {data.subtitle}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-3xl border-t border-paper/15 pt-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-paper/50">Client</p>
              <p className="mt-1 font-display text-base font-black text-paper">{data.client}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-paper/50">Industry</p>
              <p className="mt-1 font-display text-base font-black text-paper">{data.industry}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-paper/50">Delivered Solution</p>
              <p className="mt-1 font-display text-base font-black text-paper">{data.services.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN VISUAL SHOWCASE */}
      <section className="bg-ink-soft py-12 border-b border-paper/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="overflow-hidden rounded-sm border border-paper/15 bg-ink shadow-2xl">
            <img
              src={data.image}
              alt={`${data.title} digital platform showcase`}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY BODY: CHALLENGE, OBJECTIVES, SOLUTION */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="grid gap-14 lg:grid-cols-[1.8fr_1fr] items-start">
            <div className="space-y-14">
              {/* Client & Project Overview */}
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-brand">Project Overview</p>
                <h2 className="mt-2 font-display text-3xl font-black">About The Client &amp; Initiative</h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
                  {data.overview.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* The Challenge */}
              <div className="rounded-sm border-l-4 border-brand bg-brand/5 p-8">
                <p className="text-xs font-black uppercase tracking-wider text-brand">The Commercial Challenge</p>
                <h3 className="mt-2 font-display text-2xl font-black text-ink">Obstacles &amp; Bottlenecks</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/80">{data.challenge}</p>
              </div>

              {/* Project Objectives */}
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-brand">Core Goals</p>
                <h3 className="mt-2 font-display text-2xl font-black text-ink">Key Objectives</h3>
                <ul className="mt-6 space-y-3">
                  {data.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-ink/80">
                      <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proposed Solution & Implementation */}
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-brand">The Solution</p>
                <h3 className="mt-2 font-display text-2xl font-black text-ink">Architected Platform &amp; Approach</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/80">{data.solution}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {data.solutionPoints.map((pt, i) => (
                    <div key={i} className="rounded-sm border border-ink/10 bg-white p-4">
                      <p className="text-sm font-bold text-ink flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-brand shrink-0" />
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Process */}
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-brand">Execution Roadmap</p>
                <h3 className="mt-2 font-display text-2xl font-black text-ink">How We Built It</h3>
                <div className="mt-6 space-y-4">
                  {data.process.map((step, i) => (
                    <div key={i} className="flex gap-4 rounded-sm border border-ink/10 bg-white p-5">
                      <span className="font-display text-xl font-black text-brand shrink-0">{step.step}</span>
                      <div>
                        <h4 className="font-display text-base font-black text-ink">{step.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-ink/70">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Outcomes */}
              <div className="rounded-sm border border-ink/10 bg-ink p-8 text-paper">
                <p className="text-xs font-black uppercase tracking-wider text-brand">Commercial Outcomes</p>
                <h3 className="mt-2 font-display text-2xl font-black">Results &amp; Business Value</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {data.outcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Sparkles className="size-4 text-brand shrink-0 mt-1" />
                      <p className="text-sm leading-relaxed text-paper/85">{out}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR: TECH STACK & CTA */}
            <div className="sticky top-28 space-y-6">
              <div className="rounded-sm border border-ink/10 bg-white p-6 shadow-sm">
                <h4 className="font-display text-lg font-black text-ink">Technologies Used</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-ink/15 bg-ink/5 px-3 py-1.5 text-xs font-bold text-ink/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-sm bg-brand p-7 text-brand-foreground shadow-lg">
                <h4 className="font-display text-xl font-black">Need a Similar Solution for Your Business?</h4>
                <p className="mt-3 text-xs leading-relaxed text-brand-foreground/90">
                  Let’s build a tailored platform designed to solve your bottlenecks, capture customers, and automate your workflows.
                </p>
                <SiteLink
                  href="/consultation/"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-paper hover:bg-ink-soft transition-colors"
                >
                  Book Discovery Call <ArrowRight className="size-4" />
                </SiteLink>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-ink px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-ink hover:bg-ink hover:text-paper transition-colors"
                >
                  <MessageCircle className="size-4" /> WhatsApp Quick Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bg-ink py-20 text-paper">
        <div className="mx-auto max-w-[1222px] px-4 text-center">
          <h2 className="font-display text-3xl font-black md:text-4xl">
            Explore More <span className="text-brand">Client Work</span>
          </h2>
          <p className="mt-3 text-sm text-paper/70">
            See how we engineer digital solutions across eCommerce, corporate platforms, LMS, and conversion funnels.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <SiteLink
              href="/portfolio/"
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-7 py-3.5 font-display text-sm font-bold text-brand-foreground hover:bg-brand/90 transition-all"
            >
              Back to Full Portfolio <ArrowRight className="size-4" />
            </SiteLink>
          </div>
        </div>
      </section>
    </div>
  );
}
