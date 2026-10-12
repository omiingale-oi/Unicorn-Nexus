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

        <div className={styles.solutionGrid}>
          {items.map((item, index) => (
            <Reveal delay={index * 80} key={`${item.title}-${index}`}>
              <article className={styles.solutionCard}>
                <div className={styles.solutionTop}>
                  <span className={styles.solutionIcon}>{item.icon}</span>
                  <span className={styles.solutionIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.solutionContent}>
                  <h3 className={styles.solutionTitle}>{item.title}</h3>
                  <p className={styles.solutionDesc}>{item.description}</p>
                </div>
                <span className={styles.solutionArrow} aria-hidden="true">
                  ↗
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}