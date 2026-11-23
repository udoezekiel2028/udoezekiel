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
  MapPin,
  ArrowRight,
} from "lucide-react";

export function ContactContent() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Inquiry / Partnership",
    message: "",
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

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please complete all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitProjectRequest({
        data: {
          page: "contact",
          fields: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not specified",
            service: formData.service,
            message: formData.message,
          },
        },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "Failed to send message. Please try WhatsApp directly.");
      }
    } catch {
      setErrorMsg("A network error occurred. Please try again or reach out on WhatsApp.");
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
            / Contact
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> Direct Communications
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight sm:text-5xl md:text-6xl">
            Let's Talk About <br className="hidden sm:inline" />
            <span className="text-brand">Your Business Goals.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 md:text-xl">
            Whether you have a specific project ready for execution, need technical advisory, or want to explore partnership opportunities, we look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
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
                    Message Sent Successfully!
                  </h2>
                  <p className="mt-4 text-lg text-emerald-800 leading-relaxed max-w-xl mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your message has been delivered. I will respond to your email at <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "General Inquiry / Partnership",
                        message: "",
                      });
                    }}
                    className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand px-8 py-3.5 font-display text-sm font-bold text-brand-foreground hover:bg-brand/90 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="rounded-sm border border-ink/15 bg-white p-8 md:p-12 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-wider text-brand">Get in Touch</span>
                  <h2 className="mt-1 font-display text-2xl font-black md:text-3xl text-ink">
                    Send a Direct Message
                  </h2>
                  <p className="mt-2 text-sm text-ink/70">
                    Fill out the form below and we will get back to you promptly.
                  </p>

                  {errorMsg && (
                    <div className="mt-6 rounded-sm border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Your Name <span className="text-brand">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Email Address <span className="text-brand">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. sarah@company.com"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +1 (555) 000-0000"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Subject / Inquiry Type
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full rounded-sm border border-ink/20 bg-white px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none cursor-pointer"
                        >
                          <option value="New Website Project">New Website Project</option>
                          <option value="eCommerce Storefront">eCommerce Storefront</option>
                          <option value="eLearning / LMS Platform">eLearning / LMS Platform</option>
                          <option value="Landing Page Development">Landing Page Development</option>
                          <option value="General Inquiry / Partnership">General Inquiry / Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                        Your Message <span className="text-brand">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us what you have in mind..."
                        className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-8 py-3.5 font-display text-sm font-bold text-brand-foreground shadow hover:bg-brand/90 disabled:opacity-50 cursor-pointer"
                    >
                      {submitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="size-4" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {/* Direct Channels */}
              <div className="rounded-sm border border-ink/10 bg-white p-7 shadow-sm space-y-6">
                <h3 className="font-display text-xl font-black text-ink">Contact Details</h3>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-brand/10 text-brand">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="mt-0.5 text-sm font-bold text-ink hover:text-brand">
                      {CONTACT_EMAIL}
                    </a>
                    <p className="text-xs text-ink/60 mt-0.5">Replies within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-brand/10 text-brand">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Phone / WhatsApp</p>
                    <a href={CONTACT_TEL} className="mt-0.5 text-sm font-bold text-ink hover:text-brand">
                      {CONTACT_PHONE}
                    </a>
                    <p className="text-xs text-ink/60 mt-0.5">Mon – Sat, 9am – 6pm WAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-brand/10 text-brand">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Location</p>
                    <p className="mt-0.5 text-sm font-bold text-ink">Lagos, Nigeria</p>
                    <p className="text-xs text-ink/60 mt-0.5">Serving international clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* Consultation Quick Card */}
              <div className="rounded-sm border border-brand/20 bg-brand/5 p-7">
                <h4 className="font-display text-lg font-black text-ink">Need a Formal Video Call?</h4>
                <p className="mt-2 text-xs leading-relaxed text-ink/75">
                  Book a free 30-minute discovery consultation on Google Meet to discuss your digital roadmap.
                </p>
                <SiteLink
                  href="/consultation/"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-brand-foreground shadow hover:bg-brand/90 transition-all"
                >
                  Book Discovery Call <ArrowRight className="size-3.5" />
                </SiteLink>
              </div>

              {/* WhatsApp Quick Card */}
              <div className="rounded-sm border border-emerald-200 bg-emerald-50/50 p-7">
                <h4 className="font-display text-lg font-black text-emerald-950">Message on WhatsApp</h4>
                <p className="mt-2 text-xs leading-relaxed text-emerald-800">
                  Chat directly with Udo Ezekiel for immediate answers regarding project availability.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-600 px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="size-4" /> Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
