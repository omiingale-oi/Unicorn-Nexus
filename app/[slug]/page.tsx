import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug } from "@/data/services";
import { getLocationPageBySlug, locationPages } from "@/data/location-pages";
import LocationServiceContent from "@/app/components/services/LocationServiceContent";

interface LocationLandingPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: LocationLandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPageBySlug(slug);

  if (!page) {
    return { title: "Page Not Found | Unicorn Nexus 360" };
  }

  const canonicalUrl = `https://www.unicornnexus360.com/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: "Unicorn Nexus 360",
      type: "website",
    },
  };
}

export default async function LocationLandingPage({
  params,
}: LocationLandingPageProps) {
  const { slug } = await params;
  const page = getLocationPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const serviceInfo = getServiceBySlug(page.service);

  if (!serviceInfo) {
    notFound();
  }

  return (
    <LocationServiceContent
      locationPage={page}
      serviceInfo={serviceInfo}
      canonicalUrl={`https://www.unicornnexus360.com/${page.slug}`}
    />
  );
}
