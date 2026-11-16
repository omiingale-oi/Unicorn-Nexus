import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SiteFooter from "./components/SiteFooter";
import WhatsAppButton from "./components/WhatsAppButton";

const SITE_URL = "https://www.unicornnexus360.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Unicorn Nexus 360",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      telephone: "+91 91121 51399",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Unicorn Nexus 360",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default:
      "Unicorn Nexus | Google Maps, Digital & AI Marketing",
    template: "%s | Unicorn Nexus",
  },

  description:
    "Unicorn Nexus offers Google Maps services, 360° virtual tours, GMB, AI and digital marketing, website development, and real estate marketing across India.",

  keywords: [
    "Google Map Services",
    "Google Virtual Tour 360 Services",
    "GMB",
    
    "GMB Management",
    "AI Marketing",
    "Digital Marketing",
    "Social Media Management",
    "Website Development",
    "Real Estate Marketing",
    "Google Maps Marketing India",
  ],

  metadataBase: new URL(SITE_URL),

  openGraph: {
    title: "Unicorn Nexus | Digital Visibility & Growth Solutions",
    description:
      "Helping businesses build stronger digital visibility and sustainable growth across India.",
    url: SITE_URL,
    siteName: "Unicorn Nexus",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Header />

        {children}

        <SiteFooter />

        <ScrollToTopButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
