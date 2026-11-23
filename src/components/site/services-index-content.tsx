import { SiteLink } from "./site-link";
import { WHATSAPP_URL } from "./contact-details";
import { SOLUTIONS, PROCESS_STEPS } from "./home-sections";
import { Testimonials } from "./testimonials";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export function ServicesIndexContent() {
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
            / Services
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> Core Digital Capabilities
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight sm:text-5xl md:text-6xl">
            Digital Solutions Engineered for <br className="hidden sm:inline" />
            <span className="text-brand">Measurable Business Growth.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 md:text-xl">
            From bespoke corporate platforms and multi-currency eCommerce storefronts to scalable online academies, we build digital solutions that help businesses attract customers, simplify operations, and scale online.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4 space-y-16">
          {SOLUTIONS.map((s, idx) => {
            const Icon = s.icon;
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={s.id}
                className={`grid items-center gap-12 rounded-sm border border-ink/10 bg-white p-8 md:p-12 shadow-sm lg:grid-cols-2 ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={isReversed ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-sm bg-brand/10 text-brand">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-display text-sm font-black text-brand">SOLUTION {s.id}</span>
                  </div>

                  <h2 className="mt-6 font-display text-2xl font-black text-ink md:text-3xl leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink/75">
                    {s.desc}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-ink/10 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand">Business Benefits:</p>
                    <ul className="space-y-2 text-sm text-ink/75">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <SiteLink
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-brand-foreground shadow hover:bg-brand/90 transition-all"
                    >
                      View Service Scope <ArrowRight className="size-3.5" />
                    </SiteLink>
                    <SiteLink
                      href="/consultation/"
                      className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-ink hover:border-brand hover:text-brand transition-colors"
                    >
                      Discuss Project
                    </SiteLink>
                  </div>
                </div>

                <div className={`rounded-sm border border-ink/10 bg-ink p-8 text-paper ${isReversed ? "lg:col-start-1" : ""}`}>
                  <span className="text-xs font-mono uppercase text-brand">Engineering Standard</span>
                  <h3 className="mt-2 font-display text-xl font-black text-paper">Key Focus Areas:</h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-brand shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-bold">Conversion-Driven User Flow</p>
                        <p className="text-xs text-paper/70">Structured to eliminate cognitive friction and prompt action.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-brand shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-bold">Fast Mobile Loading Standards</p>
                        <p className="text-xs text-paper/70">Sub-2 second page performance on real-world cellular connections.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-brand shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-bold">2 Months Post-Launch Warranty</p>
                        <p className="text-xs text-paper/70">Full technical support, dashboard walkthroughs, and bug fixes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. PROCESS TIMELINE */}
      <section className="bg-ink-soft py-24 text-paper border-b border-paper/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-wider text-brand">Structured Methodology</p>
            <h2 className="mt-2 font-display text-3xl font-black md:text-4xl">Our 5-Step Project Framework</h2>
            <p className="mt-4 text-paper/70">Predictable milestones, transparent communication, and timely delivery.</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-5">
            {PROCESS_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="rounded-sm border border-paper/15 bg-ink p-6">
                  <span className="font-display text-3xl font-black italic text-brand">{s.step}</span>
                  <h3 className="mt-4 font-display text-lg font-black text-paper">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-paper/70">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <Testimonials />

      {/* 5. CALL TO ACTION */}
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-[1222px] px-4 text-center">
          <span className="inline-block rounded-full bg-ink/15 px-4 py-1 text-xs font-black uppercase tracking-wider text-ink">
            Start Your Engagement
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
