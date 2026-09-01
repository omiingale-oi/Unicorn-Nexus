import Image from "next/image";

import styles from "./services.module.css";
import Reveal from "./Reveal";

interface ServiceOverviewProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ServiceOverview({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: ServiceOverviewProps) {
  return (
    <section className={styles.overview}>
      <div className={styles.container}>
        <div className={styles.overviewGrid}>
          <Reveal>
            <div className={styles.overviewContent}>
              <span className={styles.sectionEyebrow}>{eyebrow}</span>

              <h2 className={styles.overviewTitle}>{title}</h2>

              <p className={styles.overviewText}>{description}</p>

              <div className={styles.overviewLine}>
                <span />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.overviewImageWrap}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.overviewImage}
              />

              <div className={styles.imageCorner}>360°</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}