export const siteBaseUrl = "https://auricsaga.com";

export const serviceCategories = {
  vastu: {
    slug: "vastu",
    label: "Vastu Shastra",
    eyebrow: "Space and Direction",
    title: "Vastu Shastra Consultations",
    description: "Non-destructive Vastu guidance for homes, offices, shops, plots, and commercial spaces.",
    metaTitle: "Vastu Shastra Consultation",
    metaDescription: "Book practical Vastu Shastra guidance for residential, commercial, plot, and office spaces with non-destructive remedies.",
    benefits: [
      "Directional zoning and space energy diagnostics",
      "Practical remedies without structural demolition",
      "Wealth, health, relationship, and peace zone balancing",
      "Clear action plan for implementation"
    ],
    process: ["Share floor plan", "Directional review", "Private consultation", "Remedial action plan"],
    cta: {
      title: "Align your space with calm, prosperity, and purpose.",
      label: "Book Vastu Consultation"
    },
    subpages: [
      servicePage("home-vastu", "Home Vastu", "Balance the directional energy of your living space for peace, rest, family harmony, and prosperity."),
      servicePage("office-vastu", "Office Vastu", "Improve workplace flow, leadership stability, team focus, and revenue movement through practical space alignment."),
      servicePage("commercial-vastu", "Commercial Vastu", "Vastu review for showrooms, factories, clinics, studios, and client-facing business locations."),
      servicePage("plot-vastu", "Plot Vastu", "Assess plot shape, slope, road direction, entrance potential, and zoning before purchase or construction."),
      servicePage("flat-vastu", "Flat Vastu", "Apartment-specific Vastu guidance for entrances, bedrooms, kitchens, bathrooms, and balconies."),
      servicePage("vastu-remedies", "Vastu Remedies", "Non-demolition remedies using color, placement, metals, symbols, lighting, and energetic corrections."),
      servicePage("business-vastu", "Business Vastu", "Space planning and remedial guidance for founders, consultants, retailers, and growing teams."),
      servicePage("wealth-vastu", "Wealth Vastu", "Activate financial stability zones and correct blocks affecting income, savings, and business growth.")
    ]
  },
  numerology: {
    slug: "numerology",
    label: "Numerology",
    eyebrow: "Names and Frequencies",
    title: "Sacred Numerology Consultations",
    description: "Decode birth numbers, name vibration, personal cycles, and business naming for aligned decision-making.",
    metaTitle: "Numerology Consultation",
    metaDescription: "Explore name numerology, business numerology, lucky numbers, personal year cycles, and birth frequency guidance.",
    benefits: [
      "Birth number and destiny number interpretation",
      "Personal and business name vibration review",
      "Auspicious date and timing recommendations",
      "Clear number-based decision guidance"
    ],
    process: ["Share name and date of birth", "Frequency mapping", "Name and cycle review", "Recommendations"],
    cta: {
      title: "Tune your name, dates, and decisions to a stronger frequency.",
      label: "Book Numerology Session"
    },
    subpages: [
      servicePage("name-numerology", "Name Numerology", "Review your full name vibration and understand how it affects identity, opportunities, and public resonance."),
      servicePage("business-name-numerology", "Business Name Numerology", "Assess business, brand, product, or company names before launch, rename, or expansion."),
      servicePage("date-of-birth-numerology", "Date of Birth Numerology", "Understand your root number, destiny number, personality pattern, and life direction."),
      servicePage("lucky-number-consultation", "Lucky Number Consultation", "Identify supportive numbers for phone, vehicle, home, launch, and daily decision contexts."),
      servicePage("personal-year-reading", "Personal Year Reading", "Map your yearly cycle for career moves, relationship decisions, travel, investment, and rest periods."),
      servicePage("baby-name-numerology", "Baby Name Numerology", "Choose a balanced name vibration for a child with care, clarity, and family alignment."),
      servicePage("mobile-number-numerology", "Mobile Number Numerology", "Review mobile number vibration and its effect on communication, visibility, and business flow."),
      servicePage("signature-correction", "Signature Correction", "Refine signature energy for confidence, authority, career presence, and consistent personal expression.")
    ]
  },
  astrology: {
    slug: "astrology",
    label: "Astrology",
    eyebrow: "Planetary Timing",
    title: "Vedic Astrology Consultations",
    description: "Kundali-based insight for career, marriage, health patterns, life timing, compatibility, and major decisions.",
    metaTitle: "Vedic Astrology Consultation",
    metaDescription: "Book Vedic astrology consultation for kundli reading, marriage, career, compatibility, dasha, transit, and muhurat guidance.",
    benefits: [
      "Kundali synthesis with dasha and transit context",
      "Career, marriage, finance, and life timing clarity",
      "Practical remedial guidance",
      "Auspicious timing for important actions"
    ],
    process: ["Share birth details", "Kundali preparation", "Dasha and transit review", "Private reading"],
    cta: {
      title: "Read your timeline with structure, clarity, and practical direction.",
      label: "Book Astrology Reading"
    },
    subpages: [
      servicePage("kundli-reading", "Kundli Reading", "A complete birth chart consultation for personality, life direction, karmic patterns, and major milestones."),
      servicePage("career-astrology", "Career Astrology", "Career timing, role changes, business prospects, leadership cycles, and professional decision guidance."),
      servicePage("marriage-astrology", "Marriage Astrology", "Marriage timing, compatibility themes, relationship patterns, and family-life indications."),
      servicePage("love-compatibility", "Love Compatibility", "Understand emotional alignment, communication patterns, long-term potential, and relationship challenges."),
      servicePage("dasha-analysis", "Dasha Analysis", "Decode active planetary periods and their influence on opportunity, pressure, growth, and transition."),
      servicePage("transit-reading", "Transit Reading", "Review current planetary movements and how they affect career, relationship, finances, and wellbeing."),
      servicePage("muhurat-selection", "Muhurat Selection", "Select auspicious timing for marriage, business launch, house entry, travel, or important agreements."),
      servicePage("birth-time-rectification", "Birth Time Rectification", "Refine uncertain birth time using life events, patterns, and supporting Vedic methods.")
    ]
  },
  "tarot-reading": {
    slug: "tarot-reading",
    label: "Tarot Reading",
    eyebrow: "Archetype and Intuition",
    title: "Intuitive Tarot Readings",
    description: "Decision-focused Tarot readings for emotional clarity, relationships, career crossroads, and present-moment energy.",
    metaTitle: "Tarot Reading Consultation",
    metaDescription: "Book intuitive Tarot readings for love, career, decision clarity, relationship insight, and spiritual guidance.",
    benefits: [
      "Clear insight for emotional crossroads",
      "Relationship and intention clarity",
      "Decision mapping without fear-based language",
      "Grounded next steps after the reading"
    ],
    process: ["Share your question", "Select spread focus", "Private reading", "Action summary"],
    cta: {
      title: "Bring the hidden pattern of your question into view.",
      label: "Book Tarot Reading"
    },
    subpages: [
      servicePage("love-relationship", "Love and Relationship Tarot", "Explore emotional dynamics, hidden intentions, communication patterns, and next steps in love."),
      servicePage("career-tarot", "Career Tarot", "Clarify workplace choices, job changes, business doubts, and professional timing through intuitive spreads."),
      servicePage("yes-no-tarot", "Yes or No Tarot", "A focused reading for direct questions where timing, readiness, and conditions matter."),
      servicePage("decision-making", "Decision-Making Tarot", "Compare choices, likely outcomes, energetic blocks, and the action that restores clarity."),
      servicePage("monthly-tarot", "Monthly Tarot", "A month-ahead reading for themes, cautions, opportunities, and personal alignment."),
      servicePage("spiritual-guidance", "Spiritual Guidance Tarot", "Read the deeper lesson behind recurring emotional, energetic, or intuitive experiences."),
      servicePage("third-party-reading", "Third-Party Energy Reading", "Understand another person's energetic stance while keeping the reading ethical and grounded."),
      servicePage("life-path-tarot", "Life Path Tarot", "Connect present choices with broader life direction, inner growth, and soul-level priorities.")
    ]
  },
  "energy-healing": {
    slug: "energy-healing",
    label: "Energy Healing",
    eyebrow: "Aura and Chakra",
    title: "Energy Healing Sessions",
    description: "Gentle energy alignment for aura cleansing, chakra balance, emotional heaviness, grounding, and cord release.",
    metaTitle: "Energy Healing Consultation",
    metaDescription: "Book energy healing sessions for chakra healing, aura cleansing, cord cutting, emotional release, and spiritual protection.",
    benefits: [
      "Chakra and aura balancing",
      "Emotional release and grounding support",
      "Energetic boundary restoration",
      "Calm integration practices after session"
    ],
    process: ["Share concern", "Energy scan", "Healing session", "Integration guidance"],
    cta: {
      title: "Restore calm, boundaries, and energetic steadiness.",
      label: "Book Energy Healing"
    },
    subpages: [
      servicePage("chakra-healing", "Chakra Healing", "Balance the seven chakra centers for emotional stability, vitality, and inner alignment."),
      servicePage("aura-cleansing", "Aura Cleansing", "Clear energetic heaviness, fatigue, and residual emotional charge from your field."),
      servicePage("cord-cutting", "Cord Cutting", "Release unhealthy energetic attachments and restore personal boundaries with care."),
      servicePage("emotional-release", "Emotional Release Healing", "Support the release of stored emotional pressure, grief, and energetic overwhelm."),
      servicePage("reiki-healing", "Reiki Healing", "A gentle energy session for calm, rest, nervous system support, and spiritual replenishment."),
      servicePage("distance-healing", "Distance Healing", "Remote energy healing for clients who prefer private support from their own space."),
      servicePage("protection-healing", "Protection Healing", "Strengthen energetic boundaries, grounding, and daily protection practices."),
      servicePage("meditation-healing", "Meditation Healing", "Guided energy meditation for clarity, emotional reset, and centered awareness.")
    ]
  }
};

function servicePage(slug, title, description) {
  return {
    slug,
    title,
    description,
    metaTitle: title,
    metaDescription: `${description} Book a private Auric Saga consultation for clear, practical guidance.`,
    benefits: [
      "Private one-on-one review",
      "Clear diagnosis of the core concern",
      "Practical remedial or action guidance",
      "Follow-through summary after the session"
    ],
    suitableFor: [
      "Clients facing an important decision",
      "People seeking practical spiritual clarity",
      "Families, founders, professionals, and seekers"
    ]
  };
}

export function getCategory(category) {
  return serviceCategories[category] || null;
}

export function getAllCategories() {
  return Object.values(serviceCategories);
}

export function getSubpage(category, slug) {
  const categoryData = getCategory(category);
  if (!categoryData) return null;
  return categoryData.subpages.find((page) => page.slug === slug) || null;
}

export function getAllSubpages() {
  return Object.values(serviceCategories).flatMap((category) =>
    category.subpages.map((page) => ({
      category: category.slug,
      categoryLabel: category.label,
      ...page
    }))
  );
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteBaseUrl}${item.href}`
    }))
  };
}
