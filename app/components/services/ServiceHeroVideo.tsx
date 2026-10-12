import styles from "./services.module.css";

interface ServiceHeroVideoProps {
  src: string;
  poster: string;
  alt: string;
}

export default function ServiceHeroVideo({
  src,
  poster,
  alt,
}: ServiceHeroVideoProps) {
  return (
    <div className={styles.heroVideoWrap}>
      <video
        className={styles.heroVideo}
        src={src}
        poster={poster}
        aria-label={alt}
        autoPlay
        controls
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
