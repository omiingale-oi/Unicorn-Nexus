import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug } from "@/data/services";
import { getLocationPage, locationPages } from "@/data/location-pages";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceOverview from "@/app/components/services/ServiceOverview";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceFAQ from "@/app/components/services/ServiceFAQ";
import ServiceCTA from "@/app/components/services/ServiceCTA";
import Reveal from "@/app/components/services/Reveal";

import styles from "@/app/components/services/services.module.css";

interface ServiceLocationPageProps {
  params: Promise<{ slug: string; location: string }>;
}

function formatLocationLabel(location: string) {
  return location
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return locationPages.map((page) => ({
    slug: page.service,
    location: page.location,
  }));
}

export async function generateMetadata({
  params,
}: ServiceLocationPageProps): Promise<Metadata> {
  const { slug, location } = await params;
  const page = getLocationPage(slug, location);

  if (!page) {
    return { title: "Service Page Not Found | Unicorn Nexus 360" };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://www.unicornnexus360.com/services/${slug}/${location}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.unicornnexus360.com/services/${slug}/${location}`,
      siteName: "Unicorn Nexus 360",
      type: "website",
    },
  };
}

export default async function ServiceLocationPage({
  params,
}: ServiceLocationPageProps) {
  const { slug, location } = await params;
  const locationPage = getLocationPage(slug, location);
  const serviceInfo = getServiceBySlug(slug);

  if (!locationPage || !serviceInfo) {
    notFound();
  }

  const canonicalUrl = `https://www.unicornnexus360.com/services/${slug}/${location}`;

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
    areaServed: [{ "@type": "City", name: formatLocationLabel(location) }],
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
        item: `https://www.unicornnexus360.com/services/${slug}`,
      },
      { "@type": "ListItem", position: 4, name: formatLocationLabel(location), item: canonicalUrl },
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
        flowStyle={slug === "google-map-services"}
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
