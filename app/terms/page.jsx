export const metadata = {
  title: "Terms",
  description: "Consultation terms template for Auric Saga services."
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="narrow stack-lg reveal">
        <span className="eyebrow">Legal</span>
        <h1>Consultation Terms</h1>
        <p>
          Auric Saga consultations provide spiritual, energetic, and reflective guidance. They are not a substitute for licensed medical, legal, financial, or psychological advice.
        </p>
        <div className="stack">
          <h2>Consultation Scope</h2>
          <p>Sessions may include Vastu, Numerology, Astrology, Tarot Reading, Energy Healing, or combined holistic guidance based on the selected service.</p>
          <h2>Client Responsibility</h2>
          <p>Clients remain responsible for decisions made after a consultation and should seek qualified professional advice where needed.</p>
          <h2>Booking and Availability</h2>
          <p>Session timing, format, preparation requirements, and pricing are confirmed by the care desk before final booking.</p>
          <h2>Contact</h2>
          <p>For terms or booking questions, email care@auricsaga.com.</p>
        </div>
      </div>
    </section>
  );
}
