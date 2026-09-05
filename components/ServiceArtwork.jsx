const artworks = {
  vastu: {
    src: "/art-vastu.jpg",
    label: "Vastu Shastra",
    detail: "Space, earth, direction, and sacred geometry",
    alt: "Vastu chakra floor geometry with a brass directional compass and natural stone"
  },
  numerology: {
    src: "/art-numerology.jpg",
    label: "Sacred Numerology",
    detail: "Number patterns, frequency, and geometric order",
    alt: "Brass numerals arranged through concentric sacred geometry on pearl stone"
  },
  astrology: {
    src: "/art-astrology.jpg",
    label: "Vedic Astrology",
    detail: "Jupiter, Moon, Earth, and planetary timing",
    alt: "Jupiter, the Moon, and Earth connected by fine golden orbital paths"
  },
  "tarot-reading": {
    src: "/art-tarot.jpg",
    label: "Intuitive Tarot",
    detail: "Moonlight, fire, water, and archetypal insight",
    alt: "Three celestial tarot cards between candlelight and reflective moonlit water"
  },
  "energy-healing": {
    src: "/art-energy-healing.jpg",
    label: "Energy Healing",
    detail: "Chakras, earth, water, fire, air, and moonlight",
    alt: "Seven chakra lights above grounded stones in a moonlit natural water setting"
  }
};

export const artworkCategories = Object.keys(artworks);

export function getCategoryArtworkSrc(category) {
  return (artworks[category] || artworks.astrology).src;
}

export default function ServiceArtwork({
  category,
  slug,
  src,
  title,
  detail,
  alt,
  compact = false,
  priority = false,
  showCaption = true
}) {
  const artworkCategory = category || "page";
  const categoryArtwork = artworks[category] || artworks.astrology;
  const artwork = slug || src
    ? {
        ...categoryArtwork,
        src: src || `/art-${category}-${slug}.jpg`,
        label: title || categoryArtwork.label,
        detail: detail || categoryArtwork.detail,
        alt: alt || `${title || categoryArtwork.label} consultation artwork`
      }
    : categoryArtwork;
  const pageSpecificClass = slug || src ? " service-artwork--page-specific" : "";

  return (
    <figure className={`service-artwork service-artwork--${artworkCategory}${pageSpecificClass}${compact ? " service-artwork--compact" : ""}`}>
      <div className="service-artwork__media">
        <img
          className="service-artwork__image"
          src={artwork.src}
          alt={artwork.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
        <span className="service-artwork__orbit" aria-hidden="true" />
        <span className="service-artwork__light" aria-hidden="true" />
      </div>
      {showCaption && (
        <figcaption>
          <strong>{artwork.label}</strong>
          <span>{artwork.detail}</span>
        </figcaption>
      )}
    </figure>
  );
}
