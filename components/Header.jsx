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
  {
    href: "https://aurictools.com",
    label: "Auric Tools",
    copy: "Free Vedic and numerology calculators",
    icon: "\u2726"
  },
  {
    href: "https://auricsaga.shop",
    label: "Auric Shop",
    copy: "Energized crystals and sacred yantras",
    icon: "\u2727"
  },
  {
    href: "https://auricgurukul.com",
    label: "Auric Gurukul",
    copy: "Sacred sciences masterclasses",
    icon: "\u262f"
  },
  {
    href: "https://blog.auricsaga.com",
    label: "Auric Articles",
    copy: "Deep esoteric research and essays",
    icon: "\u270e"
  }
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
    const closeDropdown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setEcosystemOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setEcosystemOpen(false);
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
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="status-dot" aria-hidden="true" />
            <span className="top-bar-title">Private Sessions Active</span>
            <span className="top-bar-muted">-</span>
            <span className="top-bar-muted">Bespoke 1-on-1 consultations in Vastu, Astrology, Numerology and Tarot</span>
          </div>
          <div className="top-bar-right">
            <a className="top-bar-email" href="mailto:care@auricsaga.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" />
                <path d="M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
              </svg>
              care@auricsaga.com
            </a>
            <span className="top-bar-muted">|</span>
            <span className="top-bar-title">100% Confidential</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <div className="nav-grid">
            <Link href="/" className="brand-logo" aria-label="Auric Saga home">
              <img src="/auricsaga-final-logo.png" alt="Auric Saga" />
            </Link>

            <nav className="desktop-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}

              <div className={ecosystemOpen ? "dropdown is-open" : "dropdown"} ref={dropdownRef}>
                <button
                  className="dropdown-button"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={ecosystemOpen}
                  onClick={() => setEcosystemOpen((value) => !value)}
                >
                  <span>Ecosystem</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="dropdown-menu-wrap">
                  <div className="dropdown-menu">
                    {ecosystemItems.map((item) => (
                      <a key={item.href} className="dropdown-item" href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setEcosystemOpen(false)}>
                        <span className="icon-tile" aria-hidden="true">{item.icon}</span>
                        <span>
                          <span className="dropdown-title">{item.label}</span>
                          <span className="dropdown-copy">{item.copy}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <div className="header-actions">
              <Link href="/book-consultation" className="btn btn-primary btn-md">
                Book Consultation
              </Link>
              <button
                className="mobile-toggle"
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={open ? "mobile-menu is-open" : "mobile-menu"}>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact Auric Saga
            </Link>
            <Link href="/book-consultation" className="btn btn-primary btn-md" onClick={() => setOpen(false)}>
              Book Private Session
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
