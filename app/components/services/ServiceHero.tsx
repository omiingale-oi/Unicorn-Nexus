import Link from "next/link";

import styles from "./services.module.css";

interface ServiceHeroProps {
  number: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  video: string;
  videoAlt: string;
  poster?: string;
}

export default function ServiceHero({
  number,
  eyebrow,
  title,
  tagline,
  description,
  video,
  videoAlt,
  poster,
}: ServiceHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid} />

      <div className={styles.container}>
        <div className={styles.heroSplit}>
          <div className={styles.heroContent}>
            <div className={styles.heroTop}>
              <span className={styles.heroNumber}>{number}</span>
              <span className={styles.heroEyebrow}>{eyebrow}</span>
            </div>

            <h1 className={styles.heroTitle}>{title}</h1>
            <h2 className={styles.heroTagline}>{tagline}</h2>
            <p className={styles.heroDescription}>{description}</p>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Get Started <span>↗</span>
              </Link>

              <Link href="/services" className={styles.secondaryButton}>
                Explore Services <span>→</span>
              </Link>
            </div>

            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Unicorn Nexus 360
              <strong>Digital Visibility & Growth</strong>
            </div>
          </div>

          <div className={styles.heroVideoWrap}>
            <video
              className={styles.heroVideo}
              src={video}
              poster={poster}
              aria-label={videoAlt}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}