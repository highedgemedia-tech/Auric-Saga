import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Consultation Terms",
  description: "Terms covering Auric Saga consultation scope, client responsibility, bookings, payments, rescheduling, and confidentiality."
};

const sections = [
  { title: "Consultation Scope", paragraphs: ["Auric Saga provides Vastu, Numerology, Vedic Astrology, Tarot Reading, Energy Healing, and combined holistic consultations. The agreed service, format, preparation, deliverables, timing, and fee are confirmed before booking.", "Readings and recommendations are interpretive and reflective. Outcomes depend on many personal and external factors, and no specific financial, relationship, health, business, or life result is guaranteed."] },
  { title: "Professional-Care Boundary", paragraphs: ["Consultations are not a substitute for licensed medical, mental-health, legal, financial, architectural, engineering, or emergency advice. Energy work does not diagnose, treat, or cure medical conditions.", "When a concern falls within a regulated professional field, clients should consult a suitably qualified professional before acting on any spiritual or holistic guidance."] },
  { title: "Client Responsibility", paragraphs: ["Clients are responsible for providing accurate information, reviewing recommendations carefully, and deciding what actions are appropriate for their circumstances.", "For Vastu work, structural, electrical, plumbing, safety, or construction changes must be reviewed by qualified professionals. For major financial, legal, or health decisions, obtain appropriate licensed advice."] },
  { title: "Booking, Payment and Rescheduling", paragraphs: ["A booking is confirmed only after the care desk accepts the scope and communicates the fee, payment instructions, preparation requirements, and appointment time.", "Rescheduling, cancellation, late-arrival, travel, and refund conditions are shared before payment and may vary by service because practitioner preparation can begin before the live session."] },
  { title: "Respect, Confidentiality and Use", paragraphs: ["Auric Saga will handle client context with discretion. Clients are expected to communicate respectfully and must not use consultations to harass, surveil, manipulate, or make harmful claims about another person.", "Written summaries and consultation materials are intended for the booked client. They may not be resold, republished, or presented as professional certification without written permission."] }
];

export default function TermsPage() {
  return <LegalPage title="Consultation Terms" intro="These terms set clear expectations for the scope, responsibilities, preparation, and use of Auric Saga consultations." updated="5 September 2026" sections={sections} illumination="terms" artwork={{ src: "/art-page-consultation-terms.jpg", detail: "Clear scope, fair responsibility, and considered guidance", alt: "Consultation agreement with balanced brass scales and fountain pen", bodySrc: "/image-page-consultation-terms.jpg", bodyAlt: "Client and consultant reviewing clear consultation terms together" }} />;
}
