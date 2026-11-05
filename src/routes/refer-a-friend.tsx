import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Gift,
  Share2,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  DollarSign,
  Users,
  Send,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { submitProjectRequest } from "@/lib/requests.functions";
import { pageHead } from "@/components/site/content-pages";
import { SiteLink } from "@/components/site/site-link";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/components/site/contact-details";

export const Route = createFileRoute("/refer-a-friend")({
  head: () =>
    pageHead(
      "Refer a Friend & Earn 10% | Udo Ezekiel",
      "Earn a 10% commission in USD on every website project you refer to Udo Ezekiel. Direct payouts for every successful client referral.",
    ),
  component: ReferAFriendPage,
});

const FAQS = [
  {
    q: "How much commission do I earn per referral?",
    a: "You earn a flat 10% cash reward on the total project development fee. For example, if your friend hires me for a $1,000 eCommerce website, you earn $100. For a $2,500+ corporate build or custom platform, you earn $250+. There is no cap on your earnings.",
  },
  {
    q: "When and how do I receive my payout?",
    a: "Your reward is disbursed directly in USD (via PayPal, Bank Transfer, Zelle, Wire, or Crypto) within 24 to 48 hours after your referred friend officially approves their project proposal and makes their initial deposit.",
  },
  {
    q: "Does the person I refer get any special benefit?",
    a: "Yes! Every referral receives a VIP consultation, priority project onboarding, and complimentary 2-month post-launch support and maintenance to ensure their website succeeds.",
  },
  {
    q: "Is there a limit to how many people or businesses I can refer?",
    a: "Absolutely not! You can refer as many clients, startups, businesses, or organizations as you like. Every successful project earns you an independent 10% reward.",
  },
  {
    q: "What if my friend contacts you directly without me submitting the form?",
    a: "You can either use the form below to register them first, or share your personal referral link with them. As long as they mention your name or use your link, your referral is credited to you.",
  },
];

function ReferAFriendPage() {
  // Referral link generator state
  const [referrerTag, setReferrerTag] = useState("");
  const [copied, setCopied] = useState(false);

  // Form submission state
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form fields
  const [formData, setFormData] = useState({
    referrer_name: "",
    referrer_email: "",
    referrer_phone: "",
    payout_details: "",
    friend_name: "",
    friend_email: "",
    friend_phone: "",
    friend_business: "",
    service_needed: "Corporate / Business Website",
    notes: "",
  });

  // Open FAQ items
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Referral link computation
  const cleanTag = referrerTag.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "");
  const referralLink = cleanTag
    ? `https://udoezekiel.dev/?ref=${encodeURIComponent(cleanTag)}`
    : `https://udoezekiel.dev/?ref=friend`;

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const whatsappShareText = encodeURIComponent(
    `Hey! If you need a modern, high-converting website or online store, check out Udo Ezekiel. He builds high-performing sites that help businesses grow: ${referralLink}`
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.referrer_name || !formData.referrer_email || !formData.referrer_phone) {
      setErrorMsg("Please fill in all your required contact details.");
      return;
    }

    if (!formData.friend_name || !formData.friend_email || !formData.friend_phone) {
      setErrorMsg("Please fill in your friend's contact details so I can reach out to them.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitProjectRequest({
        data: {
          page: "refer-a-friend",
          fields: {
            referrer_name: formData.referrer_name,
            referrer_email: formData.referrer_email,
            referrer_phone: formData.referrer_phone,
            payout_details: formData.payout_details || "To be provided upon project kickoff",
            friend_name: formData.friend_name,
            friend_email: formData.friend_email,
            friend_phone: formData.friend_phone,
            friend_business: formData.friend_business || "Not specified",
            service_needed: formData.service_needed,
            notes: formData.notes || "No additional notes",
            referral_code: cleanTag || "direct_form",
          },
        },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "Failed to submit referral. Please try again.");
      }
    } catch (err: unknown) {
      setErrorMsg("A network error occurred. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(237,75,27,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="mx-auto max-w-[1222px] px-5 relative z-10">
          <p className="mb-4 text-sm text-paper/60">
            <SiteLink href="/" className="hover:text-brand">
              Home
            </SiteLink>{" "}
            / Refer A Friend
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5" /> Earn 10% Cash Commission
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black italic leading-tight md:text-6xl">
            Refer a Friend. <br className="hidden sm:inline" />
            <span className="text-brand">Earn Cash</span> on Every Project.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 md:text-xl">
            Know a founder, company, or friend who needs a high-converting website, eCommerce store, or digital makeover?
            Introduce them to Udo Ezekiel and earn a <strong>10% referral reward</strong> the moment their project begins.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-3xl">
            <div className="flex items-center gap-3.5 rounded-sm border border-paper/10 bg-paper/5 p-4 backdrop-blur-sm">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                <DollarSign className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-paper/60">Commission</p>
                <p className="font-display text-lg font-black text-paper">10% of Project Fee</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-sm border border-paper/10 bg-paper/5 p-4 backdrop-blur-sm">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-paper/60">Direct Payout</p>
                <p className="font-display text-lg font-black text-paper">USD / PayPal / Bank</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-sm border border-paper/10 bg-paper/5 p-4 backdrop-blur-sm">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                <Users className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-paper/60">Referral Limit</p>
                <p className="font-display text-lg font-black text-paper">Unlimited Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="bg-paper py-20 text-ink md:py-24 border-b border-ink/10">
        <div className="mx-auto max-w-[1222px] px-5">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-wider text-brand">Simple 3-Step Process</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">How The Referral Program Works</h2>
            <p className="mt-4 text-ink/70">
              No complicated tiers or points. You connect us with someone who needs a website, and you get paid when they start.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-sm border border-ink/10 bg-ink/5 p-8 transition-all hover:border-brand/40">
              <div className="flex size-12 items-center justify-center rounded-full bg-brand font-display text-xl font-black text-brand-foreground">
                1
              </div>
              <h3 className="mt-6 font-display text-2xl font-black">Submit or Share</h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                Fill in the referral form below with your friend’s project details, or generate your personal referral link to share directly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-sm border border-ink/10 bg-ink/5 p-8 transition-all hover:border-brand/40">
              <div className="flex size-12 items-center justify-center rounded-full bg-brand font-display text-xl font-black text-brand-foreground">
                2
              </div>
              <h3 className="mt-6 font-display text-2xl font-black">We Consult &amp; Scope</h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                I connect with your friend for a free strategy consultation, understand their business goals, and deliver a tailored website proposal.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-sm border border-ink/10 bg-ink/5 p-8 transition-all hover:border-brand/40">
              <div className="flex size-12 items-center justify-center rounded-full bg-brand font-display text-xl font-black text-brand-foreground">
                3
              </div>
              <h3 className="mt-6 font-display text-2xl font-black">You Get Paid</h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                Once your referral approves the proposal and makes their initial deposit, your 10% reward is transferred straight to your bank account!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSTANT REFERRAL LINK GENERATOR */}
      <section className="bg-ink py-16 text-paper md:py-20 border-b border-paper/10">
        <div className="mx-auto max-w-[1222px] px-5">
          <div className="mx-auto max-w-3xl rounded-sm border border-paper/15 bg-ink-soft p-6 md:p-10">
            <div className="flex items-center gap-3 text-brand">
              <Share2 className="size-6" />
              <span className="text-sm font-bold uppercase tracking-wider">Quick Share Tool</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-black md:text-3xl">Generate Your Personal Referral Link</h2>
            <p className="mt-3 text-paper/70 leading-relaxed">
              Don&apos;t want to fill out a full form? Enter your name or handle below to create a trackable referral link you can send directly to your contacts or post on social media:
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="referrer-tag-input" className="block text-xs font-bold uppercase text-paper/70 mb-2">
                  Your Name or Identifier (e.g. your first name or handle)
                </label>
                <input
                  id="referrer-tag-input"
                  type="text"
                  placeholder="e.g. emeka or sarah"
                  value={referrerTag}
                  onChange={(e) => setReferrerTag(e.target.value)}
                  className="w-full rounded-sm border border-paper/20 bg-ink px-4 py-3 text-paper placeholder:text-paper/40 focus:border-brand focus:outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1 rounded-sm border border-paper/20 bg-ink px-4 py-3 font-mono text-sm text-brand overflow-x-auto whitespace-nowrap">
                  {referralLink}
                </div>
                <button
                  type="button"
                  onClick={copyReferralLink}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3 font-display text-sm font-bold text-brand-foreground transition-all hover:bg-brand/90 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="size-4" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" /> Copy Link
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <span className="text-xs font-bold uppercase text-paper/50">Share via:</span>
                <a
                  href={`https://wa.me/?text=${whatsappShareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/20 bg-ink px-3 py-1.5 text-xs font-bold text-paper transition-colors hover:border-brand hover:text-brand"
                >
                  <MessageCircle className="size-3.5 text-emerald-400" /> WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${whatsappShareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/20 bg-ink px-3 py-1.5 text-xs font-bold text-paper transition-colors hover:border-brand hover:text-brand"
                >
                  <Share2 className="size-3.5" /> Twitter / X
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent("Recommended Website Designer: Udo Ezekiel")}&body=${whatsappShareText}`}
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/20 bg-ink px-3 py-1.5 text-xs font-bold text-paper transition-colors hover:border-brand hover:text-brand"
                >
                  <Send className="size-3.5" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIRECT REFERRAL SUBMISSION FORM */}
      <section className="bg-paper py-20 text-ink md:py-28" id="referral-form">
        <div className="mx-auto max-w-[1222px] px-5">
          <div className="mx-auto max-w-4xl">
            {submitted ? (
              <div className="rounded-sm border-2 border-emerald-500/40 bg-emerald-50 p-8 text-center md:p-14">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="size-10" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-black text-emerald-950 md:text-4xl">
                  Referral Received Successfully!
                </h2>
                <p className="mt-4 text-lg text-emerald-800 leading-relaxed max-w-xl mx-auto">
                  Thank you, <strong>{formData.referrer_name}</strong>! I have recorded your referral for{" "}
                  <strong>{formData.friend_name}</strong>. I will connect with them right away to discuss their project.
                </p>
                <div className="mt-8 rounded-sm bg-white p-6 border border-emerald-200 text-left max-w-md mx-auto text-sm text-ink/80 space-y-2">
                  <p>
                    <strong>What happens next:</strong>
                  </p>
                  <p>1. I will reach out to {formData.friend_name} for a free discovery session.</p>
                  <p>2. You will receive an email confirmation of this referral.</p>
                  <p>3. Once their project begins, your 10% commission will be sent to your account!</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      referrer_name: "",
                      referrer_email: "",
                      referrer_phone: "",
                      payout_details: "",
                      friend_name: "",
                      friend_email: "",
                      friend_phone: "",
                      friend_business: "",
                      service_needed: "Corporate / Business Website",
                      notes: "",
                    });
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand px-8 py-3.5 font-display text-sm font-bold text-brand-foreground hover:bg-brand/90 cursor-pointer"
                >
                  <Gift className="size-4" /> Submit Another Referral
                </button>
              </div>
            ) : (
              <div className="rounded-sm border border-ink/15 bg-white p-8 md:p-14 shadow-sm">
                <div className="border-b border-ink/10 pb-6">
                  <span className="text-xs font-black uppercase tracking-wider text-brand">Direct Registration</span>
                  <h2 className="mt-1 font-display text-3xl font-black md:text-4xl">
                    Submit a Friend’s Project Details
                  </h2>
                  <p className="mt-2 text-ink/70">
                    Fill in both your details and your friend’s information. I’ll handle the consultation with care and keep you updated!
                  </p>
                </div>

                {errorMsg && (
                  <div className="mt-6 rounded-sm border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-10">
                  {/* Part A: Referrer Details */}
                  <div>
                    <h3 className="font-display text-xl font-black text-ink flex items-center gap-2">
                      <span className="flex size-7 items-center justify-center rounded-full bg-brand text-xs text-brand-foreground">
                        A
                      </span>
                      Your Information (The Referrer)
                    </h3>
                    <p className="mt-1 text-xs text-ink/60">
                      So I know who referred this project and where to send your reward.
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-3">
                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Your Full Name <span className="text-brand">*</span>
                        </label>
                        <input
                          type="text"
                          name="referrer_name"
                          required
                          value={formData.referrer_name}
                          onChange={handleInputChange}
                          placeholder="e.g. Tunde Adebayo"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Your Email Address <span className="text-brand">*</span>
                        </label>
                        <input
                          type="email"
                          name="referrer_email"
                          required
                          value={formData.referrer_email}
                          onChange={handleInputChange}
                          placeholder="e.g. tunde@gmail.com"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Your Phone / WhatsApp <span className="text-brand">*</span>
                        </label>
                        <input
                          type="tel"
                          name="referrer_phone"
                          required
                          value={formData.referrer_phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 08012345678"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                        Your Preferred Payout Method <span className="text-xs font-normal text-ink/50">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="payout_details"
                        value={formData.payout_details}
                        onChange={handleInputChange}
                        placeholder="e.g. PayPal (email@example.com), Bank Account, Zelle, Wire, or Crypto (or provide later)"
                        className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Part B: Friend's Details */}
                  <div className="border-t border-ink/10 pt-8">
                    <h3 className="font-display text-xl font-black text-ink flex items-center gap-2">
                      <span className="flex size-7 items-center justify-center rounded-full bg-brand text-xs text-brand-foreground">
                        B
                      </span>
                      Your Friend&apos;s Information (Who You Are Referring)
                    </h3>
                    <p className="mt-1 text-xs text-ink/60">
                      Who should I reach out to regarding their website project?
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-3">
                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Friend&apos;s Full Name <span className="text-brand">*</span>
                        </label>
                        <input
                          type="text"
                          name="friend_name"
                          required
                          value={formData.friend_name}
                          onChange={handleInputChange}
                          placeholder="e.g. Grace Okafor"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Friend&apos;s Email Address <span className="text-brand">*</span>
                        </label>
                        <input
                          type="email"
                          name="friend_email"
                          required
                          value={formData.friend_email}
                          onChange={handleInputChange}
                          placeholder="e.g. grace@company.com"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Friend&apos;s Phone / WhatsApp <span className="text-brand">*</span>
                        </label>
                        <input
                          type="tel"
                          name="friend_phone"
                          required
                          value={formData.friend_phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 08098765432"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Friend&apos;s Business or Brand Name
                        </label>
                        <input
                          type="text"
                          name="friend_business"
                          value={formData.friend_business}
                          onChange={handleInputChange}
                          placeholder="e.g. Grace Logistics Ltd"
                          className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                          Service or Website Type Needed
                        </label>
                        <select
                          name="service_needed"
                          value={formData.service_needed}
                          onChange={handleInputChange}
                          className="w-full rounded-sm border border-ink/20 bg-white px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none cursor-pointer"
                        >
                          <option value="Corporate / Business Website">Corporate / Business Website</option>
                          <option value="eCommerce Online Store">eCommerce Online Store</option>
                          <option value="Landing Page Design">Landing Page Design</option>
                          <option value="eLearning / Membership Platform">eLearning / Membership Platform</option>
                          <option value="Website Redesign / Upgrade">Website Redesign / Upgrade</option>
                          <option value="SEO & Digital Marketing">SEO &amp; Digital Marketing</option>
                          <option value="Not Sure / Consultation Required">Not Sure / Consultation Required</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="block text-xs font-bold uppercase text-ink/70 mb-1.5">
                        Additional Notes or Project Details <span className="text-xs font-normal text-ink/50">(Optional)</span>
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Tell me a bit about what they want to achieve, any reference websites, or deadlines..."
                        className="w-full rounded-sm border border-ink/20 px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="border-t border-ink/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-ink/60 max-w-md">
                      By submitting, you agree to our{" "}
                      <SiteLink href="/privacy-policy" className="underline text-brand">
                        Privacy Policy
                      </SiteLink>
                      . We respect your friend&apos;s privacy and never spam.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-8 py-3.5 font-display text-sm font-bold text-brand-foreground shadow hover:bg-brand/90 disabled:opacity-50 cursor-pointer shrink-0"
                    >
                      {submitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="size-4" /> Submit Referral
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-paper py-20 text-ink border-t border-ink/10">
        <div className="mx-auto max-w-[1222px] px-5">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <HelpCircle className="size-8 text-brand mx-auto mb-3" />
              <h2 className="font-display text-3xl font-black md:text-4xl">Referral Program FAQs</h2>
              <p className="mt-2 text-ink/70">Everything you need to know about referring clients and getting paid.</p>
            </div>

            <div className="mt-12 space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-ink/15 rounded-sm bg-white overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-display font-bold text-lg hover:text-brand transition-colors cursor-pointer"
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

      {/* 6. CALL TO ACTION FOR REFERRER */}
      <section className="bg-ink py-20 text-paper">
        <div className="mx-auto max-w-[1222px] px-5 text-center">
          <h2 className="font-display text-3xl font-black md:text-4xl">
            Need a Website for Your <span className="text-brand">Own Business</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-paper/70 md:text-lg">
            Let’s craft a high-performance website tailored specifically to your brand, sales pipeline, and business goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <SiteLink
              href="/questionnaire"
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-7 py-3.5 font-display text-sm font-bold text-brand-foreground hover:bg-brand/90"
            >
              Start Your Project <ArrowRight className="size-4" />
            </SiteLink>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-paper/20 bg-paper/5 px-7 py-3.5 font-display text-sm font-bold text-paper hover:bg-paper/10"
            >
              <MessageCircle className="size-4 text-emerald-400" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
