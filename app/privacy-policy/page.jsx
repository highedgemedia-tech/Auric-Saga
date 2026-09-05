export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy template for Auric Saga consultation inquiries and client communication."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="narrow stack-lg reveal">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p>
          Auric Saga treats consultation inquiries, personal details, birth information, floor plans, and communication records as confidential client information.
        </p>
        <div className="stack">
          <h2>Information We Collect</h2>
          <p>We may collect your name, email address, phone number, consultation topic, preferred time, and details voluntarily shared for preparation.</p>
          <h2>How We Use Information</h2>
          <p>Information is used to respond to inquiries, prepare consultations, confirm bookings, and provide client support.</p>
          <h2>Confidentiality</h2>
          <p>Client details are not sold or shared for unrelated marketing. Sensitive consultation context is handled with professional discretion.</p>
          <h2>Contact</h2>
          <p>For privacy questions, email care@auricsaga.com.</p>
        </div>
      </div>
    </section>
  );
}
