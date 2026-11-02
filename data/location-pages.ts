export interface LocationPageData {
  service: string;
  location: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
  };
  features: {
    heading: string;
    description: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  benefits: {
    heading: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  process: {
    heading: string;
    description: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  audience: {
    description: string;
    items: string[];
  };
  faq: {
    heading: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
  };
}

const createPage = (page: Omit<LocationPageData, "service" | "location"> & { service: string; location: string }): LocationPageData => page;

export const locationPages: LocationPageData[] = [
  createPage({
    service: "google-business-profile-management",
    location: "pune",
    slug: "gmb-service-in-pune",
    metaTitle: "GMB Service in Pune | Google Business Profile Experts",
    metaDescription:
      "Rank higher on Google Maps in Pune. Unicorn Nexus 360 offers Google Business Profile setup, optimization, reviews and local SEO for Pune businesses.",
    hero: {
      eyebrow: "LOCAL SEO",
      title: "GMB Service in Pune: Google Business Profile Optimization That Gets You Found",
      tagline: "Get Found by Local Customers Before They Choose a Competitor.",
      description:
        "Pune businesses compete in a dense local market across Baner, Wakad, Kharadi and Aundh. We help your business show up in the Map 3-pack, strengthen its Google profile and turn more local searches into calls, visits and enquiries.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "A Strong Google Profile Is the Fastest Way to Win More Local Calls in Pune",
      description:
        "Customers in Pune compare ratings, photos, hours and reviews before they visit. A well-managed Google Business Profile acts as a 24/7 storefront that helps local buyers trust your business before they even contact you.",
    },
    features: {
      heading: "What Our GMB Service in Pune Covers",
      description: "The setup and ongoing local visibility work that keeps your listing active, accurate and conversion-ready.",
      items: [
        { icon: "▤", title: "Profile Setup & Verification", description: "Correct categories, service area, business details and Google verification support so your listing goes live without delay." },
        { icon: "◎", title: "Keyword-Driven Optimization", description: "Business description, services, business hours and local signals written around how Punekars actually search." },
        { icon: "★", title: "Review & Reputation Management", description: "Review request links, professional responses and a steady process for building trust through customer feedback." },
        { icon: "◈", title: "Photo & Post Management", description: "Updated photos, offers and regular Google Posts keep your business visible, active and relevant on Maps." },
        { icon: "✉", title: "Q&A & Messaging Support", description: "Quickly answer customer questions and capture enquiries directly from your listing." },
        { icon: "▲", title: "Local Citations & Reporting", description: "NAP consistency across directories plus monthly reports on views, calls, direction requests and profile performance." },
      ],
    },
    benefits: {
      heading: "Why GMB Management Works in Pune",
      description: "For local businesses, visibility on Google Maps is not optional — it is often the first touchpoint before a sale is made.",
      items: [
        { title: "Higher Local Visibility", description: "Your business appears in Google Maps for relevant local searches in your service area." },
        { title: "More Qualified Calls", description: "Google Maps users are often ready to act, which means more direct enquiries and walk-ins." },
        { title: "Stronger Trust Signals", description: "Reviews, photos and regular updates build more confidence than a static listing ever can." },
        { title: "Better Competitive Positioning", description: "Consistent optimization helps you outperform competitors who are still relying on a bare profile." },
      ],
    },
    process: {
      heading: "How We Grow Your GMB Presence in Pune",
      description: "A simple, monthly workflow that keeps your listing active and relevant year-round.",
      steps: [
        { number: "01", title: "Audit & Setup", description: "We review your current profile, business details and local ranking opportunities in Pune." },
        { number: "02", title: "Optimization", description: "We update categories, description, photos, services and location details around your target areas." },
        { number: "03", title: "Review & Engagement", description: "We collect reviews, answer questions and respond to customer feedback quickly." },
        { number: "04", title: "Report & Improve", description: "Monthly insights show which searches and content are bringing you more enquiries." },
      ],
    },
    audience: {
      description: "Our GMB service works best for businesses that depend on local visibility, walk-ins and high-intent searches in Pune.",
      items: ["Clinics & Dental Practices", "Restaurants & Cafes", "Salons & Wellness Studios", "Schools & Coaching Classes", "IT & Service Businesses", "Real Estate Agents", "Repair Shops & Local Services", "Hotels & Guest Houses"],
    },
    faq: {
      heading: "GMB Service in Pune — Common Questions",
      items: [
        { question: "How quickly can my Pune business start ranking better on Google Maps?", answer: "Many businesses begin seeing better visibility within a few weeks when the profile is corrected, optimized and consistently maintained." },
        { question: "Do you help with Google reviews in Pune?", answer: "Yes. We can set up a review request process, share QR codes and respond to reviews in a professional manner to strengthen your reputation." },
        { question: "Can you work with local service businesses in Baner, Wakad and Kharadi?", answer: "Absolutely. We optimize your listing around your service coverage and target neighbourhoods so nearby customers see the right business first." },
        { question: "Is GMB management different from Google Map Services?", answer: "Yes. Google Map Services covers initial setup and accuracy, while ongoing profile management focuses on updates, reviews, messages and local performance." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Pune?",
      description: "Let’s build a stronger local presence for your business with a Google Business Profile that attracts real enquiries.",
      buttonText: "Book a Free Consultation",
    },
  }),

  createPage({
    service: "google-business-profile-management",
    location: "navi-mumbai",
    slug: "gmb-service-in-navi-mumbai",
    metaTitle: "GMB Service in Navi Mumbai | Google Business Profile Experts",
    metaDescription:
      "Get found on Google Maps in Navi Mumbai. Unicorn Nexus 360 helps local businesses improve GMB setup, reviews, optimization and local SEO across Navi Mumbai.",
    hero: {
      eyebrow: "LOCAL SEO",
      title: "GMB Service in Navi Mumbai: Get Found Where Local Buyers Search",
      tagline: "Show Up in Navi Mumbai Search Results Before Customers Pick a Competitor.",
      description:
        "From Vashi and Kharghar to Airoli, Nerul and Panvel, local buyers in Navi Mumbai search on Google before booking, visiting or calling. We make sure your profile is visible, accurate and ready to convert those searches into real business.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Your Google Profile Is Your Local Storefront in Navi Mumbai",
      description:
        "For businesses in Navi Mumbai, Google Maps is where customers discover nearby options before they ever reach your website. A complete and active Google profile creates trust in seconds and significantly improves direct enquiries.",
    },
    features: {
      heading: "What Our GMB Service in Navi Mumbai Covers",
      description: "Essential management and optimization to keep your listing trustworthy, active and visible in local search.",
      items: [
        { icon: "▤", title: "Google Profile Setup", description: "Business category, hours, service area and verification support so your listing is published correctly." },
        { icon: "◎", title: "Local SEO Optimization", description: "Profile text and services tuned to the search terms customers use across Navi Mumbai and nearby areas." },
        { icon: "★", title: "Review Collection", description: "Ask satisfied customers for reviews and build a consistent reputation across Google." },
        { icon: "◈", title: "Google Posts & Photos", description: "Fresh content and quality images keep your listing relevant and more compelling than competitors." },
        { icon: "✉", title: "Message & Q&A Handling", description: "Answer common queries quickly and direct customers toward the next step in the sales funnel." },
        { icon: "▲", title: "Insights & Reports", description: "Track calls, directions, profile views and website clicks so you know what is working." },
      ],
    },
    benefits: {
      heading: "Why Local Businesses in Navi Mumbai Need Strong GMB Management",
      description: "Google Maps often decides who gets the enquiry before a customer even visits your website.",
      items: [
        { title: "Increased Local Reach", description: "Appear in relevant searches around Vashi, CBD Belapur, Kharghar, Nerul and more." },
        { title: "Trust Through Reviews", description: "Positive reviews and smart replies help new customers feel confident enough to contact you." },
        { title: "Better Conversion Rate", description: "Customers who find you on Maps are already close to making a decision." },
        { title: "Ongoing Visibility", description: "Regular updates keep your profile active and more likely to be favored by Google." },
      ],
    },
    process: {
      heading: "Our GMB Process for Navi Mumbai Businesses",
      description: "We handle the daily upkeep so your profile keeps working while you focus on serving customers.",
      steps: [
        { number: "01", title: "Profile Review", description: "We check the current setup and identify gaps in coverage, trust, or visibility." },
        { number: "02", title: "Optimization", description: "We update your profile, photos, posts and service details for site-specific local relevance." },
        { number: "03", title: "Customer Engagement", description: "We respond to reviews, answer questions and keep your listing active and helpful." },
        { number: "04", title: "Monthly Reporting", description: "We review profile performance and suggest what to improve next." },
      ],
    },
    audience: {
      description: "This service is ideal for businesses that rely on local footfall, calls, and searches in Navi Mumbai.",
      items: ["Doctors & Clinics", "Restaurants & Cafes", "Real Estate Agencies", "Schools & Coaching Institutes", "Automotive Services", "Retail Stores", "Travel & Tour Operators", "Service Businesses"],
    },
    faq: {
      heading: "GMB Service in Navi Mumbai — Common Questions",
      items: [
        { question: "Can you help local businesses across multiple Navi Mumbai areas?", answer: "Yes. We can optimize your listing for your service coverage and target neighbourhoods such as Vashi, Kharghar, Nerul, Panvel, Airoli and more." },
        { question: "Do you handle review responses?", answer: "Yes. We respond professionally to new reviews and monitor the overall reputation of your business profile." },
        { question: "Will posts improve my map visibility?", answer: "Consistent, relevant posts help keep your listing active and encourage more interactions from potential customers." },
        { question: "How often should I update my profile?", answer: "Regular updates — posts, responses and photo changes — create a stronger sense of activity and trust for Google and customers." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Navi Mumbai?",
      description: "Let’s improve your local visibility and attract more ready-to-buy customers from Navi Mumbai.",
      buttonText: "Book a Free Consultation",
    },
  }),

  createPage({
    service: "google-business-profile-management",
    location: "goa",
    slug: "gmb-service-in-goa",
    metaTitle: "GMB Service in Goa | Google Business Profile Experts",
    metaDescription:
      "Improve your Google Maps visibility in Goa. Unicorn Nexus 360 helps hotels, restaurants, villas and local businesses rank higher with GMB optimization, review management and local SEO.",
    hero: {
      eyebrow: "LOCAL SEO",
      title: "GMB Service in Goa: Get More Bookings and Local Enquiries",
      tagline: "Turn Google Maps into a Direct Booking and Enquiry Channel.",
      description:
        "Goa businesses face strong seasonal demand and high competition in tourist hotspots. A well-optimized Google Business Profile helps hotels, villas, restaurants and local service brands stand out for people searching from nearby or abroad.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Goa businesses need a profile that feels as premium as their actual offering",
      description:
        "Tourists compare rooms, restaurants, wellness spaces and service providers across Google Maps before they decide. A strong profile with high-quality visuals, reviews and trust signals helps convert that intent into direct enquiries and bookings.",
    },
    features: {
      heading: "What Our GMB Service in Goa Covers",
      description: "The profile work that helps hospitality and local businesses win attention in a competitive tourist market.",
      items: [
        { icon: "▤", title: "Hotel & Villa Profile Setup", description: "Correct business details, amenities, booking links and local attributes for tourist-facing properties." },
        { icon: "◎", title: "Location & Service Area Coverage", description: "Support for Panaji, Calangute, Candolim, North Goa, South Goa and nearby localities where your customers search." },
        { icon: "★", title: "Review Management", description: "Review requests, responses and reputation monitoring so customers see a business that is active and trusted." },
        { icon: "◈", title: "Photo & Virtual Tour Support", description: "Visuals that reflect your property, restaurant or service in ways that drive click-through and trust." },
        { icon: "✉", title: "Booking & Enquiry Links", description: "Connect WhatsApp, call, booking buttons and website funnels directly from your listing." },
        { icon: "▲", title: "Seasonal Content Strategy", description: "Posts and updates aligned to seasonality, events and tourist demand so your profile stays current." },
      ],
    },
    benefits: {
      heading: "Why Goa Businesses Need Ongoing Google Profile Management",
      description: "In Goa, a stale listing can cost you direct bookings, visits and local enquiries.",
      items: [
        { title: "More Direct Bookings", description: "Tourists often book after seeing business details, photos, reviews and directions on Google Maps." },
        { title: "Tourist-Ready Trust", description: "Clear photos and reviews make it easier for visitors to choose your property or service." },
        { title: "Stronger Seasonality Planning", description: "Peak-season and off-season updates keep your listing accurate and relevant year-round." },
        { title: "More Local Calls & Enquiries", description: "Customers searching nearby can message, call or get directions directly from Google." },
      ],
    },
    process: {
      heading: "The Process We Follow in Goa",
      description: "A practical system to keep your profile ready for tourists, residents and local searchers alike.",
      steps: [
        { number: "01", title: "Market Review", description: "We assess your current profile, competitors and target areas such as North Goa or South Goa." },
        { number: "02", title: "Profile Optimization", description: "We refine your services, photos, business attributes and local details to match local search intent." },
        { number: "03", title: "Review & Content Growth", description: "We create a review and posting rhythm that keeps your profile fresh and active." },
        { number: "04", title: "Performance Tracking", description: "Monthly insights show which content and local areas are driving the best engagement." },
      ],
    },
    audience: {
      description: "This service is best suited to businesses with high customer intent and strong local or tourist demand in Goa.",
      items: ["Hotels & Resorts", "Villas & Homestays", "Restaurants & Bars", "Tour Operators", "Wellness Retreats", "Real Estate Agents", "Clinics & Local Services", "Retail & Lifestyle Brands"],
    },
    faq: {
      heading: "GMB Service in Goa — Common Questions",
      items: [
        { question: "How can GMB help my hotel or villa in Goa get more bookings?", answer: "A complete profile with strong photos, accurate amenities, reviews and booking links helps tourists find and trust your property on Google Maps." },
        { question: "Should I update my profile during the off-season?", answer: "Yes. Off-season updates help maintain your visibility and show Google that your business remains active and relevant." },
        { question: "Can you manage profiles for restaurants and beach clubs?", answer: "Yes. We support menu links, review volumes, reservation options, posts and seasonal campaigns for hospitality businesses." },
        { question: "How soon will I see results?", answer: "Better visibility often emerges within a few weeks, while stronger ranking gains usually build over a few months with consistent optimization." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Goa?",
      description: "Let’s improve your Google Business Profile so more travellers, diners and local customers choose your business.",
      buttonText: "Book a Free Consultation",
    },
  }),

  createPage({
    service: "google-business-profile-management",
    location: "nashik",
    slug: "gmb-service-in-nashik",
    metaTitle: "GMB Service in Nashik | Google Maps & Local SEO",
    metaDescription:
      "Get found on Google Maps in Nashik. Unicorn Nexus 360 offers Google Business Profile setup, optimization and review management for businesses across Nashik.",
    hero: {
      eyebrow: "LOCAL SEO",
      title: "GMB Service in Nashik: Get Found on Google Maps Across the City",
      tagline: "Build Local Visibility Where Nashik Buyers Are Searching.",
      description:
        "Nashik businesses are competing across pilgrimage, tourism, food, healthcare and industrial sectors. A strong Google Business Profile helps you rank in neighbourhood searches and capture more local enquiries from people who are ready to act.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "A Better GMB Profile Helps Nashik Businesses Win More Reach and Trust",
      description:
        "Whether you serve customers in College Road, Gangapur Road, Panchavati or industrial zones, your business needs more than a basic Google listing. Maps visibility builds trust before a buyer ever contacts you.",
    },
    features: {
      heading: "What Our GMB Service in Nashik Covers",
      description: "The local visibility work that keeps your listing active and relevant across Nashik's search market.",
      items: [
        { icon: "▤", title: "Business Profile Setup", description: "Create or improve your profile with correct categories, contact details, hours and location data." },
        { icon: "◎", title: "Local Keyword Optimization", description: "Tune your listing to the terms Nashik buyers search, including service areas and neighbourhood names." },
        { icon: "★", title: "Review Strategy", description: "Collect more positive reviews and respond professionally to build brand trust and credibility." },
        { icon: "◈", title: "Photos & Google Posts", description: "Regular posts and visual updates keep your business active and more compelling in local results." },
        { icon: "✉", title: "Q&A & Messaging", description: "Answer frequently asked questions and capture customer messages before they are lost to competitors." },
        { icon: "▲", title: "Citations & Reporting", description: "Directory consistency and monthly reporting so you can see how your listing is performing." },
      ],
    },
    benefits: {
      heading: "Why Nashik Businesses Need a Stronger Google Profile",
      description: "Compared to saturated metros, Nashik still offers a strong opportunity for early visibility gains.",
      items: [
        { title: "Better Local Rankings", description: "Well-managed listings rank higher for area-specific searches across the city." },
        { title: "More Qualified Leads", description: "Customers searching on Maps are already nearby and often ready to take action." },
        { title: "Stronger Reputation", description: "Reviews, replies and posts help make your business look established and reliable." },
        { title: "Long-Term Growth", description: "A profile that is maintained consistently gains trust and visibility over time." },
      ],
    },
    process: {
      heading: "How We Work with Nashik Businesses",
      description: "Simple monthly steps that improve visibility without draining your time.",
      steps: [
        { number: "01", title: "Audit & Goals", description: "We review your current presence and define the mapping and ranking priorities for your category." },
        { number: "02", title: "Optimization", description: "We strengthen your listing and align it with local search behaviour in Nashik." },
        { number: "03", title: "Engagement", description: "We respond to questions, reviews and customer enquiries while keeping the listing active." },
        { number: "04", title: "Reporting", description: "We share the results and next steps so you know where growth is coming from." },
      ],
    },
    audience: {
      description: "Perfect for local businesses that want more visibility from nearby customers, tourists and lead-generation searches.",
      items: ["Hotels & Wedding Venues", "Clinics & Dental Practices", "Restaurants & Caterers", "Coaching Classes & Schools", "Manufacturers & Suppliers", "Automobile Dealers", "Real Estate Agents", "Local Service Providers"],
    },
    faq: {
      heading: "GMB Service in Nashik — Common Questions",
      items: [
        { question: "Is GMB useful for small businesses in Nashik?", answer: "Yes. Small businesses can benefit greatly because Google Maps is free, local and often the first place customers look before visiting or calling." },
        { question: "Can you help my restaurant or clinic get more reviews?", answer: "Yes. We can create a simple review request process and help you maintain a stronger review profile over time." },
        { question: "Do you work with industrial and B2B businesses?", answer: "Yes. We support B2B and service businesses in MIDC and other commercial zones with relevant category and service updates." },
        { question: "How long does it take to see ranking improvements?", answer: "Visible gains usually begin within a few weeks, while more substantial ranking lifts happen over a few months of consistent effort." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Nashik?",
      description: "Let’s build a stronger local Google presence so more people choose your business when they search nearby.",
      buttonText: "Book a Free Consultation",
    },
  }),

  createPage({
    service: "digital-marketing",
    location: "pune",
    slug: "digital-marketing-services-in-pune",
    metaTitle: "Digital Marketing Services in Pune | SEO & Lead Generation",
    metaDescription:
      "Grow your Pune business with SEO, Google Ads, social media and lead generation. Unicorn Nexus 360 creates digital marketing systems built for local visibility and business growth.",
    hero: {
      eyebrow: "DIGITAL GROWTH",
      title: "Digital Marketing Services in Pune: More Leads, More Visibility, More Growth",
      tagline: "Get Found by the Right People in Pune and Convert More of Them.",
      description:
        "Pune businesses need more than social posts and occasional ads. We build connected digital marketing strategies across SEO, paid campaigns, content and lead generation so your visibility grows in a measurable, sustainable way.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "The Most Effective Marketing in Pune Connects Visibility With Real Business Outcomes",
      description:
        "Whether you are targeting IT professionals, students, families or local buyers, digital marketing needs more than awareness — it needs conversion. We build campaigns around your service area, offers and buyer intent instead of vanity metrics alone.",
    },
    features: {
      heading: "What Our Digital Marketing in Pune Covers",
      description: "A complete digital marketing system for businesses wanting stronger reach and better lead quality.",
      items: [
        { icon: "▤", title: "SEO & Local Search", description: "Optimized pages, local service targeting and content strategy to help you rank for the right Pune searches." },
        { icon: "◎", title: "Google Ads & Search Campaigns", description: "Qualified traffic and lead capture for high-intent searches in the Pune market." },
        { icon: "★", title: "Social Media Strategy", description: "Content plans, campaign execution and audience engagement designed around your business goals." },
        { icon: "◈", title: "Lead Generation Funnels", description: "Landing pages, forms and call CTAs that turn visitors into sales conversations." },
        { icon: "✉", title: "Content & Copywriting", description: "Brand messaging, campaign copy and landing content that speaks to your audience clearly." },
        { icon: "▲", title: "Reporting & Optimization", description: "Clear monthly reporting with insights on leads, costs and where to improve performance." },
      ],
    },
    benefits: {
      heading: "Why Pune Businesses Need a More Connected Digital Strategy",
      description: "Marketing works when the channels reinforce each other — not when they act in isolation.",
      items: [
        { title: "Stronger Brand Visibility", description: "Increase the number of relevant people who see your business online in Pune." },
        { title: "Better Lead Quality", description: "Reach buyers who are already searching for your services and ready to engage." },
        { title: "Smoother Follow-Up", description: "Turn clicks and form submissions into more consistent enquiries and response workflows." },
        { title: "Higher Return on Budget", description: "Marketing decisions are guided by performance data instead of guesswork." },
      ],
    },
    process: {
      heading: "How We Build Your Pune Marketing Strategy",
      description: "A practical process that brings strategy, execution and optimization together.",
      steps: [
        { number: "01", title: "Research", description: "We study your market, competitors and customer behaviour in the Pune area." },
        { number: "02", title: "Strategy", description: "We design the right channel mix based on your goals and the kind of enquiries you want to attract." },
        { number: "03", title: "Execution", description: "Campaigns, content and positioning go live with clear tracking in place." },
        { number: "04", title: "Optimization", description: "We monitor performance and improve what is not converting." },
      ],
    },
    audience: {
      description: "This works especially well for businesses that want more visibility, stronger lead generation and a clearer digital presence in Pune.",
      items: ["Clinics & Hospitals", "Real Estate Agencies", "Schools & Coaching Institutes", "Restaurants & Cafes", "Service Businesses", "IT Firms", "Retail Stores", "B2B Companies"],
    },
    faq: {
      heading: "Digital Marketing in Pune — Common Questions",
      items: [
        { question: "How is this different from social media management?", answer: "Social media is one channel. Digital marketing includes a broader strategy across SEO, ads, content, and conversion-focused funnels." },
        { question: "Do you manage ad budgets?", answer: "We plan, optimize and monitor campaign performance, while the budget remains in your control for ad spend management." },
        { question: "Will I get regular reports?", answer: "Yes. We provide clear performance updates so you know which channel is generating the best quality leads." },
        { question: "Can you help my local business rank organically?", answer: "Yes. SEO and local search optimization are a core part of the strategy for businesses that want sustainable online visibility." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Pune?",
      description: "Let’s build a digital marketing system that brings in higher-quality visibility and more sales-ready enquiries.",
      buttonText: "Get a Free Strategy Call",
    },
  }),

  createPage({
    service: "digital-marketing",
    location: "navi-mumbai",
    slug: "digital-marketing-services-in-navi-mumbai",
    metaTitle: "Digital Marketing Services in Navi Mumbai | SEO & Lead Gen",
    metaDescription:
      "Digital marketing in Navi Mumbai for SEO, ads, social media and lead generation. Unicorn Nexus 360 helps businesses grow with local and performance-focused campaigns.",
    hero: {
      eyebrow: "DIGITAL GROWTH",
      title: "Digital Marketing Services in Navi Mumbai: Build Better Visibility and Leads",
      tagline: "Turn Local Search and Social Reach Into Real Business Growth.",
      description:
        "Navi Mumbai is a highly active commercial and residential market. We help businesses build visibility in the right places, reach the right audience and create campaigns that generate enquiries from genuine local intent.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Growth Happens When Visibility, Content and Conversion Work Together",
      description:
        "Businesses in Navi Mumbai often need more than a website or a few posts. They need a connected system that attracts the right audience and guides them toward enquiries, calls and sales conversations.",
    },
    features: {
      heading: "What Our Digital Marketing in Navi Mumbai Covers",
      description: "Targeted digital marketing for growth across local and business-focused search audiences.",
      items: [
        { icon: "▤", title: "SEO & Local Search", description: "Search visibility for high-intent terms, neighbourhoods and commercial service areas across Navi Mumbai." },
        { icon: "◎", title: "Paid Search Campaigns", description: "Google Ads and local intent campaigns to capture buyers while they search for your exact service." },
        { icon: "★", title: "Social Media Marketing", description: "Short-form content, audience engagement and brand visibility for Instagram, Facebook and beyond." },
        { icon: "◈", title: "Lead Funnels & Landing Pages", description: "Conversion-focused pages and forms that move visitors from interest to enquiry." },
        { icon: "✉", title: "Content Strategy", description: "User-focused content that explains your services clearly and improves trust and engagement." },
        { icon: "▲", title: "Performance Reporting", description: "Meaningful reporting on leads, call volume, cost efficiency and conversion trends." },
      ],
    },
    benefits: {
      heading: "Why Digital Marketing Works in Navi Mumbai",
      description: "A strong digital strategy helps you show up consistently when local buyers are looking for solutions.",
      items: [
        { title: "More Reach", description: "Target relevant cities, neighbourhoods and business audiences with stronger visibility." },
        { title: "Qualified Leads", description: "Reach people already searching for services you provide instead of relying only on word of mouth." },
        { title: "Better Budget Discipline", description: "Focus ad spend and content on the channels and audiences with real conversion potential." },
        { title: "Long-Term Growth", description: "Build search visibility and audience trust over time rather than one-off spikes." },
      ],
    },
    process: {
      heading: "Our Digital Marketing Process in Navi Mumbai",
      description: "A clear system designed to align strategy, customer intent and conversion data.",
      steps: [
        { number: "01", title: "Research", description: "We map your audience, competitors and the local buyer intent surrounding your service offer." },
        { number: "02", title: "Strategy", description: "We define the right mix of SEO, ads, content and conversion paths for your market." },
        { number: "03", title: "Execution", description: "Campaigns and content go live with consistent tracking and targeting in place." },
        { number: "04", title: "Optimization", description: "We refine performance based on conversion quality, budget efficiency and channel effectiveness." },
      ],
    },
    audience: {
      description: "This is ideal for business owners who want more enquiries, stronger presence and smarter use of marketing spend.",
      items: ["Clinics & Hospitals", "Real Estate Firms", "Schools & Education", "Hospitality & Travel", "Industrial Suppliers", "Commercial Service Brands", "Retail Stores", "Professional Services"],
    },
    faq: {
      heading: "Digital Marketing in Navi Mumbai — Common Questions",
      items: [
        { question: "Can you help businesses across multiple Navi Mumbai localities?", answer: "Yes. We can run campaigns and SEO plans focused on different service areas and audience segments depending on where your customers come from." },
        { question: "How do you measure results?", answer: "We track leads, calls, form fills, cost per lead and conversions using the best available reporting tools and tracking setup." },
        { question: "Do you work with manufacturers and industrial companies?", answer: "Yes. We support B2B visibility and lead generation for industrial dealers, suppliers and local service brands in and around Navi Mumbai." },
        { question: "Is there a minimum contract period?", answer: "SEO and content need time to mature, so we typically recommend a longer-term view for sustainable results while ad campaigns can start sooner." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Navi Mumbai?",
      description: "Let’s create a better digital marketing system that connects visibility with real business enquiries and revenue goals.",
      buttonText: "Get a Free Strategy Call",
    },
  }),

  createPage({
    service: "digital-marketing",
    location: "goa",
    slug: "digital-marketing-services-in-goa",
    metaTitle: "Digital Marketing Agency in Goa | Hotels, Villas & More",
    metaDescription:
      "Unicorn Nexus 360 offers digital marketing in Goa for hotels, restaurants, villas and local brands: SEO, social media, Google Ads, content and direct bookings.",
    hero: {
      eyebrow: "DIGITAL GROWTH",
      title: "Digital Marketing Agency in Goa: More Direct Bookings for Hotels, Restaurants and Local Brands",
      tagline: "Make Goa Visibility Work Harder for Your Business.",
      description:
        "Goa is a visual, seasonal market where tourists decide quickly. We help hotels, villas, restaurants and local businesses show up in the right places, tell the right story and turn demand into direct bookings and enquiries.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "A strong Goan marketing strategy reduces dependence on third-party platforms and builds direct demand",
      description:
        "Tourists compare your property, venue or service before they arrive. Strong digital marketing gives you more control over pricing, enquiry flow and conversion by building direct channels — website, social, search and WhatsApp.",
    },
    features: {
      heading: "What Our Digital Marketing in Goa Covers",
      description: "A practical mix of SEO, social, ads and content built for a seasonally driven market.",
      items: [
        { icon: "▤", title: "Hospitality SEO", description: "Target relevant location and booking searches such as villas, resorts, beach stays and dining experiences." },
        { icon: "◎", title: "Social Media & Reels", description: "Visual storytelling and creator partnerships that help your business stand out in a crowded tourism market." },
        { icon: "★", title: "Google & Meta Ads", description: "Seasonal campaigns designed for peak demand windows and tourist intent from key cities across India." },
        { icon: "◈", title: "Direct Booking Funnels", description: "Website, WhatsApp and email journeys designed to reduce commissions and increase conversions." },
        { icon: "✉", title: "Real Estate & Local Business Marketing", description: "Campaigns for villas, apartments, property developers, clinics, retailers and other local brands." },
        { icon: "▲", title: "Content & Visual Direction", description: "Photography guidance, creative strategy and storytelling that make your business more memorable and premium." },
      ],
    },
    benefits: {
      heading: "Why Goa Businesses Need Better Digital Marketing",
      description: "Goa rewards businesses that understand timing, visuals and direct customer intent.",
      items: [
        { title: "More Direct Bookings", description: "Drive people to your website, WhatsApp or direct enquiry channels instead of third-party platforms alone." },
        { title: "Seasonal Readiness", description: "Plan campaigns before peak demand so you capture visitors when they are most ready to book." },
        { title: "Stronger Brand Positioning", description: "Visual campaigns and content help your business stand out in a crowded tourism landscape." },
        { title: "Better Lead Quality", description: "Target the right travellers, local buyers and property investors with decision-ready messaging." },
      ],
    },
    process: {
      heading: "Our Goa Marketing Process",
      description: "We align marketing activity with the customer journey and the seasonality of the market.",
      steps: [
        { number: "01", title: "Market Review", description: "We assess your business, audience segments and current digital performance across Goa." },
        { number: "02", title: "Strategy Planning", description: "We decide the right mix of SEO, paid media, social and content for your business type." },
        { number: "03", title: "Campaign Launch", description: "We create and launch campaigns that connect to your website, social presence and enquiry flow." },
        { number: "04", title: "Optimization", description: "We adjust timing, messaging and spend based on seasonal performance and conversion data." },
      ],
    },
    audience: {
      description: "This works especially well for hospitality, property and tourism-focused businesses, as well as service brands that need local demand generation.",
      items: ["Hotels & Resorts", "Villas & Homestays", "Restaurants & Beach Clubs", "Tour Operators", "Real Estate Developers", "Wellness Brands", "Retail & Fashion", "Local Service Businesses"],
    },
    faq: {
      heading: "Digital Marketing in Goa — Common Questions",
      items: [
        { question: "How can digital marketing increase bookings in Goa?", answer: "By ranking higher on search, promoting your property or venue on social media and running highly targeted campaigns, you attract more direct enquiries and bookings." },
        { question: "When should I start campaigns for peak season?", answer: "We recommend starting several weeks or months in advance for the strongest seasonality advantage and enough time for content and audience build-up." },
        { question: "Do you support restaurants, beaches and hospitality brands?", answer: "Yes. We create campaigns and content that suit restaurants, beach clubs, hotels, villas and tourist experiences." },
        { question: "Is digital marketing worth it in the off-season?", answer: "Yes. Off-season is a strong time to improve SEO, social content and conversion funnels while targeting domestic travellers and local demand." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Goa?",
      description: "Let’s create a more effective digital marketing system for your business so the right customers find you and choose you.",
      buttonText: "Get a Free Strategy Call",
    },
  }),

  createPage({
    service: "digital-marketing",
    location: "nashik",
    slug: "digital-marketing-services-in-nashik",
    metaTitle: "Digital Marketing Company in Nashik | SEO & Lead Gen",
    metaDescription:
      "Unicorn Nexus 360 helps Nashik businesses grow with SEO, Google Ads, social media and lead generation. Get a free digital marketing audit today.",
    hero: {
      eyebrow: "DIGITAL GROWTH",
      title: "Digital Marketing Company in Nashik: Practical, ROI-Focused Growth for Local Businesses",
      tagline: "Turn Search, Social and Content into Real Business Opportunities.",
      description:
        "Nashik has a diverse economy across agriculture, tourism, healthcare, manufacturing and education. We help local businesses reach the right people with digital marketing that is designed around actual lead generation and long-term business growth.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "The Best Marketing in Nashik Doesn't Chase Trends — It Builds Results",
      description:
        "The city offers strong opportunity for early movers, but businesses still need a focused plan. Efficient SEO, strong local search visibility and conversion-focused campaigns create the foundation for sustained growth without wasted spend.",
    },
    features: {
      heading: "What Our Digital Marketing in Nashik Covers",
      description: "A balanced marketing system built for relevance, visibility and measurable enquiry generation.",
      items: [
        { icon: "▤", title: "SEO & Local Visibility", description: "Search-focused marketing to help businesses appear when customers are actively looking for services in Nashik." },
        { icon: "◎", title: "Google Ads & Search", description: "High-intent campaigns for local and service-based demand across the city and nearby markets." },
        { icon: "★", title: "Social Media Growth", description: "Build awareness and community engagement through a content plan suited to your market and audience." },
        { icon: "◈", title: "Lead Generation Systems", description: "Landing pages, calls-to-action and enquiry flows that convert interest into real conversations." },
        { icon: "✉", title: "Content & Brand Messaging", description: "Clear messaging and compelling content that help customers understand why they should choose you." },
        { icon: "▲", title: "Reports & Optimization", description: "Regular review of what drives calls, enquiries and conversions so budget is allocated smarter." },
      ],
    },
    benefits: {
      heading: "Why Nashik Businesses Benefit from Better Digital Marketing",
      description: "The best digital marketing strategy is the one that matches your market opportunity and buying behaviour.",
      items: [
        { title: "Greater Reach", description: "Appear more consistently to people searching for relevant services in Nashik and nearby markets." },
        { title: "Higher Quality Enquiries", description: "A more focused strategy attracts people who are more likely to buy, book or enquire." },
        { title: "Clearer Brand Positioning", description: "Digital visibility and messaging strengthen how people see your business and what they expect from it." },
        { title: "Smarter Marketing Spend", description: "Budget is directed toward channels and campaigns that show stronger performance." },
      ],
    },
    process: {
      heading: "How We Build Your Digital Growth in Nashik",
      description: "A simple structure that aligns strategy, execution and improvement loops.",
      steps: [
        { number: "01", title: "Audit", description: "We review your current marketing, competition, audience and opportunities in Nashik." },
        { number: "02", title: "Strategy", description: "We create the campaign and channel mix best suited to your business goals and service category." },
        { number: "03", title: "Launch", description: "Campaigns, content and landing pages go live with clear tracking and conversion paths." },
        { number: "04", title: "Improve", description: "We monitor results and make data-driven refinements so performance keeps getting better." },
      ],
    },
    audience: {
      description: "This works well for local businesses that want a stronger digital presence and better-quality leads without chaotic or inconsistent marketing.",
      items: ["Healthcare Clinics", "Restaurants & Caterers", "Hospitals & Wellness Brands", "Real Estate Firms", "Educational Institutes", "Manufacturing & B2B Companies", "Hotels & Event Venues", "Local Service Businesses"],
    },
    faq: {
      heading: "Digital Marketing in Nashik — Common Questions",
      items: [
        { question: "What channels should I start with in Nashik?", answer: "The right channel mix depends on your industry and goals, but local SEO, Google Ads and social media are often the most effective foundations for local growth." },
        { question: "How long does SEO take to show results?", answer: "Organic traffic and rankings usually improve gradually over a few months, while paid campaigns can begin producing results earlier." },
        { question: "Can you help with local business growth?", answer: "Yes. We help local businesses increase relevant local visibility and improve lead generation from search, social and website traffic." },
        { question: "Do you provide reports and strategy updates?", answer: "Yes. We keep communication clear and provide regular updates on performance, channel mix and where improvements are needed." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Nashik?",
      description: "Let’s build a digital marketing strategy that helps your business reach more buyers and convert more of them into actual enquiries.",
      buttonText: "Get a Free Strategy Call",
    },
  }),

  createPage({
    service: "website-development",
    location: "pune",
    slug: "website-development-company-in-pune",
    metaTitle: "Website Development Company in Pune | Business & SEO Websites",
    metaDescription:
      "Build a faster, stronger website in Pune with Unicorn Nexus 360. We create business, clinic, real estate and service websites designed for SEO and conversion.",
    hero: {
      eyebrow: "WEB DESIGN & DEVELOPMENT",
      title: "Website Development Company in Pune: Better Design, Better Conversion, Better Growth",
      tagline: "Turn Your Website Into a Real Business Asset.",
      description:
        "A strong website is often the difference between a local business that looks professional and one that loses leads to competitors. We build premium websites that look sharp, load fast and help users take action with confidence.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Your Website Should Help You Win Leads, Not Just Exist Online",
      description:
        "In Pune, a business website is often the first place a buyer checks before calling, booking or visiting. The right site creates trust, explains your offer clearly and supports your Google visibility through technical SEO and conversion-focused design.",
    },
    features: {
      heading: "What Our Website Development in Pune Covers",
      description: "Modern websites tailored to the way local businesses need to present themselves and convert attention into action.",
      items: [
        { icon: "▤", title: "Business Websites", description: "Professional company sites designed to explain your services clearly and support enquiries and calls." },
        { icon: "◎", title: "Clinic & Healthcare Websites", description: "Appointment-friendly sites with trust-building design, doctor profiles and service pages." },
        { icon: "★", title: "Real Estate Websites", description: "Project pages, lead forms, location details and property listings designed for local buyers." },
        { icon: "◈", title: "Corporate & B2B Sites", description: "Stronger brand positioning for manufacturers, service firms and professional businesses in Pune." },
        { icon: "✉", title: "Landing Pages & Campaign Sites", description: "High-converting pages for promotions, lead generation and digital marketing campaigns." },
        { icon: "▲", title: "SEO & Technical Optimization", description: "Speed, structure, technical setup and content foundations that support visibility and performance." },
      ],
    },
    benefits: {
      heading: "Why Website Development Matters in Pune",
      description: "A professional site does more than look good — it supports trust, lead generation and brand authority.",
      items: [
        { title: "Higher Credibility", description: "A polished website helps potential clients trust your business more quickly." },
        { title: "Better Lead Conversion", description: "Smart layouts, strong CTAs and clear messaging improve enquiry rates." },
        { title: "SEO Advantages", description: "Well-built pages support visibility in search and strengthen your online presence." },
        { title: "Long-Term Business Asset", description: "A useful website becomes a permanent digital asset for sales and customer communication." },
      ],
    },
    process: {
      heading: "How We Build Websites for Pune Businesses",
      description: "A structured process from planning and design to launch and performance improvements.",
      steps: [
        { number: "01", title: "Discovery", description: "We review your business goals, audience and the content needed to present your offer clearly." },
        { number: "02", title: "Design & Structure", description: "We design the layout and information architecture around conversion and user experience." },
        { number: "03", title: "Development", description: "We build the site to be fast, responsive and ready for business needs such as calls, contact forms and SEO." },
        { number: "04", title: "Launch & Support", description: "We go live, then refine performance, content and functionality as needed." },
      ],
    },
    audience: {
      description: "Ideal for business owners who want a professional, modern website that behaves like part of their sales team.",
      items: ["Clinics & Hospitals", "Local Service Brands", "Real Estate Companies", "Educational Institutes", "IT Businesses", "Retail Stores", "Manufacturing Firms", "Professional Service Providers"],
    },
    faq: {
      heading: "Website Development in Pune — Common Questions",
      items: [
        { question: "How long does a business website take to build?", answer: "Most sites take a few weeks depending on the complexity, content, number of pages and integrations required." },
        { question: "Can you build SEO-friendly websites?", answer: "Yes. We build with technical SEO foundations, page structure and conversion paths that support long-term visibility." },
        { question: "Do you build websites for real estate or clinics?", answer: "Yes. We create specialized layouts and forms that suit your industry, lead flow and user expectations." },
        { question: "Will the site work on mobile?", answer: "Yes. Every website is designed to be mobile-friendly and tested across modern devices and screen sizes." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Pune?",
      description: "Let’s create a website that looks credible, works smoothly and helps more people choose your business.",
      buttonText: "Book a Free Consultation",
    },
  }),

  createPage({
    service: "website-development",
    location: "navi-mumbai",
    slug: "website-development-company-in-navi-mumbai",
    metaTitle: "Website Development Company in Navi Mumbai | Business Websites",
    metaDescription:
      "Build a faster, SEO-friendly website for your Navi Mumbai business with Unicorn Nexus 360. We create design-led websites that generate enquiries and support growth.",
    hero: {
      eyebrow: "WEB DESIGN & DEVELOPMENT",
      title: "Website Development Company in Navi Mumbai: High-Performance Websites That Convert",
      tagline: "Build a Website That Works Harder for Your Business.",
      description:
        "From Vashi and Kharghar to Nerul and Panvel, businesses in Navi Mumbai need websites that present their offer clearly, establish trust and encourage action. We build responsive, high-performance websites for businesses ready to grow online.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Your Website Is the Digital Foundation Behind Every Local Search and Lead",
      description:
        "When customers search for your service, they often end at your website. A poorly designed or slow-loading site can lose trust immediately. A well-built site helps you turn attention into enquiries and support your organic visibility efforts.",
    },
    features: {
      heading: "What Our Website Development in Navi Mumbai Covers",
      description: "Websites created for trust, speed and conversion — built to match the needs of local and business customer segments.",
      items: [
        { icon: "▤", title: "Corporate & Business Websites", description: "Professional websites for service companies, manufacturers and growing brands looking to present a stronger digital front." },
        { icon: "◎", title: "Clinic & Healthcare Sites", description: "Patient-friendly website experiences with clear service pages, contact flow and trust-building visuals." },
        { icon: "★", title: "Real Estate & Project Pages", description: "Lead-focused property websites with galleries, project sections and enquiry forms for buyers and investors." },
        { icon: "◈", title: "E-commerce & Catalog Sites", description: "Product-focused websites for local brands and B2B companies that need a clear online sales channel." },
        { icon: "✉", title: "Landing Pages & Campaign Sites", description: "Focused pages for digital marketing, promotions and high-intent lead generation." },
        { icon: "▲", title: "SEO & Speed Optimization", description: "Technical foundations that improve page speed, structure and search visibility from day one." },
      ],
    },
    benefits: {
      heading: "Why Navi Mumbai Businesses Need Better Websites",
      description: "A modern website is a core business asset — not just a digital brochure.",
      items: [
        { title: "Stronger Brand Trust", description: "Well-designed sites help visitors understand your business and feel confident engaging with you." },
        { title: "More Qualified Leads", description: "Good structure and clear CTAs improve enquiry quality and conversion flow." },
        { title: "Improved Search Readiness", description: "SEO-friendly architecture supports search positions and content visibility optimization." },
        { title: "Business Scalability", description: "A strong site gives you a foundation for campaigns, offers and future growth." },
      ],
    },
    process: {
      heading: "How We Build Websites for Navi Mumbai Businesses",
      description: "The process is designed to keep projects strategic, clear and conversion-focused.",
      steps: [
        { number: "01", title: "Discovery", description: "We understand your business, audience and the main actions you want the website to drive." },
        { number: "02", title: "Structure & Design", description: "We map the page flow and visual system around clarity, trust and business goals." },
        { number: "03", title: "Development", description: "We build the site with responsive design, speed, SEO foundations and required functionality." },
        { number: "04", title: "Launch & Support", description: "We help you launch smoothly and refine content or improvements after the site goes live." },
      ],
    },
    audience: {
      description: "Useful for businesses that need a polished online presence, local trust, and a stronger lead generation workflow.",
      items: ["Real Estate Developers", "Clinics & Hospitals", "Logistics & Trading Firms", "Schools & Coaching Centers", "Professional Service Brands", "Restaurants & Retail", "Manufacturing Businesses", "Commercial Services"],
    },
    faq: {
      heading: "Website Development in Navi Mumbai — Common Questions",
      items: [
        { question: "How much does a website cost in Navi Mumbai?", answer: "Cost depends on the pages, design complexity, functionality, integrations and content required. We provide a tailored quote after understanding your needs." },
        { question: "Do you build websites for real estate projects?", answer: "Yes. We build lead-focused real estate and project websites with galleries, floor plans and enquiry flows for investors and buyers." },
        { question: "Can you optimize my site for local search?", answer: "Yes. We include on-page structure, local SEO fundamentals and pages designed around your service area and intent." },
        { question: "Will the website work well on mobile?", answer: "Yes. Every project is mobile-first and tested across multiple device sizes and breakpoints." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Navi Mumbai?",
      description: "Let’s build a website that makes your business look credible and helps more people contact you, buy or enquire.",
      buttonText: "Book a Free Consultation",
    },
  }),

  createPage({
    service: "website-development",
    location: "goa",
    slug: "website-development-company-in-goa",
    metaTitle: "Website Development Company in Goa | Hotel & Villa Websites",
    metaDescription:
      "Unicorn Nexus 360 builds fast, beautiful websites for Goa hotels, villas, restaurants and businesses with booking integration and SEO built in.",
    hero: {
      eyebrow: "WEB DESIGN & DEVELOPMENT",
      title: "Website Development Company in Goa: Beautiful, High-Converting Websites for Hospitality and Local Brands",
      tagline: "Your Website Should Feel as Premium as Your Business.",
      description:
        "In Goa, your website is often the first impression a guest or buyer gets before they choose you. We build premium websites for hospitality, property and local businesses that need to look beautiful, load fast and convert more inquiries.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "Booking-ready websites help Goa businesses reduce dependence on third-party platforms",
      description:
        "A slow or confusing website loses visitors quickly. Your website should help people browse rooms, compare options, read your story and take action without friction — whether that action is a booking, a call, or a WhatsApp enquiry.",
    },
    features: {
      heading: "What Our Website Development in Goa Covers",
      description: "Website design and development solutions for hospitality, property, and local brands seeking stronger enquiry conversion.",
      items: [
        { icon: "▤", title: "Hotel & Villa Websites", description: "Property pages, room details, booking sections and trust-focused design that helps visitors convert faster." },
        { icon: "◎", title: "Restaurant & Cafe Sites", description: "Menus, events, booking or table reservation flow and visual storytelling that convert interest into action." },
        { icon: "★", title: "Tour & Activity Websites", description: "Package pages, itinerary sections and inquiry pages designed for seasonal travel demand." },
        { icon: "◈", title: "Real Estate & Property Websites", description: "Lead generation websites for villas, apartments, land and investment-focused property brands." },
        { icon: "✉", title: "E-commerce & Local Product Stores", description: "Stores for Goan brands and products that need a modern commerce experience with shipping and conversion flow." },
        { icon: "▲", title: "Speed & SEO Foundations", description: "Fast, image-aware and search-ready websites built to support Google visibility and better user experience." },
      ],
    },
    benefits: {
      heading: "Why Website Development Matters in Goa",
      description: "A business with a sharp website can capture more direct demand from tourists, locals and investors.",
      items: [
        { title: "More Direct Bookings", description: "Reduce commissions and capture more guests or buyers directly through your own site." },
        { title: "Premium Brand Presentation", description: "Strong visuals and cleaner layouts create a more trusted, premium feel for tourists." },
        { title: "Higher Conversion Rate", description: "Clear structure and calls-to-action result in more enquiries, bookings and quote requests." },
        { title: "Longer-Term Visibility", description: "Good SEO foundations help your site support broader digital marketing efforts in Goa." },
      ],
    },
    process: {
      heading: "How We Develop Websites in Goa",
      description: "A smooth process from strategy to launch, with a focus on a premium user experience.",
      steps: [
        { number: "01", title: "Discovery", description: "We understand your business type, target audience and critical pages or actions needed on the site." },
        { number: "02", title: "Design & Planning", description: "We map the site around trust, conversion goals and the kind of content customers need to see." },
        { number: "03", title: "Build & Optimize", description: "We implement the design with responsive layouts, speed optimization and conversion features." },
        { number: "04", title: "Launch & Refine", description: "After launch, we refine structure, pages and content based on performance and business feedback." },
      ],
    },
    audience: {
      description: "This is ideal for tourism businesses, property brands and local companies that need to convert visitors into bookings or enquiries.",
      items: ["Hotels & Resorts", "Villas & Homestays", "Restaurants & Beach Clubs", "Tour Operators", "Real Estate Developers", "Wellness Brands", "Retail & Fashion Providers", "Local Service Businesses"],
    },
    faq: {
      heading: "Website Development in Goa — Common Questions",
      items: [
        { question: "Can you build a website with a booking system for my Goa villa?", answer: "Yes. We can integrate booking and lead capture flows and connect them to your enquiry or reservation workflow." },
        { question: "Will the site still load fast with many photos?", answer: "Yes. We optimize images, use performance-friendly formats and improve page speed so a photo-heavy site still feels fast." },
        { question: "Do you build multilingual websites?", answer: "Yes. We can create multilingual experiences that help international and domestic travellers more easily understand your offer." },
        { question: "Will you help with content and photography?", answer: "Yes. We can guide the content flow and coordinate visuals so your site feels premium and conversion-focused." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Goa?",
      description: "Let’s create a website that looks polished, feels premium and helps more travellers and buyers choose your business.",
      buttonText: "Book a Free Consultation",
    },
  }),

  createPage({
    service: "website-development",
    location: "nashik",
    slug: "website-development-company-in-nashik",
    metaTitle: "Website Development Company in Nashik | Business Websites",
    metaDescription:
      "Build a strong website in Nashik with Unicorn Nexus 360. We create conversion-focused websites for healthcare, property, education and local business brands.",
    hero: {
      eyebrow: "WEB DESIGN & DEVELOPMENT",
      title: "Website Development Company in Nashik: Build a Stronger Digital Presence",
      tagline: "Create a Website That Makes Your Business Look Trustworthy and Ready to Grow.",
      description:
        "Nashik businesses need more than just a brochure site — they need a digital platform that supports trust, local visibility and enquiries. We build websites designed for clarity, conversion and long-term business growth.",
    },
    overview: {
      eyebrow: "WHY IT MATTERS",
      title: "A good website helps Nashik businesses convert local interest into real business opportunities",
      description:
        "People in Nashik increasingly research businesses online before making a call, visiting a clinic or choosing a service provider. A high-quality website helps you look established, explain your offer and support your broader marketing efforts.",
    },
    features: {
      heading: "What Our Website Development in Nashik Covers",
      description: "Business-ready websites created to help companies explain what they do, build trust and convert visitors into leads.",
      items: [
        { icon: "▤", title: "Business & Service Websites", description: "Professional websites that clearly explain your offer and make enquiries easier to take action on." },
        { icon: "◎", title: "Healthcare & Clinic Sites", description: "Appointment-focused and trust-rich websites for clinics, hospitals and specialist practices." },
        { icon: "★", title: "Education & Coaching Websites", description: "Sites that highlight programs, faculty, facilities and admissions detail without clutter." },
        { icon: "◈", title: "Real Estate & Property Sites", description: "Lead-generation websites for developers, brokers and local real estate brands." },
        { icon: "✉", title: "Landing Pages & Campaign Sites", description: "Conversion-focused pages for business growth campaigns and lead generation initiatives." },
        { icon: "▲", title: "SEO & Maintenance", description: "Technical setup, speed optimization and ongoing support to keep your website performing." },
      ],
    },
    benefits: {
      heading: "Why Nashik Businesses Need Quality Website Development",
      description: "A website should be a sales tool, not just a digital placeholder.",
      items: [
        { title: "Better First Impressions", description: "Customers judge your business quickly based on your design, messaging and clarity online." },
        { title: "Higher Enquiry Conversion", description: "Strong calls-to-action and clear information help turn interest into action." },
        { title: "Local Trust Building", description: "A professional site builds confidence with local buyers and decision-makers." },
        { title: "More Sustainable Growth", description: "Websites support SEO, ads, social media and business development over the longer term." },
      ],
    },
    process: {
      heading: "How We Build Websites for Nashik Businesses",
      description: "From planning to launch, we keep the process practical and focused on business needs.",
      steps: [
        { number: "01", title: "Discovery", description: "We understand your business, competitive market and the goals for your online presence." },
        { number: "02", title: "Planning", description: "We define the page structure, design direction and key conversion journey for the website." },
        { number: "03", title: "Build & Test", description: "We create a fast, responsive site with the features and content needed for your customers." },
        { number: "04", title: "Launch & Improve", description: "We go live and then refine based on performance, user feedback and business growth needs." },
      ],
    },
    audience: {
      description: "Ideal for businesses that need a reliable and modern online presence to support trust, lead generation and long-term growth.",
      items: ["Clinics & Hospitals", "Educational Institutes", "Real Estate Firms", "Hotels & Event Venues", "Manufacturing & Suppliers", "Food & Hospitality Brands", "Service Providers", "Professional Businesses"],
    },
    faq: {
      heading: "Website Development in Nashik — Common Questions",
      items: [
        { question: "How much does a website cost in Nashik?", answer: "The cost depends on the features, design complexity, number of pages and integrations required. We tailor the solution to your business goals." },
        { question: "Can you build websites for clinics and hospitals?", answer: "Yes. We build patient-friendly sites with relevant service pages, doctor profiles and clear appointment or enquiry flow." },
        { question: "Will the website be mobile-friendly?", answer: "Yes. Every website is built to work effectively on phones, tablets and desktop screens." },
        { question: "Will you help with SEO after launch?", answer: "Yes. We can support technical SEO, content structure and continued optimization to help the site perform better over time." },
      ],
    },
    cta: {
      eyebrow: "READY TO GROW?",
      title: "Ready to grow in Nashik?",
      description: "Let’s build a site that supports your credibility, improves enquiry flow and gives your business a stronger online foundation.",
      buttonText: "Book a Free Consultation",
    },
  }),
];

export function getLocationPage(service: string, location: string) {
  return locationPages.find((page) => page.service === service && page.location === location);
}

export function getLocationPageBySlug(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

export function getLocationPagesForService(service: string) {
  return locationPages.filter((page) => page.service === service);
}
