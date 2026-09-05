import Link from "next/link";
import { getAllCategories } from "@/lib/servicesData";

export const metadata = {
  title: "Services",
  description: "Explore Auric Saga consultation services across Vastu, Numerology, Astrology, Tarot Reading, and Energy Healing."
};

export default function ServicesPage() {
  const categories = getAllCategories();

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <span className="eyebrow">Services</span>
            <h1>Choose the consultation path that matches your concern.</h1>
            <p className="lead">
              Explore focused guidance for space alignment, planetary timing, name frequency, intuitive decisions, and energetic balance.
            </p>
          </div>
          <aside className="card card-pad stack scroll-reveal">
            <span className="eyebrow">Private Guidance</span>
            <p>Each service includes preparation, a private session, and clear next steps for your situation.</p>
            <Link className="btn btn-primary btn-lg" href="/book-consultation">Book Consultation</Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container service-grid">
          {categories.map((category) => (
            <Link className="card card-pad stack scroll-reveal" href={`/${category.slug}`} key={category.slug}>
              <span className="eyebrow">{category.eyebrow}</span>
              <h2>{category.label}</h2>
              <p>{category.description}</p>
              <span className="pill">View {category.subpages.length} consultation pages</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
