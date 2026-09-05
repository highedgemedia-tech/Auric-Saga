import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Contact Auric Saga for consultation inquiries, WhatsApp guidance, business hours, and private booking support."
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Auric Saga",
    url: "https://auricsaga.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Auric Saga",
      email: "care@auricsaga.com",
      areaServed: "Worldwide"
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <span className="eyebrow">Contact Auric Saga</span>
            <h1>Share your concern with the care desk.</h1>
            <p className="lead">
              Send your question, preferred consultation type, and available time. The team will respond with the right next step.
            </p>
            <div className="pill-list">
              <a className="pill" href="mailto:care@auricsaga.com">care@auricsaga.com</a>
              <a className="pill" href="https://wa.me/?text=Hello%20Auric%20Saga%2C%20I%20would%20like%20to%20ask%20about%20a%20private%20consultation." target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>

          <aside className="card card-pad stack scroll-reveal">
            <span className="eyebrow">Contact Details</span>
            <p>Email: care@auricsaga.com</p>
            <p>Consultation mode: Worldwide video, voice, and select in-person sessions.</p>
            <p>Business hours: Monday to Saturday, 10:00 AM to 7:00 PM IST.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="card card-pad scroll-reveal">
            <ContactForm />
          </div>

          <div className="stack-lg">
            <div className="card card-pad stack scroll-reveal">
              <span className="eyebrow">Location</span>
              <h2>Consultations available worldwide.</h2>
              <p>
                Auric Saga primarily works through private online consultations. In-person availability is confirmed after reviewing the nature of the request.
              </p>
            </div>

            <div className="card card-pad scroll-reveal map-card">
              <div className="map-panel" role="img" aria-label="Auric Saga worldwide online consultation service area">
                <span className="map-marker" aria-hidden="true"><span>AS</span></span>
              </div>
              <div className="stack map-copy">
                <span className="eyebrow">Service Area</span>
                <h3>Worldwide, online-first</h3>
                <p>Sessions are coordinated in India Standard Time, with suitable slots arranged for international clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
    </>
  );
}
