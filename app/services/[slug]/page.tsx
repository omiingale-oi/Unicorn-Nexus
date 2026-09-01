import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services, getServiceBySlug } from "@/data/services";

import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceOverview from "@/app/components/services/ServiceOverview";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceFAQ from "@/app/components/services/ServiceFAQ";
import ServiceCTA from "@/app/components/services/ServiceCTA";
import Reveal from "@/app/components/services/Reveal";

import styles from "@/app/components/services/services.module.css";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Unicorn Nexus 360" };
  }

  const url = `https://unicornnexus360.com/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,

    alternates: { canonical: url },

    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: "Unicorn Nexus 360",
      type: "website",
      // Hero is a video, so Open Graph (needs a static image for social
      // share previews) pulls from the overview image instead.
      images: [
        {
          url: service.overview.image,
          alt: service.overview.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.overview.image],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = `https://unicornnexus360.com/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.navTitle,
    name: service.hero.title,
    description: service.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Unicorn Nexus 360",
      "@id": "https://unicornnexus360.com/#organization",
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Nashik" },
      { "@type": "Country", name: "India" },
    ],
    url: serviceUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.items.map((faq) => ({
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://unicornnexus360.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://unicornnexus360.com/services/" },
      { "@type": "ListItem", position: 3, name: service.navTitle, item: serviceUrl },
    ],
  };

  // Helps the hero video itself get indexed / surfaced in video search.
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: service.hero.title,
    description: service.metaDescription,
    thumbnailUrl: service.overview.image,
    contentUrl: `https://unicornnexus360.com${service.hero.video}`,
    uploadDate: "2025-01-01",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <ServiceHero
        number={service.number}
        eyebrow={service.hero.eyebrow}
        title={service.hero.title}
        tagline={service.hero.tagline}
        description={service.hero.description}
        video={service.hero.video}
        videoAlt={service.hero.videoAlt}
        poster={service.overview.image}
      />

      <ServiceOverview
        eyebrow={service.overview.eyebrow}
        title={service.overview.title}
        description={service.overview.description}
        image={service.overview.image}
        imageAlt={service.overview.imageAlt}
      />

      <ServiceFeatures
        heading={service.features.heading}
        description={service.features.description}
        items={service.features.items}
      />

      <ServiceBenefits
        heading={service.benefits.heading}
        description={service.benefits.description}
        image={service.benefits.image}
        imageAlt={service.benefits.imageAlt}
        items={service.benefits.items}
      />

      <ServiceProcess
        heading={service.process.heading}
        description={service.process.description}
        steps={service.process.steps}
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

              <p className={styles.sectionDescription}>{service.audience.description}</p>
            </div>
          </Reveal>

          <div className={styles.audienceGrid}>
            {service.audience.items.map((item, index) => (
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

      <ServiceFAQ heading={service.faq.heading} items={service.faq.items} />

      <ServiceCTA
        eyebrow={service.cta.eyebrow}
        title={service.cta.title}
        description={service.cta.description}
        buttonText={service.cta.buttonText}
        buttonHref={service.cta.buttonHref}
      />
    </main>
  );
}