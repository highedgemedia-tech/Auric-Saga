function pickItems(items, fallback, count = 4) {
  const selected = (items || []).slice(0, count).map((item) =>
    typeof item === "string" ? item : item.title
  );

  return selected.length ? selected : fallback;
}

function CategorySeoContent({ category, details }) {
  const serviceNames = category.subpages.slice(0, 5).map((page) => page.title).join(", ");
  const reviewItems = pickItems(details.features, category.benefits, 5);
  const concernItems = pickItems(details.painPoints, category.benefits, 4);

  return (
    <section className="section seo-rich-section">
      <div className="container seo-rich-layout">
        <div className="seo-rich-main stack reveal">
          <span className="eyebrow">In Depth</span>
          <h2>{category.label} guidance shaped for real life decisions.</h2>
          <div className="seo-rich-prose">
            <p>
              A meaningful {category.label.toLowerCase()} consultation is not built from generic predictions or
              isolated rules. It begins with the situation you are actually facing: the home you live in, the name
              you use every day, the timing of an important decision, the question that keeps returning, or the
              energetic pattern that feels difficult to settle. Auric Saga uses this context to keep the reading
              personal, practical, and connected to the outcome you want to understand.
            </p>
            <p>
              This service path is designed for clients who want spiritual clarity without confusion, pressure, or
              fear-based language. The consultation looks at the relevant principles behind {category.label}, then
              translates them into priorities that can be discussed calmly and implemented realistically. Instead
              of overwhelming you with disconnected observations, the session separates the central issue from
              secondary influences so that your next step feels more grounded.
            </p>
            <p>
              Use this page to compare focused options such as {serviceNames}, and choose the route that best
              matches your question. Each service page explains when that consultation is useful, what information
              to prepare, how the review is handled, and what kind of remedies, timing notes, or action guidance
              you can expect after the session.
            </p>
          </div>
        </div>
        <aside className="seo-rich-panel scroll-reveal">
          <div className="seo-rich-note">
            <h3>What this page helps you review</h3>
            <ul className="seo-topic-list">
              {reviewItems.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="seo-context-note">
            <strong>Useful when</strong>
            <span>{concernItems.join(", ")} are affecting your choices, space, work, relationships, or peace of mind.</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SubpageSeoContent({ category, page }) {
  const reviewItems = pickItems(page.features, page.benefits, 5);
  const suitableItems = pickItems(page.suitableFor, page.benefits, 3);

  return (
    <section className="section seo-rich-section">
      <div className="container seo-rich-layout">
        <div className="seo-rich-main stack reveal">
          <span className="eyebrow">Focused Guide</span>
          <h2>A practical guide to {page.title.toLowerCase()}.</h2>
          <div className="seo-rich-prose">
            <p>
              A {page.title.toLowerCase()} consultation is most useful when you need clarity on a specific concern
              rather than a broad spiritual overview. The session is shaped around the exact question, space,
              name, timing, relationship, or energetic pattern you bring forward. Within the larger discipline of
              {` ${category.label}`}, this focused service helps narrow the review so the practitioner can study the
              most relevant details and explain them in a way that is easy to understand.
            </p>
            <p>
              Auric Saga keeps the process private, structured, and practical. You are encouraged to share the
              background honestly, including the symptoms, choices, dates, layouts, names, or emotional patterns
              that led you to book the session. The review then connects those details with traditional principles,
              lived context, and a clear sequence of priorities. This helps avoid scattered advice and keeps the
              guidance tied to the concern that matters now.
            </p>
            <p>
              {page.description} The consultation may include diagnosis, comparison of options, timing insight,
              remedial guidance, preparation notes, or integration practices depending on the service selected.
              The emphasis remains on proportionate recommendations that can be followed without panic, confusion,
              or unnecessary complexity.
            </p>
          </div>
        </div>
        <aside className="seo-rich-panel scroll-reveal">
          <div className="seo-rich-note">
            <h3>Key areas covered</h3>
            <ul className="seo-topic-list">
              {reviewItems.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="seo-context-note">
            <strong>Best suited for</strong>
            <span>{suitableItems.join(", ")} who want direct, confidential, and practical guidance.</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function SeoContentSection({ category, details, page }) {
  if (page) {
    return <SubpageSeoContent category={category} page={page} />;
  }

  return <CategorySeoContent category={category} details={details} />;
}
