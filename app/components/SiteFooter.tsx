import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="Unicorn Nexus 360"
            className="footer-logo"
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

          <Link href="/services/google-map-services">
            Google Map Services
          </Link>

          <Link href="/services/digital-marketing">
            Digital Marketing
          </Link>

          <Link href="/services/ai-marketing">
            AI Marketing
          </Link>

          <Link href="/services/website-development">
            Website Development
          </Link>

          <Link href="/services/social-media-management">
            Social Media Management
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>CONTACT</h4>

          <a href="tel:+919112151399">
            +91-9112151399
          </a>

          <a href="mailto:unicornnexus360@gmail.com">
            unicornnexus360@gmail.com
          </a>

          <a
            href="https://wa.me/919112151399"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
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