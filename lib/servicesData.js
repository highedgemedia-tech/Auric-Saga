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

export const clientReviews = [
  {
    quote: "The Vastu suggestions for our duplex were executed with zero demolition. Within 6 weeks, the suffocating atmosphere cleared, and our business closed a major round.",
    name: "Raghavendran S.",
    context: "Tech Founder - Residential Vastu"
  },
  {
    quote: "Auric Saga gave me pure logic, planetary science, and a timeline that matched my reality to the week. It helped me step into my leadership role without anxiety.",
    name: "Ananya Deshmukh",
    context: "Corporate VP - Vedic Astrology"
  },
  {
    quote: "The Tarot and Energy Cord session was profoundly grounding. The emotional heaviness I had carried since 2021 was cleared within an hour. Professional and dignified.",
    name: "Devika Nair",
    context: "Architect - Tarot and Healing"
  }
];

const categoryDetails = {
  vastu: {
    painPoints: [
      { title: "Restless Spaces", copy: "Sleep disruption, recurring tension, or a room that never feels settled despite practical improvements." },
      { title: "Blocked Progress", copy: "Business, savings, health routines, or family decisions repeatedly stall after a move or renovation." },
      { title: "Difficult Placements", copy: "Entrance, kitchen, toilet, staircase, or bedroom locations create concern and conflicting advice." },
      { title: "No-Demolition Need", copy: "The property is rented, occupied, or complete, so structural changes are not realistic." }
    ],
    approach: [
      "The review begins with an accurate north-marked plan, room use, entrances, openings, and the concerns connected with each zone.",
      "Directional principles, five-element balance, functional circulation, and lived experience are considered together before remedies are prioritized.",
      "Recommendations favor placement, color, light, material, usage, and symbolic corrections before any structural intervention is considered."
    ],
    features: [
      { title: "Directional Audit", copy: "Map entrances, rooms, activity zones, and elemental relationships against the actual floor plan." },
      { title: "Concern Mapping", copy: "Connect recurring issues with the zones most relevant to health, relationships, work, and prosperity." },
      { title: "Element Balancing", copy: "Use practical color, material, lighting, and placement guidance to restore balance." },
      { title: "Non-Destructive Remedies", copy: "Prioritize changes that can be implemented without demolition or expensive reconstruction." },
      { title: "Room-by-Room Plan", copy: "Receive clear priorities for bedrooms, kitchen, work areas, worship space, and entrances." },
      { title: "Implementation Notes", copy: "Know what to change first, what to avoid, and how to maintain the corrected arrangement." }
    ],
    preparation: "Keep a north-marked floor plan, recent photos, property location, room usage, and a short list of the concerns you want reviewed.",
    faqs: [
      { question: "Can this consultation be completed online?", answer: "Yes. Most Vastu reviews can be completed remotely when a clear floor plan, directions, photos, and property context are available." },
      { question: "Will I be asked to demolish walls?", answer: "The first priority is always practical, non-destructive correction. Structural changes are discussed only when relevant and feasible." },
      { question: "Can rented homes and offices be reviewed?", answer: "Yes. The remedy plan can be adapted to reversible placement, color, lighting, and usage changes." },
      { question: "How quickly should remedies be implemented?", answer: "The action plan is prioritized so you can begin with the most important corrections and phase the remaining work realistically." }
    ]
  },
  numerology: {
    painPoints: [
      { title: "Name Misalignment", copy: "A personal or business name looks right but does not feel supportive in visibility, confidence, or momentum." },
      { title: "Repeated Timing Friction", copy: "Important launches, agreements, or decisions repeatedly encounter delay or uneven results." },
      { title: "Conflicting Number Advice", copy: "Different calculators produce different answers without explaining the method or practical meaning." },
      { title: "Decision Overload", copy: "Too many possible spellings, dates, numbers, or brand names make a clear choice difficult." }
    ],
    approach: [
      "The analysis starts with exact spelling, date of birth, intended use, and the real-world decision the number must support.",
      "Birth, destiny, compound, name, and timing frequencies are interpreted as a connected pattern rather than isolated lucky numbers.",
      "Recommendations are tested for pronunciation, usability, brand clarity, and long-term consistency before a final shortlist is shared."
    ],
    features: [
      { title: "Birth Blueprint", copy: "Understand root, destiny, strengths, pressure patterns, and the rhythm of personal cycles." },
      { title: "Name Frequency", copy: "Review how spelling and sound interact with birth numbers and public identity." },
      { title: "Business Alignment", copy: "Evaluate company, product, or brand names for relevance, resonance, and practical use." },
      { title: "Timing Guidance", copy: "Identify supportive dates and periods for launches, changes, agreements, and major decisions." },
      { title: "Option Comparison", copy: "Compare shortlisted names or numbers through one consistent methodology." },
      { title: "Usable Recommendation", copy: "Receive a clear final direction with spelling, usage, and implementation notes." }
    ],
    preparation: "Share the exact current spelling, date of birth, commonly used name, purpose of the consultation, and any options already under consideration.",
    faqs: [
      { question: "Do small spelling changes matter?", answer: "They can change the calculated name frequency, but any recommendation must also remain natural to pronounce and practical to use." },
      { question: "Can several business names be compared?", answer: "Yes. A shortlist can be reviewed against the founder details, business purpose, and intended launch context." },
      { question: "Is Numerology only about lucky numbers?", answer: "No. The consultation reads relationships between birth, name, compound, and timing numbers to support a specific decision." },
      { question: "Will I need to change official documents?", answer: "Not always. The recommendation explains where consistent public or professional usage matters and what is optional." }
    ]
  },
  astrology: {
    painPoints: [
      { title: "Unclear Life Timing", copy: "You understand the decision but remain uncertain about when to move, launch, commit, or wait." },
      { title: "Recurring Patterns", copy: "Career, relationship, family, or financial themes repeat without a clear explanation." },
      { title: "Conflicting Predictions", copy: "Different readings focus on isolated placements and create more anxiety than direction." },
      { title: "Major Transition", copy: "A dasha, transit, marriage, relocation, or leadership change requires structured preparation." }
    ],
    approach: [
      "The reading begins with verified birth details and the specific life questions that need clarity, not a list of disconnected predictions.",
      "The natal chart, house lords, yogas, dasha periods, and relevant transits are synthesized to understand both promise and timing.",
      "Guidance separates what is fixed, what is cyclical, and what can be strengthened through decisions, discipline, and appropriate remedies."
    ],
    features: [
      { title: "Kundali Synthesis", copy: "Read the chart as an integrated pattern of houses, planets, strengths, and life themes." },
      { title: "Dasha Context", copy: "Understand the active planetary period and the areas of life it is likely to emphasize." },
      { title: "Transit Timing", copy: "Place current movement in context instead of treating one transit as the whole story." },
      { title: "Decision Windows", copy: "Identify periods better suited to action, preparation, negotiation, or consolidation." },
      { title: "Practical Remedies", copy: "Use grounded spiritual practices that support clarity without fear-based prescriptions." },
      { title: "Written Priorities", copy: "Leave with the key dates, cautions, opportunities, and next steps discussed in the session." }
    ],
    preparation: "Provide date, exact time, place of birth, major dated life events when relevant, and the two or three questions that matter most now.",
    faqs: [
      { question: "What if my birth time is uncertain?", answer: "Share the available range and important dated life events. A separate birth-time rectification may be recommended before detailed timing work." },
      { question: "Does a reading predict an unavoidable future?", answer: "The chart describes tendencies, timing, and conditions. The consultation focuses on informed choices rather than fatalistic certainty." },
      { question: "Can career and relationship questions be covered together?", answer: "Yes, when the session scope allows it. Complex multi-area questions may be better suited to a deeper consultation." },
      { question: "Are remedies compulsory?", answer: "No. Remedies are explained as supportive practices, and you can choose what is realistic and aligned with your beliefs." }
    ]
  },
  "tarot-reading": {
    painPoints: [
      { title: "Emotional Uncertainty", copy: "A relationship or decision carries mixed signals and is difficult to view objectively." },
      { title: "Competing Choices", copy: "Two paths both appear possible, but their likely demands and consequences are unclear." },
      { title: "Repeated Mental Loops", copy: "Overthinking has replaced useful reflection and delayed a necessary conversation or action." },
      { title: "Need for Present Insight", copy: "You need grounded clarity about current energy rather than a distant, absolute prediction." }
    ],
    approach: [
      "The session begins by refining the question so the spread addresses the decision, relationship, or pattern you can meaningfully act upon.",
      "Card positions are interpreted together through archetype, context, emotional dynamics, and probable direction rather than isolated keywords.",
      "The reading closes by separating intuition from assumption and translating the message into boundaries, questions, and next actions."
    ],
    features: [
      { title: "Focused Question", copy: "Shape a clear inquiry that produces useful insight instead of a vague prediction." },
      { title: "Pattern Reading", copy: "See the emotional, practical, and hidden influences operating around the situation." },
      { title: "Choice Comparison", copy: "Compare likely conditions, opportunities, and tradeoffs across more than one path." },
      { title: "Relationship Clarity", copy: "Explore communication, boundaries, intentions, and the energy between people ethically." },
      { title: "Grounded Guidance", copy: "Avoid fear-based conclusions and focus on what remains within your responsibility." },
      { title: "Action Summary", copy: "End with the key message, useful questions, and a realistic next step." }
    ],
    preparation: "Bring one primary question, essential context, the options you are considering, and an openness to guidance rather than a fixed desired answer.",
    faqs: [
      { question: "Can Tarot give a definite yes or no?", answer: "A focused spread can show the present direction and conditions, but important choices still depend on context and personal agency." },
      { question: "Can I ask about another person?", answer: "The reading stays ethical by focusing on the relationship dynamic, your experience, and the choices available to you." },
      { question: "How many questions fit in one session?", answer: "One central question with closely related follow-ups usually creates the clearest and most useful reading." },
      { question: "Is the reading confidential?", answer: "Yes. Your question and the details discussed are handled as private consultation information." }
    ]
  },
  "energy-healing": {
    painPoints: [
      { title: "Persistent Heaviness", copy: "You feel emotionally weighed down or energetically depleted even after ordinary rest." },
      { title: "Weak Boundaries", copy: "Other people's moods, conflict, or demanding environments are difficult to release." },
      { title: "Unsettled Energy", copy: "A transition, loss, relationship change, or intense period has left you feeling ungrounded." },
      { title: "Difficulty Resetting", copy: "Meditation, sleep, and personal routines are not restoring the usual sense of steadiness." }
    ],
    approach: [
      "The session begins with your present emotional and energetic experience, relevant context, and the intention for healing.",
      "The practitioner works gently with chakra balance, aura awareness, grounding, and energetic boundaries according to the selected modality.",
      "Integration guidance supports rest, hydration, observation, and simple practices after the session; healing is not presented as medical treatment."
    ],
    features: [
      { title: "Energy Assessment", copy: "Identify where heaviness, depletion, overactivity, or weak boundaries are most noticeable." },
      { title: "Chakra Balance", copy: "Support a calmer relationship between emotional, mental, and embodied energy centers." },
      { title: "Aura Cleansing", copy: "Clear residual energetic charge and create a stronger sense of personal space." },
      { title: "Grounding Support", copy: "Use simple practices that help attention return to the body and present moment." },
      { title: "Boundary Renewal", copy: "Strengthen awareness of what belongs to you and what can be released." },
      { title: "Integration Plan", copy: "Receive gentle aftercare guidance for rest, observation, and continued stability." }
    ],
    preparation: "Choose a quiet space, share the emotional or energetic concern, wear comfortable clothing, and leave a little unhurried time after the session.",
    faqs: [
      { question: "Can energy healing be done remotely?", answer: "Yes. Distance sessions are available and include the same private intake and post-session integration guidance." },
      { question: "Is this a replacement for medical or mental-health care?", answer: "No. Energy healing is complementary spiritual support and does not diagnose, treat, or replace licensed healthcare." },
      { question: "What might I notice after a session?", answer: "Experiences vary. Some clients report calm, tiredness, emotional release, or subtle shifts, so gentle rest and observation are encouraged." },
      { question: "How many sessions will I need?", answer: "That depends on the concern and your response. No fixed series is imposed; the next step is discussed after the first session." }
    ]
  }
};

export function getCategoryDetails(category) {
  return categoryDetails[category] || null;
}

export function getDetailedSubpage(categorySlug, page) {
  const category = serviceCategories[categorySlug];
  const details = categoryDetails[categorySlug];
  if (!category || !details || !page) return null;

  return {
    ...page,
    highlights: [category.label, "Private 1-on-1", "Practical action plan"],
    painPoints: details.painPoints,
    approach: [
      `${page.title} is tailored to the exact concern behind your request. ${page.description}`,
      ...details.approach
    ],
    features: details.features,
    preparation: details.preparation,
    reviews: clientReviews,
    faqs: details.faqs.map((faq) => ({
      ...faq,
      answer: `${faq.answer} Your ${page.title.toLowerCase()} session will be scoped around the information you provide.`
    }))
  };
}

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
  const page = categoryData.subpages.find((item) => item.slug === slug) || null;
  return getDetailedSubpage(category, page);
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
