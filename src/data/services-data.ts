export type ServiceDetail = {
  slug: string;
  badge: string;
  title: string;
  headline: string;
  subtitle: string;
  targetAudience: { title: string; desc: string }[];
  problemsSolved: { title: string; desc: string }[];
  deliverables: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  featuredPortfolioSlugs: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "website-design": {
    slug: "website-design",
    badge: "Corporate & Enterprise Solutions",
    title: "Corporate Website Development",
    headline: "Bespoke Corporate Websites Engineered to Establish Market Authority & Win High-Value Clients",
    subtitle:
      "We design and develop clean, high-performing corporate websites that position your company as an indisputable industry leader, communicate complex service offerings with clarity, and capture qualified B2B leads.",
    targetAudience: [
      {
        title: "Established B2B & Corporate Firms",
        desc: "Companies, consultancies, legal practices, and logistics firms needing a commanding digital presence that instills immediate confidence in enterprise decision-makers.",
      },
      {
        title: "Growing Startups & Scaleups",
        desc: "Technology, fintech, and venture-backed companies that require an agile, modern, scalable digital platform to attract investors and institutional partners.",
      },
      {
        title: "Professional Service Providers",
        desc: "Specialized service practitioners seeking a polished, high-authority brand identity that justifies premium pricing in competitive international markets.",
      },
    ],
    problemsSolved: [
      {
        title: "Outdated Brand Image",
        desc: "A cluttered, dated website damages your credibility before you ever speak to a prospect. We build modern, elegant interfaces aligned with global design standards.",
      },
      {
        title: "Weak Lead Qualification",
        desc: "Without structured intake forms and intuitive pathways, qualified prospects leave. We engineer clear conversion paths that guide visitors to book discovery calls.",
      },
      {
        title: "Poor Mobile Responsiveness",
        desc: "Over 65% of decision-makers review websites on smartphones. We guarantee pixel-perfect responsiveness and fast performance across every screen size.",
      },
      {
        title: "Clunky Content Management",
        desc: "We build on intuitive administrative dashboards, enabling your team to edit copy, publish case studies, and upload news without needing a developer for every tweak.",
      },
    ],
    deliverables: [
      {
        title: "Bespoke Visual Architecture",
        desc: "Tailored wireframes and UI designs aligned with your brand guidelines, typography, and color palette.",
      },
      {
        title: "Mobile-First Front-End Code",
        desc: "Fast, semantic, accessible HTML5, CSS3/Tailwind, and modern responsive components.",
      },
      {
        title: "Interactive Lead Intake Funnels",
        desc: "Dynamic consultation booking calendars, structured questionnaires, and contact forms.",
      },
      {
        title: "Technical SEO & Schema Foundation",
        desc: "Structured Organization metadata, search-friendly URLs, meta tags, and Google XML sitemaps.",
      },
      {
        title: "2 Months Post-Launch Support",
        desc: "Dedicated warranty, bug fixing, administrative dashboard training, and performance monitoring.",
      },
    ],
    benefits: [
      { title: "Instant Executive Authority", desc: "Project undeniable credibility that positions your firm above competitors." },
      { title: "Higher B2B Inquiries", desc: "Convert passive website visitors into scheduled consultation calls and RFPs." },
      { title: "Full Ownership & Control", desc: "Complete ownership of your digital assets, code, and content without vendor lock-in." },
      { title: "Global Cross-Browser Speed", desc: "Sub-2 second load times across Nigeria, the UK, US, and international connections." },
    ],
    featuredPortfolioSlugs: ["easyjapa", "shakaaraah-llc", "the-scoop-nigeria"],
    faqs: [
      {
        q: "How long does a corporate website project take?",
        a: "A typical corporate website takes 2 to 4 weeks depending on the number of custom pages, integrations, and content readiness. We provide a firm timeline during the discovery phase.",
      },
      {
        q: "Can our internal team update content after launch?",
        a: "Yes. Every website includes a clean, user-friendly CMS dashboard. We provide 1-on-1 video walkthroughs and documentation so your staff can easily manage copy, images, and blog posts.",
      },
      {
        q: "Do you assist with corporate copywriting and branding?",
        a: "Yes. We offer strategic copy refinement and brand asset polishing as part of our engagement to ensure your commercial value proposition is crisp and compelling.",
      },
    ],
  },

  "ecommerce-website-designer": {
    slug: "ecommerce-website-designer",
    badge: "Digital Commerce & Retail",
    title: "eCommerce Website Development",
    headline: "High-Converting Online Stores Engineered to Sell 24/7 & Scale Smoothly",
    subtitle:
      "We design and build fast, secure eCommerce platforms that provide frictionless shopping experiences, multi-currency international payments, and automated order fulfillment.",
    targetAudience: [
      {
        title: "Direct-to-Consumer (D2C) Brands",
        desc: "Fashion, beauty, electronics, and lifestyle brands wanting to own their customer relationships and scale beyond third-party marketplace restrictions.",
      },
      {
        title: "Multi-Category Grocery & Retail Stores",
        desc: "Food, grocery, and general merchandise businesses needing dynamic inventory, weight-based shipping rates, and rapid re-order features.",
      },
      {
        title: "B2B Wholesalers & Distributors",
        desc: "Enterprises needing automated catalog ordering, bulk pricing tiers, and customized quote-to-invoice workflows.",
      },
    ],
    problemsSolved: [
      {
        title: "High Checkout Abandonment",
        desc: "Clunky checkout processes cause 70%+ of shoppers to abandon carts. We streamline checkout down to minimal clicks with guest checkout and instant payment gateways.",
      },
      {
        title: "Complex Shipping & Currency Obstacles",
        desc: "We automate dynamic shipping zone rules, postal code calculations, and multi-currency pricing for international markets (USD, CAD, GBP, NGN).",
      },
      {
        title: "Inventory Desynchronization",
        desc: "Real-time stock alerts and inventory tracking eliminate out-of-stock ordering disasters.",
      },
      {
        title: "Payment Gateway Failures",
        desc: "We integrate reliable, PCI-compliant payment gateways: Stripe, Paystack, PayPal, Apple Pay, and Google Pay with automated transaction retry logic.",
      },
    ],
    deliverables: [
      {
        title: "Conversion-Focused Storefront UI",
        desc: "Clean product catalogs, intuitive category filters, high-resolution product galleries, and customer review modules.",
      },
      {
        title: "Automated Checkout & Multi-Currency",
        desc: "Seamless integration with Stripe, Paystack, and PayPal with automated currency detection.",
      },
      {
        title: "Shipping Zone & Tax Engine",
        desc: "Automated calculation of regional taxes, flat-rate shipping, local delivery, or weight-based freight.",
      },
      {
        title: "Order & Inventory Management Dashboard",
        desc: "Centralized order dispatch, packing slips, customer accounts, and low-stock email triggers.",
      },
      {
        title: "Post-Launch ECommerce Support",
        desc: "2 months of technical warranty, checkout monitoring, and store administration onboarding.",
      },
    ],
    benefits: [
      { title: "Continuous 24/7 Revenue", desc: "Automate orders and payments around the clock while you focus on fulfillment and product development." },
      { title: "Larger Average Order Value", desc: "Strategic cross-sells, upsells, and free shipping thresholds incentivize larger cart sizes." },
      { title: "Direct Customer Ownership", desc: "Capture customer emails, phone numbers, and repeat purchase data without middleman cuts." },
      { title: "Bank-Grade Transaction Security", desc: "Full SSL encryption, tokenized card payments, and fraud prevention protocols." },
    ],
    featuredPortfolioSlugs: ["ea-global-stores", "pianogoddess-academy"],
    faqs: [
      {
        q: "Which eCommerce platform do you recommend?",
        a: "We primarily build on WooCommerce (WordPress) for total customization, zero recurring sales commissions, and complete data ownership. For specific modular needs, we also engineer custom headless commerce architectures.",
      },
      {
        q: "Can I accept payments from international customers?",
        a: "Yes. We configure multi-currency gateways accepting US Dollars, Euros, British Pounds, Canadian Dollars, and Nigerian Naira via Stripe, PayPal, Apple Pay, and Paystack.",
      },
      {
        q: "How are shipping fees calculated?",
        a: "We configure automated rules based on customer location, order weight, order total, or fixed delivery zones, so the exact rate is calculated automatically at checkout.",
      },
    ],
  },

  lms: {
    slug: "lms",
    badge: "Knowledge Commerce & EdTech",
    title: "eLearning & Online Academy Development",
    headline: "Scalable Learning Management Systems (LMS) That Monetize Knowledge Globally",
    subtitle:
      "We design and build secure online academies with multimedia course players, gated student portals, automated enrollment, interactive quizzes, and branded certificate generation.",
    targetAudience: [
      {
        title: "Online Educators & Course Creators",
        desc: "Experts, consultants, and creators ready to transition from renting third-party platforms (like Teachable or Kajabi) to owning their independent academy with zero transaction fees.",
      },
      {
        title: "Training Institutes & Academies",
        desc: "Professional certification schools, music academies, language institutions, and trade schools requiring structured cohorts and student progression.",
      },
      {
        title: "Corporate Training Departments",
        desc: "Enterprises seeking a private, branded employee onboarding portal with compliance tracking and completion reporting.",
      },
    ],
    problemsSolved: [
      {
        title: "High Platform Subscription Costs",
        desc: "Third-party LMS platforms charge steep monthly fees plus cuts of every course sale. We build self-hosted academies you own outright with 0% platform commissions.",
      },
      {
        title: "Video Piracy & Content Theft",
        desc: "We implement secure, domain-restricted video embedding and anti-download protections to safeguard your intellectual property.",
      },
      {
        title: "Manual Student Onboarding",
        desc: "Students receive immediate account creation, course enrollment, and welcome emails the instant their payment succeeds.",
      },
      {
        title: "High Dropout Rates",
        desc: "Distraction-free lesson players, progress bars, automated congratulatory emails, and completion certificates keep students engaged.",
      },
    ],
    deliverables: [
      {
        title: "Custom Course Player & Curriculum Architecture",
        desc: "Structured modules, lessons, downloadable resources, video embeds, and lesson completion checkmarks.",
      },
      {
        title: "Automated Student Enrollment & Gating",
        desc: "Instant course access upon card payment or bank transfer with self-service account management.",
      },
      {
        title: "Quizzes, Assignments & Certificates",
        desc: "Automated testing with pass/fail thresholds and dynamic PDF certificate generation featuring student names and completion dates.",
      },
      {
        title: "Instructor & Administration Dashboard",
        desc: "Real-time analytics on student progression, revenue reports, enrollment lists, and quiz scores.",
      },
      {
        title: "2 Months Dedicated LMS Support",
        desc: "Course setup walkthroughs, video upload guidance, and ongoing technical maintenance.",
      },
    ],
    benefits: [
      { title: "Zero Platform Commissions", desc: "Keep 100% of your course revenue without third-party percentages." },
      { title: "Global Knowledge Monetization", desc: "Sell courses to students across Nigeria, the UK, US, Canada, and worldwide in any currency." },
      { title: "Automated Student Journey", desc: "From purchase to graduation and certification without requiring manual admin effort." },
      { title: "Complete Brand Experience", desc: "Students learn on your own domain with your branding, building lasting brand equity." },
    ],
    featuredPortfolioSlugs: ["pianogoddess-academy", "forxers-academy"],
    faqs: [
      {
        q: "Where will my course videos be hosted?",
        a: "We integrate specialized high-speed, privacy-first video hosting solutions (such as Bunny.net, Vimeo Pro, or Wistia) that prevent unauthorized downloading and keep your site blazing fast.",
      },
      {
        q: "Can I offer one-time payments and recurring memberships?",
        a: "Yes. You can sell individual courses for a one-time fee, bundle multiple courses together, or charge monthly/annual recurring subscription memberships.",
      },
      {
        q: "How many students can the LMS handle?",
        a: "Our LMS architecture is built to scale from your first 10 students to tens of thousands of active learners with optimized caching and database indexing.",
      },
    ],
  },

  "landing-page-designer-in-lagos-nigeria": {
    slug: "landing-page-designer-in-lagos-nigeria",
    badge: "Conversion Rate Optimization",
    title: "Landing Pages & Conversion Funnels",
    headline: "High-Impact Landing Pages Engineered to Turn Ad Clicks into Paying Customers",
    subtitle:
      "We design and code laser-focused, single-page sales funnels built specifically to maximize Return on Ad Spend (ROAS) from Google, Meta, and LinkedIn marketing campaigns.",
    targetAudience: [
      {
        title: "Performance Advertisers & Growth Teams",
        desc: "Companies spending money on Google Ads, Facebook/Instagram ads, or TikTok and needing high-converting destination pages.",
      },
      {
        title: "Product Launches & Event Promoters",
        desc: "Businesses launching a new product line, conference, cohort, or webinar that requires an aggressive lead capture engine.",
      },
      {
        title: "Service Providers Seeking Direct Enquiries",
        desc: "Agencies, consultants, and clinics looking for high-intent booking pages without navigation distractions.",
      },
    ],
    problemsSolved: [
      {
        title: "Wasted Advertising Spend",
        desc: "Sending paid traffic to a generic homepage is burning money. We build singular, focused landing pages where every element drives toward one clear conversion action.",
      },
      {
        title: "Slow Loading Times Destroying Conversion",
        desc: "A 1-second delay in page load causes a 20% drop in conversions. We engineer ultra-lightweight pages that load in under 1 second on mobile networks.",
      },
      {
        title: "Weak Value Propositions",
        desc: "We write and structure conversion copy highlighting customer pain points, transformation, social proof, and clear calls-to-action.",
      },
      {
        title: "Blind Analytics & Poor Tracking",
        desc: "We implement Meta Pixel, Google Tag Manager, and custom conversion events so you know your exact cost per lead.",
      },
    ],
    deliverables: [
      {
        title: "Conversion-Focused Visual Layout",
        desc: "High-contrast hero section, benefit grids, interactive FAQs, and sticky CTA triggers.",
      },
      {
        title: "Persuasive Direct-Response Copywriting",
        desc: "Clear headline hierarchy, customer pain-point storytelling, and objection-handling FAQs.",
      },
      {
        title: "Lightning-Fast Front-End Architecture",
        desc: "Pre-rendered, lightweight assets optimized for instant mobile rendering on 4G/5G.",
      },
      {
        title: "Full Tracking & Analytics Integration",
        desc: "Meta Pixel, Google Analytics 4, Tag Manager, and conversion API webhook routing.",
      },
      {
        title: "CRM & Email Automated Routing",
        desc: "Leads automatically flow to your email, WhatsApp, Google Sheets, or CRM instantly.",
      },
    ],
    benefits: [
      { title: "Lower Cost Per Acquisition (CPA)", desc: "Higher conversion rates translate directly to lower advertising costs per customer." },
      { title: "Distraction-Free Focus", desc: "No extraneous links or headers — visitors either convert or leave, maximizing focus." },
      { title: "Rapid Deployment", desc: "Get high-converting landing pages live in 5 to 7 business days to validate campaigns quickly." },
      { title: "Clean Tracking Data", desc: "Accurate conversion events allow ad algorithms to optimize targeting effectively." },
    ],
    featuredPortfolioSlugs: ["forxers-academy", "shakaaraah-llc"],
    faqs: [
      {
        q: "What is the turnaround time for a landing page?",
        a: "A complete custom conversion landing page typically takes 5 to 7 business days from brief alignment to launch.",
      },
      {
        q: "Can you write the copy for the page?",
        a: "Yes. Direct-response conversion copywriting is included. We structure the messaging around your ideal customer's core desires and objections.",
      },
      {
        q: "Can the landing page integrate with WhatsApp and email marketing tools?",
        a: "Yes. We can route leads directly into WhatsApp chats, Mailchimp, HubSpot, or any webhook-compatible CRM.",
      },
    ],
  },

  seo: {
    slug: "seo",
    badge: "Organic Search & Inbound Traffic",
    title: "SEO & Digital Growth Solutions",
    headline: "Technical SEO & Search Architecture Built to Capture High-Intent Commercial Buyers",
    subtitle:
      "We implement technical search engine optimization, semantic structured schema, and content architecture that position your website at the top of Google for buyers ready to purchase.",
    targetAudience: [
      {
        title: "Companies Relying on Expensive Paid Ads",
        desc: "Businesses wanting to reduce long-term customer acquisition costs by building sustainable organic inbound search traffic.",
      },
      {
        title: "Local Businesses & Service Providers",
        desc: "Companies wanting to dominate local geographic searches (e.g. Lagos, Nigeria, UK regional) and Google Maps profiles.",
      },
      {
        title: "eCommerce Stores & Content Platforms",
        desc: "Catalog platforms seeking high product search visibility, rich snippets, and Google Merchant indexing.",
      },
    ],
    problemsSolved: [
      {
        title: "Invisible to Ready-to-Buy Prospects",
        desc: "If your website doesn't appear on Google page 1 for commercial search queries, competitors get your clients. We optimize for commercial intent keywords.",
      },
      {
        title: "Technical Indexing Errors",
        desc: "Crawl errors, missing canonical tags, broken redirects, and slow speeds prevent Google from indexing your valuable pages.",
      },
      {
        title: "Lack of Rich Snippets & Structured Data",
        desc: "Without Schema markup, search engines can't display your star ratings, FAQs, product prices, or corporate credentials.",
      },
      {
        title: "Generic Keyword Stuffing",
        desc: "We avoid old black-hat techniques and focus on high-authority topical depth that search engine algorithms reward.",
      },
    ],
    deliverables: [
      {
        title: "Comprehensive Technical SEO Audit",
        desc: "Full crawl inspection to eliminate 404s, redirect chains, duplicate tags, and indexation blockers.",
      },
      {
        title: "Schema.org Structured Data Implementation",
        desc: "Advanced JSON-LD schema for Organization, ProfessionalService, Product, FAQ, Article, and LocalBusiness.",
      },
      {
        title: "On-Page Semantic Optimization",
        desc: "Optimized title tags, meta descriptions, H1-H3 hierarchy, image alt text, and internal link silos.",
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        desc: "Asset minification, caching headers, modern image compression, and edge CDN routing.",
      },
      {
        title: "Google Search Console & Analytics Setup",
        desc: "XML sitemaps, robots.txt directives, and verified Search Console property indexing.",
      },
    ],
    benefits: [
      { title: "Sustainable Inbound Pipeline", desc: "Receive organic inquiries every week without paying for every single click." },
      { title: "Higher Commercial Credibility", desc: "Ranking at the top of Google signals market leadership and reliability." },
      { title: "Compounding Long-Term ROI", desc: "Unlike ads that stop when your budget ends, organic rankings continue delivering clients." },
      { title: "International & Local Reach", desc: "Target clients in specific geographic markets (Nigeria, UK, US, Worldwide)." },
    ],
    featuredPortfolioSlugs: ["the-scoop-nigeria", "easyjapa", "ea-global-stores"],
    faqs: [
      {
        q: "How long does it take to see SEO results?",
        a: "Technical SEO and on-page fixes often show indexation and ranking improvements within 3 to 6 weeks. Competitive organic growth builds over 3 to 6 months.",
      },
      {
        q: "Is SEO included when you build a website?",
        a: "Yes! Every website we develop includes built-in technical SEO: clean semantic code, Core Web Vitals optimization, XML sitemaps, schema markup, and meta tag architecture.",
      },
      {
        q: "Do you guarantee #1 ranking on Google?",
        a: "No honest developer can guarantee a #1 rank because Google's algorithm is proprietary. However, we follow proven Google Search Central best practices that consistently produce top search visibility.",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    badge: "Growth Strategy & Marketing Funnels",
    title: "Digital Marketing Strategy",
    headline: "Full-Funnel Digital Marketing Strategies Built for Predictable Customer Acquisition",
    subtitle:
      "We design cohesive digital marketing funnels combining paid traffic, lead nurturing email sequences, conversion tracking, and marketing automations.",
    targetAudience: [
      {
        title: "Scaling Businesses",
        desc: "Companies with an existing product or service that need a systematic customer acquisition funnel.",
      },
      {
        title: "eCommerce Brands",
        desc: "Online stores wanting to increase customer lifetime value through abandoned cart emails and targeted campaigns.",
      },
      {
        title: "B2B Professional Services",
        desc: "Consultants, law firms, and agencies needing automated lead qualification and appointment scheduling.",
      },
    ],
    problemsSolved: [
      {
        title: "Unpredictable Inquiries & Revenue",
        desc: "Relying on word-of-mouth is inconsistent. We build automated funnels that generate qualified inbound leads systematically.",
      },
      {
        title: "Leads Slipping Through the Cracks",
        desc: "We automate instant lead follow-ups via email, WhatsApp notifications, and calendar bookings so no prospect waits.",
      },
      {
        title: "Unclear Marketing ROI",
        desc: "We implement end-to-end attribution tracking so you know exactly which campaigns generate revenue.",
      },
      {
        title: "Manual Repetitive Marketing Tasks",
        desc: "We connect Make.com and Zapier automations to sync form submissions, CRM records, and customer communications.",
      },
    ],
    deliverables: [
      {
        title: "Full-Funnel Acquisition Strategy",
        desc: "Mapping traffic sources, landing pages, lead magnets, and conversion milestones.",
      },
      {
        title: "Automated Email & WhatsApp Nurture Flows",
        desc: "Pre-written, automated welcome sequences, case study drops, and consultation triggers.",
      },
      {
        title: "Conversion Tracking & Analytics Dashboard",
        desc: "Google Analytics 4, Meta Pixel, and custom dashboard reporting setup.",
      },
      {
        title: "Workflow Automation with Make.com",
        desc: "Direct integration between web forms, Google Sheets, CRMs, and email dispatchers.",
      },
      {
        title: "Consultation & Strategic Advisory",
        desc: "Ongoing guidance to optimize campaign performance and lift conversion rates.",
      },
    ],
    benefits: [
      { title: "Systematic Lead Generation", desc: "A predictable engine for capturing and nurturing commercial opportunities." },
      { title: "Time Saved Through Automation", desc: "Eliminate manual data entry and repetitive follow-ups." },
      { title: "Higher Customer Lifetime Value", desc: "Keep past customers engaged and coming back with automated retention sequences." },
      { title: "Clear Revenue Attribution", desc: "Make marketing budget decisions based on cold, hard commercial data." },
    ],
    featuredPortfolioSlugs: ["forxers-academy", "pianogoddess-academy", "easyjapa"],
    faqs: [
      {
        q: "What tools do you integrate with?",
        a: "We work with Make.com, Zapier, Mailchimp, ConvertKit, HubSpot, Meta Ads Manager, Google Ads, and WhatsApp Business API.",
      },
      {
        q: "Can you optimize our existing website and marketing flows?",
        a: "Yes. We audit your existing funnels, identify drop-off points, and implement targeted fixes to lift conversion.",
      },
      {
        q: "How do we get started?",
        a: "Book a 30-minute discovery consultation where we evaluate your current setup and propose a custom growth roadmap.",
      },
    ],
  },
};
