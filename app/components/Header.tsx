
"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    name: "GMB",
    href: "/services/google-business-profile-management",
    locations: [
      {
        name: "GMB Pune",
        href: "/gmb-service-in-pune",
      },
      {
        name: "GMB Navi Mumbai",
        href: "/gmb-service-in-navi-mumbai",
      },
      {
        name: "GMB Goa",
        href: "/gmb-service-in-goa",
      },
      {
        name: "GMB Nashik",
        href: "/gmb-service-in-nashik",
      },
    ],
  },
  {
    name: "Google Virtual Tour 360",
    href: "/services/google-virtual-tour-360",
  },
  {
    name: "Google Map Services",
    href: "/services/google-map-services",
  },
  {
    name: "AI Marketing",
    href: "/services/ai-marketing",
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    locations: [
      {
        name: "Digital Marketing Pune",
        href: "/digital-marketing-services-in-pune",
      },
      {
        name: "Digital Marketing Navi Mumbai",
        href: "/digital-marketing-services-in-navi-mumbai",
      },
      {
        name: "Digital Marketing Goa",
        href: "/digital-marketing-services-in-goa",
      },
      {
        name: "Digital Marketing Nashik",
        href: "/digital-marketing-services-in-nashik",
      },
    ],
  },
  {
    name: "Social Media Management",
    href: "/services/social-media-management",
  },
  {
    name: "Website Development",
    href: "/services/website-development",
    locations: [
      {
        name: "Website Development Pune",
        href: "/website-development-company-in-pune",
      },
      {
        name: "Website Development Navi Mumbai",
        href: "/website-development-company-in-navi-mumbai",
      },
      {
        name: "Website Development Goa",
        href: "/website-development-company-in-goa",
      },
      {
        name: "Website Development Nashik",
        href: "/website-development-company-in-nashik",
      },
    ],
  },
  {
    name: "Real Estate Marketing",
    href: "/services/real-estate-marketing",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState("");

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServiceOpen("");
  };

  return (
    <header className="site-header">
      <div className="header-inner">

        {/* LOGO */}
        <Link href="/" className="brand" onClick={closeMobile}>
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
                  <div
                    key={service.href}
                    className="service-dropdown-item"
                  >
                    <Link
                      href={service.href}
                      className="service-dropdown-link"
                    >
                      {service.name}

                      {Array.isArray(service.locations) &&
                        service.locations.length > 0 && (
                          <span className="dropdown-arrow">›</span>
                        )}
                    </Link>

                    {/* DESKTOP LOCATION SUBMENU */}
                    {Array.isArray(service.locations) &&
                      service.locations.length > 0 && (
                        <div className="location-dropdown">

                          {service.locations.map((location) => (
                            <Link
                              key={location.href}
                              href={location.href}
                              className="location-dropdown-link"
                            >
                              {location.name}
                            </Link>
                          ))}

                        </div>
                      )}
                  </div>
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
        <Link href="/contact" className="header-cta">
          Get Started
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
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

          <Link
            href="/services"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            All Services
          </Link>

          {/* MOBILE SERVICE DROPDOWNS */}
          <div className="mobile-services">

            {services.map((service) => (
              <div
                key={service.href}
                className="mobile-service-item"
              >

                <div className="mobile-service-heading">

                  <Link
                    href={service.href}
                    className="mobile-service-link"
                    onClick={closeMobile}
                  >
                    {service.name}
                  </Link>

                  {Array.isArray(service.locations) &&
                    service.locations.length > 0 && (
                      <button
                        className="mobile-submenu-toggle"
                        onClick={() =>
                          setMobileServiceOpen(
                            mobileServiceOpen === service.name
                              ? ""
                              : service.name
                          )
                        }
                        aria-label={`Toggle ${service.name} locations`}
                        aria-expanded={
                          mobileServiceOpen === service.name
                        }
                      >
                        {mobileServiceOpen === service.name ? "−" : "+"}
                      </button>
                    )}

                </div>

                {/* MOBILE LOCATION SUBMENU */}
                {Array.isArray(service.locations) &&
                  service.locations.length > 0 &&
                  mobileServiceOpen === service.name && (
                    <div className="mobile-location-dropdown">

                      {service.locations.map((location) => (
                        <Link
                          key={location.href}
                          href={location.href}
                          className="mobile-location-link"
                          onClick={closeMobile}
                        >
                          {location.name}
                        </Link>
                      ))}

                    </div>
                  )}

              </div>
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
            href="/knowledge-hub"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            Knowledge Hub
          </Link>

          <Link
            href="/qr-generator"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            QR Generator
          </Link>

          <Link
            href="/contact"
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
