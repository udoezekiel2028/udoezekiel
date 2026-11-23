import { useState } from "react";
import { SiteLink } from "./site-link";
import { WHATSAPP_URL } from "./contact-details";
import { FEATURED_PROJECTS } from "./home-sections";
import type { ServiceDetail } from "@/data/services-data";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Wrench,
  TrendingUp,
  Sparkles,
  MessageCircle,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceDetailPage({ data }: { data: ServiceDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const relatedProjects = FEATURED_PROJECTS.filter((p) =>
    data.featuredPortfolioSlugs.includes(p.slug),
  );

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
            <SiteLink href="/services/" className="hover:text-brand">
              Services
            </SiteLink>{" "}
            / {data.title}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> {data.badge}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight sm:text-5xl md:text-6xl">
            {data.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/80 md:text-xl">
            {data.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <SiteLink
              href="/consultation/"
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-8 py-4 font-display text-sm font-bold text-brand-foreground shadow hover:bg-brand/90 transition-all cursor-pointer"
            >
              Book a Free Consultation <ArrowRight className="size-4" />
            </SiteLink>
            <SiteLink
              href="/questionnaire/"
              className="inline-flex items-center gap-2 rounded-sm border border-paper/20 bg-paper/5 px-8 py-4 font-display text-sm font-bold text-paper hover:bg-paper/10 transition-colors"
            >
              Start Project Questionnaire
            </SiteLink>
          </div>
        </div>
      </section>

      {/* 2. TARGET AUDIENCE */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-wider text-brand">Target Audience</p>
            <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">Who This Service Is Designed For</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              We specialize in engineering commercial digital platforms for businesses that prioritize market authority and measurable returns.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {data.targetAudience.map((aud, i) => (
              <div key={i} className="rounded-sm border border-ink/10 bg-white p-8 shadow-sm">
                <div className="flex size-11 items-center justify-center rounded-sm bg-brand/10 text-brand">
                  <Users className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-black text-ink">{aud.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEMS SOLVED & BUSINESS BENEFITS */}
      <section className="bg-ink-soft py-24 text-paper border-b border-paper/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Problems Solved */}
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-brand">Bottlenecks We Eliminate</p>
              <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">The Problems We Solve</h2>
              <div className="mt-8 space-y-4">
                {data.problemsSolved.map((prob, i) => (
                  <div key={i} className="rounded-sm border border-paper/15 bg-ink p-6">
                    <h3 className="font-display text-lg font-black text-paper flex items-center gap-2">
                      <Target className="size-4 text-brand shrink-0" />
                      {prob.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-paper/70">{prob.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Business Benefits */}
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-brand">Commercial Advantages</p>
              <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">Key Business Benefits</h2>
              <div className="mt-8 space-y-4">
                {data.benefits.map((ben, i) => (
                  <div key={i} className="rounded-sm border border-paper/15 bg-ink p-6">
                    <h3 className="font-display text-lg font-black text-paper flex items-center gap-2">
                      <TrendingUp className="size-4 text-brand shrink-0" />
                      {ben.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-paper/70">{ben.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES (WHAT IS INCLUDED) */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-wider text-brand">Comprehensive Scope</p>
            <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">What Is Included in Your Project</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              No hidden fees, no omitted technical steps. Here is the exact scope of deliverables you receive with every engagement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.deliverables.map((del, i) => (
              <div key={i} className="flex flex-col justify-between rounded-sm border border-ink/10 bg-white p-7 shadow-sm">
                <div>
                  <div className="flex size-10 items-center justify-center rounded-sm bg-brand/10 text-brand font-display font-black text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-black text-ink">{del.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-ink/70">{del.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RELEVANT PORTFOLIO EXAMPLES */}
      {relatedProjects.length > 0 && (
        <section className="bg-ink py-24 text-paper border-b border-paper/10">
          <div className="mx-auto max-w-[1222px] px-4">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-wider text-brand">Proven Case Studies</p>
              <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">Related Client Work</h2>
              <p className="mt-4 text-paper/70 leading-relaxed">
                Explore real projects engineered using this exact solution framework.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <article
                  key={p.slug}
                  className="group flex flex-col overflow-hidden rounded-sm border border-paper/15 bg-ink-soft"
                >
                  <SiteLink href={`/portfolio/${p.slug}/`} className="block aspect-[4/3] overflow-hidden bg-ink">
                    <img
                      src={p.src}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </SiteLink>
                  <div className="p-6 flex flex-1 flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">{p.industry}</span>
                      <h3 className="mt-2 font-display text-lg font-black text-paper group-hover:text-brand transition-colors">
                        <SiteLink href={`/portfolio/${p.slug}/`}>{p.name}</SiteLink>
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-paper/75">{p.solution}</p>
                    </div>
                    <div className="mt-6 border-t border-paper/10 pt-4">
                      <SiteLink
                        href={`/portfolio/${p.slug}/`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:underline"
                      >
                        Read Case Study <ArrowRight className="size-3.5" />
                      </SiteLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. SERVICE FAQS */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <HelpCircle className="size-8 text-brand mx-auto mb-3" />
              <h2 className="font-display text-3xl font-black md:text-4xl">Service FAQs</h2>
              <p className="mt-2 text-sm text-ink/70">Clear answers to questions regarding scope, process, and deliverables.</p>
            </div>

            <div className="mt-12 space-y-4">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-ink/15 rounded-sm bg-white overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-display font-bold text-base hover:text-brand transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`size-5 text-brand shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-ink/10 p-5 pt-3 text-sm text-ink/80 leading-relaxed bg-ink/[0.02]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CONSULTATION CTA */}
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-[1222px] px-4 text-center">
          <span className="inline-block rounded-full bg-ink/15 px-4 py-1 text-xs font-black uppercase tracking-wider text-ink">
            Start Your Project
          </span>
          <h2 className="mt-6 mx-auto max-w-3xl font-display text-3xl font-black md:text-5xl leading-tight">
            Ready to Build Something That Moves Your Business Forward?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-brand-foreground/90 md:text-xl leading-relaxed">
            Let’s discuss your project and create a digital solution that supports your business goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <SiteLink
              href="/consultation/"
              className="inline-flex items-center justify-center rounded-sm bg-ink px-8 py-4 font-display text-sm font-bold text-paper shadow hover:bg-ink-soft transition-all"
            >
              Book a Free Consultation <ArrowRight className="ml-2 size-4" />
            </SiteLink>
            <SiteLink
              href="/questionnaire/"
              className="inline-flex items-center justify-center rounded-sm border-2 border-ink px-8 py-3.5 font-display text-sm font-bold text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Start Project Questionnaire
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
