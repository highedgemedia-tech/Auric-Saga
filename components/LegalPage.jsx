import Link from "next/link";
import AuricHeroArt from "@/components/AuricHeroArt";
import PageEditorialImage from "@/components/PageEditorialImage";

export default function LegalPage({ title, intro, updated, sections, artwork }) {
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <span className="eyebrow">Auric Saga Legal</span>
            <h1>{title}</h1>
            <p className="lead">{intro}</p>
            <span className="pill">Last updated: {updated}</span>
          </div>
          <div className="scroll-reveal">
            <AuricHeroArt variant="legal" seed={title} title={title} />
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section className={index % 2 === 0 ? "section" : "section section-soft"} key={section.title}>
          <div className="narrow two-col legal-section">
            <div className="stack reveal"><span className="eyebrow">{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2></div>
            <div className="card card-pad stack scroll-reveal content-prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {index === 0 && <PageEditorialImage src={artwork.bodySrc} alt={artwork.bodyAlt} eyebrow="Clear and Considered" title={title} copy={artwork.detail} details={[{ title: "What this covers", copy: "The essential scope, responsibilities, and expectations are stated in plain language." }, { title: "Before proceeding", copy: "Review the relevant guidance before sharing information or confirming a consultation." }, { title: "Questions", copy: "The care desk can clarify any point that affects your inquiry or booking." }]} />}
          </div>
        </section>
      ))}

      <section className="section section-soft">
        <div className="narrow cta-banner scroll-reveal"><div className="stack"><span className="eyebrow">Questions or Requests</span><h2>Contact the Auric Saga care desk.</h2><p>For policy questions, access requests, booking terms, or corrections, write to care@auricsaga.com with enough detail for the team to respond.</p></div><div className="button-row"><a className="btn btn-gold btn-lg" href="mailto:care@auricsaga.com">Email Care Desk</a><Link className="btn btn-on-dark btn-lg" href="/contact">Contact Page</Link></div></div>
      </section>
    </>
  );
}
