"use client";

import { useEffect } from "react";

export default function HomePageClient({ html }) {
  useEffect(() => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    const toggleMobileMenu = () => {
      mobileMenu?.classList.toggle("hidden");
    };

    const closeMobileMenu = () => {
      mobileMenu?.classList.add("hidden");
    };

    mobileMenuBtn?.addEventListener("click", toggleMobileMenu);
    const mobileLinks = Array.from(mobileMenu?.querySelectorAll("a") || []);
    mobileLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

    window.prefillService = (serviceName) => {
      const select = document.getElementById("clientService");
      if (select) {
        select.value = serviceName;
      }
      const formSection = document.getElementById("book-consultation");
      formSection?.scrollIntoView({ behavior: "smooth" });
    };

    const form = document.getElementById("consultationForm");
    const handleSubmit = (event) => {
      event.preventDefault();
      const name = document.getElementById("clientName")?.value.trim() || "";
      const contact = document.getElementById("clientContact")?.value.trim() || "";
      const service = document.getElementById("clientService")?.value || "Help me choose";
      const question = document.getElementById("clientQuestion")?.value.trim() || "";
      const timeSlot = document.querySelector('input[name="timeSlot"]:checked')?.value || "Any";

      const subject = encodeURIComponent(`Auric Saga Consultation: ${service} - ${name}`);
      const body = encodeURIComponent(
        `Consultation Booking Request - Auric Saga\n` +
          `----------------------------------------\n` +
          `Name: ${name}\n` +
          `Contact: ${contact}\n` +
          `Chosen Discipline: ${service}\n` +
          `Preferred Time: ${timeSlot}\n\n` +
          `Central Inquiries & Context:\n` +
          `${question}\n\n` +
          `Please confirm consultation availability and next steps.`
      );

      window.location.href = `mailto:care@auricsaga.com?subject=${subject}&body=${body}`;
    };

    form?.addEventListener("submit", handleSubmit);

    const canvas = document.getElementById("celestialCanvas");
    const ctx = canvas?.getContext("2d");
    let animationFrame = 0;
    let stars = [];

    const initStars = () => {
      if (!canvas) return;
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 14000);
      for (let i = 0; i < count; i += 1) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.4,
          alpha: Math.random() * 0.5 + 0.15,
          speed: (Math.random() - 0.5) * 0.003
        });
      }
    };

    const setSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 0.6 || star.alpha < 0.1) {
          star.speed = -star.speed;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 158, 46, ${star.alpha})`;
        ctx.fill();
      });
      animationFrame = window.requestAnimationFrame(render);
    };

    if (canvas && ctx) {
      window.addEventListener("resize", setSize);
      setSize();
      render();
    }

    return () => {
      mobileMenuBtn?.removeEventListener("click", toggleMobileMenu);
      mobileLinks.forEach((link) => link.removeEventListener("click", closeMobileMenu));
      form?.removeEventListener("submit", handleSubmit);
      window.removeEventListener("resize", setSize);
      window.cancelAnimationFrame(animationFrame);
      delete window.prefillService;
    };
  }, []);

  return <div className="home-page page-transition antialiased text-ink-800" dangerouslySetInnerHTML={{ __html: html }} />;
}
