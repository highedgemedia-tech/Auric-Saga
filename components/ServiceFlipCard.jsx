import Link from "next/link";

const serviceIconPaths = {
  vastu: (
    <>
      <path d="M5 11.5 12 5l7 6.5" />
      <path d="M7.5 10v8.5h9V10" />
      <path d="M10 18.5v-4h4v4" />
      <path d="M4 20h16" />
    </>
  ),
  "home-vastu": (
    <>
      <path d="M4.5 11.5 12 5l7.5 6.5" />
      <path d="M7 10.5v8h10v-8" />
      <path d="M10 18.5v-4h4v4" />
      <path d="M9 8.8h6" />
    </>
  ),
  "office-vastu": (
    <>
      <path d="M6 20V5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5V20" />
      <path d="M4 20h16" />
      <path d="M9 8h1.5" />
      <path d="M13.5 8H15" />
      <path d="M9 11.5h1.5" />
      <path d="M13.5 11.5H15" />
      <path d="M10 20v-4h4v4" />
    </>
  ),
  "commercial-vastu": (
    <>
      <path d="M5 9h14l-1-4H6L5 9Z" />
      <path d="M6.5 9v10" />
      <path d="M17.5 9v10" />
      <path d="M4 19h16" />
      <path d="M9 19v-5h6v5" />
      <path d="M8 12h8" />
    </>
  ),
  "plot-vastu": (
    <>
      <path d="m5 7 5-2 4 2 5-2v12l-5 2-4-2-5 2V7Z" />
      <path d="M10 5v12" />
      <path d="M14 7v12" />
      <path d="m7.5 10 2 1.2" />
      <path d="m16.5 13-2-1.2" />
    </>
  ),
  "flat-vastu": (
    <>
      <path d="M7 20V5h10v15" />
      <path d="M4.5 20h15" />
      <path d="M10 8h1" />
      <path d="M13 8h1" />
      <path d="M10 11.5h1" />
      <path d="M13 11.5h1" />
      <path d="M10 20v-4h4v4" />
    </>
  ),
  "vastu-remedies": (
    <>
      <path d="M12 4v4" />
      <path d="M12 16v4" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="m6.7 6.7 2.8 2.8" />
      <path d="m14.5 14.5 2.8 2.8" />
      <path d="m17.3 6.7-2.8 2.8" />
      <path d="m9.5 14.5-2.8 2.8" />
      <circle cx="12" cy="12" r="2.2" />
    </>
  ),
  "business-vastu": (
    <>
      <path d="M8 8V6.5A1.5 1.5 0 0 1 9.5 5h5A1.5 1.5 0 0 1 16 6.5V8" />
      <path d="M5 8h14v10.5A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5V8Z" />
      <path d="M5 12.5h14" />
      <path d="M10 12.5v1h4v-1" />
    </>
  ),
  "wealth-vastu": (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M9.5 9.2h4.2" />
      <path d="M9.5 12h4.2" />
      <path d="M10.2 9.2c2.6 0 3.5 1.2 3.5 2.8s-.9 2.8-3.5 2.8" />
      <path d="M10.2 14.8 14 19" />
    </>
  ),
  numerology: (
    <>
      <path d="M8 5h8" />
      <path d="M12 5v14" />
      <path d="M7 14c0 2.8 2.2 5 5 5s5-2.2 5-5" />
      <path d="M9 10h6" />
    </>
  ),
  "name-numerology": (
    <>
      <path d="M5 18.5h14" />
      <path d="M7 15.5 12 5l5 10.5" />
      <path d="M9 12h6" />
      <path d="M17 6.5v9" />
    </>
  ),
  "business-name-numerology": (
    <>
      <path d="M6 18V7h12v11" />
      <path d="M4 20h16" />
      <path d="M9 10h6" />
      <path d="M9 13h6" />
      <path d="M10 18v-2h4v2" />
    </>
  ),
  "date-of-birth-numerology": (
    <>
      <path d="M6 5h12v14H6z" />
      <path d="M8 3.5V6" />
      <path d="M16 3.5V6" />
      <path d="M6 9h12" />
      <path d="M10 13h4" />
      <path d="M12 11v4" />
    </>
  ),
  "lucky-number-consultation": (
    <>
      <path d="M12 4.5 14 9l4.8.4-3.7 3.1 1.1 4.7L12 14.7l-4.2 2.5 1.1-4.7-3.7-3.1L10 9l2-4.5Z" />
      <path d="M12 9.2v5" />
      <path d="M10.4 10.8h3.2" />
    </>
  ),
  "personal-year-reading": (
    <>
      <path d="M7 7.5a7 7 0 0 1 10.5.8" />
      <path d="M17.5 5.2v3.1h-3.1" />
      <path d="M17 16.5a7 7 0 0 1-10.5-.8" />
      <path d="M6.5 18.8v-3.1h3.1" />
      <path d="M12 9v6" />
    </>
  ),
  "baby-name-numerology": (
    <>
      <path d="M8 11a4 4 0 0 1 8 0v3a4 4 0 0 1-8 0v-3Z" />
      <path d="M9.5 9.2 8 6.5" />
      <path d="M14.5 9.2 16 6.5" />
      <path d="M10.5 14h3" />
      <path d="M6 20h12" />
    </>
  ),
  "mobile-number-numerology": (
    <>
      <path d="M8 4.5h8A1.5 1.5 0 0 1 17.5 6v12A1.5 1.5 0 0 1 16 19.5H8A1.5 1.5 0 0 1 6.5 18V6A1.5 1.5 0 0 1 8 4.5Z" />
      <path d="M10 7.5h4" />
      <path d="M12 16.5h.01" />
      <path d="M9.5 11h5" />
    </>
  ),
  "signature-correction": (
    <>
      <path d="M5 18.5c3.5-5.5 5.7-8.2 6.6-8.2.8 0 .5 2.7 1.3 2.7.7 0 1.5-2.1 2.6-2.1 1 0 1 1.8 2.5 1.8" />
      <path d="M14.5 5.5 18.5 9.5" />
      <path d="m13.5 10.5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  astrology: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.75v2.5" />
      <path d="M12 18.75v2.5" />
      <path d="M2.75 12h2.5" />
      <path d="M18.75 12h2.5" />
      <path d="m5.45 5.45 1.75 1.75" />
      <path d="m16.8 16.8 1.75 1.75" />
      <path d="m18.55 5.45-1.75 1.75" />
      <path d="m7.2 16.8-1.75 1.75" />
    </>
  ),
  "kundli-reading": (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5v14" />
      <path d="M5 12h14" />
      <path d="m7.1 7.1 9.8 9.8" />
      <path d="m16.9 7.1-9.8 9.8" />
    </>
  ),
  "career-astrology": (
    <>
      <path d="M8 8V6.5A1.5 1.5 0 0 1 9.5 5h5A1.5 1.5 0 0 1 16 6.5V8" />
      <path d="M5 8h14v10.5A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5V8Z" />
      <path d="M8 15l3-3 2 2 3-4" />
    </>
  ),
  "marriage-astrology": (
    <>
      <circle cx="9.5" cy="13.5" r="4" />
      <circle cx="14.5" cy="13.5" r="4" />
      <path d="M12 6.5 14 4l2 2.5" />
      <path d="M10 6.5h6" />
    </>
  ),
  "love-compatibility": (
    <>
      <path d="M12 19s-7-4.2-7-9.1A3.8 3.8 0 0 1 11.7 7 3.8 3.8 0 0 1 19 9.9C19 14.8 12 19 12 19Z" />
      <path d="M8.5 12h7" />
      <path d="m13.5 10 2 2-2 2" />
    </>
  ),
  "dasha-analysis": (
    <>
      <path d="M5 17h14" />
      <path d="M7 17V8" />
      <path d="M12 17V5" />
      <path d="M17 17v-6" />
      <path d="M7 8h10" />
      <path d="M12 5h5" />
    </>
  ),
  "transit-reading": (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M4.5 12c2-4.2 5-6.3 9-6.3 2.8 0 5 1.1 6 3" />
      <path d="M19.5 12c-2 4.2-5 6.3-9 6.3-2.8 0-5-1.1-6-3" />
      <path d="m17.6 6.2 1.9 2.5-3.1.5" />
      <path d="m6.4 17.8-1.9-2.5 3.1-.5" />
    </>
  ),
  "muhurat-selection": (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 8v4l2.5 1.5" />
      <path d="M17.5 4.8 19 3.3" />
      <path d="M6.5 4.8 5 3.3" />
      <path d="M12 2.8v2" />
    </>
  ),
  "birth-time-rectification": (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 7.5v4.5l-3 2" />
      <path d="M15.8 6.2 18 4" />
      <path d="M17 9h3" />
      <path d="M5 19l3-3" />
    </>
  ),
  tarot: (
    <>
      <path d="M8 4.5h8a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 18V6A1.5 1.5 0 0 1 8 4.5Z" />
      <path d="m12 8 2 4-2 4-2-4 2-4Z" />
      <path d="M9 6.75h6" />
    </>
  ),
  "career-tarot": (
    <>
      <path d="M7 5.5h8.5A1.5 1.5 0 0 1 17 7v11.5H8.5A1.5 1.5 0 0 1 7 17V5.5Z" />
      <path d="M10 10h4" />
      <path d="M10 13h4" />
      <path d="M6 18.5h11" />
    </>
  ),
  "yes-no-tarot": (
    <>
      <path d="M6 6h12v12H6z" />
      <path d="m8.5 12 2.1 2.1L15.5 9" />
      <path d="M8.8 8.8 15.2 15.2" />
    </>
  ),
  "decision-making": (
    <>
      <path d="M12 5v5" />
      <path d="M12 10 7 15" />
      <path d="M12 10 17 15" />
      <path d="M7 15v4" />
      <path d="M17 15v4" />
      <path d="m5.8 17.8 1.2 1.2 2.2-2.5" />
      <path d="m15.5 17 3 3" />
      <path d="m18.5 17-3 3" />
    </>
  ),
  "monthly-tarot": (
    <>
      <path d="M6 6h12v13H6z" />
      <path d="M6 10h12" />
      <path d="M9 4v3" />
      <path d="M15 4v3" />
      <path d="M9 13h2" />
      <path d="M13 13h2" />
      <path d="M9 16h2" />
    </>
  ),
  "spiritual-guidance": (
    <>
      <path d="M12 19c-3-2.2-4.5-4.4-4.5-6.5S9.5 8.8 12 12c2.5-3.2 4.5-1.6 4.5.5S15 16.8 12 19Z" />
      <path d="M12 12V5" />
      <path d="m9 8 3-3 3 3" />
    </>
  ),
  "third-party-reading": (
    <>
      <circle cx="8.5" cy="9" r="2.5" />
      <circle cx="15.5" cy="9" r="2.5" />
      <path d="M4.5 18c.8-2.6 2.1-4 4-4s3.2 1.4 4 4" />
      <path d="M11.5 18c.8-2.6 2.1-4 4-4s3.2 1.4 4 4" />
    </>
  ),
  "life-path-tarot": (
    <>
      <path d="M5 19c4-1.3 6-3.5 6-6.5V5" />
      <path d="M11 12.5c0 3 2.7 5.2 8 6.5" />
      <path d="m8 8 3-3 3 3" />
      <path d="M6 19h12" />
    </>
  ),
  energy: (
    <>
      <path d="M12 3.5c2.8 3 4.2 5.6 4.2 7.8a4.2 4.2 0 0 1-8.4 0c0-2.2 1.4-4.8 4.2-7.8Z" />
      <path d="M8 15.5c-1.9.6-3 1.5-3 2.5 0 1.7 3.1 3 7 3s7-1.3 7-3c0-1-.9-1.8-2.6-2.4" />
      <path d="M10.2 12.2h3.6" />
    </>
  ),
  "chakra-healing": (
    <>
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="8.7" r="1.6" />
      <circle cx="12" cy="12.4" r="1.6" />
      <circle cx="12" cy="16.1" r="1.6" />
      <circle cx="12" cy="19.8" r="1.6" />
      <path d="M8 12.4h8" />
    </>
  ),
  "aura-cleansing": (
    <>
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M7 20c.8-4 2.5-6 5-6s4.2 2 5 6" />
      <path d="M5 13.5a8 8 0 0 1 14 0" />
      <path d="M3.8 17a10.2 10.2 0 0 1 16.4 0" />
    </>
  ),
  "cord-cutting": (
    <>
      <circle cx="7.5" cy="8" r="2" />
      <circle cx="16.5" cy="16" r="2" />
      <path d="M9 9.5 15 15" />
      <path d="m15 7 3 3" />
      <path d="m18 7-3 3" />
      <path d="M12 12 7 17" />
    </>
  ),
  "emotional-release": (
    <>
      <path d="M12 4.5c3 3.4 4.5 6.1 4.5 8.2a4.5 4.5 0 0 1-9 0c0-2.1 1.5-4.8 4.5-8.2Z" />
      <path d="M9.5 15c1.2 1.1 2.9 1.1 5 0" />
      <path d="M8 20h8" />
    </>
  ),
  "reiki-healing": (
    <>
      <path d="M7 15.5c2.5-2 4.2-3 5-3s2.5 1 5 3" />
      <path d="M5 18.5h14" />
      <path d="M8 11.5c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      <path d="M12 4v3.5" />
    </>
  ),
  "distance-healing": (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M5 12h14" />
      <path d="M12 5c2 2.2 3 4.5 3 7s-1 4.8-3 7" />
      <path d="M12 5c-2 2.2-3 4.5-3 7s1 4.8 3 7" />
      <path d="M17 7.5c1.2-.8 2.3-.8 3.3 0" />
    </>
  ),
  "protection-healing": (
    <>
      <path d="M12 4.5 18 7v4.8c0 3.7-2 6.2-6 7.7-4-1.5-6-4-6-7.7V7l6-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  "meditation-healing": (
    <>
      <circle cx="12" cy="7" r="2.2" />
      <path d="M8 15c1.2-1.2 2.5-1.8 4-1.8s2.8.6 4 1.8" />
      <path d="M5.5 19c2-1.8 4.2-2.7 6.5-2.7s4.5.9 6.5 2.7" />
      <path d="M9 10.5h6" />
    </>
  ),
  audit: (
    <>
      <path d="M12 3.5 14.2 9l5.8.4-4.5 3.7 1.4 5.7L12 15.7l-4.9 3.1 1.4-5.7L4 9.4 9.8 9 12 3.5Z" />
      <path d="M12 8.5v4" />
      <path d="M10 10.5h4" />
    </>
  )
};

const iconKeyMatchers = [
  ["home-vastu", ["home-vastu", "home vastu", "home or workplace"]],
  ["office-vastu", ["office-vastu", "office vastu"]],
  ["commercial-vastu", ["commercial-vastu", "commercial vastu"]],
  ["plot-vastu", ["plot-vastu", "plot vastu"]],
  ["flat-vastu", ["flat-vastu", "flat vastu"]],
  ["vastu-remedies", ["vastu-remedies", "vastu remedies"]],
  ["business-vastu", ["business-vastu", "business vastu"]],
  ["wealth-vastu", ["wealth-vastu", "wealth vastu"]],
  ["name-numerology", ["name-numerology", "name numerology"]],
  ["business-name-numerology", ["business-name-numerology", "business name numerology"]],
  ["date-of-birth-numerology", ["date-of-birth-numerology", "date of birth numerology", "important date"]],
  ["lucky-number-consultation", ["lucky-number-consultation", "lucky number"]],
  ["personal-year-reading", ["personal-year-reading", "personal year"]],
  ["baby-name-numerology", ["baby-name-numerology", "baby name"]],
  ["mobile-number-numerology", ["mobile-number-numerology", "mobile number"]],
  ["signature-correction", ["signature-correction", "signature correction"]],
  ["kundli-reading", ["kundli-reading", "kundli reading"]],
  ["career-astrology", ["career-astrology", "career astrology", "timing or life pattern"]],
  ["marriage-astrology", ["marriage-astrology", "marriage astrology"]],
  ["love-compatibility", ["love-compatibility", "love compatibility"]],
  ["dasha-analysis", ["dasha-analysis", "dasha analysis"]],
  ["transit-reading", ["transit-reading", "transit reading"]],
  ["muhurat-selection", ["muhurat-selection", "muhurat selection"]],
  ["birth-time-rectification", ["birth-time-rectification", "birth time rectification"]],
  ["career-tarot", ["career-tarot", "career tarot"]],
  ["yes-no-tarot", ["yes-no-tarot", "yes or no tarot"]],
  ["decision-making", ["decision-making", "decision-making tarot", "present decision"]],
  ["monthly-tarot", ["monthly-tarot", "monthly tarot"]],
  ["spiritual-guidance", ["spiritual-guidance", "spiritual guidance"]],
  ["third-party-reading", ["third-party-reading", "third-party energy"]],
  ["life-path-tarot", ["life-path-tarot", "life path"]],
  ["chakra-healing", ["chakra-healing", "chakra healing"]],
  ["aura-cleansing", ["aura-cleansing", "aura cleansing"]],
  ["cord-cutting", ["cord-cutting", "cord cutting"]],
  ["emotional-release", ["emotional-release", "emotional release"]],
  ["reiki-healing", ["reiki-healing", "reiki healing"]],
  ["distance-healing", ["distance-healing", "distance healing"]],
  ["protection-healing", ["protection-healing", "protection healing"]],
  ["meditation-healing", ["meditation-healing", "meditation healing"]]
];

function getVisualKey(href = "", title = "") {
  const value = `${href} ${title}`.toLowerCase();
  if (value.includes("numerology") || value.includes("name") || value.includes("number") || value.includes("date")) return "numerology";
  if (value.includes("astrology") || value.includes("kundli") || value.includes("dasha") || value.includes("transit") || value.includes("muhurat") || value.includes("birth time")) return "astrology";
  if (value.includes("tarot") || value.includes("decision") || value.includes("relationship")) return "tarot";
  if (value.includes("energy") || value.includes("healing") || value.includes("chakra") || value.includes("aura") || value.includes("cord") || value.includes("reiki") || value.includes("meditation") || value.includes("protection")) return "energy";
  if (value.includes("master") || value.includes("several") || value.includes("connected")) return "audit";
  return "vastu";
}

function getIconKey(href = "", title = "") {
  const value = `${href} ${title}`.toLowerCase();
  const match = iconKeyMatchers.find(([, terms]) => terms.some((term) => value.includes(term)));
  return match?.[0] || getVisualKey(href, title);
}

export default function ServiceFlipCard({ href, title, description, actionLabel = "Explore service" }) {
  const visualKey = getVisualKey(href, title);
  const iconKey = getIconKey(href, title);

  return (
    <Link className={`service-flip-card service-flip-card--${visualKey} scroll-reveal`} href={href}>
      <span className="service-flip-card__inner">
        <span className="service-flip-card__face service-flip-card__front">
          <span className="service-flip-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              {serviceIconPaths[iconKey]}
            </svg>
          </span>
          <span className="service-flip-card__title">{title}</span>
        </span>
        <span className="service-flip-card__face service-flip-card__back">
          <span className="service-flip-card__copy">{description}</span>
          <span className="text-link">{actionLabel}</span>
        </span>
      </span>
    </Link>
  );
}
