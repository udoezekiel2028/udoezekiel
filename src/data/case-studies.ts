import type { CaseStudyData } from "@/components/site/case-study";
import pianogoddessAsset from "@/assets/pianogoddess-portfolio.jpg.asset.json";
import eaGlobalAsset from "@/assets/ea-global-stores-portfolio.jpg.asset.json";
import forxersAsset from "@/assets/forxers-academy-portfolio.jpg.asset.json";
import easyjapaAsset from "@/assets/easyjapa-portfolio.jpg.asset.json";
import theScoopAsset from "@/assets/the-scoop-nigeria-portfolio.jpg.asset.json";
import shakaaraahAsset from "@/assets/shakaaraah-portfolio.jpg.asset.json";

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "pianogoddess-academy": {
    slug: "pianogoddess-academy",
    title: "Pianogoddess Academy",
    subtitle: "Custom eLearning Platform, Video Lesson Portal & Digital Sheet Music Store",
    client: "Pianogoddess Academy (Oluwatobi Olaoluwa)",
    industry: "Music Education & Digital Learning",
    services: ["eLearning Website Development", "eCommerce & Digital Downloads", "LMS Architecture"],
    image: pianogoddessAsset.url,
    overview: [
      "Pianogoddess Academy is a premier music education platform founded by Oluwatobi Olaoluwa, a passionate pianist and educator dedicated to helping beginners and intermediate learners master the art of rhythm, keyboard technique, and piano performance.",
      "The academy offers structured online video courses, downloadable sheet music, and practical digital learning resources tailored to make music education accessible, engaging, and practical globally.",
    ],
    challenge:
      "The founder needed to transition from fragmented manual teaching and social media distribution into a centralized, automated digital learning ecosystem. The platform required video content protection, seamless student progression tracking, automated enrollment, and hassle-free card checkout for both local and international students.",
    objectives: [
      "Deliver a seamless, high-speed video lesson experience across smartphones, tablets, and desktops.",
      "Protect proprietary video lessons and digital sheet music downloads behind secure, authenticated student accounts.",
      "Automate course enrollment and instant access upon successful payment.",
      "Provide an intuitive student dashboard for lesson progress, quizzes, and bookmarks.",
    ],
    solution:
      "We engineered a custom LMS architecture on WordPress powered by LearnDash and WooCommerce. The system features custom-styled video lessons, modular curriculum navigation, gated member areas, and multi-channel payment integration (including Paystack for Nigerian bank cards and international card processing).",
    solutionPoints: [
      "Structured video curriculum with progress tracking",
      "Digital store for downloadable sheet music & audio resources",
      "Gated student member accounts with self-service password reset",
      "Automated enrollment confirmation & receipt delivery",
    ],
    process: [
      { step: "01", title: "Curriculum & User Flow Mapping", desc: "Structured the course hierarchy, lesson modules, and checkout funnel for beginner to advanced students." },
      { step: "02", title: "LMS & Video Architecture", desc: "Configured LearnDash with custom responsive video player wrappers and anti-piracy content security." },
      { step: "03", title: "Payment & Automated Fulfillment", desc: "Integrated Paystack and WooCommerce for instant student account provisioning upon payment." },
      { step: "04", title: "Testing & Mobile Optimization", desc: "Tested video playback on low-bandwidth mobile connections and cross-device screen sizes." },
      { step: "05", title: "Launch & Dashboard Onboarding", desc: "Trained the academy team on uploading new curriculum modules and managing student enrollments." },
    ],
    technologies: ["WordPress", "LearnDash LMS", "WooCommerce", "Paystack", "Custom CSS3/Tailwind", "Responsive Video CDN"],
    outcomes: [
      "Centralized 100% of student registrations and course enrollments automatically.",
      "Zero manual access provisioning required from the founder.",
      "Seamless cross-device learning on iOS, Android, macOS, and Windows.",
      "Immediate positive feedback from enrolling piano students worldwide.",
    ],
  },

  "ea-global-stores": {
    slug: "ea-global-stores",
    title: "EA Global Stores",
    subtitle: "High-Volume Grocery eCommerce Store & Automated Order Management",
    client: "EA Global Stores",
    industry: "eCommerce & Food Retail (Ontario, Canada)",
    services: ["eCommerce Website Development", "Shipping Automation", "Payment Integration"],
    image: eaGlobalAsset.url,
    overview: [
      "EA Global Stores is an online African grocery store based in Ontario, Canada, delivering fresh African food items, including meats, fish, spices, and authentic produce, to households across Canada.",
      "The brand was created to serve African immigrants and food enthusiasts who crave the authentic taste of home and need a reliable, convenient, and hygienic way to access culturally familiar ingredients.",
    ],
    challenge:
      "Managing perishable and heavy grocery items across Canadian postal codes required dynamic shipping fee calculation based on weight and location. The platform needed a crystal-clear, modern storefront that instilled trust, managed stock in real-time, and made repeat ordering fast and painless.",
    objectives: [
      "Create a clean, mouth-watering online grocery catalog organized into intuitive categories.",
      "Implement real-time shipping zone calculations for Canadian provinces and territories.",
      "Ensure frictionless, secure checkout accepting major credit cards and Apple Pay/Google Pay via Stripe.",
      "Provide real-time order dispatch notifications to both customers and fulfillment teams.",
    ],
    solution:
      "We developed a conversion-optimized WooCommerce platform featuring rapid product filtering, high-resolution imagery, automated cart totals with Canadian tax and shipping logic, and Stripe payment processing. The checkout flow was stripped of friction to drive high conversion and basket sizes.",
    solutionPoints: [
      "Clean visual catalog with categories (Meats, Spices, Tubers, Fresh Produce)",
      "Automated Canadian regional shipping rates & delivery rules",
      "Stripe payment gateway accepting CAD credit and debit cards",
      "Automated invoice and packing slip generation for warehouse staff",
    ],
    process: [
      { step: "01", title: "Catalog Architecture", desc: "Mapped out product categories, variants (weight, quantity), and inventory tracking rules." },
      { step: "02", title: "Conversion UI Design", desc: "Designed a clean, mobile-first shopping interface highlighting fresh quality and fast delivery." },
      { step: "03", title: "eCommerce & Payment Setup", desc: "Configured WooCommerce with Canadian tax zones, shipping tiers, and secure Stripe integration." },
      { step: "04", title: "Fulfillment Automation", desc: "Integrated automated customer SMS/email notifications and order packing slips." },
      { step: "05", title: "Launch & Performance Audit", desc: "Optimized image compression and checkout speeds to ensure sub-2-second mobile load times." },
    ],
    technologies: ["WordPress", "WooCommerce", "Stripe CAD Gateway", "Canada Shipping API", "Tailwind CSS", "WP Mail SMTP"],
    outcomes: [
      "Established EA Global Stores as a trusted household brand across the African diaspora in Canada.",
      "100% automated order intake with instant dispatch receipts.",
      "High repeat customer re-order rates enabled by saved customer accounts.",
      "Flawless handling of peak holiday ordering volumes.",
    ],
  },

  "forxers-academy": {
    slug: "forxers-academy",
    title: "ForXers Academy",
    subtitle: "High-Converting Enrollment Funnel & Trader Membership Portal",
    client: "ForXers Academy (forxers.com)",
    industry: "Financial Markets Education & Trading",
    services: ["Landing Page Design", "Conversion Rate Optimization", "Membership Architecture"],
    image: forxersAsset.url,
    overview: [
      "ForXers Academy is a modern financial education initiative designed to demystify Forex trading and provide a trusted, structured environment for aspiring traders to master market analysis and risk management.",
      "The brand's mission is to guide beginner and intermediate traders through complex currency markets with clarity, technical structure, and disciplined mentorship.",
    ],
    challenge:
      "The financial education space is crowded and often plagued by skepticism. ForXers Academy needed a platform that immediately conveyed institutional authority, established transparent proof of methodology, and converted ad traffic into qualified academy members with zero friction.",
    objectives: [
      "Engineer an authoritative, high-impact landing page that builds instant credibility.",
      "Design clear, transparent curriculum breakdowns and pricing packages.",
      "Implement a direct enrollment pipeline connecting applicants to mentorship cohorts.",
      "Integrate WhatsApp community onboarding for immediate trader engagement.",
    ],
    solution:
      "We crafted a high-converting, dark-mode landing page experience with bold typography, verified trading framework breakdowns, interactive curriculum accordions, and frictionless enrollment CTAs. The page directs qualified leads into automated onboarding sequences and community channels.",
    solutionPoints: [
      "High-authority visual identity engineered for high-intent conversion",
      "Interactive curriculum modules showing exact skills learned",
      "Direct membership checkout & instant WhatsApp cohort integration",
      "Mobile-optimized lead capture generating qualified student enquiries",
    ],
    process: [
      { step: "01", title: "Market Positioning & Copywriting", desc: "Refined the value proposition around disciplined risk management and transparent mentorship." },
      { step: "02", title: "High-Impact Visual Wireframes", desc: "Created high-contrast dark visual layouts tailored for serious financial market traders." },
      { step: "03", title: "Landing Page Development", desc: "Coded a responsive, ultra-fast single-page funnel with interactive accordions." },
      { step: "04", title: "Lead Capture & Tracking", desc: "Connected analytics, meta pixel tracking, and automated lead capture forms." },
      { step: "05", title: "Launch & Campaign Readiness", desc: "Tested landing page load times under simulated high ad concurrency." },
    ],
    technologies: ["Custom HTML5/CSS3", "JavaScript", "Lead Capture Engine", "WhatsApp Integration", "Google Analytics 4"],
    outcomes: [
      "Significantly improved click-to-lead conversion rates from paid media campaigns.",
      "Positioned ForXers Academy as a premier, credible trading education brand.",
      "Streamlined cohort onboarding into automated community groups.",
      "Eliminated manual student intake paperwork.",
    ],
  },

  "easyjapa": {
    slug: "easyjapa",
    title: "EasyJapa",
    subtitle: "Corporate Brand Authority Platform & Client Intake System",
    client: "EasyJapa",
    industry: "Immigration & Relocation Consulting",
    services: ["Corporate Website Design", "Intake Workflow Automation", "Consultation Booking"],
    image: easyjapaAsset.url,
    overview: [
      "EasyJapa was established in 2022 with a clear mission: to help everyday Africans find a transparent, legitimate path to work and live abroad without inflated costs, false promises, or scams.",
      "As international relocation becomes increasingly complex and costly, EasyJapa connects clients directly to verified job opportunities and relocation routes abroad through a network of accredited recruitment partners.",
    ],
    challenge:
      "Relocation consulting requires immense consumer trust. EasyJapa required a clean, corporate platform that clearly separated legitimate immigration pathways from predatory promises, while efficiently qualifying and sorting hundreds of daily applicant enquiries.",
    objectives: [
      "Project unquestioned institutional credibility and corporate legitimacy.",
      "Structure relocation services by destination country and eligibility criteria.",
      "Incorporate a structured intake questionnaire to pre-qualify applicants.",
      "Automate discovery consultation booking for qualified candidates.",
    ],
    solution:
      "We developed a sophisticated, corporate-grade web platform highlighting verified relocation pathways, anti-fraud guarantees, step-by-step relocation timelines, and an interactive eligibility questionnaire that routes qualified candidates directly into consultation calendars.",
    solutionPoints: [
      "Authoritative corporate layout with clear legal disclosures",
      "Interactive relocation category guide (Work Permits, Tech Visas, Study)",
      "Structured candidate pre-qualification intake workflow",
      "Direct consultation scheduling via embedded calendar integration",
    ],
    process: [
      { step: "01", title: "Information Architecture", desc: "Organized complex visa pathways into clear, user-friendly service categories." },
      { step: "02", title: "Trust & Anti-Scam UX Design", desc: "Highlighted verified partner credentials, transparent fees, and client testimonials." },
      { step: "03", title: "Interactive Intake System", desc: "Engineered candidate qualification forms to filter out unqualified requests." },
      { step: "04", title: "Calendar & Notification Integration", desc: "Connected consultation booking to advisor calendars with automated reminders." },
      { step: "05", title: "Production Deployment", desc: "Audited accessibility, mobile responsiveness, and enterprise security." },
    ],
    technologies: ["WordPress Corporate CMS", "Calendly API", "Dynamic Intake Forms", "Tailwind CSS", "Enterprise SSL"],
    outcomes: [
      "Transformed EasyJapa into one of the most recognizable and trusted relocation brands in West Africa.",
      "Reduced unqualified discovery calls by over 60% through pre-intake qualification.",
      "Enhanced lead capture and consultation booking rates.",
      "Provided 24/7 self-service information for prospective applicants.",
    ],
  },

  "the-scoop-nigeria": {
    slug: "the-scoop-nigeria",
    title: "The Scoop Nigeria",
    subtitle: "High-Traffic Newsroom, Ad Infrastructure & Editorial CMS",
    client: "The Scoop Nigeria (thescoopnigeria.com)",
    industry: "Digital Publishing & Media",
    services: ["News Portal Development", "Editorial CMS", "Technical SEO & Ad Architecture"],
    image: theScoopAsset.url,
    overview: [
      "The Scoop Nigeria is a fast-rising independent digital newsroom delivering investigative reporting, breaking news, politics, business analyses, and entertainment coverage across Nigeria and the wider African continent.",
      "The publication was conceived to rival international news benchmarks like Al Jazeera, Sky News, and BBC with rapid, credible, and visually engaging news delivery.",
    ],
    challenge:
      "News media websites face unpredictable traffic spikes when major national news breaks. The platform needed to maintain sub-second page response times under extreme concurrent traffic while supporting non-intrusive ad placements, newsletter capture, and rapid editorial publishing.",
    objectives: [
      "Engineer a modern digital newsroom layout with clear editorial hierarchy.",
      "Ensure ultra-fast load times even during sudden breaking news traffic spikes.",
      "Implement structured schema markup for Google News and search rich results.",
      "Provide high-visibility, responsive ad zones for display and sponsored monetization.",
    ],
    solution:
      "We engineered a high-concurrency editorial publishing system featuring AMP-friendly clean markup, breaking news ticker architecture, rich multimedia embedding, category filtering, and automated OpenGraph syndication for viral social sharing.",
    solutionPoints: [
      "Breaking news notification ticker and multi-category editorial grid",
      "High-speed caching and edge CDN asset distribution",
      "Standard IAB display advertising placement slots",
      "Structured Article & NewsMediaOrganization schema markup",
    ],
    process: [
      { step: "01", title: "Editorial Layout Architecture", desc: "Designed intuitive category sections: Politics, Business, Tech, Culture, and Opinion." },
      { step: "02", title: "High-Performance CMS Setup", desc: "Configured editorial workflows, author bylines, and media library optimization." },
      { step: "03", title: "Monetization & Ad Integration", desc: "Positioned responsive banner slots adhering to Google Publisher policies." },
      { step: "04", title: "Speed & Concurrency Hardening", desc: "Implemented multi-tier caching and database query optimization for high concurrency." },
      { step: "05", title: "SEO & Syndication Audit", desc: "Verified Google News indexing compliance, XML sitemaps, and social share cards." },
    ],
    technologies: ["WordPress Editorial CMS", "Edge CDN", "Google News Schema", "AMP Architecture", "Ad Placement Engine"],
    outcomes: [
      "Achieved sub-1.2 second average mobile article load times.",
      "Maintained 99.9% uptime during massive national breaking news events.",
      "Significantly expanded organic search traffic through Google News inclusion.",
      "Created sustainable digital ad revenue streams for the publication.",
    ],
  },

  "shakaaraah-llc": {
    slug: "shakaaraah-llc",
    title: "Shakaaraah LLC",
    subtitle: "Modern Corporate Showcase & Creative Portfolio Experience",
    client: "Shakaaraah LLC (shakaaraahllc.com)",
    industry: "Creative Agency & Brand Communications",
    services: ["Corporate Showcase", "Visual Portfolio Design", "Interactive UX"],
    image: shakaaraahAsset.url,
    overview: [
      "Shakaaraah LLC is a dynamic creative communications and branding agency dedicated to making brands unforgettable across web, social media, search, and mobile.",
      "Positioned as a brand's strategic 'hype team', Shakaaraah crafts memorable visual identities, marketing campaigns, and storytelling that command public attention and customer loyalty.",
    ],
    challenge:
      "As a creative agency, their own website needed to be an extraordinary testament to their creative taste, attention to detail, and modern design sensibility. Standard generic agency templates were completely unacceptable.",
    objectives: [
      "Deliver a distinctive, stylish visual design that showcases creative leadership.",
      "Showcase client campaigns with immersive visual case studies and galleries.",
      "Enable prospective enterprise clients to quickly review services and book a consultation.",
      "Ensure silky-smooth animations and interactions without compromising mobile load speed.",
    ],
    solution:
      "We crafted a sleek, sophisticated agency showcase with bold typography, interactive portfolio carousels, responsive media galleries, and clean conversion funnels that position Shakaaraah LLC at the forefront of modern brand communications.",
    solutionPoints: [
      "Avant-garde visual identity with bespoke typography pairings",
      "Interactive multi-category creative portfolio showcase",
      "Frictionless project inquiry and brief submission system",
      "Lightning-fast asset loading via optimized modern web formats",
    ],
    process: [
      { step: "01", title: "Creative Concept & Aesthetic Alignment", desc: "Developed moodboards and design directions that capture the vibrant 'Shakaaraah' flair." },
      { step: "02", title: "Interactive Prototype Design", desc: "Designed dynamic hover states, portfolio transitions, and modern typographic hierarchies." },
      { step: "03", title: "Front-End Engineering", desc: "Built responsive layouts with clean CSS animations and touch-friendly interactions." },
      { step: "04", title: "Media Optimization", desc: "Compressed high-res campaign assets into WebP formats for instant loading." },
      { step: "05", title: "Launch & Lead Testing", desc: "Verified inquiry form delivery and cross-browser rendering accuracy." },
    ],
    technologies: ["Custom Front-End Architecture", "Tailwind CSS", "Interactive WebP Galleries", "Inquiry Routing Engine"],
    outcomes: [
      "Elevated Shakaaraah LLC's reputation among top-tier corporate clients.",
      "Generated high-value creative campaign inquiries from corporate brands.",
      "Demonstrated unmistakable creative authority from the moment a visitor lands on the site.",
      "Perfect 100% mobile responsiveness across all smartphone viewports.",
    ],
  },
};
