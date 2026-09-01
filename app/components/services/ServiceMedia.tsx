import Image from "next/image";
import styles from "./services.module.css";
import Reveal from "./Reveal";

interface ServiceMediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
}

interface ServiceMediaProps {
  items: ServiceMediaItem[];
}

export default function ServiceMedia({ items }: ServiceMediaProps) {
  return (
    <section className={styles.mediaSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>VISUAL EXPERIENCE</span>

            <h2 className={styles.sectionHeading}>
              See Our Approach
              <span> In Action.</span>
            </h2>

            <p className={styles.sectionDescription}>
              Explore the visual side of our digital solutions through images,
              demonstrations and real service experiences.
            </p>
          </div>
        </Reveal>

        <div className={styles.mediaGrid}>
          {items.map((item, index) => (
            <Reveal delay={index * 100} key={`${item.src}-${index}`}>
              <article className={styles.mediaCard}>
                <div className={styles.mediaImageWrap}>
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.mediaImage}
                    />
                  ) : (
                    <video
                      className={styles.mediaVideo}
                      src={item.src}
                      controls
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}

                  <div className={styles.mediaNumber}>0{index + 1}</div>
                </div>

                <div className={styles.mediaInfo}>
                  <span>{item.type === "video" ? "VIDEO" : "IMAGE"}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}