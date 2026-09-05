import Link from "next/link";

function SocialIcon({ label, children }) {
  return (
    <a className="social-icon" href="#" aria-label={label}>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="stack footer-brand">
            <Link href="/" className="footer-logo" aria-label="Auric Saga home">
              <img src="/auricsaga-final-logo.png" alt="Auric Saga" />
            </Link>
            <p>
              A sanctuary for sacred ancient wisdom. Empowering global individuals, entrepreneurs, and families with genuine Vastu, Vedic Astrology, and holistic healing.
            </p>
            <div className="social-row" aria-label="Auric Saga social links">
              <SocialIcon label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14.2 8.2V6.7c0-.7.5-.9.9-.9h2.1V2.2L14.3 2c-3.2 0-4.8 1.9-4.8 4.4v1.8H6.8V12h2.7v10h4.1V12h3.1l.5-3.8h-3z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.2s-.2-1.5-.9-2.1c-.8-.9-1.7-.9-2.1-1C15.7 3.9 12 3.9 12 3.9s-3.8 0-6.7.2c-.4.1-1.3.1-2.1 1-.7.6-.9 2.1-.9 2.1S2 9 2 10.8v1.7c0 1.8.2 3.6.2 3.6s.2 1.5.9 2.1c.8.9 1.9.8 2.4.9 1.7.2 6.5.2 6.5.2s3.7 0 6.6-.2c.4-.1 1.3-.1 2.1-1 .7-.6.9-2.1.9-2.1s.2-1.8.2-3.6v-1.7c0-1.7-.2-3.5-.2-3.5zM10 14.3V8.1l5.8 3.1-5.8 3.1z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.7 8.9H3.1V21h3.6V8.9zM4.9 3C3.7 3 3 3.8 3 4.8s.7 1.8 1.9 1.8c1.2 0 1.9-.8 1.9-1.8S6.1 3 4.9 3zM21 14.1c0-3.6-1.9-5.5-4.5-5.5-2.1 0-3 1.2-3.5 2V8.9H9.4V21H13v-6.7c0-.4 0-.7.1-1 .3-.7.9-1.4 1.9-1.4 1.4 0 2 1.1 2 2.7V21h3.6l.4-6.9z" />
                </svg>
              </SocialIcon>
            </div>
            <p className="footer-copyright">&copy; 2026 Auric Saga. Sacred Clarity, Beautifully Delivered.</p>
          </div>

          <div>
            <h3>Consultations</h3>
            <ul>
              <li><Link href="/vastu">Vastu Shastra</Link></li>
              <li><Link href="/astrology">Vedic Astrology</Link></li>
              <li><Link href="/numerology">Sacred Numerology</Link></li>
              <li><Link href="/tarot-reading">Intuitive Tarot</Link></li>
              <li><Link href="/energy-healing">Energy Healing</Link></li>
            </ul>
          </div>

          <div>
            <h3>Ecosystem</h3>
            <ul>
              <li><a href="https://aurictools.com" target="_blank" rel="noopener noreferrer">Auric Tools</a></li>
              <li><a href="https://auricsaga.shop" target="_blank" rel="noopener noreferrer">Auric Shop</a></li>
              <li><a href="https://auricgurukul.com" target="_blank" rel="noopener noreferrer">Auric Gurukul</a></li>
              <li><a href="https://blog.auricsaga.com" target="_blank" rel="noopener noreferrer">Auric Articles</a></li>
            </ul>
          </div>

          <div>
            <h3>Direct Contact</h3>
            <ul>
              <li><a href="mailto:care@auricsaga.com">care@auricsaga.com</a></li>
              <li>Worldwide video and telephonic consultations</li>
              <li>Discretion guaranteed</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Crafted with sacred reverence for the modern seeker.</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Consultation Terms</Link>
            <Link href="/book-consultation">Reserve Session</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
