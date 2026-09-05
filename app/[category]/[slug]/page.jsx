import Link from "next/link";
import { notFound } from "next/navigation";
import {
  breadcrumbJsonLd,
  getAllSubpages,
  getCategory,
  getSubpage,
  siteBaseUrl
} from "@/lib/servicesData";

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
    alternates: { canonical: `/${category.slug}/${page.slug}` },
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
    provider: { "@type": "Organization", name: "Auric Saga" },
    areaServed: "Worldwide",
    serviceType: category.label,
    url: `${siteBaseUrl}/${category.slug}/${page.slug}`
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href={`/${category.slug}`}>{category.label}</Link><span>/</span>
              <span>{page.title}</span>
            </nav>
            <div className="stack">
              <span className="eyebrow">{category.eyebrow}</span>
              <h1>{page.title}</h1>
              <p className="lead">{page.description}</p>
            </div>
            <div className="pill-list">
              {page.highlights.map((item) => <span className="pill" key={item}>{item}</span>)}
            </div>
            <div className="button-row">
              <Link className="btn btn-primary btn-lg" href="/book-consultation">Book Consultation</Link>
              <Link className="btn btn-secondary btn-lg" href={`/${category.slug}`}>Explore {category.label}</Link>
            </div>
          </div>
          <aside className="card card-pad stack scroll-reveal">
            <span className="eyebrow">Best Suited For</span>
            <div className="check-list">
              {page.suitableFor.map((item) => <p key={item}>{item}</p>)}
            </div>
            <p className="support-note">Private preparation and a practical follow-through summary are included.</p>
          </aside>
        </div>
      </section>

      {/* 2. Problems */}
      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading">
            <span className="eyebrow">Concerns We Address</span>
            <h2>When {page.title.toLowerCase()} can bring clarity.</h2>
            <p>Clients usually arrive with one visible issue and several connected patterns. The consultation identifies what deserves attention first.</p>
          </div>
          <div className="feature-grid">
            {page.painPoints.map((item, index) => (
              <article className="card card-pad scroll-reveal stack" key={item.title}>
                <span className="number-badge">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Approach */}
      <section className="section section-soft">
        <div className="container two-col">
          <div className="stack reveal">
            <span className="eyebrow">Detailed Approach</span>
            <h2>Traditional insight, interpreted with practical context.</h2>
            <p className="lead">The method respects the spiritual framework of {category.label} while keeping every recommendation understandable and usable.</p>
            <Link className="text-link" href="/contact">Ask a question before booking</Link>
          </div>
          <div className="card card-pad stack scroll-reveal content-prose">
            {page.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="preparation-note">
              <strong>Preparation:</strong>
              <span>{page.preparation}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits */}
      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading">
            <span className="eyebrow">Benefits and Remedies</span>
            <h2>What the consultation is designed to deliver.</h2>
            <p>The goal is not more information. It is a clear diagnosis, proportionate remedies, and a sequence you can actually follow.</p>
          </div>
          <div className="service-grid">
            {page.features.map((feature) => (
              <article className="card card-pad stack scroll-reveal" key={feature.title}>
                <span className="feature-mark" aria-hidden="true">+</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="section section-soft">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading">
            <span className="eyebrow">Consultation Process</span>
            <h2>Four calm steps from inquiry to integration.</h2>
          </div>
          <div className="process-grid">
            {category.process.map((step, index) => (
              <article className="process-step scroll-reveal" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                <p>{index === 0 ? "Share the exact context and supporting details." : index === 1 ? "The practitioner prepares the relevant chart, map, spread, or energetic focus." : index === 2 ? "Discuss findings privately and ask focused questions." : "Receive prioritized guidance for practical follow-through."}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <Link className="btn btn-primary btn-lg" href="/book-consultation">Start Your Request</Link>
          </div>
        </div>
      </section>

      {/* 6. Reviews */}
      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading">
            <span className="eyebrow">Client Experiences</span>
            <h2>Clarity delivered with discretion and care.</h2>
            <p>These experiences reflect Auric Saga consultations across complementary disciplines and client concerns.</p>
          </div>
          <div className="review-grid">
            {page.reviews.map((review) => (
              <figure className="card card-pad stack scroll-reveal testimonial" key={review.name}>
                <div className="review-stars" aria-label="5 out of 5 stars">*****</div>
                <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption><strong>{review.name}</strong><span>{review.context}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs and final CTA */}
      <section className="section section-soft">
        <div className="narrow stack-lg">
          <div className="stack reveal section-heading">
            <span className="eyebrow">Questions Before Booking</span>
            <h2>{page.title} FAQs</h2>
          </div>
          <div className="faq-list">
            {page.faqs.map((faq) => (
              <details className="card card-pad scroll-reveal" key={faq.question}>
                <summary><h3>{faq.question}</h3><span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="cta-banner scroll-reveal">
            <div className="stack">
              <span className="eyebrow">Private and Confidential</span>
              <h2>Ready to explore your {page.title.toLowerCase()} question?</h2>
              <p>Share the situation, preferred time, and relevant details. The care desk will confirm the right session and preparation.</p>
            </div>
            <Link className="btn btn-gold btn-lg" href="/book-consultation">Book {page.title}</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
