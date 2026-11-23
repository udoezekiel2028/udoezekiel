import { useState } from "react";
import { submitProjectRequest } from "@/lib/requests.functions";
import { SiteLink } from "./site-link";
import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_TEL } from "./contact-details";
import {
  Send,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function ProjectEnquiryForm({ initialService = "Corporate Website Development" }: { initialService?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    current_website: "",
    service_needed: initialService,
    budget_range: "$1,000 – $2,500",
    timeline: "Standard (3 – 4 weeks)",
    project_description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.full_name || !formData.email) {
      setErrorMsg("Please provide your full name and valid email address.");
      return;
    }

    if (!formData.project_description) {
      setErrorMsg("Please provide a short description of your project goals.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitProjectRequest({
        data: {
          page: "questionnaire",
          fields: {
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone || "Not provided",
            company_name: formData.company_name || "Not specified",
            current_website: formData.current_website || "None / New Venture",
            service_needed: formData.service_needed,
            budget_range: formData.budget_range,
            timeline: formData.timeline,
            project_description: formData.project_description,
          },
        },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "Submission failed. Please try again or chat directly on WhatsApp.");
      }
    } catch {
      setErrorMsg("A network error occurred. Please check your connection or contact via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

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
            / Start Your Project
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> Project Intake &amp; Strategy
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight sm:text-5xl md:text-6xl">
            Let's Discuss Your Project &amp; <br className="hidden sm:inline" />
            <span className="text-brand">Build Something Exceptional.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 md:text-xl">
            Share your business goals, technical requirements, and timeline below. You will receive a direct, personal response and a tailored proposal within 24 to 48 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-bold uppercase tracking-wider text-paper/70">
            <span className="flex items-center gap-2">
              <Clock className="size-4 text-brand" /> 24-Hour Response Time
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" /> Non-Disclosure &amp; Privacy Guaranteed
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-brand" /> Direct Founder Consultation
            </span>
          </div>
        </div>
      </section>

      {/* 2. FORM & ALTERNATIVE CONTACT OPTIONS */}
      <section className="py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-4">
          <div className="grid gap-14 lg:grid-cols-[1.8fr_1fr] items-start">
            {/* Form Column */}
            <div>
              {submitted ? (
                <div className="rounded-sm border-2 border-emerald-500/40 bg-emerald-50 p-8 text-center md:p-14">
                  <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-black text-emerald-950 md:text-4xl">
                    Project Request Received!
                  </h2>
                  <p className="mt-4 text-lg text-emerald-800 leading-relaxed max-w-xl mx-auto">
                    Thank you, <strong>{formData.full_name}</strong>! I have received your project details for{" "}
                    <strong>{formData.company_name || "your business"}</strong> and will review your requirements immediately.
                  </p>

                  <div className="mt-8 rounded-sm bg-white p-6 border border-emerald-200 text-left max-w-md mx-auto text-sm text-ink/80 space-y-2.5">
                    <p className="font-bold text-ink">What happens next:</p>
                    <p className="flex items-start gap-2">
                      <span className="font-bold text-brand">1.</span>
                      I personally review your technical scope and goals.
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-bold text-brand">2.</span>
                      You will receive an email confirmation and schedule invitation.
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-bold text-brand">3.</span>
                      We meet on a 30-minute discovery call to finalize scope &amp; milestones.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-7 py-3.5 font-display text-sm font-bold text-white hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle className="size-4" /> Message on WhatsApp Now
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 rounded-sm border border-emerald-300 bg-white px-7 py-3.5 font-display text-sm font-bold text-emerald-900 hover:bg-emerald-100/50 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-sm border border-ink/15 bg-white p-8 md:p-12 shadow-sm">
                  <div className="border-b border-ink/10 pb-6">
                    <span className="text-xs font-black uppercase tracking-wider text-brand">Project Brief</span>
                    <h2 className="mt-1 font-display text-2xl font-black md:text-3xl text-ink">
                      Tell Us About Your Project
                    </h2>
                    <p className="mt-2 text-sm text-ink/70">
                      Please fill in the details below. All information is confidential and used solely to prepare your project proposal.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="mt-6 rounded-sm border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                    {/* Part 1: Contact Details */}
                    <div>
                      <h3 className="font-display text-base font-black uppercase tracking-wider text-ink/80 flex items-center gap-2">
                        <span className="flex size-6 items-center justify-center rounded-full bg-brand text-xs text-brand-foreground">
                          1
                        </span>
                        Your Contact Information
                      </h3>

                      <div className="mt-4 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                            Full Name <span className="text-brand">*</span>
                          </label>
                          <input
                            type="text"
                            name="full_name"
                            required
                            value={formData.full_name}
                            onChange={handleInputChange}
                            placeholder="e.g. David Richardson"
                            className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                            Work Email Address <span className="text-brand">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. david@company.com"
                            className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                            Phone / WhatsApp Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +1 (555) 000-0000 or +234..."
                            className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                            Company or Brand Name
                          </label>
                          <input
                            type="text"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleInputChange}
                            placeholder="e.g. Richardson Logistics LLC"
                            className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="mt-5">
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Current Website URL <span className="text-xs font-normal text-ink/50">(Optional if new project)</span>
                        </label>
                        <input
                          type="text"
                          name="current_website"
                          value={formData.current_website}
                          onChange={handleInputChange}
                          placeholder="https://example.com"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Part 2: Scope & Budget */}
                    <div className="border-t border-ink/10 pt-8">
                      <h3 className="font-display text-base font-black uppercase tracking-wider text-ink/80 flex items-center gap-2">
                        <span className="flex size-6 items-center justify-center rounded-full bg-brand text-xs text-brand-foreground">
                          2
                        </span>
                        Project Scope &amp; Commercial Details
                      </h3>

                      <div className="mt-4 grid gap-5 sm:grid-cols-3">
                        <div>
                          <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                            Service Required <span className="text-brand">*</span>
                          </label>
                          <select
                            name="service_needed"
                            value={formData.service_needed}
                            onChange={handleInputChange}
                            className="w-full rounded-sm border border-ink/20 bg-white px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none cursor-pointer"
                          >
                            <option value="Corporate Website Development">Corporate Website Development</option>
                            <option value="eCommerce Website Development">eCommerce Website Development</option>
                            <option value="eLearning & Online Academy">eLearning &amp; Online Academy (LMS)</option>
                            <option value="Landing Page & Sales Funnel">Landing Page &amp; Sales Funnel</option>
                            <option value="Website Redesign & Optimization">Website Redesign &amp; Optimization</option>
                            <option value="SEO & Growth Architecture">SEO &amp; Growth Architecture</option>
                            <option value="Custom Technical Consultation">Custom Technical Consultation</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                            Estimated Budget Range (USD)
                          </label>
                          <select
                            name="budget_range"
                            value={formData.budget_range}
                            onChange={handleInputChange}
                            className="w-full rounded-sm border border-ink/20 bg-white px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none cursor-pointer"
                          >
                            <option value="Under $1,000">Under $1,000</option>
                            <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                            <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                            <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                            <option value="$10,000+">$10,000+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                            Desired Launch Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full rounded-sm border border-ink/20 bg-white px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none cursor-pointer"
                          >
                            <option value="Urgent (1 – 2 weeks)">Urgent (1 – 2 weeks)</option>
                            <option value="Standard (3 – 4 weeks)">Standard (3 – 4 weeks)</option>
                            <option value="Flexible (1 – 2 months)">Flexible (1 – 2 months)</option>
                            <option value="Exploratory / Planning Stage">Exploratory / Planning Stage</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-5">
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Tell Us About Your Project &amp; Core Objectives <span className="text-brand">*</span>
                        </label>
                        <textarea
                          name="project_description"
                          required
                          rows={4}
                          value={formData.project_description}
                          onChange={handleInputChange}
                          placeholder="Describe your commercial objectives, features needed (e.g. checkout, booking, memberships), target audience, and any reference websites..."
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="border-t border-ink/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-xs text-ink/60 max-w-sm">
                        By submitting, you agree to our{" "}
                        <SiteLink href="/privacy-policy/" className="underline text-brand">
                          Privacy Policy
                        </SiteLink>
                        . Your details are never shared with third parties.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-8 py-4 font-display text-sm font-bold text-brand-foreground shadow hover:bg-brand/90 disabled:opacity-50 cursor-pointer shrink-0"
                      >
                        {submitting ? (
                          "Submitting Request..."
                        ) : (
                          <>
                            <Send className="size-4" /> Submit Project Inquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar Column: Immediate Booking & Direct Channels */}
            <div className="space-y-6">
              {/* Calendly Booking Card */}
              <div className="rounded-sm border border-ink/10 bg-white p-7 shadow-sm">
                <div className="flex size-11 items-center justify-center rounded-sm bg-brand/10 text-brand">
                  <Calendar className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-black text-ink">Prefer to Talk Directly?</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/70">
                  Book a free 30-minute discovery call to discuss your business requirements, timeline, and strategy face-to-face.
                </p>
                <SiteLink
                  href="/consultation/"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-paper hover:bg-ink-soft transition-colors"
                >
                  Schedule Video Call <ArrowRight className="size-4" />
                </SiteLink>
              </div>

              {/* Direct WhatsApp Channel */}
              <div className="rounded-sm border border-emerald-200 bg-emerald-50/50 p-7">
                <div className="flex size-11 items-center justify-center rounded-sm bg-emerald-100 text-emerald-600">
                  <MessageCircle className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-black text-emerald-950">WhatsApp Quick Chat</h3>
                <p className="mt-2 text-xs leading-relaxed text-emerald-800">
                  Have quick questions about feasibility, pricing, or start dates? Connect directly with Udo Ezekiel on WhatsApp.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-600 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="size-4" /> Open WhatsApp
                </a>
              </div>

              {/* Direct Email & Phone */}
              <div className="rounded-sm border border-ink/10 bg-white p-7 text-xs space-y-3.5 shadow-sm">
                <p className="font-bold uppercase tracking-wider text-ink/50">Direct Contacts</p>
                <div className="flex items-center gap-3 text-ink/80">
                  <Mail className="size-4 text-brand shrink-0" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand font-semibold">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-ink/80">
                  <Phone className="size-4 text-brand shrink-0" />
                  <a href={CONTACT_TEL} className="hover:text-brand font-semibold">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
