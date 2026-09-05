import Link from "next/link";
import AuricHeroArt from "@/components/AuricHeroArt";

export const metadata = {
  title: "About Us",
  description: "Learn about Auric Saga, its holistic consultation philosophy, practitioner approach, values, and core team."
};

const values = [
  {
    title: "Practical Ancient Wisdom",
    copy: "We treat Vastu, Jyotish, Numerology, Tarot, and energy work as applied guidance systems, not fear-based dogma."
  },
  {
    title: "Confidential Preparation",
    copy: "Every personal question, birth detail, floor plan, and business concern is handled with quiet professional discretion."
  },
  {
    title: "Clear Remedial Action",
    copy: "Each session ends with guidance that can be understood, prioritized, and implemented without confusion."
  },
  {
    title: "Holistic Perspective",
    copy: "When a concern crosses multiple areas of life, we connect the right disciplines into one coherent reading."
  }
];

const team = [
  { name: "Rohit Srivastava", image: "/rohit_srivastava.jpg", role: "Core Team" },
  { name: "Rahul", image: "/rahul.jpg", role: "Core Team" },
  { name: "Lalit Singh", image: "/lalit-singh.jpg", role: "Core Team" },
  { name: "Dinesh Kumar", image: "/dinesh_kumar-1.jpg", role: "Core Team" },
  { name: "Vincent Van Ross", image: "/vincent-van-ross.jpg", role: "Core Team" }
];

const expertise = [
  "Vastu Shastra and non-destructive space remedies",
  "Vedic Astrology, kundali, dasha, transit, and muhurat",
  "Name, birth-date, personal-cycle, and business Numerology",
  "Intuitive Tarot for relationships, career, and decisions",
  "Aura, chakra, grounding, and distance energy work",
  "Confidential online consultation for clients worldwide"
];

const testimonials = [
  {
    quote: "The consultation gave us clear, practical changes for our home without asking us to rebuild anything.",
    name: "Raghavendran S."
  },
  {
    quote: "The reading connected timing, work, and personal patterns in a way that finally felt understandable.",
    name: "Ananya Deshmukh"
  },
  {
    quote: "Every question was handled with patience and discretion, followed by a simple action plan.",
    name: "Devika Nair"
  }
];

const practiceStats = [
  { value: "2,800+", label: "Lives guided" },
  { value: "22+", label: "Countries reached" },
  { value: "4.96 / 5", label: "Client rating" },
  { value: "100%", label: "Private and tailored" }
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="stack-lg reveal">
            <span className="eyebrow">About Auric Saga</span>
            <h1>Guidance for homes, timelines, choices, and energetic clarity.</h1>
            <p className="lead">
              Auric Saga brings traditional spiritual sciences into a calm, private, and practical consultation experience for modern seekers, families, and founders.
            </p>
            <Link className="btn btn-primary btn-lg" href="/book-consultation">Book Consultation</Link>
          </div>
          <aside className="card card-pad stack scroll-reveal artwork-aside">
            <AuricHeroArt variant="about" seed="auric-core-team-philosophy" title="Auric Saga" />
            <span className="eyebrow">Philosophy</span>
            <p>
              The work is not about fatalism. It is about reading the pattern clearly, choosing better timing, restoring balance, and making decisions with steadiness.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="stack reveal">
            <span className="eyebrow">Mission</span>
            <h2>Make sacred clarity usable in everyday life.</h2>
            <p>
              Our mission is to help clients understand the energetic, spatial, numeric, and planetary forces around a situation without losing practical agency. The result is guidance that feels grounded enough to act on.
            </p>
          </div>
          <div className="card card-pad stack scroll-reveal">
            <span className="eyebrow">Backstory</span>
            <p>
              Auric Saga was shaped around a simple observation: people often seek spiritual guidance at moments of high pressure, but they need calm structure as much as intuition. The practice therefore combines preparation, private dialogue, and clear next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg">
          <div className="narrow stack reveal">
            <span className="eyebrow">Core Values</span>
            <h2>The principles behind every session.</h2>
          </div>
          <div className="feature-grid">
            {values.map((value) => (
              <article className="card card-pad scroll-reveal" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="stack reveal">
            <span className="eyebrow">Experience and Expertise</span>
            <h2>Five disciplines, brought into one considered practice.</h2>
            <p>
              Each inquiry is matched to the modality that can answer it most clearly. Cross-disciplinary review is used when space, timing, names, relationships, and energy overlap.
            </p>
          </div>
          <div className="card card-pad stack scroll-reveal">
            <span className="eyebrow">Practice Credentials</span>
            <div className="credential-list">
              {expertise.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stack-lg">
          <div className="narrow stack reveal">
            <span className="eyebrow">Credentials, Team and Recognition</span>
            <h2>Prepared by a dedicated multi-disciplinary team.</h2>
            <p>Each consultation is matched to relevant practice experience. Modality-specific background and preparation requirements are confirmed by the care desk before booking.</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article className="card card-pad team-card scroll-reveal" key={member.name}>
                <img src={member.image} alt={member.name} />
                <div className="stack" style={{ gap: "0.35rem", marginTop: "1rem", textAlign: "center" }}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="service-grid compact-grid">
            <article className="card card-pad stack scroll-reveal">
              <span className="eyebrow">Credential Verification</span>
              <h3>Practitioner background on request</h3>
              <p>The care desk can share practitioner-specific modality background relevant to your proposed consultation before booking.</p>
            </article>
            <article className="card card-pad stack scroll-reveal">
              <span className="eyebrow">Auric Articles</span>
              <h3>Public research and essays</h3>
              <p>The Auric publication platform extends consultation themes through deeper esoteric research and practical writing.</p>
            </article>
            <article className="card card-pad stack scroll-reveal">
              <span className="eyebrow">Auric Gurukul</span>
              <h3>Sacred-sciences learning</h3>
              <p>The wider Auric ecosystem includes structured learning and masterclasses for serious students of sacred sciences.</p>
            </article>
          </div>
          <div className="card card-pad two-col scroll-reveal">
            <div className="stack">
              <span className="eyebrow">Practice at a Glance</span>
              <h3>Recognized through client trust and global reach.</h3>
              <p>Auric Saga&apos;s public proof is grounded in consultation experience, client feedback, and the breadth of its five connected disciplines.</p>
            </div>
            <div className="stat-grid">
              {practiceStats.map((stat) => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">
          <div className="narrow stack reveal">
            <span className="eyebrow">Client Transformations</span>
            <h2>Clarity clients could carry into daily life.</h2>
          </div>
          <div className="service-grid">
            {testimonials.map((testimonial) => (
              <figure className="card card-pad stack scroll-reveal testimonial" key={testimonial.name}>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>{testimonial.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container card card-pad two-col">
          <div className="stack">
            <span className="eyebrow">Private Sessions</span>
            <h2>Begin with the question that matters most.</h2>
          </div>
          <div className="stack">
            <p>Share the situation you want reviewed and the care desk will guide you toward the right consultation path.</p>
            <Link className="btn btn-gold btn-lg" href="/book-consultation">Reserve Session</Link>
          </div>
        </div>
      </section>
    </>
  );
}
