import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, getAllSubpages, getCategory, getSubpage, siteBaseUrl } from "@/lib/servicesData";

export function generateStaticParams() {
  return getAllSubpages().map((page) => ({
    category: page.category,
    slug: page.slug
  }));
}

export function generateMetadata({ params }) {
  const category = getCategory(params.category);
  const page = getSubpage(params.category, params.slug);
  if (!category || !page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${category.slug}/${page.slug}`
    },
    openGraph: {
      title: `${page.metaTitle} | Auric Saga`,
      description: page.metaDescription,
      url: `${siteBaseUrl}/${category.slug}/${page.slug}`,
      type: "article"
    }
  };
}

export default function ServiceSubpage({ params }) {
  const category = getCategory(params.category);
  const page = getSubpage(params.category, params.slug);
  if (!category || !page) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: category.label, href: `/${category.slug}` },
    { name: page.title, href: `/${category.slug}/${page.slug}` }
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: "Auric Saga"
    },
    areaServed: "Worldwide",
    serviceType: category.label,
    url: `${siteBaseUrl}/${category.slug}/${page.slug}`
  };

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href={`/${category.slug}`}>{category.label}</Link>
              <span>/</span>
              <span>{page.title}</span>
            </nav>
            <div className="stack">
              <span className="eyebrow">{category.eyebrow}</span>
              <h1>{page.title}</h1>
              <p className="lead">{page.description}</p>
            </div>
            <div className="pill-list">
              {page.suitableFor.map((item) => (
                <span className="pill" key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="card card-pad stack scroll-reveal">
            <span className="eyebrow">Session Focus</span>
            {page.benefits.map((benefit) => (
              <p key={benefit}>{benefit}</p>
            ))}
            <Link className="btn btn-primary btn-lg" href="/book-consultation">Book This Consultation</Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="stack reveal">
            <span className="eyebrow">Overview</span>
            <h2>A focused consultation for a specific concern.</h2>
            <p>
              This session is designed for clients who need clear interpretation and realistic next steps. The reading stays grounded, confidential, and oriented toward action.
            </p>
          </div>
          <div className="feature-grid">
            {page.benefits.map((benefit) => (
              <div className="card card-pad scroll-reveal" key={benefit}>
                <h3>{benefit}</h3>
                <p>Prepared through the lens of {category.label} and explained in plain, usable guidance.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg">
          <div className="narrow stack reveal">
            <span className="eyebrow">How It Works</span>
            <h2>Your session follows a calm, structured flow.</h2>
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
            <span className="eyebrow">Next Step</span>
            <h2>Reserve a private {page.title.toLowerCase()} session.</h2>
          </div>
          <div className="stack">
            <p>Share your question, preferred time, and any relevant details. The care desk will confirm availability and preparation needs.</p>
            <Link className="btn btn-gold btn-lg" href="/book-consultation">Book Consultation</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </>
  );
}
