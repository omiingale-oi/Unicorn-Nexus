import styles from "./services.module.css";
import Reveal from "./Reveal";

interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  heading: string;
  description: string;
  steps: ServiceProcessStep[];
}

export default function ServiceProcess({
  heading,
  description,
  steps,
}: ServiceProcessProps) {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>HOW WE WORK</span>
            <h2 className={styles.sectionHeading}>{heading}</h2>
            <p className={styles.sectionDescription}>{description}</p>
          </div>
        </Reveal>

        <div className={styles.processGrid}>
          {steps.map((step, index) => (
            <Reveal delay={index * 100} key={step.number}>
              <article className={styles.processItem}>
                <div className={styles.processNumber}>{step.number}</div>

                <span className={styles.processLabel}>STEP {step.number}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.description}</p>

                {index < steps.length - 1 && (
                  <div className={styles.processConnector}>→</div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}