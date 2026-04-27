import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const delay = element.dataset.delay
            ? Number.parseInt(element.dataset.delay, 10)
            : index * 60;

          window.setTimeout(() => {
            element.classList.add("is-visible");
          }, delay);

          observer.unobserve(element);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);
}
