export interface ServiceFeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceBenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  number: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;

  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    video: string;
    videoAlt: string;
  };

  overview: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };

  features: {
    heading: string;
    description: string;
    items: ServiceFeatureItem[];
  };

  benefits: {
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
    items: ServiceBenefitItem[];
  };

  process: {
    heading: string;
    description: string;
    steps: ServiceProcessStep[];
  };

  audience: {
    description: string;
    items: string[];
  };

  faq: {
    heading: string;
    items: ServiceFAQItem[];
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const services: ServiceData[] = [
  // =========================================================
  // 01 — GOOGLE MAP SERVICES
  // =========================================================
  {
    slug: "google-map-services",
    number: "01",
    navTitle: "Google Map Services",
    metaTitle: "Google Map Services in India | Unicorn Nexus 360",
    metaDescription:
      "Accurate pin placement, Google Business Profile optimization and ongoing map visibility management so nearby customers find your business first.",

    hero: {
      eyebrow: "LOCAL VISIBILITY",
      title: "Google Map Services",
      tagline: "Own Your Spot on the Map.",
      description:
        "From accurate pin placement to full profile optimization, we make sure customers searching nearby find your business first — not a competitor three streets away.",
      video: "/services/google-maps/google-maps-business-visibility-india.mp4",
      videoAlt: "Business location pinned on Google Maps with a navigation route",
    },

    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Local Search Starts on the Map, Not the Website",
      description:
        "Before a customer ever opens your website, they've usually already seen your business on Google Maps — your rating, your distance, your photos, your hours. An incomplete or inaccurate listing loses that customer before they even reach your site. We audit, correct and strengthen your map presence so it works as hard as your storefront does.",
      image: "/services/google-maps/google-maps-services-india.png",
      imageAlt: "Team reviewing Google Business Profile listing data on a laptop",
    },

    features: {
      heading: "What Our Google Map Services Cover",
      description:
        "Every part of your Google Maps presence, handled — from accurate location setup and profile optimization to immersive 360° virtual tours that help customers experience your business before they visit.",

      items: [
        {
          icon: "⌖",
          title: "Accurate Pin & Location Setup",
          description:
            "We correct misplaced pins and verify service areas so directions actually lead customers to your door, not somewhere down the street.",
        },

        {
          icon: "◎",
          title: "360° Virtual Tour Services",
          description:
            "Create an immersive 360° virtual tour of your office, showroom, retail store, restaurant, hotel or commercial space and showcase your business experience directly through Google Maps.",
        },

        {
          icon: "✦",
          title: "Complete Profile Optimization",
          description:
            "Business category, hours, attributes and contact details filled out fully — the details Google needs to understand your business and customers need to trust it.",
        },

        {
          icon: "◧",
          title: "Photo & Visual Management",
          description:
            "High-quality, regularly updated photos and visual content that make your Google Business Profile look active, professional and trustworthy.",
        },

        {
          icon: "★",
          title: "Review Generation Strategy",
          description:
            "A structured, ethical approach to encouraging genuine customer reviews and responding to them professionally.",
        },

        {
          icon: "◎",
          title: "Multi-Location Management",
          description:
            "For businesses with more than one branch, we keep every Google Maps and Business Profile listing accurate and consistent.",
        },

        {
          icon: "▤",
          title: "Visibility Tracking & Reporting",
          description:
            "Regular reporting on map views, search appearances and direction requests, so you can see the actual impact of your local visibility.",
        },
      ],
    },

    benefits: {
      heading: "Why Businesses Choose Our Map Services",
      description: "A stronger map presence isn't just about looking good — it directly affects how many nearby customers actually walk through your door.",
      image: "/services/google-maps/google-maps-local-seo-india.png",
      imageAlt: "Local business owner reviewing improved Google Map s visibility results",
      items: [
        { icon: "↗", title: "Higher Local Discoverability", description: "Show up more often when nearby customers search for what you offer." },
        { icon: "✓", title: "Fewer Missed Customers", description: "Accurate hours and location prevent customers from arriving when you're closed or going to the wrong address." },
        { icon: "⚡", title: "Faster Trust-Building", description: "A complete, active-looking listing signals credibility before a customer even calls." },
        { icon: "↻", title: "Ongoing Accuracy", description: "We monitor and update your listing as your business changes, so it never goes stale." },
      ],
    },

    process: {
      heading: "How We Set Up & Manage Your Listing",
      description: "A structured approach that takes your map presence from inconsistent to fully optimized — and keeps it that way.",
      steps: [
        { number: "01", title: "Audit", description: "We review your current listing (or lack of one) and identify every gap affecting visibility." },
        { number: "02", title: "Setup & Correction", description: "We create or fix your Google Business Profile with verified, accurate information." },
        { number: "03", title: "Optimization", description: "Categories, photos, service areas and attributes are strengthened to match what Google favors." },
        { number: "04", title: "Ongoing Monitoring", description: "We track performance and keep your listing updated as details change." },
      ],
    },

    audience: {
      description: "Google Map visibility matters most for businesses that depend on nearby customers finding and reaching them in person.",
      items: ["Retail Stores & Showrooms", "Restaurants & Cafes", "Clinics & Healthcare Practices", "Salons & Spas", "Educational Institutes", "Home & Repair Service Providers", "Multi-Branch Businesses", "Professional Offices"],
    },

    faq: {
      heading: "Google Map Services — Common Questions",
      items: [
        { question: "Do I need an existing Google Business Profile to get started?", answer: "No. If you don't have one yet, we create and verify it from scratch. If you already have one, we audit it and fix whatever is inaccurate or incomplete." },
        { question: "How long does it take for changes to appear on Google Maps?", answer: "Most updates reflect within a few days, though some changes — like new listings or verification — can take a few weeks as Google reviews them." },
        { question: "Can you help if my business has multiple locations?", answer: "Yes, we manage multi-location profiles and keep details consistent across every branch." },
        { question: "Will this help me rank higher in regular Google Search too, not just Maps?", answer: "Yes. Google Business Profile signals also influence how you appear in regular Google Search results for local queries." },
        { question: "Do you handle fake or negative reviews?", answer: "We can't remove reviews outright, but we help you respond professionally and flag reviews that violate Google's policies." },
        { question: "What if my business doesn't have a physical storefront?", answer: "Service-area businesses can still have an optimized profile — we set the correct service radius instead of a public address." },
        { question: "Do you provide the photos, or do I need to supply them?", answer: "We can work with photos you provide, or arrange for new photography if you'd like a fully refreshed visual presence." },
        { question: "How is this different from just filling out the profile myself?", answer: "We know which fields and categories Google actually weighs for visibility, and we track changes to Google's system that affect ranking — something most business owners don't have time to follow." },
        { question: "Is this a one-time setup or an ongoing service?", answer: "Both options are available — a one-time optimization, or ongoing monthly management to keep your listing active and accurate." },
      ],
    },

    cta: {
      eyebrow: "GET STARTED",
      title: "Ready to Own Your Spot on the Map?",
      description: "Let's get your business accurately placed, fully optimized and easy for nearby customers to find.",
      buttonText: "Book a Free Audit",
      buttonHref: "/contact",
    },
  },

  // =========================================================
  // 02 — GOOGLE BUSINESS PROFILE MANAGEMENT
  // =========================================================
  {
    slug: "google-business-profile-management",
    number: "02",
    navTitle: "Google Business Profile Management",
    metaTitle: "Google Business Profile Management | Unicorn Nexus 360",
    metaDescription:
      "Ongoing management of your Google Business Profile — posts, Q&A, messaging and insights — so your listing stays active, accurate and engaging.",

    hero: {
      eyebrow: "PROFILE MANAGEMENT",
      title: "Google Business Profile Management",
      tagline: "Keep Your Listing Active, Not Just Accurate.",
      description:
        "Beyond the pin on the map, your Google Business Profile is a living page customers interact with — questions, posts, offers and messages. We manage it continuously so it stays current and engaging.",
      video: "/services/google-business-profile/google-business-profile.mp4",
      videoAlt: "Google Business Profile dashboard with posts and customer messages open",
    },

    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "A Listing That's Set Up but Never Updated Loses Momentum",
      description:
        "Many businesses set up their Google Business Profile once and never touch it again. Google notices — and so do customers. An active profile with recent posts, answered questions and prompt message replies signals a business that's actually open and paying attention. We handle the ongoing upkeep so your profile keeps working long after the initial setup.",
      image: "/services/google-business-profile/gbpm.png",
      imageAlt: "Business owner reviewing customer questions on their Google profile",
    },

    features: {
      heading: "What Ongoing Profile Management Covers",
      description: "The day-to-day upkeep that keeps your profile active, responsive and worth clicking on.",
      items: [
        { icon: "▤", title: "Regular Post Updates", description: "Offers, updates and announcements posted consistently so your profile never looks abandoned." },
        { icon: "◈", title: "Q&A Monitoring", description: "We watch for and answer customer questions before incorrect answers from strangers go unchallenged." },
        { icon: "✉", title: "Message Response Management", description: "Prompt replies to customer messages sent directly through your profile." },
        { icon: "★", title: "Review Response Handling", description: "Professional, timely responses to new reviews as they come in, positive or negative." },
        { icon: "▲", title: "Insights & Performance Review", description: "Monthly review of views, calls, direction requests and website clicks from your profile." },
        { icon: "◎", title: "Category & Attribute Updates", description: "Keeping your listed services, attributes and categories current as your business evolves." },
      ],
    },

    benefits: {
      heading: "Why Ongoing Management Beats a One-Time Setup",
      description: "A profile that's actively maintained performs differently than one that was set up once and left alone.",
      image: "/services/google-business-profile/google-my-business.png",
      imageAlt: "Business profile showing consistent, active management over time",
      items: [
        { icon: "↗", title: "Sustained Visibility", description: "Active profiles are favored by Google's algorithm over dormant ones." },
        { icon: "✓", title: "Faster Customer Response", description: "Questions and messages get answered before a customer moves on to a competitor." },
        { icon: "⚡", title: "Stronger Reputation Management", description: "Consistent review responses build trust with future customers reading them." },
        { icon: "▤", title: "Clear Performance Visibility", description: "Regular insight reports show exactly how your profile is performing." },
      ],
    },

    process: {
      heading: "How We Manage Your Profile Month to Month",
      description: "A consistent monthly rhythm that keeps your profile active without you having to think about it.",
      steps: [
        { number: "01", title: "Baseline Review", description: "We assess your current profile activity and set a content and response schedule." },
        { number: "02", title: "Ongoing Posting", description: "Regular posts and updates are published on a consistent schedule." },
        { number: "03", title: "Daily Monitoring", description: "Questions, messages and reviews are checked and responded to promptly." },
        { number: "04", title: "Monthly Reporting", description: "You receive a clear report on profile performance and what's working." },
      ],
    },

    audience: {
      description: "Ongoing profile management suits businesses that already have a Google Business Profile but don't have time to maintain it actively.",
      items: ["Restaurants & Cafes", "Retail Stores", "Clinics & Healthcare Practices", "Salons & Wellness Centers", "Real Estate Agencies", "Educational Institutes", "Service-Based Businesses", "Multi-Location Brands"],
    },

    faq: {
      heading: "Google Business Profile Management — Common Questions",
      items: [
        { question: "Is this different from the Google Map Services you offer?", answer: "Yes — Google Map Services focuses on initial setup and pin accuracy, while this is ongoing monthly management: posts, messages, reviews and insights." },
        { question: "How often will you post updates to my profile?", answer: "We agree on a schedule based on your business — typically a few times per month, more often for businesses running frequent offers." },
        { question: "Will you respond to messages on my behalf?", answer: "Yes, we can respond directly, or draft responses for your approval first — whichever you prefer." },
        { question: "What happens if I get a negative review?", answer: "We respond professionally and promptly. We can't remove genuine reviews, but a thoughtful public response often reassures other customers." },
        { question: "Do I need to provide content for the posts?", answer: "You can share offers, news or events, or we can create relevant posts based on your business and industry." },
        { question: "Can you combine this with Google Map Services?", answer: "Yes — many clients start with map setup and optimization, then move into ongoing profile management." },
        { question: "How do I know it's actually working?", answer: "You'll receive monthly reports showing profile views, calls, direction requests and engagement trends." },
        { question: "What if my business information changes?", answer: "We update hours, categories and details as soon as you let us know, keeping your profile accurate at all times." },
        { question: "Is this suitable for a small, single-location business?", answer: "Yes, this service scales to any business size — single location or multiple branches." },
      ],
    },

    cta: {
      eyebrow: "GET STARTED",
      title: "Ready to Keep Your Profile Working for You?",
      description: "Let's take the ongoing upkeep off your plate and keep your listing active every month.",
      buttonText: "Start Managing My Profile",
      buttonHref: "/contact",
    },
  },

  // =========================================================
  // 03 — DIGITAL MARKETING
  // =========================================================
  {
    slug: "digital-marketing",
    number: "03",
    navTitle: "Digital Marketing",
    metaTitle: "Digital Marketing Services in India | Unicorn Nexus 360",
    metaDescription:
      "Multi-channel digital marketing — SEO, paid ads, content and email — built around measurable business goals, not vanity metrics.",

    hero: {
      eyebrow: "GROWTH MARKETING",
      title: "Digital Marketing",
      tagline: "Marketing That's Measured, Not Just Made.",
      description:
        "We build and run digital marketing campaigns across search, social and email — connected by one strategy instead of scattered, disconnected efforts.",
      video: "/services/digital-marketing/digital-marketing-1.mp4",
      videoAlt: "Digital marketing analytics dashboard showing multi-channel campaign performance",
    },

    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Scattered Marketing Efforts Rarely Add Up",
      description:
        "Running ads here, a few social posts there and an occasional email blast rarely compounds into real growth. Digital marketing works best as a connected system — where SEO, paid campaigns, content and email all point toward the same goals and reinforce each other. We build that system around your business rather than running isolated tactics.",
      image: "/services/digital-marketing/digital-marketing.png",
      imageAlt: "Marketing strategist planning a multi-channel campaign on a whiteboard",
    },

    features: {
      heading: "What Our Digital Marketing Services Cover",
      description: "A connected set of channels working toward the same goals, not disconnected one-off campaigns.",
      items: [
        { icon: "⌖", title: "Search Engine Optimization", description: "On-page and technical SEO to improve your organic visibility over time." },
        { icon: "◆", title: "Paid Advertising Management", description: "Google and social media ad campaigns managed for actual return, not just clicks." },
        { icon: "▤", title: "Content Marketing", description: "Blog posts, articles and on-site content that support both SEO and audience trust." },
        { icon: "✉", title: "Email Marketing", description: "Newsletter and campaign emails that keep your audience engaged between purchases." },
        { icon: "◎", title: "Conversion Rate Optimization", description: "Reviewing and improving how your website turns visitors into leads or customers." },
        { icon: "▲", title: "Performance Reporting", description: "Clear, regular reporting tied to the metrics that actually matter to your business." },
      ],
    },

    benefits: {
      heading: "Why a Connected Strategy Performs Better",
      description: "When channels reinforce each other instead of working in isolation, results compound instead of resetting each month.",
      image: "/services/digital-marketing/digital-marketing-seo.png",
      imageAlt: "Marketing performance dashboard showing improved campaign ROI",
      items: [
        { icon: "↗", title: "Compounding Results", description: "SEO and content build value over time instead of stopping when ad spend does." },
        { icon: "◎", title: "Better Budget Efficiency", description: "Spend flows toward the channels actually driving results." },
        { icon: "✓", title: "Consistent Messaging", description: "One strategy across channels means customers get a coherent brand experience." },
        { icon: "▤", title: "Clear ROI Visibility", description: "Reporting tied to real business outcomes, not just impressions." },
      ],
    },

    process: {
      heading: "How We Build Your Marketing Strategy",
      description: "A structured approach from research to ongoing optimization.",
      steps: [
        { number: "01", title: "Research", description: "We study your market, competitors and current digital presence." },
        { number: "02", title: "Strategy", description: "We build a channel plan and content calendar around your specific goals." },
        { number: "03", title: "Execution", description: "Campaigns go live across the agreed channels on a consistent schedule." },
        { number: "04", title: "Optimization", description: "We review performance regularly and adjust what isn't working." },
      ],
    },

    audience: {
      description: "Digital marketing benefits nearly any business, but works especially well for those ready to invest in consistent, long-term visibility.",
      items: ["E-commerce Businesses", "B2B Service Companies", "Educational Institutes", "Healthcare Providers", "Real Estate Agencies", "Hospitality Brands", "Manufacturing Companies", "Growing Startups"],
    },

    faq: {
      heading: "Digital Marketing — Common Questions",
      items: [
        { question: "How is this different from your AI Marketing service?", answer: "This is broader multi-channel marketing execution — SEO, ads, content and email. AI Marketing focuses specifically on using AI tools to speed up and sharpen those efforts." },
        { question: "How long does SEO typically take to show results?", answer: "Meaningful organic improvement usually takes a few months, since search engines need time to re-index and trust changes." },
        { question: "Do you manage ad budgets, or just the campaigns?", answer: "We manage campaign setup, targeting and optimization; ad spend itself is billed separately and controlled by you." },
        { question: "Can you work with a smaller monthly budget?", answer: "Yes, we tailor the channel mix to what makes sense for your budget rather than spreading it too thin." },
        { question: "Will I get regular reports on performance?", answer: "Yes, you'll receive consistent reporting showing what's working across each channel." },
        { question: "Do you write the content, or do I need to provide it?", answer: "We handle content creation, though we're happy to incorporate material you already have." },
        { question: "Which channels should I start with?", answer: "That depends on your business and goals — we recommend a starting mix after reviewing your current presence." },
        { question: "Can this work alongside my existing in-house marketing?", answer: "Yes, we can support an existing team or run the full strategy independently." },
        { question: "How do you measure success?", answer: "Through metrics tied to real business outcomes — leads, conversions, revenue impact — not just clicks or impressions." },
      ],
    },

    cta: {
      eyebrow: "GET STARTED",
      title: "Ready for Marketing That Actually Compounds?",
      description: "Let's build a connected strategy across the channels that matter most for your business.",
      buttonText: "Get a Free Strategy Call",
      buttonHref: "/contact",
    },
  },

  // =========================================================
  // 04 — AI MARKETING
  // =========================================================
  {
    slug: "ai-marketing",
    number: "04",
    navTitle: "AI Marketing",
    metaTitle: "AI Marketing Services in India | Unicorn Nexus 360",
    metaDescription:
      "AI-supported content, targeting and campaign automation built into a marketing strategy guided by real strategic decisions, not just software.",

    hero: {
      eyebrow: "INTELLIGENT MARKETING",
      title: "AI Marketing",
      tagline: "Marketing That Learns As It Grows.",
      description:
        "We bring AI-driven tools into your marketing process — smarter targeting, faster content, and campaigns that improve with every cycle instead of starting from zero each time.",
      video: "/services/ai-marketing/ai-marketing.mp4",
      videoAlt: "AI marketing dashboard showing live campaign performance analytics",
    },

    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Marketing Decisions Backed By Data, Not Guesswork",
      description:
        "Traditional marketing often relies on intuition and slow trial-and-error. AI tools change that — surfacing patterns in customer behavior, personalizing outreach at scale, and speeding up content production that used to take days. We integrate these tools into a strategy built around your actual business goals, not generic automation.",
      image: "/services/ai-marketing/ai-marketing.png",
      imageAlt: "Marketing team reviewing AI-generated customer insights on a screen",
    },

    features: {
      heading: "What Our AI Marketing Services Include",
      description: "Practical AI applications that speed up your marketing without losing the strategic thinking behind it.",
      items: [
        { icon: "◆", title: "AI-Assisted Content Creation", description: "Faster drafting of ad copy, captions and blog content, refined by our team before it goes live." },
        { icon: "⌖", title: "Predictive Audience Targeting", description: "AI-driven analysis of who engages, buys and returns, so campaigns reach the right people first." },
        { icon: "⚙", title: "Campaign Automation", description: "Smarter scheduling and budget allocation that adjusts based on real-time performance." },
        { icon: "▲", title: "Performance Forecasting", description: "Early signals on which campaigns are likely to perform, so budget shifts before results are final." },
        { icon: "◈", title: "Personalized Messaging at Scale", description: "Tailored messaging for different audience segments without manually writing dozens of versions." },
        { icon: "◎", title: "Competitive & Trend Analysis", description: "AI-supported monitoring of market trends and competitor activity to keep your strategy current." },
      ],
    },

    benefits: {
      heading: "Why AI-Driven Marketing Works",
      description: "AI doesn't replace strategy — it removes the slow, manual parts so your marketing moves at the pace your customers already expect.",
      image: "/services/ai-marketing/ai-marketing-seo.png",
      imageAlt: "Marketing team reviewing AI-driven campaign performance gains",
      items: [
        { icon: "⚡", title: "Faster Turnaround", description: "Campaigns and content go live in days, not weeks." },
        { icon: "⌖", title: "Sharper Targeting", description: "Reach the audience segments most likely to actually convert." },
        { icon: "▤", title: "Continuous Improvement", description: "Every campaign generates data that improves the next one." },
        { icon: "◒", title: "Better Budget Efficiency", description: "Spend shifts toward what's working, adjusted in near real-time." },
      ],
    },

    process: {
      heading: "How We Build Your AI-Supported Strategy",
      description: "A clear structure that blends AI tools with human strategy, so nothing runs on autopilot without oversight.",
      steps: [
        { number: "01", title: "Discover", description: "We assess your current marketing setup, goals and available audience data." },
        { number: "02", title: "Build", description: "We design an AI-supported workflow tailored to your channels and business." },
        { number: "03", title: "Launch", description: "Campaigns go live with AI-assisted targeting, content and scheduling." },
        { number: "04", title: "Refine", description: "We monitor results and continuously adjust based on real performance data." },
      ],
    },

    audience: {
      description: "AI marketing is especially valuable for businesses that need to move fast, personalize at scale, or compete with limited internal marketing resources.",
      items: ["E-commerce & Retail Brands", "Real Estate Agencies", "Educational Institutes", "Healthcare Providers", "Hospitality & Travel Businesses", "Professional Service Firms", "Startups & Growing Businesses", "Multi-Location Businesses"],
    },

    faq: {
      heading: "AI Marketing — Common Questions",
      items: [
        { question: "Will AI replace the strategic thinking behind my marketing?", answer: "No. AI speeds up execution — content drafts, targeting, scheduling — but strategy, brand voice and final decisions are guided by our team." },
        { question: "Is AI marketing only useful for large companies?", answer: "Not at all. AI tools scale down well and are often most valuable for smaller teams that don't have the bandwidth for fully manual marketing." },
        { question: "Will AI-generated content sound generic or robotic?", answer: "We review and edit every piece before it goes live, so it reflects your brand voice rather than raw AI output." },
        { question: "How does AI actually improve audience targeting?", answer: "It analyzes patterns in past engagement and conversions to identify which audience segments are most likely to respond, beyond basic demographic targeting." },
        { question: "Do you use my existing customer data?", answer: "Yes, where available — your existing data helps the tools make accurate, business-specific recommendations rather than generic ones." },
        { question: "How is this different from regular digital marketing?", answer: "The core strategy is similar, but AI tools handle the repetitive, data-heavy parts faster — content variations, targeting adjustments, performance analysis — freeing up time for strategic decisions." },
        { question: "Can AI marketing work alongside my existing marketing team?", answer: "Yes, we can integrate with your existing team's workflow or run it independently, depending on what you need." },
        { question: "How long before I see results?", answer: "Early signals like engagement and click-through improvements often show within a few weeks; conversion-level results typically build over a couple of months as the system learns from data." },
        { question: "What platforms does this work across?", answer: "We apply AI-supported strategy across the channels relevant to your business — search, social media, email and paid advertising." },
      ],
    },

    cta: {
      eyebrow: "GET STARTED",
      title: "Ready to Market Smarter, Not Just Harder?",
      description: "Let's bring AI-supported strategy into your marketing without losing the human judgment behind it.",
      buttonText: "Book a Free Consultation",
      buttonHref: "/contact",
    },
  },

  // =========================================================
  // 05 — WEBSITE DEVELOPMENT
  // =========================================================
  {
    slug: "website-development",
    number: "05",
    navTitle: "Website Development",
    metaTitle: "Website Development Services in India | Unicorn Nexus 360",
    metaDescription:
      "Fast, responsive, easy-to-manage websites built to convert visitors into enquiries, not just look good.",

    hero: {
      eyebrow: "WEB PRESENCE",
      title: "Website Development",
      tagline: "A Website Built to Convert, Not Just Exist.",
      description:
        "We design and build websites that load fast, work on every device, and are actually structured to turn visitors into enquiries — not just digital brochures.",
      video: "/services/website-development/website-development.mp4",
      videoAlt: "Modern responsive website design displayed across desktop and mobile screens",
    },

    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Your Website Is Often the Final Decision Point",
      description:
        "By the time a customer reaches your website, they're already interested — the website's job is to not lose them. A slow, outdated or confusing site quietly costs businesses enquiries every day. We build sites focused on clarity, speed and a clear path to contact, not just visual polish.",
      image: "/services/website-development/website-development.png",
      imageAlt: "Web developer reviewing website layout and structure on a screen",
    },

    features: {
      heading: "What Our Website Development Includes",
      description: "Everything from design to launch, built around usability and speed rather than unnecessary complexity.",
      items: [
        { icon: "◧", title: "Custom Design", description: "A design built around your brand and audience, not a generic template." },
        { icon: "⚡", title: "Speed Optimization", description: "Fast-loading pages, since slow sites lose visitors before they even see your content." },
        { icon: "◎", title: "Mobile Responsiveness", description: "A site that works properly on every screen size, not just desktop." },
        { icon: "▤", title: "Easy Content Management", description: "A backend you can actually update yourself without needing a developer for every change." },
        { icon: "⌖", title: "SEO-Ready Structure", description: "Clean code and structure that gives search engines what they need to index you properly." },
        { icon: "✓", title: "Clear Conversion Paths", description: "Contact forms, calls-to-action and navigation designed to guide visitors toward enquiring." },
      ],
    },

    benefits: {
      heading: "Why a Well-Built Website Pays for Itself",
      description: "A website isn't a one-time expense — a well-built one keeps generating enquiries long after launch.",
      image: "/services/website-development/website-development-seo.png",
      imageAlt: "Business owner reviewing increased website enquiries and conversions",
      items: [
        { icon: "↗", title: "More Qualified Enquiries", description: "Clear structure and calls-to-action turn more visitors into leads." },
        { icon: "⚡", title: "Lower Bounce Rates", description: "Fast load times keep visitors on the page instead of leaving immediately." },
        { icon: "✓", title: "Professional Credibility", description: "A polished site builds trust before a customer even contacts you." },
        { icon: "▤", title: "Long-Term Flexibility", description: "Easy content management means the site stays current without ongoing developer costs." },
      ],
    },

    process: {
      heading: "How We Build Your Website",
      description: "A clear path from planning to launch, with room for feedback at every stage.",
      steps: [
        { number: "01", title: "Discovery", description: "We understand your business, audience and what the site needs to accomplish." },
        { number: "02", title: "Design", description: "We create the visual design and structure for your review and feedback." },
        { number: "03", title: "Development", description: "The site is built, tested across devices and optimized for speed." },
        { number: "04", title: "Launch & Handover", description: "We launch the site and walk you through managing it going forward." },
      ],
    },

    audience: {
      description: "A strong website matters for any business, but is especially critical for those relying on it as a primary source of enquiries.",
      items: ["Service-Based Businesses", "Real Estate Agencies", "Educational Institutes", "Healthcare Practices", "Manufacturing Companies", "Hospitality Brands", "Professional Consultancies", "E-commerce Businesses"],
    },

    faq: {
      heading: "Website Development — Common Questions",
      items: [
        { question: "How long does it take to build a website?", answer: "Timelines vary by complexity, but a typical business website takes a few weeks from discovery to launch." },
        { question: "Will I be able to update the website myself afterward?", answer: "Yes, we build on a content management system that lets you update text, images and basic content without coding knowledge." },
        { question: "Do you also handle hosting and domain setup?", answer: "We can guide you through hosting and domain setup, or work with your existing provider if you already have one." },
        { question: "Is the website mobile-friendly?", answer: "Yes, every website we build is fully responsive and tested across phone, tablet and desktop screens." },
        { question: "Can you redesign my existing website instead of building from scratch?", answer: "Yes, we can work with your current site's content and structure for a redesign rather than a full rebuild." },
        { question: "Will the website be optimized for search engines?", answer: "Yes, we build with clean, SEO-friendly structure, though ongoing SEO work is a separate, dedicated service." },
        { question: "What happens if I need changes after launch?", answer: "We offer post-launch support, and since the site is easy to manage, many small changes you can make yourself." },
        { question: "Do you build e-commerce websites?", answer: "Yes, we build e-commerce functionality when a business needs to sell products directly online." },
        { question: "How much does a website typically cost?", answer: "It depends on scope and features — we provide a clear quote after understanding what your website needs to do." },
      ],
    },

    cta: {
      eyebrow: "GET STARTED",
      title: "Ready for a Website That Actually Converts?",
      description: "Let's build a site that turns visitors into enquiries, not just a digital brochure.",
      buttonText: "Get a Free Quote",
      buttonHref: "/contact",
    },
  },

  // =========================================================
  // 06 — SOCIAL MEDIA MANAGEMENT
  // =========================================================
  {
    slug: "social-media-management",
    number: "06",
    navTitle: "Social Media Management",
    metaTitle: "Social Media Management Services | Unicorn Nexus 360",
    metaDescription:
      "Consistent, on-brand social media content and engagement management across the platforms your customers actually use.",

    hero: {
      eyebrow: "SOCIAL PRESENCE",
      title: "Social Media Management",
      tagline: "Consistency Builds Trust Faster Than One Big Post.",
      description:
        "We plan, create and manage your social media presence so it stays active, on-brand and engaging — without you having to think about what to post next.",
      video: "/services/social-media-management/social-media-management.mp4",
      videoAlt: "Social media content calendar with scheduled posts across platforms",
    },

    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "An Inactive Social Profile Can Hurt More Than Having None",
      description:
        "A social media page with no recent posts or unanswered comments can make a business look inactive or unreliable — even if the business itself is thriving. Consistent, planned content builds familiarity and trust with your audience over time. We manage that consistency so your social presence works for your brand instead of against it.",
      image: "/services/social-media-management/social-media-management-seo.png",
      imageAlt: "Social media manager reviewing engagement metrics on a laptop",
    },

    features: {
      heading: "What Our Social Media Management Includes",
      description: "From planning to publishing to responding, the full cycle of maintaining an active social presence.",
      items: [
        { icon: "▤", title: "Content Calendar Planning", description: "A planned schedule of posts, so content goes out consistently instead of sporadically." },
        { icon: "◧", title: "Graphic & Content Creation", description: "On-brand posts, graphics and captions tailored to each platform." },
        { icon: "⌖", title: "Platform-Specific Strategy", description: "Different approaches for Instagram, Facebook, LinkedIn and other platforms, not one-size-fits-all posting." },
        { icon: "✉", title: "Comment & Message Management", description: "Timely responses to comments and DMs, so your audience feels heard." },
        { icon: "★", title: "Community Engagement", description: "We proactively engage with your audience and relevant accounts to build visibility." },
        { icon: "▲", title: "Performance Reporting", description: "Monthly reports on reach, engagement and follower growth trends." },
      ],
    },

    benefits: {
      heading: "Why Consistent Social Management Matters",
      description: "Social media rewards consistency over occasional bursts of activity — and that's exactly what ongoing management provides.",
      image: "/services/social-media-management/social-media-management.png",
      imageAlt: "Growing social media engagement and follower trends displayed on screen",
      items: [
        { icon: "↗", title: "Stronger Brand Recall", description: "Regular, familiar content keeps your business top of mind." },
        { icon: "✓", title: "Better Audience Trust", description: "Prompt responses to comments and messages build a more engaged following." },
        { icon: "⚡", title: "Time Saved", description: "You get an active social presence without personally managing it day to day." },
        { icon: "▤", title: "Clear Growth Tracking", description: "Reporting shows how your following and engagement are actually trending." },
      ],
    },

    process: {
      heading: "How We Manage Your Social Media",
      description: "A repeatable monthly process that keeps your presence active without requiring your daily involvement.",
      steps: [
        { number: "01", title: "Strategy & Planning", description: "We define your content pillars, tone and posting schedule." },
        { number: "02", title: "Content Creation", description: "Posts, graphics and captions are created in line with your brand." },
        { number: "03", title: "Publishing & Engagement", description: "Content is published on schedule, with ongoing comment and message management." },
        { number: "04", title: "Reporting & Refinement", description: "Monthly performance review, with adjustments to what's working best." },
      ],
    },

    audience: {
      description: "Social media management fits businesses that want an active, professional presence without dedicating internal staff to manage it daily.",
      items: ["Restaurants & Cafes", "Retail & Fashion Brands", "Salons & Wellness Centers", "Educational Institutes", "Real Estate Agencies", "Fitness Studios", "Event & Hospitality Businesses", "Professional Service Providers"],
    },

    faq: {
      heading: "Social Media Management — Common Questions",
      items: [
        { question: "Which platforms do you manage?", answer: "We typically work across Instagram, Facebook and LinkedIn, and can include other platforms based on where your audience actually is." },
        { question: "How many posts will I get per month?", answer: "Posting frequency is agreed based on your goals and platform — we'll set a schedule that's sustainable and effective." },
        { question: "Do I need to approve content before it's posted?", answer: "Yes, we typically share a content calendar for your approval before anything goes live, unless you'd prefer a more hands-off approach." },
        { question: "Can you run paid social ads as well as organic posts?", answer: "Yes, paid social advertising can be added alongside organic content management." },
        { question: "Will you respond to comments and messages on my behalf?", answer: "Yes, we monitor and respond to comments and messages during business hours, following guidelines we agree on together." },
        { question: "Do you provide the photos and videos, or do I need to supply them?", answer: "We can create graphics and use provided photos/videos, or arrange content shoots if a more visual refresh is needed." },
        { question: "How do you measure whether social media is working?", answer: "Through engagement, follower growth and, where relevant, tracking enquiries that originate from social platforms." },
        { question: "Can you help grow my following, not just post content?", answer: "Yes, our strategy includes engagement and outreach tactics aimed at organic follower growth, not just scheduled posting." },
        { question: "Is social media management billed separately from other services?", answer: "Yes, though it's often combined with Digital Marketing or AI Marketing for a more connected strategy." },
      ],
    },

    cta: {
      eyebrow: "GET STARTED",
      title: "Ready for Social Media That Works Consistently?",
      description: "Let's build a social presence that stays active, on-brand and genuinely engaging.",
      buttonText: "Start Managing My Socials",
      buttonHref: "/contact",
    },
  },

  // =========================================================
  // 07 — REAL ESTATE MARKETING
  // =========================================================
  {
    slug: "real-estate-marketing",
    number: "07",
    navTitle: "Real Estate Marketing",
    metaTitle: "Real Estate Marketing Services in India | Unicorn Nexus 360",
    metaDescription:
      "Property listings, virtual tours and targeted local marketing built specifically for real estate agencies and developers.",

    hero: {
      eyebrow: "PROPERTY MARKETING",
      title: "Real Estate Marketing",
      tagline: "Advertising + Influencer Marketing for Real Estate.",
      description:
        "We market properties and real estate brands across digital channels — listings, virtual tours and targeted local campaigns built specifically for how people actually search for property.",
      video: "/services/real-estate-marketing/real-estate.mp4",
      videoAlt: "Real estate property listing displayed on a digital marketing dashboard",
    },

    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Real Estate Buyers Research Extensively Before Ever Calling",
      description:
        "Property buyers spend weeks browsing listings, comparing locations and researching developers online before making contact. If your properties aren't visible, well-presented and easy to find during that research phase, you're losing serious buyers to competitors who show up first. We build real estate marketing specifically around that extended research journey.",
      image: "/services/real-estate-marketing/real-estate.png",
      imageAlt: "Real estate agent presenting a property listing on a tablet",
    },

    features: {
      heading: "What Our Real Estate Marketing Covers",
      description: "Marketing built specifically around how property buyers search, compare and decide.",
      items: [
        { icon: "◧", title: "Property Listing Optimization", description: "Well-presented, complete listings across the platforms buyers actually browse." },
        { icon: "◎", title: "Virtual Tours & Media", description: "360-degree tours and quality visuals that let buyers explore remotely before visiting." },
        { icon: "⌖", title: "Local & Hyperlocal Targeting", description: "Ads and content targeted to buyers actively searching in specific locations." },
        { icon: "▤", title: "Developer & Project Branding", description: "Consistent branding across a project's marketing, from launch through possession." },
        { icon: "✉", title: "Lead Capture & Follow-Up", description: "Structured lead capture so enquiries don't get lost between platforms." },
        { icon: "★", title: "Reputation & Review Management", description: "Managing reviews and presence across property portals and Google." },
      ],
    },

    benefits: {
      heading: "Why Real Estate Needs Specialized Marketing",
      description: "Generic marketing tactics don't account for how long, research-heavy and high-value real estate decisions actually are.",
      image: "/services/real-estate-marketing/real-estate-marketing.png",
      imageAlt: "Real estate team reviewing increased qualified property enquiries",
      items: [
        { icon: "↗", title: "More Qualified Enquiries", description: "Targeting reaches buyers actively searching in your project's location and budget." },
        { icon: "✓", title: "Stronger First Impressions", description: "Quality visuals and virtual tours build credibility before any site visit." },
        { icon: "⚡", title: "Faster Lead Response", description: "Structured capture means fewer enquiries slip through the cracks." },
        { icon: "▤", title: "Clear Campaign ROI", description: "Reporting tied to actual enquiries and site visits, not just impressions." },
      ],
    },

    process: {
      heading: "How We Market Your Properties",
      description: "A structured approach that follows the buyer's research journey from first search to site visit.",
      steps: [
        { number: "01", title: "Property Assessment", description: "We review your properties, target buyers and current marketing presence." },
        { number: "02", title: "Listing & Media Setup", description: "Optimized listings, photos and virtual tours are created and published." },
        { number: "03", title: "Targeted Campaigns", description: "Local and hyperlocal digital campaigns run across relevant channels." },
        { number: "04", title: "Lead Management", description: "Enquiries are captured, tracked and reported so nothing gets missed." },
      ],
    },

    audience: {
      description: "Real estate marketing is built for agencies, developers and independent brokers marketing residential or commercial properties.",
      items: ["Real Estate Developers", "Independent Property Brokers", "Real Estate Agencies", "Commercial Property Owners", "Property Management Companies", "Rental & Leasing Businesses", "Real Estate Investment Firms", "Housing Societies & Projects"],
    },

    faq: {
      heading: "Real Estate Marketing — Common Questions",
      items: [
        { question: "Do you handle marketing for individual properties or entire projects?", answer: "Both — we work with individual brokers marketing single properties and developers marketing full projects." },
        { question: "Can you create virtual tours for existing properties?", answer: "Yes, we arrange virtual tour creation as part of the listing and media setup process." },
        { question: "Which property portals do you list on?", answer: "We optimize listings across major property portals relevant to your target market, alongside your own website and Google presence." },
        { question: "How do you target the right buyers?", answer: "Through hyperlocal targeting based on location, budget range and buyer intent signals from search and social platforms." },
        { question: "Can this include social media and Google Maps for my project?", answer: "Yes, real estate marketing often works best combined with Social Media Management and Google Map Services for full visibility." },
        { question: "How are leads delivered to me?", answer: "Leads are captured through structured forms and messaging, then delivered to you promptly with relevant enquiry details." },
        { question: "Do you work with commercial as well as residential properties?", answer: "Yes, we handle marketing for both residential and commercial real estate." },
        { question: "How long before I start seeing enquiries?", answer: "Initial enquiries often begin within the first few weeks of campaigns going live, though volume builds as targeting is refined." },
        { question: "Can you help with rebranding a real estate project?", answer: "Yes, we can support project branding alongside the marketing campaign, especially for pre-launch or relaunch phases." },
      ],
    },

    cta: {
      eyebrow: "GET STARTED",
      title: "Ready to Get Your Properties in Front of Serious Buyers?",
      description: "Let's build a real estate marketing strategy around how buyers actually search and decide.",
      buttonText: "Book a Property Marketing Call",
      buttonHref: "/contact",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}