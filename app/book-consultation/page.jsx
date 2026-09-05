import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Book Consultation",
  description: "Reserve a private Auric Saga consultation for Vastu, Numerology, Astrology, Tarot Reading, or Energy Healing."
};

const process = [
  "Submit your primary concern and preferred modality.",
  "The care desk confirms the right session path and preparation needs.",
  "Your practitioner reviews the relevant details before the consultation.",
  "You receive clear guidance, remedies, timing, or action steps."
];

const packages = [
  {
    title: "Focused Session",
    copy: "Best for one direct question, a specific room, a name review, or a present-moment decision.",
    tag: "Single Concern",
    format: "One focused private consultation",
    pricing: "Fee confirmed after scope review"
  },
  {
    title: "Deep Consultation",
    copy: "Best for layered questions involving timing, home energy, relationships, career, or personal patterns.",
    tag: "Most Chosen",
    format: "Extended consultation with preparation",
    pricing: "Fee confirmed after scope review"
  },
  {
    title: "Master Auric Audit",
    copy: "Best for major decisions where Vastu, Astrology, Numerology, Tarot, and energy context should be viewed together.",
    tag: "Holistic",
    format: "Cross-disciplinary private audit",
    pricing: "Custom quotation after scope review"
  }
];

const faqs = [
  {
    question: "Can I book an online consultation?",
    answer: "Yes. Most sessions can be completed through private video or voice consultation."
  },
  {
    question: "Do I need to know the correct service before booking?",
    answer: "No. Share your situation and the care desk can recommend the most suitable modality."
  },
  {
    question: "Is in-person consultation available?",
    answer: "In-person sessions may be available depending on location, schedule, and the nature of the consultation."
  },
  {
    question: "Will remedies require expensive changes?",
    answer: "The guidance prioritizes practical, non-destructive, and realistic remedies wherever possible."
  }
];

export default function BookConsultationPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <span className="eyebrow">Private Reservation</span>
            <h1>Book a consultation prepared around your exact concern.</h1>
            <p className="lead">
              Choose online or in-person guidance for Vastu, Numerology, Astrology, Tarot Reading, Energy Healing, or a combined Master Auric Audit.
            </p>
            <div className="pill-list">
              <span className="pill">Online Sessions</span>
              <span className="pill">In-Person by Availability</span>
              <span className="pill">Confidential Preparation</span>
            </div>
          </div>
          <aside className="card card-pad scroll-reveal">
            <ContactForm compact />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal">
            <span className="eyebrow">Consultation Process</span>
            <h2>A calm, prepared path from inquiry to guidance.</h2>
          </div>
          <div className="feature-grid">
            {process.map((step, index) => (
              <article className="card card-pad scroll-reveal" key={step}>
                <h3>{String(index + 1).padStart(2, "0")}</h3>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg">
          <div className="narrow stack reveal">
            <span className="eyebrow">Packages</span>
            <h2>Select the depth of support you need.</h2>
          </div>
          <div className="service-grid">
            {packages.map((item) => (
              <article className="card card-pad stack scroll-reveal" key={item.title}>
                <span className="pill">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="package-meta">
                  <span>{item.format}</span>
                  <strong>{item.pricing}</strong>
                </div>
                <Link href="/contact" className="btn btn-secondary btn-md">Ask Availability</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="stack reveal">
            <span className="eyebrow">Online and In-Person</span>
            <h2>Choose the consultation mode that fits the question.</h2>
            <p>
              Online sessions work well for Astrology, Numerology, Tarot, Energy Healing, and many Vastu reviews where floor plans and photos are available. In-person visits are considered for select Vastu and space audit requirements.
            </p>
          </div>
          <div className="card card-pad stack scroll-reveal">
            <h3>Preparation checklist</h3>
            <p>Birth details for Astrology, exact spelling for Numerology, floor plans or photos for Vastu, and one clear question for Tarot or Energy Healing.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="narrow stack-lg">
          <div className="stack reveal">
            <span className="eyebrow">FAQs</span>
            <h2>Common booking questions.</h2>
          </div>
          {faqs.map((faq) => (
            <details className="card card-pad scroll-reveal" key={faq.question}>
              <summary><h3>{faq.question}</h3></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
