import Image from "next/image";
import Link from "next/link";
import ContactSection from "./components/ContactSection";
const trustPoints = [
  "Google Map Services",
  "AI Marketing",
  "Digital Marketing",
  "Google My Business Profile Management",
  "Website Development",
  "Social Media Management",
  "Real Estate Marketing",
];

const services = [
  {
    number: "01",
    title: "Google Map Services",
    description:
      "Build stronger local visibility and help your business get discovered when customers search on Google Maps.",
    href: "/services/google-map-services",
    featured: true,
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions designed to increase visibility, reach the right audience and generate opportunities.",
    href: "/services/digital-marketing",
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Create a consistent social presence with engaging content, strategic planning and professional account management.",
    href: "/services/social-media-management",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "Modern, responsive websites designed to represent your business professionally and convert visitors into customers.",
    href: "/services/website-development",
  },
  {
    number: "05",
    title: "AI Marketing",
    description:
      "Use AI-powered strategies and digital tools to improve marketing efficiency, visibility and customer engagement.",
    href: "/services/ai-marketing",
  },
  {
    number: "06",
    title: "Google Business Profile Management",
    description:
      "Professional management of your Google Business Profile to strengthen local presence and customer trust.",
    href: "/services/google-business-profile-management",
  },
  {
    number: "07",
    title: "Real Estate Marketing",
    description:
      "Digital marketing strategies built specifically to help real estate businesses reach buyers, investors and enquiries.",
    href: "/services/real-estate-marketing",
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
    category: "Hospitality • Goa",
    logo: "/clients/yellow-stone-resort.png",
   
  },
  {
    name: "Saidham Multispecialist Hospital",
    category: "Healthcare • Bhosari",
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

export default function Home() {
  return (
    <main>
      {/* HERO */}

      <section className="hero" id="home">
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="pulse-dot" />
            DIGITAL VISIBILITY • REAL BUSINESS GROWTH
          </div>

          <h1>
            Show Your Business
            <br />
            to the <span>World</span>
          </h1>

          <p>
            Virtually Real, Digitally Visible. We help businesses build
            stronger digital visibility through Google Maps, digital
            marketing, AI marketing, websites, social media and more.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="primary-btn">
              Grow Your Business
              <span>→</span>
            </Link>

            <Link
              href="/services/google-map-services"
              className="secondary-btn"
            >
              Explore Google Map Services
              <span>↗</span>
            </Link>
          </div>

          {/* TRUST POINTS */}

          <div className="trust-row">
            {trustPoints.map((point) => (
              <div className="trust-item" key={point}>
                <span className="trust-star">★</span>
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* HERO VISUAL */}

        <div className="hero-visual">
          <div className="india-map-wrap">
            <div className="india-map-glow" />

            <Image
              src="/india-map.webp"
              alt="India digital connectivity map"
              className="india-map"
              width={390}
              height={520}
              priority
            />
            {/* Main connection point */}
            <div className="india-center-point">
              <span />
            </div>

            {/* Connection points */}
            <div className="india-point india-point-1" />
            <div className="india-point india-point-2" />
            <div className="india-point india-point-3" />
            <div className="india-point india-point-4" />
            <div className="india-point india-point-5" />

            {/* Animated connection lines */}
            <div className="india-line india-line-1" />
            <div className="india-line india-line-2" />
            <div className="india-line india-line-3" />
            <div className="india-line india-line-4" />

            <div className="india-map-label">
              <span>UNICORN NEXUS 360</span>
              <strong>CONNECTED</strong>
              <small>ACROSS INDIA</small>
            </div>

            <div className="map-service-tag tag-ai">AI</div>
            <div className="map-service-tag tag-digital">DIGITAL</div>
            <div className="map-service-tag tag-google">GOOGLE</div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}

      <section className="about-preview" id="about">
        <div className="section-container">
          <div className="about-grid">
            {/* VISUAL */}

            <div className="about-visual">
              <div className="about-orb" />

              <div className="about-card">
                <span>UNICORN</span>

                <strong>NEXUS</strong>

                <small>360° DIGITAL VISIBILITY</small>
              </div>
            </div>

            {/* CONTENT */}

            <div className="about-content">
              <div className="section-label">ABOUT US</div>

              <h2>
                We Make Your
                <br />
                Business <span>Digitally Visible.</span>
              </h2>

              <p>
                Unicorn Nexus 360 helps businesses build a stronger digital
                presence and connect with customers in the places where they
                are already searching.
              </p>

              <p>
                From Google Maps and Google Business Profile management to
                digital marketing, AI marketing, websites, social media and
                real estate marketing, we bring multiple digital solutions
                together under one roof.
              </p>

              <p>
                Our approach focuses on creating a professional online
                presence that builds visibility, trust and meaningful
                business opportunities.
              </p>

              <Link href="/about" className="text-link">
                Discover More About Us
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section" id="services">
        <div className="section-container">

          <div className="section-heading">
            <div className="section-label">OUR SERVICES</div>

            <h2>
              Digital Solutions Built
              <br />
              for <span>Business Growth.</span>
            </h2>

            <p>
              From local visibility to complete digital marketing, we provide
              the services your business needs to build, manage and grow its
              online presence.
            </p>
          </div>

          <div className="services-grid">
            {services.slice(0, 6).map((service) => (
              <Link
                href={service.href}
                key={service.number}
                className={`service-card ${
                  service.featured ? "service-featured" : ""
                }`}
              >
                <div className="service-top">
                  <span>{service.number}</span>

                  <span className="service-arrow">↗</span>
                </div>

                <div className="service-icon">
                  {service.featured ? "⌖" : "✦"}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="learn-more">
                  Explore Service
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* VIEW ALL SERVICES */}

          <div className="services-bottom">
            <Link href="/services" className="services-view-button">
              View Our Services
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>
      {/* WHY CHOOSE US */}

      <section className="why-section" id="why-choose-us">
        <div className="why-grid-bg" />

        <div className="section-container">
          <div className="why-header">
            <div>
              <div className="section-label">WHY CHOOSE US</div>

              <h2>
                More Than Marketing.
                <br />
                We Build <span>Visibility.</span>
              </h2>
            </div>

            <p>
              Your digital presence should work together as one powerful system.
              We combine technology, creativity and strategy to help businesses
              become easier to discover, trust and choose.
            </p>
          </div>

          <div className="why-layout">
            {/* MAIN FEATURE */}

            <div className="why-feature">
              <div className="feature-number">01</div>

              <div className="feature-icon">✦</div>

              <h3>
                Built Around
                <br />
                <span>Your Business.</span>
              </h3>

              <p>
                We do not believe in one-size-fits-all digital marketing. Every
                business has different goals, customers and challenges. Our
                solutions are structured around what your business actually needs.
              </p>

              <div className="feature-line">
                <span />
              </div>

              <div className="feature-bottom">
                <span>STRATEGY</span>
                <span>VISIBILITY</span>
                <span>GROWTH</span>
              </div>
            </div>

            {/* BENEFIT CARDS */}

            <div className="why-cards">
              <div className="why-card">
                <div className="why-card-top">
                  <span className="why-icon">⌖</span>
                  <span className="why-number">02</span>
                </div>

                <h3>Google Visibility</h3>

                <p>
                  Strengthen your presence across Google Maps and Google Business
                  Profile so customers can discover your business more easily.
                </p>

                <span className="card-arrow">↗</span>
              </div>

              <div className="why-card">
                <div className="why-card-top">
                  <span className="why-icon">AI</span>
                  <span className="why-number">03</span>
                </div>

                <h3>AI-Powered Thinking</h3>

                <p>
                  Use modern AI-driven strategies and digital technologies to make
                  your marketing smarter, faster and more effective.
                </p>

                <span className="card-arrow">↗</span>
              </div>

              <div className="why-card">
                <div className="why-card-top">
                  <span className="why-icon">360°</span>
                  <span className="why-number">04</span>
                </div>

                <h3>Complete Digital Solutions</h3>

                <p>
                  From websites and social media to digital marketing and local
                  visibility, we bring your important digital services together.
                </p>

                <span className="card-arrow">↗</span>
              </div>

              <div className="why-card">
                <div className="why-card-top">
                  <span className="why-icon">IN</span>
                  <span className="why-number">05</span>
                </div>

                <h3>Pan-India Reach</h3>

                <p>
                  Our digital solutions are designed to help businesses build
                  visibility and connect with customers across India.
                </p>

                <span className="card-arrow">↗</span>
              </div>
            </div>
          </div>

    {/* TRUST STRIP */}

    <div className="why-trust-strip">
      <div className="why-trust-item">
        <strong>360°</strong>
        <span>Digital Approach</span>
      </div>

      <div className="why-divider" />

      <div className="why-trust-item">
        <strong>7+</strong>
        <span>Digital Services</span>
      </div>

      <div className="why-divider" />

      <div className="why-trust-item">
        <strong>AI</strong>
        <span>Driven Solutions</span>
      </div>

      <div className="why-divider" />

      <div className="why-trust-item">
        <strong>INDIA</strong>
        <span>Wide Reach</span>
      </div>
    </div>
  </div>
</section>
      {/* HOW IT WORKS */}

      <section className="how-section" id="how-it-works">
        <div className="how-grid-bg" />

        <div className="section-container">

          {/* HEADER */}

          <div className="how-header">
            <div>
              <div className="section-label">HOW IT WORKS</div>

              <h2>
                How We Generate
                <br />
                <span>Business Growth.</span>
              </h2>
            </div>

            <p>
              We help businesses grow by improving how customers find, trust,
              engage with and choose them online.
            </p>
          </div>

          {/* PROCESS */}

          <div className="how-process">

            {/* STEP 01 */}

            <div className="how-step">
              <div className="how-step-number">01</div>

              <div className="how-step-icon">⌕</div>

              <div className="how-step-content">
                <span className="how-step-label">DISCOVER</span>

                <h3>
                  Understand Your
                  <br />
                  <span>Digital Presence.</span>
                </h3>

                <p>
                  We analyze your business presence across Google Maps,
                  Google Business Profile and social platforms to understand
                  where your business currently stands.
                </p>
              </div>
            </div>

            <div className="how-connector">
              <span />
            </div>

            {/* STEP 02 */}

            <div className="how-step">
              <div className="how-step-number">02</div>

              <div className="how-step-icon">✦</div>

              <div className="how-step-content">
                <span className="how-step-label">OPTIMIZE</span>

                <h3>
                  Strengthen Your
                  <br />
                  <span>Digital Foundation.</span>
                </h3>

                <p>
                  We optimize your Google Business Profile, virtual tour,
                  reviews and important digital assets to create a stronger
                  and more professional online presence.
                </p>
              </div>
            </div>

            <div className="how-connector">
              <span />
            </div>

            {/* STEP 03 */}

            <div className="how-step">
              <div className="how-step-number">03</div>

              <div className="how-step-icon">◎</div>

              <div className="how-step-content">
                <span className="how-step-label">ENGAGE</span>

                <h3>
                  Reach the Right
                  <br />
                  <span>Customers.</span>
                </h3>

                <p>
                  We use digital marketing, social media and AI-powered
                  strategies to increase visibility, engagement and customer
                  trust across the digital channels that matter.
                </p>
              </div>
            </div>

            <div className="how-connector">
              <span />
            </div>

            {/* STEP 04 */}

            <div className="how-step">
              <div className="how-step-number">04</div>

              <div className="how-step-icon">↗</div>

              <div className="how-step-content">
                <span className="how-step-label">CONVERT</span>

                <h3>
                  Turn Visibility Into
                  <br />
                  <span>Business Growth.</span>
                </h3>

                <p>
                  We help turn digital visibility into trust, enquiries and
                  meaningful business opportunities by creating a stronger
                  customer journey online.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* INDUSTRIES */}

<section className="industries-section" id="industries">
  <div className="section-container">

    <div className="industries-heading">
      <div className="section-label">INDUSTRIES WE SERVE</div>

      <h2>
        Digital Visibility
        <br />
        Across <span>Every Industry.</span>
      </h2>

      <p>
        From local businesses to large organizations, we help businesses
        build stronger visibility, reach customers and grow digitally.
      </p>
    </div>

    <div className="industries-grid">

      {[
        {
          title: "Schools & Education",
          description:
            "Build stronger online visibility and help students and parents discover your institution.",
          image: "/industries/schools.jpeg",
          number: "01",
        },
        {
          title: "Hospitals & Healthcare",
          description:
            "Improve digital presence and make your healthcare services easier to discover online.",
          image: "/industries/hospitals.webp",
          number: "02",
        },
        {
          title: "Manufacturing",
          description:
            "Showcase your manufacturing capabilities and connect your business with new opportunities.",
          image: "/industries/manufacturing.jpeg",
          number: "03",
        },
        {
          title: "Hotels & Resorts",
          description:
            "Increase online visibility and help guests discover your hotel, resort or hospitality business.",
          image: "/industries/hotels.jpeg",
          number: "04",
        },
        {
          title: "IT & Technology",
          description:
            "Create a professional digital presence for technology companies, IT firms and startups.",
          image: "/industries/technology.webp",
          number: "05",
        },
        {
          title: "Real Estate",
          description:
            "Reach buyers, investors and property seekers with stronger digital visibility.",
          image: "/industries/real-estate.jpeg",
          number: "06",
        },
        {
          title: "Political Leaders",
          description:
            "Build a professional digital presence and improve online visibility across important platforms.",
          image: "/industries/political.jpeg",
          number: "07",
        },
        {
          title: "Commercial Businesses",
          description:
            "Digital solutions for shops, offices, professional services and businesses across industries.",
          image: "/industries/commercial.webp",
          number: "08",
        },
      ].map((industry) => (
        <div className="industry-card" key={industry.number}>

          <div
            className="industry-image"
            style={{
              backgroundImage: `url(${industry.image})`,
            }}
          />

          <div className="industry-overlay" />

          <div className="industry-number">
            {industry.number}
          </div>

          <div className="industry-content">
            <h3>{industry.title}</h3>

            <p>{industry.description}</p>

            <span className="industry-arrow">↗</span>
          </div>

        </div>
      ))}

    </div>

    <div className="industries-bottom">
      <span>AND MORE</span>
      <p>
        We work with businesses across different sectors and create
        digital strategies based on their individual goals.
      </p>
    </div>

  </div>
</section>

      {/* CLIENTS */}

<section className="clients-section" id="clients">
  <div className="section-container">

    <div className="section-heading clients-heading">
      <div className="section-label">OUR CLIENTS</div>

      <h2>
        Businesses That
        <br />
        <span>Trust Us.</span>
      </h2>

      <p>
        From schools and hospitals to manufacturing, hospitality, IT,
        real estate and commercial businesses, we help organizations
        build stronger digital visibility.
      </p>
    </div>

    <div className="clients-grid">

      {clients.map((client) => (
        <a
          
          target="_blank"
          rel="noopener noreferrer"
          className="client-card"
          key={client.name}
        >
          <div className="client-logo">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
            />
          </div>

          <div className="client-info">
            <h3>{client.name}</h3>
            <span>{client.category}</span>
          </div>

          <span className="client-arrow">↗</span>
        </a>
      ))}

    </div>

    <div className="clients-bottom">

      <div className="clients-count">
        <strong>1000+</strong>
        <span>Clients Served</span>
      </div>

      <div className="clients-bottom-text">
        <span>TRUSTED ACROSS INDUSTRIES</span>

        <p>
          Schools • Hospitals • Manufacturing • Hospitality • IT •
          Real Estate • Automotive • Commercial Businesses
        </p>
      </div>

    </div>

  </div>
</section>

      {/* TESTIMONIALS */}

      <section className="testimonials-section" id="testimonials">
        <div className="section-container">

          <div className="testimonials-header">
            <div>
              <div className="section-label">TESTIMONIALS</div>

              <h2>
                What Our Clients
                <br />
                <span>Say About Us.</span>
              </h2>
            </div>

            <p>
              Real experiences from businesses that have worked with
              Unicorn Nexus 360 to improve their digital visibility.
            </p>
          </div>

          <div className="testimonials-slider">
            <div className="testimonials-track">

              {/* REVIEW 1 */}
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>

                <p>
                  “Unicorn Nexus helped us improve our online visibility and
                  made it much easier for customers to find our business online.”
                </p>

                <div className="testimonial-client">
                  <div className="testimonial-avatar">PC</div>

                  <div>
                    <strong>PCMC Mayor Office</strong>
                    <span>Digital Visibility</span>
                  </div>
                </div>
              </div>

              {/* REVIEW 2 */}
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>

                <p>
                  “The team understood our requirements and helped us create
                  a much stronger digital presence for our school.”
                </p>

                <div className="testimonial-client">
                  <div className="testimonial-avatar">UK</div>

                  <div>
                    <strong>Euro Kids School</strong>
                    <span>Education</span>
                  </div>
                </div>
              </div>

              {/* REVIEW 3 */}
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>

                <p>
                  “Professional service, clear communication and a strong
                  focus on improving our online presence.”
                </p>

                <div className="testimonial-client">
                  <div className="testimonial-avatar">SE</div>

                  <div>
                    <strong>Sarthak English Medium School</strong>
                    <span>Education</span>
                  </div>
                </div>
              </div>

              {/* REVIEW 4 */}
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>

                <p>
                  “Our digital presence looks much more professional now.
                  The team has been supportive throughout the process.”
                </p>

                <div className="testimonial-client">
                  <div className="testimonial-avatar">YS</div>

                  <div>
                    <strong>Yellow Stone Resort</strong>
                    <span>Hospitality • Goa</span>
                  </div>
                </div>
              </div>

              {/* REVIEW 5 */}
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>

                <p>
                  “Unicorn Nexus provided us with practical digital solutions
                  and helped us strengthen our business visibility online.”
                </p>

                <div className="testimonial-client">
                  <div className="testimonial-avatar">SM</div>

                  <div>
                    <strong>Shraddha Management Consultancy</strong>
                    <span>Business Consultancy</span>
                  </div>
                </div>
              </div>

              {/* DUPLICATE CARDS FOR SMOOTH LOOP */}

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>

                <p>
                  “Unicorn Nexus helped us improve our online visibility and
                  made it much easier for customers to find our business online.”
                </p>

                <div className="testimonial-client">
                  <div className="testimonial-avatar">PC</div>

                  <div>
                    <strong>PCMC Mayor Office</strong>
                    <span>Digital Visibility</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>

                <p>
                  “The team understood our requirements and helped us create
                  a much stronger digital presence for our school.”
                </p>

                <div className="testimonial-client">
                  <div className="testimonial-avatar">UK</div>

                  <div>
                    <strong>Uro Kids School</strong>
                    <span>Education</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="testimonial-note">
            <span>●</span>
            More client experiences coming soon
          </div>

        </div>
      </section>
      {/* FINAL CTA */}
      <section className="cta">
        <div className="ctaGlow" />

        <div className="section-container">
          <div className="ctaContent">
            <div className="section-label">GET STARTED</div>

            <h2>
              Ready to <span className="gold-text">Grow Your Business?</span>
            </h2>

            <p>
              Let&apos;s build the digital presence that gets your business found, trusted and chosen — across Google Maps, marketing, web and more.
            </p>

            <div className="ctaButtons">
              <Link href="/contact" className="primaryButton">
                Grow Your Business
                <span>→</span>
              </Link>

              <a href="#home" className="secondaryButton">
                Back to Top
                <span>↑</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </main>
  );
}