import styles from "./services.module.css";
import Reveal from "./Reveal";

interface ServiceFeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  heading: string;
  description: string;
  items: ServiceFeatureItem[];
}

export default function ServiceFeatures({
  heading,
  description,
  items,
}: ServiceFeaturesProps) {
  return (
    <section className={styles.darkSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>OUR SOLUTIONS</span>
            <h2 className={styles.sectionHeading}>{heading}</h2>
            <p className={styles.sectionDescription}>{description}</p>
          </div>
        </Reveal>

        <div className={styles.featureGrid}>
          {items.map((item, index) => (
            <Reveal delay={index * 80} key={`${item.title}-${index}`}>
              <article className={styles.featureCard}>
                <div className={styles.featureTop}>
                  <span className={styles.featureIcon}>{item.icon}</span>
                  <span className={styles.featureIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className={styles.featureCardTitle}>{item.title}</h3>
                <p className={styles.featureCardDesc}>{item.description}</p>

                <div className={styles.cardArrow}>↗</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}