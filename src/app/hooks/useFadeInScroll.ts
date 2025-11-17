"use client";

import { useEffect } from "react";

export default function useFadeInOnScroll(selector = ".fade-in") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}