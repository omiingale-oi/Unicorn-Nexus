import type { ServiceData } from "@/data/services";
import type { LocationPageData } from "@/data/location-pages";

import ServiceHero from "./ServiceHero";
import ServiceOverview from "./ServiceOverview";
import ServiceFeatures from "./ServiceFeatures";
import ServiceBenefits from "./ServiceBenefits";
import ServiceProcess from "./ServiceProcess";
import ServiceFAQ from "./ServiceFAQ";
import ServiceCTA from "./ServiceCTA";
import Reveal from "./Reveal";

import styles from "./services.module.css";

interface LocationServiceContentProps {
  locationPage: LocationPageData;
  serviceInfo: ServiceData;
  canonicalUrl: string;
}

function formatLocationLabel(location: string) {
  return location
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export default function LocationServiceContent({
  locationPage,
  serviceInfo,
  canonicalUrl,
}: LocationServiceContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: locationPage.hero.title,
    name: locationPage.hero.title,
    description: locationPage.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Unicorn Nexus 360",
      "@id": "https://www.unicornnexus360.com/#organization",
    },
    areaServed: [{ "@type": "City", name: formatLocationLabel(locationPage.location) }],
    url: canonicalUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locationPage.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.unicornnexus360.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.unicornnexus360.com/services/" },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceInfo.navTitle,
        item: `https://www.unicornnexus360.com/services/${serviceInfo.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: formatLocationLabel(locationPage.location),
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className={styles.servicePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceHero
        number={serviceInfo.number}
        eyebrow={locationPage.hero.eyebrow}
        title={locationPage.hero.title}
        tagline={locationPage.hero.tagline}
        description={locationPage.hero.description}
        video={serviceInfo.hero.video}
        videoAlt={serviceInfo.hero.videoAlt}
        poster={serviceInfo.overview.image}
      />

      <ServiceOverview
        eyebrow={locationPage.overview.eyebrow}
        title={locationPage.overview.title}
        description={locationPage.overview.description}
        image={serviceInfo.overview.image}
        imageAlt={serviceInfo.overview.imageAlt}
      />

      <ServiceFeatures
        heading={locationPage.features.heading}
        description={locationPage.features.description}
        items={locationPage.features.items}
      />

      <ServiceBenefits
        heading={locationPage.benefits.heading}
        description={locationPage.benefits.description}
        image={serviceInfo.benefits.image}
        imageAlt={serviceInfo.benefits.imageAlt}
        items={locationPage.benefits.items}
      />

      <ServiceProcess
        heading={locationPage.process.heading}
        description={locationPage.process.description}
        steps={locationPage.process.steps}
      />

      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionEyebrow}>INDUSTRIES & BUSINESSES</span>
              <h2 className={styles.sectionHeading}>
                Built For
                <span> Different Businesses.</span>
              </h2>
              <p className={styles.sectionDescription}>{locationPage.audience.description}</p>
            </div>
          </Reveal>

          <div className={styles.audienceGrid}>
            {locationPage.audience.items.map((item, index) => (
              <Reveal delay={index * 40} key={item}>
                <div className={styles.audienceItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ heading={locationPage.faq.heading} items={locationPage.faq.items} />
      <ServiceCTA
        eyebrow={locationPage.cta.eyebrow}
        title={locationPage.cta.title}
        description={locationPage.cta.description}
        buttonText={locationPage.cta.buttonText}
        buttonHref="/contact"
      />
    </main>
  );
}
