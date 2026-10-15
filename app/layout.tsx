import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SiteFooter from "./components/SiteFooter";
import WhatsAppButton from "./components/WhatsAppButton";

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

  metadataBase: new URL("https://unicornnexus360.com"),

  openGraph: {
    title: "Unicorn Nexus | Digital Visibility & Growth Solutions",
    description:
      "Helping businesses build stronger digital visibility and sustainable growth across India.",
    url: "https://unicornnexus360.com",
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
        <Header />

        {children}

        <SiteFooter />

        <ScrollToTopButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
