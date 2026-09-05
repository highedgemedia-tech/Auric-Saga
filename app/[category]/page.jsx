import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, getAllCategories, getCategory, siteBaseUrl } from "@/lib/servicesData";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: category.slug
  }));
}

export function generateMetadata({ params }) {
  const category = getCategory(params.category);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: {
      canonical: `/${category.slug}`
    },
    openGraph: {
      title: `${category.metaTitle} | Auric Saga`,
      description: category.metaDescription,
      url: `${siteBaseUrl}/${category.slug}`,
      type: "website"
    }
  };
}

export default function CategoryPage({ params }) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: category.label, href: `/${category.slug}` }
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.title,
    description: category.description,
    provider: {
      "@type": "Organization",
      name: "Auric Saga"
    },
    areaServed: "Worldwide",
    serviceType: category.label
  };

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>{category.label}</span>
            </nav>
            <div className="stack">
              <span className="eyebrow">{category.eyebrow}</span>
              <h1>{category.title}</h1>
              <p className="lead">{category.description}</p>
            </div>
            <div className="pill-list">
              {category.process.map((step) => (
                <span className="pill" key={step}>{step}</span>
              ))}
            </div>
            <Link className="btn btn-primary btn-lg" href="/book-consultation">{category.cta.label}</Link>
          </div>

          <aside className="card card-pad scroll-reveal">
            <div className="stack">
              <span className="eyebrow">What You Receive</span>
              {category.benefits.map((benefit) => (
                <p key={benefit}>{benefit}</p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal">
            <span className="eyebrow">Consultation Paths</span>
            <h2>Choose the guidance that matches your question.</h2>
            <p>Each page below uses the same consultation framework with a focused preparation checklist, benefits, and booking direction.</p>
          </div>

          <div className="service-grid">
            {category.subpages.map((page) => (
              <Link className="card card-pad scroll-reveal stack" key={page.slug} href={`/${category.slug}/${page.slug}`}>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <span className="eyebrow">Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div className="stack reveal">
            <span className="eyebrow">Method</span>
            <h2>Prepared privately, explained clearly.</h2>
            <p>Before your session, the relevant details are reviewed so the actual consultation can focus on interpretation, remedies, timing, and action.</p>
          </div>
          <div className="feature-grid">
            {category.process.map((step, index) => (
              <div className="card card-pad scroll-reveal" key={step}>
                <h3>{String(index + 1).padStart(2, "0")}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container card card-pad two-col">
          <div className="stack">
            <span className="eyebrow">Private Consultation</span>
            <h2>{category.cta.title}</h2>
          </div>
          <div className="stack">
            <p>Use the dedicated booking page to share your details, preferred time, and the concern you want reviewed.</p>
            <Link className="btn btn-gold btn-lg" href="/book-consultation">{category.cta.label}</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </>
  );
}
