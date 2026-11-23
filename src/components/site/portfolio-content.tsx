import { useState } from "react";
import { SiteLink } from "./site-link";
import { WHATSAPP_URL } from "./contact-details";
import { Testimonials } from "./testimonials";
import { FEATURED_PROJECTS } from "./home-sections";
import { ArrowRight, Sparkles, MessageCircle, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PortfolioContent() {
  const [filter, setFilter] = useState("all");
  const [zoom, setZoom] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "eCommerce", label: "eCommerce Stores" },
    { id: "Education", label: "eLearning & LMS" },
    { id: "Corporate", label: "Corporate Websites" },
    { id: "Landing", label: "Landing Pages & Media" },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "eCommerce") return p.industry.toLowerCase().includes("ecommerce") || p.solution.toLowerCase().includes("ecommerce");
    if (filter === "Education") return p.industry.toLowerCase().includes("education") || p.solution.toLowerCase().includes("lms");
    if (filter === "Corporate") return p.industry.toLowerCase().includes("consulting") || p.industry.toLowerCase().includes("agency") || p.solution.toLowerCase().includes("corporate");
    if (filter === "Landing") return p.solution.toLowerCase().includes("landing") || p.industry.toLowerCase().includes("media");
    return true;
  });

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
            / Portfolio &amp; Case Studies
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> Proven Digital Execution
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight sm:text-5xl md:text-6xl">
            Selected Work Engineered for <br className="hidden sm:inline" />
            <span className="text-brand">Growth and Conversion.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 md:text-xl">
            Explore authentic digital platforms engineered for businesses in education, retail eCommerce, professional consulting, and media across Nigeria, the UK, Canada, and internationally.
          </p>
        </div>
      </section>

      {/* 2. FILTER & PORTFOLIO GRID */}
      <section className="py-20 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-b border-ink/10 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-ink/50 mr-2">Filter By:</span>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                className={`rounded-sm px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  filter === c.id
                    ? "bg-brand text-brand-foreground shadow"
                    : "bg-ink/5 text-ink/75 hover:bg-ink/10 hover:text-ink"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:border-brand/50 hover:shadow-xl"
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
                        aria-label={`View ${p.name} large`}
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
                    <h3 className="mt-2 font-display text-xl font-black text-ink group-hover:text-brand transition-colors">
                      <SiteLink href={`/portfolio/${p.slug}/`}>{p.name}</SiteLink>
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink/75">{p.solution}</p>
                    <p className="mt-3 text-xs font-mono text-ink/50">{p.tech}</p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
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
        </div>
      </section>

      {/* 3. TESTIMONIALS */}
      <Testimonials />

      {/* 4. CALL TO ACTION */}
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-[1222px] px-4 text-center">
          <span className="inline-block rounded-full bg-ink/15 px-4 py-1 text-xs font-black uppercase tracking-wider text-ink">
            Elevate Your Digital Brand
          </span>
          <h2 className="mt-6 mx-auto max-w-3xl font-display text-3xl font-black md:text-5xl leading-tight">
            Ready to Build a High-Performing Platform for Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-brand-foreground/90 md:text-xl leading-relaxed">
            Let’s discuss your project goals, technical scope, and create a digital solution that moves your business forward.
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

      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setZoom(null)}
        >
          <img src={zoom} alt="Project detail view" className="max-h-[90vh] max-w-full rounded-sm object-contain" />
        </div>
      )}
    </div>
  );
}
