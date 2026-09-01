import Image from "next/image";
import styles from "./services.module.css";
import Reveal from "./Reveal";

interface ServiceBenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  items: ServiceBenefitItem[];
}

export default function ServiceBenefits({
  heading,
  description,
  image,
  imageAlt,
  items,
}: ServiceBenefitsProps) {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.benefitsHeader}>
            <div>
              <span className={styles.sectionEyebrow}>KEY BENEFITS</span>
              <h2 className={styles.sectionHeading}>{heading}</h2>
            </div>

            <p className={styles.sectionDescription}>{description}</p>
          </div>
        </Reveal>

        <div className={styles.overviewGrid}>
          <div className={`${styles.benefitGrid} ${styles.benefitGridCompact}`}>
            {items.map((item, index) => (
              <Reveal delay={index * 80} key={`${item.title}-${index}`}>
                <article className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{item.icon}</div>
                  <h3 className={styles.benefitCardTitle}>{item.title}</h3>
                  <p className={styles.benefitCardDesc}>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className={styles.overviewImageWrap}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.overviewImage}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}