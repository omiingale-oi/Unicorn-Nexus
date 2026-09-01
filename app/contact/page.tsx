import type { Metadata } from "next";
import ContactSection from "@/app/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Unicorn Nexus 360",
  description:
    "Contact Unicorn Nexus 360 for Google Maps, digital marketing, AI marketing, website development, social media and real estate marketing services across India.",
  keywords: [
    "Contact Unicorn Nexus 360",
    "Google Maps Marketing India",
    "Digital Marketing India",
    "AI Marketing India",
    "Website Development India",
    "Social Media Management India",
    "Real Estate Marketing India",
  ],
  alternates: {
    canonical: "https://www.unicornnexus360.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}