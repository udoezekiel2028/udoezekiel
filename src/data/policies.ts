// Plain-language policy content for udoezekiel.dev.
// Browser-safe: keep it to strings and the shared contact details, and both
// policy pages (and any future email or PDF) render from the same source.

import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIAL_PROFILES,
  WHATSAPP_URL,
} from "@/components/site/contact-details";

export type PolicySection = {
  id: string;
  heading: string;
  paras?: string[];
  bullets?: string[];
  after?: string;
};

export type PolicyDoc = {
  title: string;
  updated: string;
  summary: string;
  intro: string[];
  sections: PolicySection[];
};

export const POLICY_UPDATED = "October 11, 2026";

export const termsPolicy: PolicyDoc = {
  title: "Terms of Service",
  updated: POLICY_UPDATED,
  summary:
    "The ground rules for using udoezekiel.dev and for working with me on a website project.",
  intro: [
    "These terms apply whenever you use udoezekiel.dev, browsing the pages, filling in the project questionnaire, booking a free call, or asking me about a project.",
    "They are written in plain language on purpose. Where a project goes ahead, the written proposal we agree on governs the work and takes priority over anything here that conflicts with it.",
  ],
  sections: [
    {
      id: "who",
      heading: "Who I am and what this site is",
      paras: [
        `This website belongs to Udo Ezekiel, a web designer and digital-marketing consultant based in Nigeria, working with clients worldwide. I design and build corporate websites, online stores, landing pages and eLearning or membership platforms, and I help businesses plan the marketing around them.`,
        "The site is a shop window and a way to start a conversation. Nothing on it is a binding offer, and no purchase is completed here: I do not run a shopping cart and I do not take card payments on this website.",
      ],
    },
    {
      id: "using",
      heading: "Using this website",
      paras: [
        "You are welcome to read, browse and share the pages here. In return, please keep to a few basics:",
      ],
      bullets: [
        "Use your real details when you get in touch, and only send information you have the right to share.",
        "Do not copy, resell or scrape the site's content, design or portfolio images without asking first.",
        "Do not try to break, overload or interfere with the site, its forms or its database, including by sending automated or repeated submissions.",
        "Do not upload files that contain malware, and do not pretend to be someone else in a form or an email.",
        "You must be at least 18 to agree to these terms. If you are younger, ask a parent or guardian to read them and to message me on your behalf.",
      ],
      after:
        "If I ask you to stop doing something on the site and it continues, I can block your access.",
    },
    {
      id: "services",
      heading: "The services I offer",
      bullets: [
        "Corporate websites, a professional presence that builds trust.",
        "eCommerce websites, online stores with payments, inventory and delivery handled.",
        "Landing pages, single pages built to convert advertising clicks into enquiries or sales.",
        "eLearning and membership websites, course platforms, subscription areas and student logins.",
        "Digital marketing strategy, sponsored ads, email marketing, sales funnels and automations.",
        "Search engine optimisation, getting your site seen by the people who were already looking for you.",
      ],
      after:
        "Every project is scoped individually: what is included, what it costs and when it lands is set out in a written proposal. I can decline a project, and I can step away from one that is not a good fit, if I do, anything you have paid that I have not yet worked on comes back to you.",
    },
    {
      id: "enquiries",
      heading: "Enquiries, quotes and written agreements",
      paras: [
        "Send me the questionnaire or a message and you will get a confirmation email straight away, plus a reply from me, usually within one or two working days, Mondays to Fridays.",
        "A quote is a proposal: an email or document that sets out the scope, the price, the payment schedule and the timeline. It stays open for 30 days from the date on it. After that I will re-confirm it before anything starts.",
        "Nothing becomes a contract until we both agree the proposal in writing, usually by email. A verbal yes on a call does not start the clock.",
        "A free consultation call is a conversation, not a contract. Booking one does not reserve a place in my diary, your project dates are only held once a proposal is agreed and the deposit is paid.",
      ],
    },
    {
      id: "prices",
      heading: "Prices, deposits and refunds",
      paras: [
        "The prices on the Pricing page are starting points for standard packages, and they are quoted in US dollars. Domain names and hosting are not included in them, I can work with the host you already use or recommend one for you.",
        "Payment is by the method stated in your proposal, usually a deposit before work begins and the balance before the site goes live. I do not take card payments on this website.",
      ],
      bullets: [
        "If you change your mind before I start work, anything you have paid is refunded in full.",
        "Once work has begun, the part of the fee that covers work already done is kept and the rest is refunded.",
        "Costs I have already paid out for you on a third-party service, a domain, a hosting plan, a premium plugin or theme, are not refundable, because that money has already gone to someone else.",
        "If I cannot finish a project for any reason, you pay only for the work completed and the remainder comes back to you.",
      ],
      after:
        "Refunds go back by the same route they came from, normally within 14 days of the project being closed.",
    },
    {
      id: "you",
      heading: "What I need from you",
      bullets: [
        "Content, logos, images, product lists and any login details when you say they are ready, or a clear note on who is supplying them.",
        "Feedback and approvals within the times we agree. Every project has review rounds built in; a long gap pushes the launch date back by roughly the same length of time.",
        "Honest answers in the questionnaire, especially about budget, timing and what the site actually has to do. Those answers change what I recommend.",
        "Domain and hosting accounts in your own name, with your own email address on them. You should always be able to log in and move your site away from me.",
      ],
      after:
        "If a project stalls for more than 30 days through no fault of mine, I will ask whether to pause it. Work restarts when you are ready, sometimes after a fresh quote.",
    },
    {
      id: "ownership",
      heading: "Who owns what, and portfolio use",
      bullets: [
        "You own the finished website and everything you supplied, text, logos, photographs, product data.",
        "I keep ownership of my own tools: templates, code snippets, layouts and processes, which I reuse on other projects.",
        "Third-party pieces (fonts, icons, plugins, themes, stock images) stay under their own licences, and I will tell you when one needs a paid licence in your name.",
        "I like to show the work. Unless you tell me otherwise in writing, I may feature your site in my portfolio with its name, logo and screenshots, and link to the live address.",
        "If you would rather I did not, say so before we start and I will leave it off. That does not affect the price or the delivery.",
      ],
      after:
        "Full ownership of the finished site passes to you once the project is paid for in full.",
    },
    {
      id: "hostinger",
      heading: "Hostinger links and affiliate disclosure",
      paras: [
        "Some links on this site, in the domain search results, on the coupon-code page and in parts of the blog, point to Hostinger with my referral code attached. If you buy through one of those links, I may earn a commission. It costs you nothing extra: the price you pay is the same price with or without the code.",
        "I recommend Hostinger because I use it and it suits most of my projects, not because of the commission. If another host fits you better, I will say so.",
        "Buying a domain or hosting is a contract between you and Hostinger. Their terms, pricing, renewal rates and refund policy apply to that purchase. I am not their agent and I cannot change their decisions.",
      ],
    },
    {
      id: "calls",
      heading: "Free consultation calls",
      paras: [
        "The Book a Free Call button opens Calendly, a third-party scheduling service, and shows the times that are genuinely open in my diary. The session itself is a free 30-minute strategy conversation with no obligation attached.",
        "Please book only if you are serious about moving forward, and give me notice if you need to cancel so someone else can have the slot. Repeated no-shows may mean I stop offering calls.",
      ],
    },
    {
      id: "results",
      heading: "No promises about results",
      paras: [
        "My portfolio shows real websites built for real businesses. What those sites achieve for their owners depends on their market, their offer, their pricing, their budget and their consistency, none of which I control.",
        "I commit to delivering the work described in your proposal, on time and to the standard I show here. I do not promise sales, rankings, traffic or a specific return. Anyone who guarantees those is selling something else.",
      ],
    },
    {
      id: "domain-tool",
      heading: "The domain search tool",
      paras: [
        "When you search for a domain on this site, the name you type is sent to Hostinger's availability service and the answer is shown back to you here. Availability changes by the second, a name shown as available is not yours until it is actually registered.",
        "The tool checks availability only. It does not check trademarks. It is your responsibility to make sure a name you register does not step on somebody else's rights.",
      ],
    },
    {
      id: "as-is",
      heading: "The site is provided as is",
      paras: [
        "I keep this site running as carefully as I keep my clients' sites, but I cannot promise it will be uninterrupted, error-free or always available. Features may change or be removed, the domain tool, the portfolio, the blog, without notice.",
        "If something on the site breaks while you are trying to reach me, use the email address or the WhatsApp number below. Either works just as well.",
      ],
    },
    {
      id: "third-parties",
      heading: "Third-party sites and services",
      paras: [
        "This site links out to services I do not own: Hostinger, Calendly, Google, WhatsApp, Facebook, X, Instagram and LinkedIn, and the client websites in my portfolio. Once you click through, you are dealing with them under their rules. I am not responsible for their content, prices, outages or disputes.",
      ],
    },
    {
      id: "liability",
      heading: "Liability",
      paras: [
        "Where the law allows, I am not liable for indirect losses, lost profits, lost sales, lost data or damaged reputation, arising from your use of this site.",
        "For anything connected with a project, my total liability is limited to the fees you actually paid me for the part of the work in question. This does not limit liability that the law says cannot be limited, such as fraud.",
        "You agree to cover any loss I suffer because your submission, your content or your use of the site broke these terms or the law.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paras: [
        "I may update these terms as the business changes. The version live on this page when you contact me is the one that applies to that conversation, unless a signed proposal says otherwise. The last-updated date at the top changes whenever I do.",
        "A material change affecting a project already under way will be emailed to you before it applies, and you can walk away with a refund of any unused fees if you do not accept it.",
      ],
    },
    {
      id: "law",
      heading: "Governing law and settling problems",
      paras: [
        "These terms are governed by the laws of the Federal Republic of Nigeria.",
        "If something goes wrong, email me first. Most problems are a misunderstanding and are fixed in one reply. If we cannot sort it out between us, we will try mediation before either of us starts legal proceedings.",
      ],
    },
  ],
};

export const privacyPolicy: PolicyDoc = {
  title: "Privacy Policy",
  updated: POLICY_UPDATED,
  summary:
    "What udoezekiel.dev collects about you, why I collect it, and what you can ask me to do about it.",
  intro: [
    "I collect only what I need to answer you and build your website. I do not sell your information, I do not run advertising trackers on this site, and you can ask me to delete what I hold at any time.",
    "The rest of this page explains that properly, without the legal fog.",
  ],
  sections: [
    {
      id: "responsible",
      heading: "Who is responsible",
      paras: [
        "Udo Ezekiel, web designer and digital-marketing consultant based in Nigeria, runs this site and decides what information it collects and why. I work Mondays to Fridays and with clients worldwide.",
        "The quickest way to reach me about your information is the email address or WhatsApp number at the bottom of this page. Send your request from the email address you used on the site so I can match it to the right records.",
      ],
    },
    {
      id: "collect",
      heading: "What I collect, in one list",
      bullets: [
        "What you type into the questionnaire or a message, your name, email address, phone number and the details of your project.",
        "What you enter when booking a call, your name, email address and the time you pick.",
        "Your email address and a scrambled (hashed) password, if you choose to create an account here.",
        "Technical records, your IP address, browser type, the pages you visited and when.",
        "Basic visit statistics, how many people viewed a page, which site they came from, and roughly which country they were in.",
      ],
      after:
        "I do not ask for, and do not want, payment card details, passwords to your other accounts, or anything sensitive such as health information. Please keep those out of the forms.",
    },
    {
      id: "questionnaire",
      heading: "What the project questionnaire asks",
      paras: [
        "The questionnaire is deliberately thorough, because the answers change what I recommend and what I quote. It asks about:",
      ],
      bullets: [
        "You, your name, email address, phone number, and how you found me.",
        "Your business, the business or website name, the link to your current website, and the image you want to portray.",
        "The project, what you want built, the type of website, the main goal, the actions visitors should take, special features, reference sites you like, and your menu or site map.",
        "Your domain and hosting, whether you already have them, your domain name, other names you would consider, and whether you would like a recommendation.",
        "Readiness, whether your content and logo are ready, whether you can send content now, your preferred start date, and whether the site should take online payments.",
        "Files you attach, if any, logos, briefs, screenshots.",
      ],
      after:
        "Everything except a way to reach you is optional. If you would rather not answer something, leave it blank and tell me on the call.",
    },
    {
      id: "calls",
      heading: "Booking a call",
      paras: [
        "The consultation page opens Calendly's booking calendar inside this site. When you book, Calendly collects your name, email address and the time you chose, and Calendly's own privacy policy applies to what they do with that, including any cookies their calendar sets while it is open.",
        "Your booking is kept in my Calendly account so I can prepare for the conversation, and it appears on my calendar.",
      ],
    },
    {
      id: "account",
      heading: "If you create an account",
      paras: [
        "You can create an account with your email address and a password. Your password is stored as a scrambled hash, never in plain text, and your sign-in session is kept in your browser's local storage so you stay signed in between visits.",
        "Signing out, or clearing your browser's site data, ends that session. Ask me to delete your account and I will remove it along with the sign-in records that go with it.",
      ],
    },
    {
      id: "automatic",
      heading: "What is recorded automatically",
      paras: [
        "Like most websites, the server keeps a log of each visit: the IP address, the pages requested, the referring site, the browser and the time. That is used to keep the site working, to spot abuse and to understand roughly what people are reading.",
        "I also see basic, privacy-friendly visit totals, page views, referring sources and country-level location. There are no advertising cookies and no cross-site trackers behind those numbers.",
      ],
    },
    {
      id: "use",
      heading: "How I use what I collect",
      bullets: [
        "To reply to you, answer your questions and send a proposal.",
        "To prepare, quote, build and support your website.",
        "To send the confirmation email that arrives after you submit a form, and to keep a record of the conversation.",
        "To keep the site secure and to spot spam or abuse.",
        "To improve the site, which pages help people, which ones confuse them.",
      ],
      after:
        "I do not sell or rent your information, I do not build advertising profiles about you, and I do not hand your details to data brokers.",
    },
    {
      id: "basis",
      heading: "My grounds for using it",
      bullets: [
        "Your consent, you chose to send me a form, book a call or create an account. You can withdraw it at any time.",
        "Our agreement, using what you told me to deliver the project you hired me for.",
        "Legitimate interest, replying to enquiries, protecting the site from abuse, keeping ordinary business records.",
        "Legal obligation, where I must keep or produce something, such as a tax record.",
      ],
    },
    {
      id: "cookies",
      heading: "Cookies, local storage and Google Fonts",
      bullets: [
        "This site does not plant advertising or cross-site tracking cookies of its own.",
        "Sign-in sessions are held in your browser's local storage so you stay logged in. Clearing site data signs you out.",
        "The fonts are loaded from Google's servers, so Google sees your IP address when a page renders. The same is true of any embedded video or map.",
        "The Calendly calendar on the consultation page can set its own cookies while it is open, and social platforms set theirs once you click through to them.",
      ],
      after:
        "There is no consent banner because there is nothing beyond the above to consent to. If that ever changes, a banner appears here first.",
    },
    {
      id: "sharing",
      heading: "Who I share it with, and who I do not",
      bullets: [
        "The platform that hosts this site and its database, which stores submissions and accounts for me.",
        "An email delivery service, so confirmation and sign-in emails actually arrive.",
        "Calendly, for scheduling; and Hostinger when you use the domain search, only the domain name you typed goes across, nothing else about you.",
        "Your own hosting provider, domain registrar or payment gateway if your project needs one, and usually only the credentials or content needed to set it up, with your say-so.",
      ],
      after:
        "No one else. Not advertisers, not brokers, not partners. If a law-enforcement body ever asks for your data, I will tell you unless I am legally forbidden to.",
    },
    {
      id: "emails",
      heading: "Emails you will receive",
      paras: [
        "After you submit the questionnaire you get a confirmation email so you know your request reached me, and a copy comes to me. Sign-in, password-reset and verification emails are sent from noreply@udoezekiel.dev, a verified address on this domain.",
        "Replying to one of those emails reaches me. I do not send marketing blasts or newsletters unless you specifically ask me to, and one message telling me to stop is enough.",
      ],
    },
    {
      id: "retention",
      heading: "How long I keep it",
      bullets: [
        "Project requests and enquiries: up to 24 months, so a conversation you started last year can be picked up without you repeating yourself. Ask me sooner and I will delete it sooner.",
        "Project files and correspondence for a live client: for as long as we are working together, then deleted or archived on request.",
        "Account details: until you ask me to close the account.",
        "Server logs and visit statistics: a rolling few months, in aggregate form.",
      ],
      after:
        "Nothing here is kept forever. If you would like a shorter window on your own request, say so and I will set it.",
    },
    {
      id: "security",
      heading: "How I protect it",
      bullets: [
        "The site runs over HTTPS, so information travels encrypted.",
        "Submissions are visible only to me. Access to the requests area is restricted to my own account, and other visitors cannot see them.",
        "No card details are ever taken through this site.",
      ],
      after:
        "No system is perfect. If you are worried about sending something sensitive, tell me and we will find another way, and never send a password to this site.",
    },
    {
      id: "rights",
      heading: "Your rights",
      paras: ["Wherever you live, you can email me and ask to:"],
      bullets: [
        "See what I hold about you.",
        "Have anything incorrect corrected.",
        "Have everything deleted.",
        "Withdraw consent, or ask me to stop using your details.",
        "Receive a copy of what I hold in a common file format.",
        "Object to, or put a limit on, how I use your information.",
      ],
      after:
        "If you are in Nigeria, the Nigeria Data Protection Act 2023 sets out your rights. If you are in the EU, the UK or California, your local law gives you similar ones and I will honour whichever applies to you. If you are unhappy with my answer, you can complain to your local data-protection authority.",
    },
    {
      id: "children",
      heading: "Children",
      paras: [
        "This site is aimed at business owners and decision-makers, not children. I do not knowingly collect information from anyone under 16. If a parent or guardian believes a child has sent me something, email me and I will remove it.",
      ],
    },
    {
      id: "abroad",
      heading: "If you are outside Nigeria",
      paras: [
        "My hosting, database and email tools sit outside your country, so information you send is processed abroad. I keep only what is needed, share it as little as possible, and treat your rights the same wherever you are, I do not apply a lower standard because of a border.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paras: [
        "I will update this page as the site changes and revise the last-updated date at the top. If a change materially affects how I use your information, I will email you before it takes effect rather than hoping you notice.",
      ],
    },
  ],
};

export const policyContact = {
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  whatsapp: WHATSAPP_URL,
  socials: SOCIAL_PROFILES,
  hours: "Mondays to Fridays",
};
