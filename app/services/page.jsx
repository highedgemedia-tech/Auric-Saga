import Link from "next/link";
import AuricHeroArt from "@/components/AuricHeroArt";
import ServiceArtwork from "@/components/ServiceArtwork";
import { clientReviews, getAllCategories } from "@/lib/servicesData";

export const metadata = {
  title: "Services",
  description: "Explore Auric Saga consultation services across Vastu, Numerology, Astrology, Tarot Reading, and Energy Healing."
};

const concernPaths = [
  { title: "Home or Workplace", copy: "Choose Vastu when the concern is connected with space, direction, room use, or environmental balance.", href: "/vastu" },
  { title: "Name or Important Date", copy: "Choose Numerology for birth patterns, names, launch dates, personal cycles, or business identity.", href: "/numerology" },
  { title: "Timing or Life Pattern", copy: "Choose Astrology for kundali analysis, dasha, transit, compatibility, career, or marriage timing.", href: "/astrology" },
  { title: "Present Decision", copy: "Choose Tarot for relationship dynamics, emotional clarity, choices, and immediate direction.", href: "/tarot-reading" },
  { title: "Energetic Heaviness", copy: "Choose Energy Healing for grounding, chakra balance, aura cleansing, or boundary restoration.", href: "/energy-healing" },
  { title: "Several Connected Concerns", copy: "Choose a Master Auric Audit when space, timing, identity, decisions, and energy need one integrated review.", href: "/book-consultation" }
];

const process = ["Share your concern", "Confirm the right modality", "Practitioner preparation", "Private consultation", "Receive action guidance"];

export default function ServicesPage() {
  const categories = getAllCategories();

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <span className="eyebrow">Sacred Modalities</span>
            <h1>Choose the consultation path that matches your concern.</h1>
            <p className="lead">Focused guidance for space alignment, planetary timing, name frequency, intuitive decisions, and energetic balance.</p>
            <div className="button-row"><Link className="btn btn-primary btn-lg" href="/book-consultation">Book Consultation</Link><Link className="btn btn-secondary btn-lg" href="/contact">Help Me Choose</Link></div>
          </div>
          <aside className="card card-pad stack scroll-reveal artwork-aside"><AuricHeroArt variant="services" seed="all-consultation-paths" title="Five Sacred Modalities" /><span className="eyebrow">Private Guidance</span><div className="check-list"><p>Preparation before the session</p><p>Worldwide video or voice consultation</p><p>Clear remedies and next steps</p><p>Confidential client handling</p></div></aside>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading"><span className="eyebrow">Five Core Disciplines</span><h2>Explore every Auric Saga consultation category.</h2></div>
          <div className="service-grid">
            {categories.map((category) => (
              <Link className="card card-pad stack scroll-reveal service-visual-card" href={`/${category.slug}`} key={category.slug}><ServiceArtwork category={category.slug} compact showCaption={false} /><span className="eyebrow">{category.eyebrow}</span><h2>{category.label}</h2><p>{category.description}</p><span className="pill">{category.subpages.length} focused services</span><span className="text-link">View all options</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading"><span className="eyebrow">Find Your Starting Point</span><h2>Begin with the issue you can describe most clearly.</h2><p>You do not need to know the correct modality before contacting the care desk.</p></div>
          <div className="service-grid">
            {concernPaths.map((item) => <Link className="card card-pad stack scroll-reveal" href={item.href} key={item.title}><span className="feature-mark" aria-hidden="true">+</span><h3>{item.title}</h3><p>{item.copy}</p><span className="text-link">Explore this path</span></Link>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="stack reveal"><span className="eyebrow">Integrated Guidance</span><h2>One concern may have more than one layer.</h2><p className="lead">A home decision can involve Vastu, timing, a business name, and emotional readiness. The right combination is chosen only when it adds useful clarity.</p><Link className="text-link" href="/book-consultation">Explore the Master Auric Audit</Link></div>
          <div className="card card-pad stack scroll-reveal"><span className="eyebrow">What Stays Consistent</span><div className="check-list"><p>No fear-based interpretation</p><p>Remedies proportional to the concern</p><p>Plain-language explanation</p><p>Private preparation and consultation</p><p>Action priorities after the session</p></div></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg"><div className="narrow stack reveal section-heading"><span className="eyebrow">How It Works</span><h2>From first inquiry to practical follow-through.</h2></div><div className="process-grid services-process">{process.map((step, index) => <article className="process-step scroll-reveal" key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3><p>The care desk keeps each stage clear and confirms what is needed next.</p></article>)}</div></div>
      </section>

      <section className="section">
        <div className="container stack-lg"><div className="narrow stack reveal section-heading"><span className="eyebrow">Client Transformations</span><h2>Real experiences across the Auric Saga disciplines.</h2></div><div className="review-grid">{clientReviews.map((review) => <figure className="card card-pad stack scroll-reveal testimonial" key={review.name}><div className="review-stars" aria-label="5 out of 5 stars">*****</div><blockquote>&ldquo;{review.quote}&rdquo;</blockquote><figcaption><strong>{review.name}</strong><span>{review.context}</span></figcaption></figure>)}</div></div>
      </section>

      <section className="section section-soft">
        <div className="container cta-banner scroll-reveal"><div className="stack"><span className="eyebrow">Clarity Starts Here</span><h2>Not sure which consultation fits?</h2><p>Share your central question. The care desk will recommend a focused session or combined review without asking you to guess.</p></div><div className="button-row"><Link className="btn btn-gold btn-lg" href="/book-consultation">Book Consultation</Link><Link className="btn btn-on-dark btn-lg" href="/contact">Contact the Care Desk</Link></div></div>
      </section>
    </>
  );
}
