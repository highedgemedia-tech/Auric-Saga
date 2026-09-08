import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-royal-950 text-pearl-300 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center rounded-xl bg-white px-4 py-2.5 shadow-sm border border-pearl-200/60 hover:border-gold-400/50 transition-all duration-300" aria-label="Auric Saga home">
              <img src="/auricsaga-final-logo.png" alt="Auric Saga" className="h-10 w-auto max-w-[200px] object-contain" />
            </Link>
            <p className="text-xs text-pearl-300/90 max-w-sm leading-relaxed">
              A sanctuary for sacred ancient wisdom. Empowering global individuals, entrepreneurs, and families with genuine Vastu, Vedic Astrology, and holistic healing.
            </p>
            <div className="flex items-center gap-3 pt-2 text-pearl-300" aria-label="Auric Saga social links">
              <a
                href="https://www.instagram.com/auricsaga/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-gold-400 hover:bg-gold-400/15 hover:text-gold-300 text-pearl-300 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 shadow-sm"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/auricsaga/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-gold-400 hover:bg-gold-400/15 hover:text-gold-300 text-pearl-300 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 shadow-sm"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@auricsaga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-gold-400 hover:bg-gold-400/15 hover:text-gold-300 text-pearl-300 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 shadow-sm"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <p className="font-cinzel tracking-wider text-[11px] text-gold-300/90 pt-1">
              &copy; 2026 Auric Saga &middot; Sacred Clarity, Beautifully Delivered.
            </p>
          </div>

          {/* Consultations Column */}
          <div>
            <p className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-4">Consultations</p>
            <ul className="space-y-2.5">
              <li><Link href="/vastu" className="hover:text-gold-300 transition">Vastu Shastra</Link></li>
              <li><Link href="/astrology" className="hover:text-gold-300 transition">Vedic Astrology</Link></li>
              <li><Link href="/numerology" className="hover:text-gold-300 transition">Sacred Numerology</Link></li>
              <li><Link href="/tarot-reading" className="hover:text-gold-300 transition">Intuitive Tarot</Link></li>
              <li><Link href="/energy-healing" className="hover:text-gold-300 transition">Energy Restoration</Link></li>
            </ul>
          </div>

          {/* Ecosystem Column */}
          <div>
            <p className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-4">Ecosystem</p>
            <ul className="space-y-2.5">
              <li><a href="https://aurictools.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition">Auric Tools</a></li>
              <li><a href="https://auricsaga.shop" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition">Auric Shop</a></li>
              <li><a href="https://auricgurukul.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition">Auric Gurukul</a></li>
              <li><a href="https://blog.auricsaga.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition">Auric Articles</a></li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <p className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-4">Direct Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:care@auricsaga.com" className="text-white font-medium hover:text-gold-300 transition flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  care@auricsaga.com
                </a>
              </li>
              <li className="text-pearl-400">Worldwide Video &amp; Telephonic Consultations</li>
              <li className="pt-2 text-gold-400 font-cinzel text-[11px] flex items-center gap-1.5">
                <span>&#10022;</span> Discretion Guaranteed
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-pearl-400">
          <p>Crafted with sacred reverence for the modern seeker.</p>
          <div className="flex items-center gap-3">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <span aria-hidden="true" className="text-pearl-500">|</span>
            <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
