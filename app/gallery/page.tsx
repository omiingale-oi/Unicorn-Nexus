import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import styles from "./gallery.module.css";

const SITE_URL = "https://www.unicornnexus360.com";
const PAGE_URL = `${SITE_URL}/gallery`;
const PAGE_DESCRIPTION =
  "Explore the creative work, projects and digital experiences of Unicorn Nexus 360.";

export const metadata: Metadata = {
  title: "Gallery",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Unicorn Nexus 360 Gallery",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Unicorn Nexus 360",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/gallery/gallery-hero.jpg`,
        alt: "Unicorn Nexus 360 gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unicorn Nexus 360 Gallery",
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/gallery/gallery-hero.jpg`],
  },
};

function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), "public", "gallery");

  if (!fs.existsSync(galleryPath)) {
    return [];
  }

  const files = fs.readdirSync(galleryPath);

  const allowedExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".avif",
  ];

  return files
    .filter((file) => {
      const extension = path.extname(file).toLowerCase();

      return (
        allowedExtensions.includes(extension) &&
        file.toLowerCase() !== "gallery-hero.jpg" &&
        file.toLowerCase() !== "gallery-hero.jpeg" &&
        file.toLowerCase() !== "gallery-hero.png" &&
        file.toLowerCase() !== "gallery-hero.webp"
      );
    })
    .sort()
    .map((file) => `/gallery/${file}`);
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#webpage`,
    name: "Unicorn Nexus 360 Gallery",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    primaryImageOfPage: `${SITE_URL}/gallery/gallery-hero.jpg`,
    inLanguage: "en",
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.label}>OUR GALLERY</span>

              <h1>
                A Glimpse Into
                <br />
                <span>Our Work.</span>
              </h1>

              <p>
                Explore moments, projects and visuals that represent the
                creativity, digital presence and work of Unicorn Nexus 360°.
              </p>
            </div>

            {/* HERO IMAGE */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageGlow} />

              <div className={styles.heroImage}>
                <Image
                  src="/gallery/gallery-hero.jpg"
                  alt="Unicorn Nexus 360°"
                  fill
                  preload
                  sizes="(max-width: 650px) 100vw, 45vw"
                  className={styles.heroImageElement}
                />

                <div className={styles.heroImageOverlay} />
              </div>

              <div className={styles.heroImageTag}>
                <span>UNICORN NEXUS 360°</span>
                <span>✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.label}>VISUAL SHOWCASE</span>

              <h2>
                Explore Our
                <br />
                <span>Gallery.</span>
              </h2>
            </div>

            <p>
              A collection of visuals representing our work, creativity and
              digital presence.
            </p>
          </div>

          {galleryImages.length > 0 ? (
            <div className={styles.galleryGrid}>
              {galleryImages.map((image, index) => (
                <div className={styles.galleryItem} key={image}>
                  <Image
                    src={image}
                    alt={`Unicorn Nexus 360° gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyGallery}>
              <span>GALLERY</span>
              <p>Gallery images will appear here.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}