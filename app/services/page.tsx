import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Our Services | Unicorn Nexus 360",
  description:
    "Google Maps, Google Business Profile, digital marketing, AI marketing, website development, social media and real estate marketing services across India.",
  alternates: {
    canonical: "https://www.unicornnexus360.com/services",
  },
};

export default function ServicesListPage() {
  return (
    <main className={styles.servicePage}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroOverlay} />

        <div className={styles.container}>
          <div className={styles.heroContent}>

            <div className={styles.heroTop}>
              <span className={styles.heroEyebrow}>
                WHAT WE DO
              </span>
            </div>

            <h1 className={styles.heroTitle}>
              Our Services
            </h1>

            <h2 className={styles.heroTagline}>
              Connected Digital Solutions, Built Around Your Business.
            </h2>

            <p className={styles.heroDescription}>
              From getting found on Google Maps to running smarter,
              AI-supported campaigns — explore the seven services we use to
              build a stronger, more visible business for you.
            </p>

          </div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className={styles.darkSection}>
        <div className={styles.container}>

          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>
              ALL SERVICES
            </span>

            <h2 className={styles.sectionHeading}>
              Explore Our <span>Full Range.</span>
            </h2>

            <p className={styles.sectionDescription}>
              Each service is its own focused solution — pick one, or combine
              several for a fully connected digital presence.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {services.map((service, index) => (
              <Link
                href={`/services/${service.slug}`}
                className={styles.featureCard}
                key={service.slug}
              >
                <div className={styles.featureTop}>
                  <span className={styles.featureIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className={styles.featureCardTitle}>
                  {service.navTitle}
                </h3>

                <p className={styles.featureCardDesc}>
                  {service.hero.tagline}
                </p>

                <div className={styles.cardArrow}>
                  ↗
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.servicesCta}>
        <div className={styles.container}>

          <div className={styles.servicesCtaInner}>

            <div>
              <span className={styles.sectionEyebrow}>
                READY TO GROW?
              </span>

              <h2>
                Grow Your <span>Business.</span>
              </h2>

              <p>
                Let&apos;s build a stronger digital presence for your business.
              </p>
            </div>

            <div className={styles.servicesCtaButtons}>

              <Link
                href="/contact"
                className={styles.servicesCtaPrimary}
              >
                Grow Your Business
                <span>→</span>
              </Link>

              <Link
                href="/"
                className={styles.servicesCtaSecondary}
              >
                Return Home
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}