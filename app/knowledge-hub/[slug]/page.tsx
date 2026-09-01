import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { blogs } from "@/data/blogs";

import styles from "./blog.module.css";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className={styles.blogPage}>
      {/* =========================
          BLOG HERO
      ========================= */}
      <section className={styles.blogHero}>
        <div className={styles.heroGlowOne} />
        <div className={styles.heroGlowTwo} />

        <div className={styles.container}>
          <Link href="/knowledge-hub" className={styles.backLink}>
            <span>←</span>
            Back to Knowledge Hub
          </Link>

          <div className={styles.heroGrid}>
            {/* LEFT CONTENT */}
            <div className={styles.heroContent}>
              <div className={styles.category}>{blog.category}</div>

              <h1>{blog.title}</h1>

              <p className={styles.excerpt}>{blog.excerpt}</p>

              <div className={styles.blogMeta}>
                <span>{blog.date}</span>
                <span className={styles.metaDot}>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.heroImageWrap}>
              <div className={styles.heroImageGlow} />

              <div className={styles.heroImage}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 420px"
                />

                <div className={styles.heroImageOverlay} />

                <div className={styles.imageBadge}>
                  <span>UNICORN</span>
                  <strong>NEXUS 360°</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ARTICLE
      ========================= */}
      <section className={styles.articleSection}>
        <div className={styles.container}>
          <div className={styles.articleLayout}>
            {/* MAIN ARTICLE */}
            <article className={styles.article}>
              <div className={styles.articleLabel}>
                KNOWLEDGE HUB
              </div>

              <div className={styles.articleIntro}>
                Practical insights to help your business become more visible,
                discoverable and digitally stronger.
              </div>

              {blog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className={styles.articleDivider} />

              <div className={styles.articleBottom}>
                <div>
                  <span className={styles.articleBrand}>
                    UNICORN NEXUS 360°
                  </span>

                  <p className={styles.articleBottomText}>
                    Digital visibility. Smarter marketing. Better growth.
                  </p>
                </div>

                <Link href="/contact" className={styles.articleContact}>
                  Talk to Our Team
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* =========================
                SIDEBAR
            ========================= */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <div className={styles.sidebarGoldLine} />

                <span className={styles.sidebarLabel}>
                  NEED HELP?
                </span>

                <h3>
                  Ready to make your
                  <em> business more visible?</em>
                </h3>

                <p>
                  Talk to Unicorn Nexus 360 about Google Maps, digital
                  marketing, websites, social media and AI-powered solutions.
                </p>

                <Link
                  href="/contact"
                  className={styles.sidebarButton}
                >
                  Get in Touch
                  <span>→</span>
                </Link>
              </div>

              {/* EXPLORE */}
              <div className={styles.sidebarInfo}>
                <span className={styles.exploreLabel}>
                  EXPLORE
                </span>

                <Link href="/knowledge-hub">
                  More from Knowledge Hub
                  <span>↗</span>
                </Link>

                <Link href="/services/google-map-services">
                  Google Map Services
                  <span>↗</span>
                </Link>

                <Link href="/services/digital-marketing">
                  Digital Marketing
                  <span>↗</span>
                </Link>

                <Link href="/services/website-development">
                  Website Development
                  <span>↗</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}
      <section className={styles.bottomCta}>
        <div className={styles.container}>
          <div className={styles.bottomCtaInner}>
            <div>
              <span>UNICORN NEXUS 360°</span>

              <h2>
                Build a stronger
                <strong> digital presence.</strong>
              </h2>
            </div>

            <Link href="/contact" className={styles.bottomCtaButton}>
              Start a Conversation
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}