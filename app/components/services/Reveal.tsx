"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./services.module.css";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Wraps any element and fades/slides it into view the first time it
// scrolls into the viewport. Plays once, then disconnects — cheap and
// won't re-trigger on scroll-up.
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}