import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How Auric Saga handles consultation inquiries, personal details, birth information, floor plans, and client communication."
};

const sections = [
  { title: "Information We Collect", paragraphs: ["We may collect your name, email address, phone or WhatsApp details, location or time zone, preferred session time, consultation topic, and information you voluntarily share for preparation.", "Depending on the selected service, preparation may involve birth details, name spellings, floor plans, property photos, relationship context, or spiritual and energetic concerns. Please share only information relevant to your request."] },
  { title: "How Information Is Used", paragraphs: ["Information is used to answer inquiries, recommend the appropriate modality, prepare consultations, confirm appointments, provide follow-through guidance, and maintain essential client-support records.", "Auric Saga does not use sensitive consultation context for unrelated advertising. General service updates are sent only through the communication channels you have chosen to use."] },
  { title: "Confidentiality and Security", paragraphs: ["Consultation questions, birth information, floor plans, private messages, and session context are treated as confidential client information and accessed only where required for preparation or support.", "Reasonable administrative and technical practices are used to protect records. No internet transmission or electronic storage method can be guaranteed to be completely secure, so highly sensitive information should be shared only after the care desk confirms it is necessary."] },
  { title: "Retention, Providers and Disclosure", paragraphs: ["Records are retained only as long as reasonably needed for consultation delivery, follow-up, legal obligations, dispute handling, and legitimate operational needs.", "Necessary service providers may process limited information for email, scheduling, payment, video calls, or website operation. Information may also be disclosed when required by law, to protect safety, or to prevent misuse of services."] },
  { title: "Your Choices and Rights", paragraphs: ["You may ask to review, correct, or delete information held about you, subject to records Auric Saga must retain for legal or operational reasons. You may also ask the care desk to stop non-essential follow-up communication.", "This website may use essential browser technologies needed for navigation and performance. Any future analytics or optional tracking should be described here before being enabled."] }
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" intro="Auric Saga respects the private nature of spiritual consultation and explains here how inquiry and client information is handled." updated="5 September 2026" sections={sections} illumination="privacy" artwork={{ src: "/art-page-privacy-policy.jpg", detail: "Confidential records and secure client communication", alt: "Confidential consultation folder protected by a lock and sealed envelope", bodySrc: "/image-page-privacy-policy.jpg", bodyAlt: "A sealed consultation envelope being placed in a secure archive" }} />;
}
