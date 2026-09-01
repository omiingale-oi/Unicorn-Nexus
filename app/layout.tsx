import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default:
      "Unicorn Nexus | Google Map Services, Digital Marketing & AI Marketing",
    template: "%s | Unicorn Nexus",
  },

  description:
    "Unicorn Nexus provides Google Map Services, Google Business Profile Management, AI Marketing, Digital Marketing, Social Media Management, Website Development and Real Estate Marketing across India.",

  keywords: [
    "Google Map Services",
    "Google Business Profile Management",
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

        <WhatsAppButton />
      </body>
    </html>
  );
}
