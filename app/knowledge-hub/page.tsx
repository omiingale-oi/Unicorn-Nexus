
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import styles from "./knowledge-hub.module.css";

export default function KnowledgeHubPage() {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <main className={styles.page}>

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroGlowOne} />
        <div className={styles.heroGlowTwo} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>

            {/* LEFT CONTENT */}
            <div className={styles.heroContent}>
              <span className={styles.label}>KNOWLEDGE HUB</span>

              <h1>
                Insights That Help
                <br />
                Your Business <span>Grow.</span>
              </h1>

              <p>
                Practical ideas, digital strategies and useful insights to help
                businesses improve visibility, reach customers and grow online.
              </p>

              <div className={styles.heroActions}>
                <Link href="#latest-articles" className={styles.heroButton}>
                  Explore Articles
                  <span>↓</span>
                </Link>

                <span className={styles.heroNote}>
                  New insights added regularly
                </span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.heroVisual}>
              <div className={styles.heroImageGlow} />

              <div className={styles.heroImageCard}>
                <Image
                  src="/knowledge-hub/knowledge-hero.png"
                  alt="Digital marketing and business growth"
                  fill
                  priority
                  sizes="(max-width: 900px) 90vw, 500px"
                  className={styles.heroImage}
                />
              </div>

              <div className={styles.floatingBadge}>
                <span>✦</span>
                <div>
                  <strong>Grow Digitally</strong>
                  <small>Knowledge that matters</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LATEST BLOGS ================= */}
      <section
        className={styles.blogSection}
        id="latest-articles"
      >
        <div className={styles.container}>

          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.label}>LATEST ARTICLES</span>

              <h2>
                Learn. <span>Grow.</span> Get Visible.
              </h2>
            </div>

            <p>
              Explore our latest knowledge and practical digital marketing
              insights for modern businesses.
            </p>
          </div>

          <div className={styles.blogGrid}>

            {latestBlogs.map((blog) => (
              <Link
                href={`/knowledge-hub/${blog.slug}`}
                className={styles.blogCard}
                key={blog.slug}
              >
                {/* IMAGE */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                  />

                  <div className={styles.imageOverlay} />

                  <span className={styles.category}>
                    {blog.category}
                  </span>

                  <span className={styles.arrow}>
                    ↗
                  </span>
                </div>

                {/* CONTENT */}
                <div className={styles.cardContent}>

                  <div className={styles.meta}>
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3>{blog.title}</h3>

                  <p>{blog.excerpt}</p>

                  <div className={styles.readMore}>
                    View Full Blog
                    <span>→</span>
                  </div>

                </div>
              </Link>
            ))}

          </div>

          {/* FUTURE BLOG SPACE */}
          <div className={styles.futureBlogs}>
            <span>MORE INSIGHTS COMING SOON</span>

            <p>
              New articles on Google Maps, Digital Marketing, AI Marketing,
              Websites and Social Media will be added regularly.
            </p>
          </div>

          {/* BOTTOM */}
          <div className={styles.bottomLine}>
            <span>UNICORN NEXUS 360°</span>

            <p>
              New insights added regularly • Digital Marketing • Google Maps
              • AI Marketing
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>

            <div>
              <span className={styles.label}>READY TO GROW?</span>

              <h2>
                Turn Digital Visibility
                <br />
                Into <span>Business Growth.</span>
              </h2>
            </div>

            <Link href="/contact" className={styles.ctaButton}>
              Talk to Our Team
              <span>→</span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}