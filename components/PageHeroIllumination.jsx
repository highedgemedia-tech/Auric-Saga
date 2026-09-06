const variantAccents = {
  services: ["223 188 85", "98 28 160", "64 178 181"],
  about: ["200 158 46", "64 178 181", "132 44 207"],
  booking: ["223 188 85", "30 143 98", "98 28 160"],
  contact: ["64 178 181", "200 158 46", "98 28 160"],
  privacy: ["64 178 181", "98 28 160", "223 188 85"],
  terms: ["223 188 85", "122 90 19", "98 28 160"],
  vastu: ["200 158 46", "30 143 98", "98 28 160"],
  numerology: ["132 44 207", "223 188 85", "64 178 181"],
  astrology: ["223 188 85", "64 178 181", "98 28 160"],
  "tarot-reading": ["64 178 181", "132 44 207", "223 188 85"],
  "energy-healing": ["30 143 98", "64 178 181", "223 188 85"]
};

function hashString(value) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function buildStyle(variant, scope) {
  const seed = hashString(`${variant}:${scope}`);
  const accents = variantAccents[variant] || variantAccents.services;

  return {
    "--hero-accent": accents[0],
    "--hero-accent-secondary": accents[1],
    "--hero-accent-tertiary": accents[2],
    "--hero-angle": `${18 + (seed % 54)}deg`,
    "--hero-cross-angle": `${92 + ((seed >>> 4) % 46)}deg`,
    "--hero-x": `${52 + ((seed >>> 8) % 24)}%`,
    "--hero-y": `${8 + ((seed >>> 12) % 22)}%`,
    "--hero-band": `${14 + ((seed >>> 16) % 12)}rem`,
    "--hero-step": `${1.3 + ((seed >>> 20) % 8) / 10}rem`,
    "--hero-opacity": `${0.58 + ((seed >>> 24) % 16) / 100}`,
    "--hero-delay": `-${seed % 9000}ms`
  };
}

export default function PageHeroIllumination({ variant = "services", scope = variant }) {
  return (
    <div className={`page-illumination page-illumination--${variant}`} style={buildStyle(variant, scope)} aria-hidden="true">
      <span className="page-illumination__wash" />
      <span className="page-illumination__motif" />
      <span className="page-illumination__trace page-illumination__trace--one" />
      <span className="page-illumination__trace page-illumination__trace--two" />
      <span className="page-illumination__beam" />
    </div>
  );
}
