import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <Image
            src="/logo.png"
            alt="Unicorn Nexus 360"
            className="footer-logo"
            width={210}
            height={83}
          />

          <p>
            Virtually Real, Digitally Visible.
            <br />
            Helping businesses build stronger digital visibility
            and sustainable growth across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h4>QUICK LINKS</h4>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/knowledge-hub">Knowledge Hub</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h4>SERVICES</h4>

          <Link href="/services/google-business-profile-management">
            GMB
          </Link>

          <Link href="/services/google-virtual-tour-360">
            Google Virtual Tour 360
          </Link>

          <Link href="/services/google-map-services">
            Google Map Services
          </Link>

          <Link href="/services/ai-marketing">
            AI Marketing
          </Link>

          <Link href="/services/digital-marketing">
            Digital Marketing
          </Link>

          <Link href="/services/social-media-management">
            Social Media Management
          </Link>

          <Link href="/services/website-development">
            Website Development
          </Link>

          <Link href="/services/real-estate-marketing">
            Real Estate Marketing
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>CONTACT</h4>

          <a className="footer-social-link" href="tel:+919112151399">
            <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 2.8 9.4 2l2.1 5.1-2.2 1.8a15.2 15.2 0 0 0 5.8 5.8l1.8-2.2 5.1 2.1-.8 2.8c-.4 1.5-1.9 2.5-3.4 2.2C10.6 18.2 5.8 13.4 4.4 6.2c-.3-1.5.7-3 2.2-3.4Z" />
            </svg>
            +91-9112151399
          </a>

          <a className="footer-social-link" href="mailto:unicornnexus360@gmail.com">
            <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            unicornnexus360@gmail.com
          </a>

          <a
            className="footer-social-link"
            href="https://wa.me/919112151399"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a9.7 9.7 0 0 0-8.3 14.7L2.4 22l5.5-1.4A9.8 9.8 0 1 0 12 2Zm0 17.7a7.8 7.8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4.5.2.9.3 1.2.4.5.2 1 .1 1.3.1.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
            </svg>
            WhatsApp
          </a>

          <h4>FOLLOW US</h4>

          <a
            className="footer-social-link"
            href="https://www.instagram.com/unicornnexus360?srtk=MWVtcmgyam1icGU2aA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.25" />
            </svg>
            Instagram
          </a>

          <a
            className="footer-social-link"
            href="https://www.facebook.com/people/UnicornNexus360/61583591212451/?rdid=1kGUpTnYEhEk6u4R&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JkmzMcoJq%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3v3.1h2.8v8h3.4z" />
            </svg>
            Facebook
          </a>

          <a
            className="footer-social-link"
            href="https://www.linkedin.com/company/unicorn-nexus-360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.2 8.6a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM3.6 10h3.2v10H3.6zM9 10h3.1v1.4h.1a3.4 3.4 0 0 1 3-1.7c3.2 0 3.8 2.1 3.8 4.8V20h-3.2v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V20H9z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Unicorn Nexus 360. All Rights Reserved.
        </p>
      </div>
    </footer>
    
  );
}