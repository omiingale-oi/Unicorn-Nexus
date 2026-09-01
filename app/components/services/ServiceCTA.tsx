import Link from "next/link";

import styles from "./services.module.css";
import Reveal from "./Reveal";

interface ServiceCTAProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function ServiceCTA({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref,
}: ServiceCTAProps) {
  return (
    <section className={styles.serviceCTA}>
      <div className={styles.ctaGrid} />

      <div className={styles.ctaGlow} />

      <div className={styles.container}>
        <Reveal>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>
              {eyebrow}
            </span>

            <h2 className={styles.ctaTitle}>
              {title}
            </h2>

            <p className={styles.ctaDescription}>
              {description}
            </p>

            <div className={styles.ctaActions}>
              <Link
                href={buttonHref}
                className={styles.primaryButton}
              >
                {buttonText}
                <span>↗</span>
              </Link>

              <Link
                href="/services"
                className={styles.secondaryButton}
              >
                Back to Services
                <span>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}