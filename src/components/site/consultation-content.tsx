import { SiteLink } from "./site-link";
import { WHATSAPP_URL, CONTACT_EMAIL } from "./contact-details";
import {
  Clock,
  Video,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/zikeyrehtse/website-consultation?hide_gdpr_banner=1&primary_color=ed4b1b";

export function ConsultationContent() {
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
            / Book a Free Strategy Consultation
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> 30-Minute Video Discovery Session
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight sm:text-5xl md:text-6xl">
            Schedule a Free 30-Minute <br className="hidden sm:inline" />
            <span className="text-brand">Strategy Consultation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 md:text-xl">
            Let's evaluate your business objectives, review your current digital bottleneck, explore technical architecture options, and outline a realistic roadmap.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-bold uppercase tracking-wider text-paper/70">
            <span className="flex items-center gap-2">
              <Clock className="size-4 text-brand" /> 30 Minutes · 100% Free
            </span>
            <span className="flex items-center gap-2">
              <Video className="size-4 text-brand" /> Google Meet / Zoom
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" /> Zero Sales Pressure
            </span>
          </div>
        </div>
      </section>

      {/* 2. CALENDAR EMBED & AGENDA */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="grid gap-14 lg:grid-cols-[1.8fr_1fr] items-start">
            {/* Calendly iFrame Column */}
            <div className="overflow-hidden rounded-sm border border-ink/15 bg-white shadow-sm">
              <div className="border-b border-ink/10 p-6 bg-ink text-paper flex items-center justify-between">
                <div>
                  <h2 className="font-display text-lg font-black text-paper">Select a Date &amp; Time</h2>
                  <p className="text-xs text-paper/70">Times automatically adapt to your local timezone.</p>
                </div>
                <Calendar className="size-5 text-brand" />
              </div>
              <div className="w-full min-h-[680px]">
                <iframe
                  src={CALENDLY_URL}
                  title="Schedule a consultation with Udo Ezekiel"
                  className="w-full h-[720px] border-0"
                />
              </div>
            </div>

            {/* Sidebar Column: What We Cover */}
            <div className="space-y-6">
              <div className="rounded-sm border border-ink/10 bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-wider text-brand">Discovery Agenda</p>
                <h3 className="mt-2 font-display text-xl font-black text-ink">What We Will Cover:</h3>

                <ul className="mt-6 space-y-4 text-sm text-ink/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-ink">1. Your Commercial Objectives</p>
                      <p className="text-xs text-ink/65 mt-0.5">What specific business problem must this platform solve?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-ink">2. Technical &amp; Integration Needs</p>
                      <p className="text-xs text-ink/65 mt-0.5">Payment gateways, user accounts, CRM routing, and custom features.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-ink">3. Timeline &amp; Budget Feasibility</p>
                      <p className="text-xs text-ink/65 mt-0.5">Transparent milestone projections and fixed-scope pricing options.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-ink">4. Immediate Q&amp;A</p>
                      <p className="text-xs text-ink/65 mt-0.5">Ask anything regarding development methodology, tools, and past projects.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Alternative: Project Questionnaire */}
              <div className="rounded-sm border border-brand/20 bg-brand/5 p-7">
                <h4 className="font-display text-lg font-black text-ink">Need a Formal Written Quote?</h4>
                <p className="mt-2 text-xs leading-relaxed text-ink/75">
                  If you already have your requirements documented, fill out our project brief questionnaire to receive a detailed scope proposal.
                </p>
                <SiteLink
                  href="/questionnaire/"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-brand-foreground shadow hover:bg-brand/90 transition-all"
                >
                  Fill Project Questionnaire <ArrowRight className="size-3.5" />
                </SiteLink>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="rounded-sm border border-emerald-200 bg-emerald-50/50 p-7">
                <h4 className="font-display text-lg font-black text-emerald-950">Prefer Immediate Messaging?</h4>
                <p className="mt-2 text-xs leading-relaxed text-emerald-800">
                  Connect directly with Udo Ezekiel on WhatsApp for quick technical inquiries or urgent scheduling.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-600 px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="size-4" /> Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
