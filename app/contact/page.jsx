import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Contact Auric Saga for consultation inquiries, WhatsApp guidance, business hours, and private booking support."
};

const faqs = [
  { question: "How soon will the care desk reply?", answer: "Messages are reviewed during business hours. Complex requests may take longer when the correct practitioner or preparation must be confirmed." },
  { question: "What should I include in my first message?", answer: "Share your name, preferred contact method, general concern, likely service, location or time zone, and a few suitable time windows." },
  { question: "Can I send birth details or a floor plan immediately?", answer: "Start with a brief inquiry. The care desk will confirm the secure and relevant information needed for your consultation." },
  { question: "Can you recommend the right service?", answer: "Yes. Describe the situation in plain language; you do not need to identify the modality before contacting Auric Saga." },
  { question: "Are messages confidential?", answer: "Consultation inquiries are treated as private client communication and used only to respond, prepare, and coordinate your request." }
];

const socialLinks = ["Instagram", "Facebook", "YouTube", "LinkedIn"];

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Auric Saga",
    url: "https://auricsaga.com/contact",
    mainEntity: { "@type": "Organization", name: "Auric Saga", email: "care@auricsaga.com", areaServed: "Worldwide" }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal"><span className="eyebrow">Contact Auric Saga</span><h1>Share your concern with the care desk.</h1><p className="lead">Send your question, preferred consultation type, location or time zone, and suitable time. The team will respond with the right next step.</p><div className="button-row"><a className="btn btn-primary btn-lg" href="#contact-form">Send an Inquiry</a><a className="btn btn-secondary btn-lg" href="https://wa.me/?text=Hello%20Auric%20Saga%2C%20I%20would%20like%20to%20ask%20about%20a%20private%20consultation." target="_blank" rel="noopener noreferrer">Open WhatsApp</a></div></div>
          <aside className="card card-pad stack scroll-reveal"><span className="eyebrow">Quick Contact</span><div className="check-list"><p>Worldwide video and voice sessions</p><p>Monday-Saturday, 10:00 AM-7:00 PM IST</p><p>Private inquiry handling</p><p>Service matching available</p></div></aside>
        </div>
      </section>

      <section className="section" id="contact-form">
        <div className="container two-col"><div className="stack reveal"><span className="eyebrow">Booking and Query Form</span><h2>Tell us what you need clarity on.</h2><p className="lead">A concise, specific message helps the care desk identify the right practitioner, session depth, and preparation.</p><div className="card card-pad stack"><h3>Helpful details</h3><div className="check-list"><p>Your central question or desired outcome</p><p>The modality you are considering, if known</p><p>Your country, time zone, and preferred time</p><p>Whether you prefer video, voice, or in-person review</p></div></div></div><div className="card card-pad scroll-reveal"><ContactForm /></div></div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg"><div className="narrow stack reveal section-heading"><span className="eyebrow">Direct Contact Channels</span><h2>Choose the easiest way to begin.</h2></div><div className="service-grid"><article className="card card-pad stack scroll-reveal"><span className="feature-mark" aria-hidden="true">@</span><h3>Email the Care Desk</h3><p>Best for detailed requests, supporting context, and questions that do not require an immediate conversation.</p><a className="text-link" href="mailto:care@auricsaga.com">care@auricsaga.com</a></article><article className="card card-pad stack scroll-reveal"><span className="feature-mark" aria-hidden="true">W</span><h3>WhatsApp Inquiry</h3><p>Best for a brief first message, appointment coordination, or confirming what information is needed.</p><a className="text-link" href="https://wa.me/?text=Hello%20Auric%20Saga%2C%20I%20would%20like%20to%20ask%20about%20a%20private%20consultation." target="_blank" rel="noopener noreferrer">Start WhatsApp Message</a></article><article className="card card-pad stack scroll-reveal"><span className="feature-mark" aria-hidden="true">C</span><h3>Request a Direct Call</h3><p>Use the form to request a callback. The care desk will confirm an available time and the appropriate team member.</p><a className="text-link" href="#contact-form">Request Callback</a></article></div></div>
      </section>

      <section className="section">
        <div className="container two-col"><div className="card scroll-reveal map-card"><div className="map-panel" role="img" aria-label="Auric Saga worldwide online consultation service area"><span className="map-marker" aria-hidden="true"><span>AS</span></span></div><div className="stack map-copy"><span className="eyebrow">Service Area</span><h3>Worldwide, online-first</h3><p>International appointments are coordinated in India Standard Time. Select in-person work is reviewed by location and scope.</p></div></div><div className="stack reveal"><span className="eyebrow">Business Hours</span><h2>Consultation coordination throughout the week.</h2><div className="hours-list"><div><strong>Monday-Friday</strong><span>10:00 AM-7:00 PM IST</span></div><div><strong>Saturday</strong><span>10:00 AM-7:00 PM IST</span></div><div><strong>Sunday</strong><span>Closed / pre-arranged sessions only</span></div><div><strong>International clients</strong><span>Time-zone suitable slots by confirmation</span></div></div></div></div>
      </section>

      <section className="section section-soft">
        <div className="container two-col"><div className="stack reveal"><span className="eyebrow">Urgent Requests</span><h2>What to do when the situation feels time-sensitive.</h2><p>Mark the subject as urgent only when a decision deadline, travel, property signing, ceremony, or confirmed event date is close. Include the exact deadline and your time zone.</p><Link className="btn btn-primary btn-lg" href="/book-consultation">Submit Consultation Request</Link></div><aside className="card card-pad stack scroll-reveal urgent-note"><h3>Important care boundary</h3><p>Auric Saga is not an emergency, crisis, medical, legal, or financial service. For immediate danger or a health crisis, contact local emergency services or a qualified licensed professional.</p></aside></div>
      </section>

      <section className="section">
        <div className="narrow stack-lg"><div className="stack reveal section-heading"><span className="eyebrow">Before You Contact Us</span><h2>Common inquiry questions.</h2></div><div className="faq-list">{faqs.map((faq) => <details className="card card-pad scroll-reveal" key={faq.question}><summary><h3>{faq.question}</h3><span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="section section-soft">
        <div className="container cta-banner scroll-reveal"><div className="stack"><span className="eyebrow">Auric Community</span><h2>Stay connected with the wider Auric ecosystem.</h2><p>Follow consultation insights, learning resources, practical tools, and sacred products across Auric Saga&apos;s community channels.</p><div className="social-text-links">{socialLinks.map((item) => <a href="#" key={item}>{item}</a>)}</div></div><div className="button-row"><a className="btn btn-gold btn-lg" href="https://blog.auricsaga.com" target="_blank" rel="noopener noreferrer">Read Auric Articles</a><a className="btn btn-on-dark btn-lg" href="https://auricgurukul.com" target="_blank" rel="noopener noreferrer">Explore Auric Gurukul</a></div></div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
    </>
  );
}
