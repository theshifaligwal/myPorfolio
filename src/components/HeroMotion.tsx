"use client";

import { useEffect } from "react";

// Scroll-linked parallax for the hero. Renders nothing; it only attaches a scroll listener.
export default function HeroMotion() {
  useEffect(() => {
    const heroCopy = document.querySelector(".hero-copy") as HTMLElement | null;
    const heroFrame = document.querySelector(".hero-frame") as HTMLElement | null;

    if (!heroCopy || !heroFrame) return;

    const updateMotion = () => {
      const scrollY = window.scrollY || 0;
      const progress = Math.min(scrollY / 600, 1);

      heroCopy.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroCopy.style.opacity = `${1 - progress * 0.2}`;

      heroFrame.style.transform = `translateY(${scrollY * 0.18}px)`;
      heroFrame.style.opacity = `${1 - progress * 0.1}`;
    };

    updateMotion();
    window.addEventListener("scroll", updateMotion, { passive: true });

    return () => window.removeEventListener("scroll", updateMotion);
  }, []);

  return null;
}
