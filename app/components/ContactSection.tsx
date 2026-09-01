
"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setStatus({
        type: "error",
        message: "Please enter a valid name using letters only.",
      });
      return;
    }

    // Phone validation — exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      setStatus({
        type: "error",
        message: "Phone number must contain exactly 10 digits.",
      });
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Required fields
    if (!service) {
      setStatus({
        type: "error",
        message: "Please select a service.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          message: message || null,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Unable to submit your enquiry. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Your enquiry has been submitted successfully.",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.contactSection} id="contact">
      <div className={`${styles.contactGlow} ${styles.contactGlowOne}`} />
      <div className={`${styles.contactGlow} ${styles.contactGlowTwo}`} />

      <div className={styles.sectionContainer}>
        {/* HEADER */}
        <div className={styles.contactHeader}>
          <div>
            <div className={styles.sectionLabel}>CONTACT US</div>

            <h2>
              Let&apos;s Talk About
              <br />
              Your <span>Business.</span>
            </h2>
          </div>

          <p>
            Ready to improve your digital visibility? Get in touch with
            Unicorn Nexus 360 and let&apos;s discuss how we can help your
            business grow online.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className={styles.contactLayout}>
          {/* CONTACT INFORMATION */}
          <div className={styles.contactInfo}>
            {/* ADDRESS */}
            <div className={styles.contactInfoCard}>
              <div className={styles.contactInfoIcon}>⌖</div>

              <div>
                <span>VISIT US</span>
                <h3>Our Office</h3>

                <p>
                  Unicorn Nexus
                  <br />
                  807 Panhalgad, Sector-12,
                  <br />
                  Bhosari MIDC, Pune - 411026,
                  <br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            {/* PHONE */}
            <a
              href="tel:+919112151399"
              className={`${styles.contactInfoCard} ${styles.contactClickable}`}
            >
              <div className={styles.contactInfoIcon}>☎</div>

              <div>
                <span>CALL US</span>
                <h3>+91-9112151399</h3>
                <p>Click to call our team</p>
              </div>

              <span className={styles.contactArrow}>↗</span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919112151399"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactInfoCard} ${styles.contactClickable}`}
            >
              <div
                className={`${styles.contactInfoIcon} ${styles.whatsappIcon}`}
              >
                <svg
                  viewBox="0 0 32 32"
                  width="28"
                  height="28"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.11 17.21c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.27.23-.62.23-1.15.16-1.27-.07-.11-.25-.18-.52-.32z" />
                  <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.72 6.42L3.1 28.8l6.56-1.72a12.76 12.76 0 0 0 6.35 1.68h.01c7.06 0 12.8-5.74 12.8-12.8S23.08 3.2 16.01 3.2zm0 23.37h-.01c-2.01 0-3.98-.54-5.7-1.57l-.41-.24-3.89 1.02 1.04-3.79-.27-.39a10.58 10.58 0 1 1 9.24 4.97z" />
                </svg>
              </div>

              <div>
                <span>WHATSAPP</span>
                <h3>Chat With Us</h3>
                <p>Start a conversation on WhatsApp</p>
              </div>

              <span className={styles.contactArrow}>↗</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:unicornnexus360@gmail.com"
              className={`${styles.contactInfoCard} ${styles.contactClickable}`}
            >
              <div className={styles.contactInfoIcon}>✉</div>

              <div>
                <span>EMAIL US</span>
                <h3>unicornnexus360@gmail.com</h3>
                <p>Send us your enquiry</p>
              </div>

              <span className={styles.contactArrow}>↗</span>
            </a>

            {/* WORKING HOURS */}
            <div className={styles.contactHours}>
              <span>OFFICE WORKING HOURS</span>

              <strong>Monday – Saturday</strong>

              <p>9:30 AM – 7:30 PM</p>
              <br></br>

              <span>ONLINE ENQUIRIES</span>

              <strong>Monday – Sunday</strong>

              <p>24/7</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className={styles.contactFormWrapper}>
            <div className={styles.contactFormHeading}>
              <span>START A CONVERSATION</span>

              <h3>
                Tell us what
                <br />
                you <em>need.</em>
              </h3>
            </div>

            <form
              className={styles.contactForm}
              onSubmit={handleSubmit}
            >
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">YOUR NAME</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    pattern="[A-Za-z\s]+"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">PHONE NUMBER</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter 10-digit phone number"
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">EMAIL ADDRESS</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">
                  SERVICE YOU&apos;RE INTERESTED IN
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Google Map Services">
                    Google Map Services
                  </option>

                  <option value="AI Marketing">
                    AI Marketing
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option value="Google Business Profile Management">
                    Google Business Profile Management
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Social Media Management">
                    Social Media Management
                  </option>

                  <option value="Real Estate Marketing">
                    Real Estate Marketing
                  </option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">YOUR MESSAGE</label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business and what you need..."
                />
              </div>

              {/* STATUS MESSAGE */}
              {status.message && (
                <div
                  role="alert"
                  className={
                    status.type === "success"
                      ? styles.successMessage
                      : styles.errorMessage
                  }
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className={styles.contactSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
                <span>{isSubmitting ? "..." : "→"}</span>
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className={styles.contactBottom}>
          <span>UNICORN NEXUS 360°</span>

          <p>
            Google Maps • AI Marketing • Digital Marketing • Websites •
            Social Media • Real Estate
          </p>
        </div>
      </div>
    </section>
  );
}
