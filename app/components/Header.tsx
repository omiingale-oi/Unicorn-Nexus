"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    name: "Google Map Services",
    href: "/services/google-map-services",
  },
  {
    name: "Google Business Profile Management",
    href: "/services/google-business-profile-management",
  },
  {
    name: "AI Marketing",
    href: "/services/ai-marketing",
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
  },
  {
    name: "Social Media Management",
    href: "/services/social-media-management",
  },
  {
    name: "Website Development",
    href: "/services/website-development",
  },
  {
    name: "Real Estate Marketing",
    href: "/services/real-estate-marketing",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">

        {/* LOGO */}
        <Link
          href="/"
          className="brand"
          onClick={closeMobile}
        >
          <Image
            src="/logo.png"
            alt="Unicorn Nexus 360"
            width={190}
            height={75}
            className="brand-logo"
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">

          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="services-menu"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {/* SERVICES NOW OPENS MAIN SERVICES PAGE */}
            <Link
              href="/services"
              className="nav-link services-button"
              onClick={() => setServicesOpen(false)}
            >
              Services
              <span className="dropdown-arrow">⌄</span>
            </Link>

            {servicesOpen && (
              <div className="services-dropdown">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="service-dropdown-link"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/gallery" className="nav-link">
            Gallery
          </Link>

          <Link href="/knowledge-hub" className="nav-link">
            Knowledge Hub
          </Link>

          <Link href="/qr-generator" className="nav-link">
            QR Generator
          </Link>

          <Link href="/contact" className="nav-link">
            Contact
          </Link>

        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="header-cta"
        >
          Get Started
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div className="mobile-nav">

          <Link
            href="/"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            About
          </Link>

          {/* MOBILE SERVICES */}
          <Link
            href="/services"
            className="mobile-nav-link mobile-services-button"
            onClick={closeMobile}
          >
            Services
            <span>⌄</span>
          </Link>

          {/* SERVICE SUB-LINKS */}
          <div className="mobile-services">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="mobile-service-link"
                onClick={closeMobile}
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link
            href="/gallery"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            Gallery
          </Link>

          <Link
            href="/qr-generator"
            className="mobile-nav-link"
            onClick={closeMobile}
          >

            Knowledge Hub
          </Link>

          <Link
            href="/contact"
            className="mobile-nav-link"
            onClick={closeMobile}
          >

            QR Generator
          </Link>

          <Link
            href="/knowledge-hub"
            className="mobile-nav-link"
            onClick={closeMobile}
          >

            Contact
          </Link>

          <Link
            href="/contact"
            className="mobile-cta"
            onClick={closeMobile}
          >
            Get Started
          </Link>

        </div>
      )}
    </header>
  );
}