"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "Team" },
  { href: "/vastu", label: "Vastu" },
  { href: "/astrology", label: "Astrology" },
  { href: "/numerology", label: "Numerology" },
  { href: "/tarot-reading", label: "Tarot" },
  { href: "/energy-healing", label: "Energy Healing" }
];

const ecosystemItems = [
  { href: "https://aurictools.com", label: "Auric Tools", copy: "Free Vedic & numerology calculators", icon: "✦", bg: "bg-royal-100", color: "text-royal-700" },
  { href: "https://auricsaga.shop", label: "Auric Shop", copy: "Energized crystals & sacred yantras", icon: "✧", bg: "bg-gold-100", color: "text-gold-700" },
  { href: "https://auricgurukul.com", label: "Auric Gurukul", copy: "Sacred sciences masterclasses", icon: "☯", bg: "bg-emerald-100", color: "text-emerald-700" },
  { href: "https://blog.auricsaga.com", label: "Auric Articles", copy: "Deep esoteric research & essays", icon: "✎", bg: "bg-rose-100", color: "text-rose-700" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setEcosystemOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setEcosystemOpen(false);
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setEcosystemOpen(false);
    };
    document.addEventListener("pointerdown", closeDropdown);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeDropdown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <>
      {/* TOP BAR — identical to index3.html */}
      <div className="bg-royal-950 text-gold-100 py-2.5 px-4 text-xs font-medium tracking-wider relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 animate-ping" aria-hidden="true" />
            <span className="text-gold-300 font-cinzel uppercase tracking-widest text-[11px] font-semibold">Private Sessions Active</span>
            <span className="text-white/30 hidden sm:inline">&mdash;</span>
            <span className="hidden sm:inline text-pearl-300">Bespoke 1-on-1 consultations in Vastu, Astrology, Numerology &amp; Tarot</span>
          </div>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-wider ml-auto">
            <a href="mailto:care@auricsaga.com" className="hover:text-gold-300 transition flex items-center gap-1.5 text-pearl-200">
              <svg className="w-3.5 h-3.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              care@auricsaga.com
            </a>
            <span className="text-white/20">|</span>
            <span className="text-gold-300 font-semibold flex items-center gap-1">
              <span className="text-emerald-400">&#9679;</span> 100% Confidential
            </span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER — identical structure to index3.html */}
      <header className="sticky top-0 z-40 transition-all duration-300 backdrop-blur-xl bg-pearl-100/90 border-b border-pearl-300/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[220px_minmax(0,1fr)_190px] items-center h-20 gap-4 lg:gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 group" aria-label="Auric Saga home">
              <img src="/auricsaga-final-logo.png" alt="Auric Saga" className="h-14 sm:h-16 w-auto max-w-[205px] object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-5 text-xs xl:text-sm font-semibold tracking-wide" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-ink-700 hover:text-royal-800 transition-colors whitespace-nowrap pb-0.5 border-b-2 ${pathname === item.href ? "border-gold-500 text-royal-800" : "border-transparent"}`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Ecosystem Dropdown */}
              <div className="relative group" ref={dropdownRef}>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-ink-700 hover:text-royal-800 py-2 transition-colors whitespace-nowrap"
                  aria-haspopup="true"
                  aria-expanded={ecosystemOpen}
                  onClick={() => setEcosystemOpen((v) => !v)}
                >
                  <span>Ecosystem</span>
                  <svg className={`w-3.5 h-3.5 transition-transform text-gold-600 ${ecosystemOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {ecosystemOpen && (
                  <div className="absolute right-0 top-full w-72 pt-3 z-50">
                    <div className="rounded-2xl bg-white p-3 shadow-xl border border-pearl-300">
                      {ecosystemItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-3 p-3 rounded-xl hover:bg-pearl-100 transition"
                          onClick={() => setEcosystemOpen(false)}
                        >
                          <span className={`w-8 h-8 rounded-lg ${item.bg} grid place-items-center ${item.color} text-sm`}>{item.icon}</span>
                          <div>
                            <span className="block text-sm font-bold text-royal-950 leading-tight">{item.label}</span>
                            <span className="block text-xs text-ink-500 leading-snug mt-0.5">{item.copy}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center justify-end gap-4">
              <Link
                href="/book-consultation"
                className="btn-royal hidden sm:inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                <span>Book Consultation</span>
                <svg className="w-3.5 h-3.5 text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                className="lg:hidden p-2 rounded-xl bg-pearl-200 border border-pearl-300 text-royal-900"
                onClick={() => setOpen((v) => !v)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t border-pearl-300 bg-white px-6 py-6 shadow-xl">
            <nav className="flex flex-col gap-4 text-base font-semibold" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-ink-800 hover:text-royal-700 py-1 border-b border-pearl-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="text-ink-800 hover:text-royal-700 py-1 border-b border-pearl-200" onClick={() => setOpen(false)}>
                Contact Auric Saga
              </Link>
              <Link
                href="/book-consultation"
                className="btn-royal inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider mt-2"
                onClick={() => setOpen(false)}
              >
                Book Private Session
                <svg className="w-3.5 h-3.5 text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
