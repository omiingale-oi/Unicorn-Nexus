import styles from "./services.module.css";
import Reveal from "./Reveal";

interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  heading: string;
  items: ServiceFAQItem[];
}

export default function ServiceFAQ({
  heading,
  items,
}: ServiceFAQProps) {
  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>
              ANSWERS
            </span>

            <h2 className={styles.sectionHeading}>
              {heading}
            </h2>
          </div>
        </Reveal>

        <div className={styles.faqList}>
          {items.map((item, index) => (
            <Reveal delay={index * 40} key={item.question}>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.question}

                  <b>+</b>
                </summary>

                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}