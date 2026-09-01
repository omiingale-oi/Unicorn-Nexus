import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

// TODO: replace with your real production domain
const SITE_URL = "https://www.unicornnexus360.com";

export const metadata: Metadata = {
  title: "About Unicorn Nexus 360 | Digital Marketing & Google Maps Services",
  description:
    "Learn about Unicorn Nexus 360 and our digital marketing, Google Maps, Google Business Profile, AI marketing, website development and social media solutions for businesses across India.",
  keywords: [
    "About Unicorn Nexus",
    "digital marketing company India",
    "Google Maps services India",
    "Google Business Profile management",
    "AI marketing India",
    "website development India",
    "social media management India",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Unicorn Nexus 360",
    description:
      "Digital marketing, Google Maps, Google Business Profile, AI marketing, website development and social media solutions for businesses across India.",
    url: `${SITE_URL}/about`,
    siteName: "Unicorn Nexus 360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Unicorn Nexus 360",
    description:
      "Digital marketing, Google Maps, Google Business Profile, AI marketing, website development and social media solutions for businesses across India.",
  },
};

const approach = [
  {
    number: "01",
    title: "Be Found",
    description:
      "Strengthen your presence across Google and the digital platforms where customers search.",
    icon: "⌖",
  },
  {
    number: "02",
    title: "Build Trust",
    description:
      "Present your business professionally with a consistent and credible digital presence.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Use Technology",
    description:
      "Bring modern digital tools and AI-driven strategies into your marketing process.",
    icon: "AI",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Turn stronger visibility and engagement into enquiries and business opportunities.",
    icon: "↗",
  },
];

const services = [
  "Google Map Services",
  "Google Business Profile Management",
  "Digital Marketing",
  "AI Marketing",
  "Website Development",
  "Social Media Management",
  "Real Estate Marketing",
];

const whyChooseUs = [
  {
    number: "01",
    title: "Business-Focused Strategy",
    description:
      "Our digital solutions are structured around your business goals, audience and market.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Google Visibility",
    description:
      "We focus on improving how businesses appear and present themselves across Google.",
    icon: "⌖",
  },
  {
    number: "03",
    title: "AI-Driven Solutions",
    description:
      "Modern AI tools can make marketing processes smarter, more efficient and more scalable.",
    icon: "AI",
  },
  {
    number: "04",
    title: "Complete Digital Support",
    description:
      "From visibility and marketing to websites and social media, multiple needs can be managed together.",
    icon: "360°",
  },
];

const process = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Understand Your Presence",
    description:
      "We identify your current digital presence, important platforms and opportunities for improvement.",
  },
  {
    number: "02",
    label: "OPTIMIZE",
    title: "Strengthen Your Foundation",
    description:
      "We improve key digital assets and create a stronger foundation for visibility and customer trust.",
  },
  {
    number: "03",
    label: "ENGAGE",
    title: "Reach Your Audience",
    description:
      "Digital marketing, social media and AI-supported strategies help you communicate with the right audience.",
  },
  {
    number: "04",
    label: "GROW",
    title: "Create Opportunities",
    description:
      "The objective is to turn a stronger digital presence into meaningful enquiries and business opportunities.",
  },
];

const industries = [
  {
    number: "01",
    title: "Schools & Education",
    image: "/industries/schools.jpeg",
  },
  {
    number: "02",
    title: "Hospitals & Healthcare",
    image: "/industries/hospitals.webp",
  },
  {
    number: "03",
    title: "Manufacturing",
    image: "/industries/manufacturing.jpeg",
  },
  {
    number: "04",
    title: "Hotels & Resorts",
    image: "/industries/hotels.jpeg",
  },
  {
    number: "05",
    title: "IT & Technology",
    image: "/industries/technology.webp",
  },
  {
    number: "06",
    title: "Real Estate",
    image: "/industries/real-estate.jpeg",
  },
  {
    number: "07",
    title: "Political Leaders",
    image: "/industries/political.jpeg",
  },
  {
    number: "08",
    title: "Commercial Businesses",
    image: "/industries/commercial.webp",
  },
];

const clients = [
  {
    name: "PCMC Mayor Office",
    category: "Government",
    logo: "/clients/pcmc-mayor-office.jpeg",
  },
  {
    name: "URO Kids School",
    category: "Education",
    logo: "/clients/uro-kids-school.png",
  },
  {
    name: "Sarthak English Medium School",
    category: "Education",
    logo: "/clients/sarthak-english-medium-school.jpg",
  },
  {
    name: "Yellow Stone Resort",
    category: "Hospitality",
    logo: "/clients/yellow-stone-resort.png",
  },
  {
    name: "Saidham Multispecialist Hospital",
    category: "Healthcare",
    logo: "/clients/saidham-multispecialist-hospital.png",
  },
  {
    name: "Nexus Automotive",
    category: "Automotive",
    logo: "/clients/nexus-automotive.png",
  },
  {
    name: "Kedar Engineering",
    category: "Engineering",
    logo: "/clients/kedar-engineering.png",
  },
  {
    name: "Shraddha Management Consultancy",
    category: "Business Consultancy",
    logo: "/clients/shraddha-management-consultancy.jpeg",
  },
];

const testimonials = [
  {
    quote:
      "The team helped us build a stronger and more professional digital presence.",
    name: "URO Kids School",
    category: "Education",
  },
  {
    quote:
      "Professional service and a clear focus on improving our online visibility.",
    name: "Sarthak English Medium School",
    category: "Education",
  },
  {
    quote:
      "Our digital presence is much more professional and easier for customers to discover.",
    name: "Yellow Stone Resort",
    category: "Hospitality",
  },
  {
    quote:
      "Practical digital solutions with a strong focus on business visibility.",
    name: "Shraddha Management Consultancy",
    category: "Business Consultancy",
  },
];

// Structured data so search engines can read these as genuine reviews
// (potential star-rating rich snippets in search results).
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Unicorn Nexus 360",
  url: SITE_URL,
  review: testimonials.map((testimonial) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: testimonial.name,
    },
    reviewBody: testimonial.quote,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: testimonials.length,
  },
};

// Rendered twice back-to-back so the marquee loop is seamless.
const marqueeTestimonials = [...testimonials, ...testimonials];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={`${styles.heroGlow} ${styles.heroGlowOne}`} />
        <div className={`${styles.heroGlow} ${styles.heroGlowTwo}`} />

        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <div className={styles.label}>
                ABOUT UNICORN NEXUS 360
              </div>

              <h1>
                Building Stronger
                <br />
                <span>Digital Visibility.</span>
              </h1>

              <p>
                Unicorn Nexus 360 helps businesses become easier to discover,
                understand and trust through connected digital solutions.
              </p>

              <div className={styles.heroMeta}>
                <span>GOOGLE</span>
                <span>AI</span>
                <span>DIGITAL</span>
                <span>WEB</span>
                <span>SOCIAL</span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={`${styles.orbit} ${styles.orbitOne}`} />
              <div className={`${styles.orbit} ${styles.orbitTwo}`} />
              <div className={`${styles.orbit} ${styles.orbitThree}`} />

              <div className={styles.visualCore}>
                <span>UNICORN</span>
                <strong>NEXUS</strong>
                <small>360° DIGITAL VISIBILITY</small>
              </div>

              <span className={`${styles.orbitPoint} ${styles.pointOne}`} />
              <span className={`${styles.orbitPoint} ${styles.pointTwo}`} />
              <span className={`${styles.orbitPoint} ${styles.pointThree}`} />
              <span className={`${styles.orbitPoint} ${styles.pointFour}`} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoColumn}>
            <div>
              <div className={styles.label}>WHO WE ARE</div>

              <h2>
                Digital Visibility
                <br />
                <span>With a Purpose.</span>
              </h2>
            </div>

            <div className={styles.content}>
              <p>
                Customers are already searching online. We help businesses
                build a stronger presence where those customers are looking.
              </p>

              <p>
                Unicorn Nexus 360 brings Google Maps, Google Business Profile
                management, digital marketing, AI marketing, website
                development, social media and real estate marketing together.
              </p>

              <p>
                Our focus is simple: create a connected digital presence that
                supports visibility, trust and business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}

      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionGrid} />

        <div className={styles.container}>
          <div className={styles.heading}>
            <div className={styles.label}>OUR APPROACH</div>

            <h2>
              From Visibility
              <br />
              to <span>Business Growth.</span>
            </h2>

            <p>
              We connect the important parts of your digital presence instead
              of treating every platform as a separate activity.
            </p>
          </div>

          <div className={styles.approachGrid}>
            {approach.map((item) => (
              <article className={styles.approachCard} key={item.number}>
                <div className={styles.cardTop}>
                  <span>{item.number}</span>
                  <strong>{item.icon}</strong>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoColumn}>
            <div>
              <div className={styles.label}>WHAT WE DO</div>

              <h2>
                Complete Digital
                <br />
                <span>Solutions.</span>
              </h2>
            </div>

            <div className={styles.serviceContent}>
              <p>
                Our services cover the core areas businesses need to create,
                manage and improve their digital presence.
              </p>

              <div className={styles.serviceList}>
                {services.map((service, index) => (
                  <div className={styles.serviceItem} key={service}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{service}</strong>

                    <span className={styles.serviceArrow}>↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className={`${styles.section} ${styles.whySection}`}>
        <div className={styles.container}>
          <div className={styles.headingRow}>
            <div>
              <div className={styles.label}>WHY CHOOSE US</div>

              <h2>
                More Than Marketing.
                <br />
                We Build <span>Visibility.</span>
              </h2>
            </div>

            <p>
              A strong digital presence works as one connected system. We
              combine strategy, technology and creativity around your business.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((item) => (
              <article className={styles.whyCard} key={item.number}>
                <div className={styles.whyCardTop}>
                  <span>{item.number}</span>
                  <strong>{item.icon}</strong>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className={styles.cardArrow}>↗</span>
              </article>
            ))}
          </div>

          <div className={styles.statsStrip}>
            <div>
              <strong>360°</strong>
              <span>Digital Approach</span>
            </div>

            <div>
              <strong>7+</strong>
              <span>Digital Services</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Driven Solutions</span>
            </div>

            <div>
              <strong>INDIA</strong>
              <span>Wide Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionGrid} />

        <div className={styles.container}>
          <div className={styles.headingRow}>
            <div>
              <div className={styles.label}>HOW IT WORKS</div>

              <h2>
                A Clear Path
                <br />
                to <span>Growth.</span>
              </h2>
            </div>

            <p>
              We move from understanding your current presence to creating
              stronger digital visibility and business opportunities.
            </p>
          </div>

          <div className={styles.process}>
            {process.map((item, index) => (
              <article className={styles.processItem} key={item.number}>
                <div className={styles.processNumber}>
                  {item.number}
                </div>

                <div className={styles.processBody}>
                  <span>{item.label}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className={styles.processLine} />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.headingRow}>
            <div>
              <div className={styles.label}>INDUSTRIES WE SERVE</div>

              <h2>
                Digital Solutions
                <br />
                Across <span>Industries.</span>
              </h2>
            </div>

            <p>
              We work with organizations across different sectors and adapt
              digital strategies to their audience and business objectives.
            </p>
          </div>

          <div className={styles.industryGrid}>
            {industries.map((industry) => (
              <article
                className={styles.industryCard}
                key={industry.number}
              >
                <Image
                  src={industry.image}
                  alt={`${industry.title} digital marketing`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.industryImage}
                />

                <div className={styles.industryOverlay} />

                <span className={styles.industryNumber}>
                  {industry.number}
                </span>

                <div className={styles.industryContent}>
                  <h3>{industry.title}</h3>
                  <span>Explore Digital Solutions ↗</span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.moreIndustries}>
            <strong>AND MORE</strong>
            <span>
              Digital support for businesses across different sectors,
              locations and markets.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLIENTS
      ========================================================= */}

      <section className={`${styles.section} ${styles.clientsSection}`}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <div className={styles.label}>OUR CLIENTS</div>

            <h2>
              Businesses That
              <br />
              <span>Trust Us.</span>
            </h2>

            <p>
              Our experience spans education, healthcare, hospitality,
              automotive, engineering, consultancy and other business sectors.
            </p>
          </div>

          <div className={styles.clientsGrid}>
            {clients.map((client) => (
              <article className={styles.clientCard} key={client.name}>
                <div className={styles.clientLogo}>
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={180}
                    height={100}
                  />
                </div>

                <div className={styles.clientInfo}>
                  <h3>{client.name}</h3>
                  <span>{client.category}</span>
                </div>

                <span className={styles.clientArrow}>↗</span>
              </article>
            ))}
          </div>

          <div className={styles.clientCount}>
            <strong>1000+</strong>
            <span>Clients & business relationships</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionGrid} />

        <div className={styles.container}>
          <div className={styles.headingRow}>
            <div>
              <div className={styles.label}>TESTIMONIALS</div>

              <h2>
                What Businesses
                <br />
                <span>Say About Us.</span>
              </h2>
            </div>

            <p>
              Feedback from businesses that have worked with Unicorn Nexus 360
              to strengthen their digital presence.
            </p>
          </div>
        </div>

        <div className={styles.testimonialMarquee}>
          <div className={styles.testimonialTrack}>
            {marqueeTestimonials.map((testimonial, index) => {
              const isDuplicate = index >= testimonials.length;

              return (
                <article
                  className={styles.testimonialCard}
                  key={`${testimonial.name}-${index}`}
                  aria-hidden={isDuplicate}
                >
                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>

                  <blockquote className={styles.testimonialQuote}>
                    “{testimonial.quote}”
                  </blockquote>

                  <div className={styles.testimonialBottom}>
                    <div className={styles.avatar}>
                      {testimonial.name
                        .split(" ")
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.category}</span>
                    </div>
                  </div>

                  <span className={styles.testimonialNumber}>
                    0{(index % testimonials.length) + 1}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className={styles.cta}>
        <div className={styles.ctaGlow} />

        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.label}>LET&apos;S WORK TOGETHER</div>

            <h2>
              Ready to Make Your
              <br />
              Business <span>More Visible?</span>
            </h2>

            <p>
              Tell us about your business and let&apos;s find the right digital
              strategy for your goals.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Grow Your Business <span>→</span>
              </Link>

              <Link href="/" className={styles.secondaryButton}>
                Return to Homepage <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}