import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const REVEAL_SELECTORS = [
  ".offer-title",
  ".advantages-title",
  ".whyus-left",
  ".whyus-right",
  ".reviews-title",
  ".teachers-title",
  ".process-title",
  ".blog-title",
  ".cta-banner",
  ".about-top__left",
  ".about-top__right",
  ".about-mission__content",
  ".about-team__title",
  ".about-team__subtitle",
  ".learning-left",
  ".support-block__left",
  ".support-block__right",
  ".signup-title",
  ".signup-left",
  ".signup-img",
  ".quote",
  ".practice-title",
  ".offer-card",
  ".adv-card",
  ".whyus-card",
  ".teacher-card",
  ".process-card",
  ".blog-card",
  ".skill-card",
  ".learning-card",
  ".practice-card",
  ".course-module",
  ".mission-card",
].join(",");

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = [...document.querySelectorAll(REVEAL_SELECTORS)];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal-item");
      element.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default ScrollReveal;
