
"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const hasScrolledEnough = window.scrollY > 400;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 180;

      setIsVisible(hasScrolledEnough || nearBottom);

      const buttonX = window.innerWidth - 50;
      const buttonY = window.innerHeight - 114;
      const sections = document.querySelectorAll("main > section");
      const sectionUnderButton = Array.from(sections).reverse().find((section) => {
        const bounds = section.getBoundingClientRect();
        return (
          buttonX >= bounds.left &&
          buttonX <= bounds.right &&
          buttonY >= bounds.top &&
          buttonY <= bounds.bottom
        );
      });

      if (!sectionUnderButton) {
        setIsOnLightSection(false);
        return;
      }

      const backgroundColor = window.getComputedStyle(sectionUnderButton).backgroundColor;
      const channels = backgroundColor.match(/[\d.]+/g)?.slice(0, 3).map(Number);
      const isLight =
        channels?.length === 3 &&
        channels.every((channel) => channel >= 200);

      setIsOnLightSection(Boolean(isLight));
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("resize", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? "visible" : ""} ${
        isOnLightSection ? "on-light" : ""
      }`.trim()}
      aria-label="Scroll to top"
      title="Go to top"
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 18V6" />
        <path d="m6 12 6-6 6 6" />
      </svg>
    </button>
  );
}
