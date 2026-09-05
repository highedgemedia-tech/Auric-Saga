"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteTransition({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".scroll-reveal"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    elements.forEach((element) => element.classList.add("is-reveal-ready"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <main key={pathname} className="page-transition">
      {children}
    </main>
  );
}
