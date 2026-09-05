import Link from "next/link";
import AuricHeroArt from "@/components/AuricHeroArt";
import ContactForm from "@/components/ContactForm";
import ServiceArtwork, { artworkCategories } from "@/components/ServiceArtwork";

export const metadata = {
  title: "Book Consultation",
  description: "Reserve a private Auric Saga consultation for Vastu, Numerology, Astrology, Tarot Reading, or Energy Healing."
};

const process = [
  { title: "Submit Your Concern", copy: "Describe the primary question, preferred modality, and suitable consultation time." },
  { title: "Session Matching", copy: "The care desk confirms the right service, scope, format, fee, and preparation requirements." },
  { title: "Practitioner Preparation", copy: "Relevant charts, floor plans, names, questions, or energetic context are reviewed in advance." },
  { title: "Private Consultation", copy: "Discuss findings, ask questions, and receive prioritized remedies or next actions." }
];

const packages = [
  { title: "Focused Session", copy: "For one direct question, one room, a name review, or a present-moment decision.", tag: "Single Concern", format: "One focused private consultation", pricing: "Fee confirmed after scope review" },
  { title: "Deep Consultation", copy: "For layered questions involving timing, home energy, relationships, career, or personal patterns.", tag: "Most Chosen", format: "Extended consultation with preparation", pricing: "Fee confirmed after scope review" },
  { title: "Master Auric Audit", copy: "For major decisions where Vastu, Astrology, Numerology, Tarot, and energy context should be viewed together.", tag: "Holistic", format: "Cross-disciplinary private audit", pricing: "Custom quotation after scope review" }
];

const preparation = [
  { title: "Vastu", copy: "North-marked floor plan, photos, property location, room use, and priority concerns." },
  { title: "Astrology", copy: "Date, exact time, place of birth, and major dated life events when relevant." },
  { title: "Numerology", copy: "Exact name spelling, date of birth, common usage, and shortlisted options." },
  { title: "Tarot", copy: "One central question, essential context, and the choices currently under consideration." },
  { title: "Energy Healing", copy: "A quiet space, comfortable clothing, your intention, and time to rest afterwards." }
];

const faqs = [
  { question: "Can I book an online consultation?", answer: "Yes. Most sessions can be completed through private video or voice consultation for clients worldwide." },
  { question: "Do I need to know the correct service before booking?", answer: "No. Share your situation and the care desk will recommend the most suitable modality or combined consultation." },
  { question: "Is in-person consultation available?", answer: "In-person sessions may be available depending on location, schedule, and the nature of the consultation." },
  { question: "How is the fee confirmed?", answer: "The care desk reviews the scope and confirms the session format, fee, payment terms, and preparation before the booking is finalized." },
  { question: "Will remedies require expensive changes?", answer: "Guidance prioritizes practical, non-destructive, and realistic remedies wherever possible." },
  { question: "Can I reschedule?", answer: "Rescheduling and cancellation terms are shared before payment so expectations are clear before the session is reserved." }
];

export default function BookConsultationPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
  };

  return (
    <>
      <section className="page-hero" id="instant-booking">
        <div className="container hero-grid">
          <div className="stack-lg reveal"><span className="eyebrow">Private Reservation</span><h1>Book a consultation prepared around your exact concern.</h1><p className="lead">Choose online or in-person guidance for Vastu, Numerology, Astrology, Tarot Reading, Energy Healing, or a combined Master Auric Audit.</p><div className="pill-list"><span className="pill">Online Sessions</span><span className="pill">In-Person by Availability</span><span className="pill">Confidential Preparation</span></div></div>
          <aside className="card card-pad stack scroll-reveal artwork-aside"><AuricHeroArt variant="booking" seed="private-consultation-reservation" title="Consultation Journey" /><ContactForm compact /></aside>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg"><div className="narrow stack reveal section-heading"><span className="eyebrow">Choose Your Format</span><h2>Online and in-person consultation options.</h2><p>The modality and the information available determine which format gives the clearest review.</p></div><div className="elemental-gallery scroll-reveal" aria-label="Auric Saga consultation disciplines">{artworkCategories.map((category) => <ServiceArtwork category={category} compact key={category} />)}</div><div className="comparison-grid"><article className="card card-pad stack scroll-reveal"><span className="pill">Worldwide</span><h3>Online Consultation</h3><p>Best for Astrology, Numerology, Tarot, Energy Healing, and Vastu reviews supported by clear plans and photos.</p><div className="check-list"><p>Private video or voice session</p><p>Simple document sharing before the call</p><p>Flexible international scheduling</p><p>No travel required</p></div><a className="btn btn-primary btn-md" href="#instant-booking">Choose Online</a></article><article className="card card-pad stack scroll-reveal"><span className="pill">By Availability</span><h3>In-Person Consultation</h3><p>Considered for select Vastu audits and consultation requirements where physical observation materially improves the review.</p><div className="check-list"><p>Location and scope reviewed first</p><p>Travel requirements confirmed separately</p><p>On-site observation where appropriate</p><p>Written priorities after the visit</p></div><a className="btn btn-secondary btn-md" href="#instant-booking">Ask Availability</a></article></div></div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg"><div className="narrow stack reveal section-heading"><span className="eyebrow">Booking Process</span><h2>Four clear steps from request to guidance.</h2></div><div className="process-grid">{process.map((step, index) => <article className="process-step scroll-reveal" key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div>
      </section>

      <section className="section">
        <div className="container stack-lg"><div className="narrow stack reveal section-heading"><span className="eyebrow">Pricing and Packages</span><h2>Select the depth of support you need.</h2><p>Fees are confirmed only after the scope is understood, so you are not charged for a larger consultation than your concern requires.</p></div><div className="service-grid">{packages.map((item) => <article className="card card-pad stack scroll-reveal" key={item.title}><span className="pill">{item.tag}</span><h3>{item.title}</h3><p>{item.copy}</p><div className="package-meta"><span>{item.format}</span><strong>{item.pricing}</strong></div><a href="#instant-booking" className="btn btn-secondary btn-md">Request This Package</a></article>)}</div></div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg"><div className="narrow stack reveal section-heading"><span className="eyebrow">Prepare Well</span><h2>What to gather before your session.</h2><p>Accurate inputs let the practitioner spend more of your consultation on interpretation and action.</p></div><div className="service-grid">{preparation.map((item) => <article className="card card-pad stack scroll-reveal" key={item.title}><span className="feature-mark" aria-hidden="true">+</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div>
      </section>

      <section className="section">
        <div className="narrow stack-lg"><div className="stack reveal section-heading"><span className="eyebrow">Booking FAQs</span><h2>Important details before you reserve.</h2></div><div className="faq-list">{faqs.map((faq) => <details className="card card-pad scroll-reveal" key={faq.question}><summary><h3>{faq.question}</h3><span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="section section-soft">
        <div className="container cta-banner scroll-reveal"><div className="stack"><span className="eyebrow">Booking Assurance</span><h2>Clear scope, confidential handling, and no surprise commitments.</h2><p>Your fee, session scope, cancellation terms, and preparation are confirmed before payment. If the selected modality is not appropriate before preparation begins, the care desk will help correct the booking path.</p></div><div className="button-row"><a className="btn btn-gold btn-lg" href="#instant-booking">Reserve Your Session</a><Link className="btn btn-on-dark btn-lg" href="/contact">Ask a Question</Link></div></div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
