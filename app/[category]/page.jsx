import Link from "next/link";
import { notFound } from "next/navigation";
import PageEditorialImage from "@/components/PageEditorialImage";
import PageHeroIllumination from "@/components/PageHeroIllumination";
import { getCategoryArtworkSrc } from "@/components/ServiceArtwork";
import {
  breadcrumbJsonLd,
  clientReviews,
  getAllCategories,
  getCategory,
  getCategoryDetails,
  siteBaseUrl
} from "@/lib/servicesData";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `/${category.slug}` },
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
  const details = getCategoryDetails(params.category);
  if (!category || !details) notFound();

  const editorialDetails = category.process.slice(0, 3).map((step, index) => ({
    title: step,
    copy: [
      `The care desk confirms the information needed for your ${category.label} review.`,
      "The practitioner studies the supplied context before the private session begins.",
      "Findings are explained clearly, with time for focused questions and priorities."
    ][index]
  }));

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: category.label, href: `/${category.slug}` }
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.title,
    description: category.description,
    provider: { "@type": "Organization", name: "Auric Saga" },
    areaServed: "Worldwide",
    serviceType: category.label
  };

  return (
    <>
      <section className={`page-hero page-hero--${category.slug}`}>
        <PageHeroIllumination variant={category.slug} scope={`${category.slug}-overview`} />
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{category.label}</span></nav>
            <div className="stack">
              <span className="eyebrow">{category.eyebrow}</span>
              <h1>{category.title}</h1>
              <p className="lead">{category.description}</p>
            </div>
            <div className="button-row">
              <Link className="btn btn-primary btn-lg" href="/book-consultation">{category.cta.label}</Link>
              <Link className="btn btn-secondary btn-lg" href="/contact">Ask the Care Desk</Link>
            </div>
          </div>
          <aside className="card card-pad stack scroll-reveal artwork-aside">
            <span className="eyebrow">What You Receive</span>
            <div className="check-list">{category.benefits.map((benefit) => <p key={benefit}>{benefit}</p>)}</div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading">
            <span className="eyebrow">Common Concerns</span>
            <h2>Signs that a focused {category.label.toLowerCase()} consultation may help.</h2>
          </div>
          <div className="feature-grid">
            {details.painPoints.map((item, index) => (
              <article className="card card-pad stack scroll-reveal" key={item.title}>
                <span className="number-badge">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading">
            <span className="eyebrow">Consultation Paths</span>
            <h2>Choose the guidance that matches your exact question.</h2>
            <p>Each focused page includes preparation requirements, benefits, the consultation sequence, reviews, remedies, and FAQs.</p>
          </div>
          <div className="service-grid">
            {category.subpages.map((page) => (
              <Link className="card card-pad scroll-reveal stack" key={page.slug} href={`/${category.slug}/${page.slug}`}>
                <span className="feature-mark" aria-hidden="true">+</span><h3>{page.title}</h3><p>{page.description}</p><span className="text-link">Explore consultation</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="container two-col">
          <div className="stack reveal">
            <span className="eyebrow">Our Method</span>
            <h2>Prepared privately and explained without fear-based language.</h2>
            <p className="lead">The consultation connects traditional principles with the actual context of your home, timeline, name, choice, or energetic concern.</p>
            <div className="method-summary">
              {details.features.slice(0, 3).map((feature) => (
                <div key={feature.title}><strong>{feature.title}</strong><span>{feature.copy}</span></div>
              ))}
            </div>
          </div>
          <div className="card card-pad stack scroll-reveal content-prose">
            {details.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="preparation-note"><strong>Before your session</strong><span>{details.preparation}</span></div>
          </div>
          <PageEditorialImage
            src={getCategoryArtworkSrc(category.slug)}
            alt={`${category.label} consultation materials in a natural setting`}
            eyebrow="Inside the Practice"
            title={`${category.label}, seen through its natural elements.`}
            copy="A visual study of the materials, symbols, and elemental relationships considered during this consultation path."
            details={editorialDetails}
          />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading"><span className="eyebrow">Consultation Process</span><h2>A clear path from preparation to implementation.</h2></div>
          <div className="process-grid">
            {category.process.map((step, index) => (
              <article className="process-step scroll-reveal" key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3><p>Each stage keeps the review focused, confidential, and connected to a practical next action.</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal section-heading"><span className="eyebrow">Client Experiences</span><h2>Trusted for calm interpretation and usable guidance.</h2></div>
          <div className="review-grid">
            {clientReviews.map((review) => (
              <figure className="card card-pad stack scroll-reveal testimonial" key={review.name}><div className="review-stars" aria-label="5 out of 5 stars">*****</div><blockquote>&ldquo;{review.quote}&rdquo;</blockquote><figcaption><strong>{review.name}</strong><span>{review.context}</span></figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="narrow stack-lg">
          <div className="stack reveal section-heading"><span className="eyebrow">Before You Book</span><h2>{category.label} consultation FAQs</h2></div>
          <div className="faq-list">
            {details.faqs.map((faq) => <details className="card card-pad scroll-reveal" key={faq.question}><summary><h3>{faq.question}</h3><span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}
          </div>
          <div className="cta-banner scroll-reveal">
            <div className="stack">
              <span className="eyebrow">Private Consultation</span>
              <h2>{category.cta.title}</h2>
              <p>Share your main concern and the care desk will guide you toward the most suitable consultation path.</p>
            </div>
            <Link className="btn btn-gold btn-lg" href="/book-consultation">{category.cta.label}</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </>
  );
}
