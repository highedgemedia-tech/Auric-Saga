"use client";

import { useEffect, useRef } from "react";

const TAU = Math.PI * 2;

const artLabels = {
  vastu: "Living geometry of space and direction",
  numerology: "Numbers moving through frequency and form",
  astrology: "Planetary motion, timing, and celestial scale",
  "tarot-reading": "Moon, flame, water, and intuitive reflection",
  "energy-healing": "Chakra light moving through the five elements",
  services: "Five disciplines in one connected field",
  about: "The people and principles behind Auric Saga",
  booking: "A path from inquiry to prepared guidance",
  contact: "A clear signal between seeker and care desk",
  legal: "Clarity, balance, and protected understanding"
};

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRandom(seed) {
  let value = seed || 1;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function strokeCircle(ctx, x, y, radius, color, width = 1) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, TAU);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function fillCircle(ctx, x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, TAU);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawBackground(ctx, width, height, variant) {
  const dark = ["astrology", "tarot-reading", "energy-healing"].includes(variant);
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, dark ? "#160424" : "#fdfbf7");
  gradient.addColorStop(0.55, dark ? "#2f0c4c" : "#f4ecdf");
  gradient.addColorStop(1, dark ? "#071d2b" : "#e8dbc2");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawStars(ctx, stars, time, dark) {
  stars.forEach((star, index) => {
    const pulse = 0.42 + Math.sin(time * star.speed + index) * 0.26;
    fillCircle(
      ctx,
      star.x,
      star.y,
      star.size,
      dark ? `rgba(238, 203, 109, ${pulse})` : `rgba(98, 28, 160, ${pulse * 0.42})`
    );
  });
}

function drawVastu(ctx, width, height, time, seed) {
  const centerX = width * (0.48 + ((seed % 9) - 4) * 0.006);
  const centerY = height * 0.47;
  const size = Math.min(width, height) * 0.58;
  const divisions = 6 + (seed % 5);
  const cell = size / divisions;
  const petalCount = 6 + ((seed >>> 4) % 7);

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(Math.sin(time * 0.18 + seed) * 0.025);
  ctx.strokeStyle = "rgba(122, 90, 19, 0.35)";
  ctx.lineWidth = 1;
  for (let index = 0; index <= divisions; index += 1) {
    const offset = -size / 2 + index * cell;
    ctx.beginPath();
    ctx.moveTo(offset, -size / 2);
    ctx.lineTo(offset, size / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-size / 2, offset);
    ctx.lineTo(size / 2, offset);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(70, 19, 115, 0.72)";
  ctx.lineWidth = 2;
  ctx.strokeRect(-size / 2, -size / 2, size, size);
  ctx.rotate(((seed >>> 8) % 8) * (TAU / 8));
  ctx.beginPath();
  ctx.moveTo(-size * 0.48, 0);
  ctx.lineTo(size * 0.48, 0);
  ctx.moveTo(0, -size * 0.48);
  ctx.lineTo(0, size * 0.48);
  ctx.strokeStyle = "rgba(200, 158, 46, 0.72)";
  ctx.stroke();
  ctx.rotate(time * 0.035);
  for (let index = 0; index < petalCount; index += 1) {
    ctx.rotate(TAU / petalCount);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(size * 0.13, -size * 0.1, 0, -size * 0.3);
    ctx.quadraticCurveTo(-size * 0.13, -size * 0.1, 0, 0);
    ctx.fillStyle = index % 2 ? "rgba(200, 158, 46, 0.2)" : "rgba(98, 28, 160, 0.2)";
    ctx.fill();
    ctx.strokeStyle = "rgba(70, 19, 115, 0.62)";
    ctx.stroke();
  }
  strokeCircle(ctx, 0, 0, size * 0.34, "rgba(200, 158, 46, 0.72)", 1.5);
  strokeCircle(ctx, 0, 0, size * 0.2, "rgba(70, 19, 115, 0.58)");
  fillCircle(ctx, 0, 0, 5 + Math.sin(time * 1.4) * 1.5, "rgba(200, 158, 46, 0.9)");
  ctx.restore();

  for (let line = 0; line < 4; line += 1) {
    ctx.beginPath();
    for (let x = 0; x <= width; x += 8) {
      const y = height * (0.78 + line * 0.045) + Math.sin(x * 0.018 + time * 0.55 + line) * 5;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(122, 90, 19, ${0.2 - line * 0.025})`;
    ctx.stroke();
  }
}

function drawNumerology(ctx, width, height, time, seed) {
  const centerX = width * 0.5;
  const centerY = height * 0.5;
  const radius = Math.min(width, height) * 0.34;
  const primaryNumber = (seed % 9) + 1;

  ctx.save();
  ctx.translate(centerX, centerY);
  for (let ring = 1; ring <= 4; ring += 1) {
    strokeCircle(ctx, 0, 0, radius * (ring / 4), ring % 2 ? "rgba(70, 19, 115, 0.44)" : "rgba(200, 158, 46, 0.55)", ring === 4 ? 2 : 1);
  }
  ctx.rotate(time * 0.055 + (seed % 17) * 0.03);
  ctx.strokeStyle = "rgba(200, 158, 46, 0.48)";
  for (let index = 0; index < 9; index += 1) {
    const angle = (index / 9) * TAU;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
    ctx.stroke();
  }
  ctx.restore();

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let index = 0; index < 9; index += 1) {
    const angle = (index / 9) * TAU - time * 0.08 + (seed % 31) * 0.02;
    const orbit = radius * (0.72 + (index % 3) * 0.12);
    const x = centerX + Math.cos(angle) * orbit;
    const y = centerY + Math.sin(angle) * orbit;
    ctx.font = `${18 + (index % 3) * 4}px Georgia`;
    ctx.fillStyle = index + 1 === primaryNumber ? "#461373" : "rgba(122, 90, 19, 0.82)";
    ctx.fillText(String(index + 1), x, y);
  }
  ctx.font = `600 ${Math.min(width, height) * 0.22}px Georgia`;
  ctx.fillStyle = "rgba(70, 19, 115, 0.9)";
  ctx.fillText(String(primaryNumber), centerX, centerY);
}

function drawPlanet(ctx, x, y, radius, time, seed) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, TAU);
  ctx.clip();
  const body = ctx.createRadialGradient(x - radius * 0.35, y - radius * 0.35, radius * 0.1, x, y, radius);
  body.addColorStop(0, "#f2d69b");
  body.addColorStop(0.55, "#b9793b");
  body.addColorStop(1, "#4b2130");
  ctx.fillStyle = body;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  for (let band = -5; band <= 5; band += 1) {
    const bandY = y + band * radius * 0.18 + Math.sin(time * 0.22 + band + seed) * 2;
    ctx.fillStyle = band % 2 ? "rgba(255, 225, 169, 0.2)" : "rgba(78, 30, 43, 0.2)";
    ctx.fillRect(x - radius, bandY, radius * 2, radius * 0.1);
  }
  ctx.restore();
  strokeCircle(ctx, x, y, radius, "rgba(239, 207, 119, 0.7)");
}

function drawAstrology(ctx, width, height, time, seed) {
  const centerX = width * (0.62 + ((seed % 7) - 3) * 0.012);
  const centerY = height * 0.47;
  const radius = Math.min(width, height) * (0.22 + (seed % 5) * 0.008);
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.scale(1.45, 0.62);
  strokeCircle(ctx, 0, 0, radius * 1.65, "rgba(223, 188, 85, 0.48)");
  strokeCircle(ctx, 0, 0, radius * 2.15, "rgba(223, 188, 85, 0.26)");
  ctx.restore();
  drawPlanet(ctx, centerX, centerY + Math.sin(time * 0.25) * 5, radius, time, seed);

  const earthAngle = time * 0.13 + (seed % 23);
  const earthX = centerX + Math.cos(earthAngle) * radius * 2.25;
  const earthY = centerY + Math.sin(earthAngle) * radius * 0.92;
  fillCircle(ctx, earthX, earthY, radius * 0.15, "#397a8c");
  fillCircle(ctx, earthX - radius * 0.04, earthY - radius * 0.03, radius * 0.055, "#83a960");

  const moonAngle = -time * 0.2 + (seed % 13);
  const moonX = centerX + Math.cos(moonAngle) * radius * 2.85;
  const moonY = centerY + Math.sin(moonAngle) * radius * 1.16;
  fillCircle(ctx, moonX, moonY, radius * 0.11, "#ddd2ba");
  fillCircle(ctx, moonX - radius * 0.03, moonY - radius * 0.02, radius * 0.02, "rgba(65, 49, 74, 0.28)");

  if (seed % 2 === 0) {
    const innerAngle = time * 0.18 + (seed % 29);
    fillCircle(
      ctx,
      centerX + Math.cos(innerAngle) * radius * 1.45,
      centerY + Math.sin(innerAngle) * radius * 0.58,
      radius * 0.075,
      "#c88156"
    );
  }
}

function drawTarot(ctx, width, height, time, seed) {
  const moonX = width * (seed % 2 ? 0.78 : 0.22);
  const moonY = height * 0.2;
  const moonRadius = Math.min(width, height) * 0.105;
  const moon = ctx.createRadialGradient(moonX - 8, moonY - 8, 2, moonX, moonY, moonRadius);
  moon.addColorStop(0, "#fff9db");
  moon.addColorStop(1, "rgba(223, 218, 200, 0.58)");
  fillCircle(ctx, moonX, moonY, moonRadius, moon);

  const cardCount = 2 + (seed % 3);
  const cardWidth = Math.min(width * (0.42 / cardCount), 112);
  const cardHeight = cardWidth * 1.55;
  for (let index = 0; index < cardCount; index += 1) {
    const x = width * (0.28 + index * (0.44 / Math.max(cardCount - 1, 1)));
    const y = height * 0.48 + Math.sin(time * 0.7 + index + seed) * 6;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((index - 1) * 0.06 + Math.sin(time * 0.3 + index) * 0.015);
    ctx.fillStyle = "rgba(20, 5, 34, 0.92)";
    ctx.strokeStyle = "rgba(223, 188, 85, 0.9)";
    ctx.lineWidth = 2;
    ctx.fillRect(-cardWidth / 2, -cardHeight / 2, cardWidth, cardHeight);
    ctx.strokeRect(-cardWidth / 2, -cardHeight / 2, cardWidth, cardHeight);
    strokeCircle(ctx, 0, 0, cardWidth * 0.25, "rgba(223, 188, 85, 0.72)");
    ctx.rotate(time * 0.08 * (index % 2 ? -1 : 1));
    const rayCount = 6 + ((seed + index) % 5);
    for (let ray = 0; ray < rayCount; ray += 1) {
      ctx.rotate(TAU / rayCount);
      ctx.beginPath();
      ctx.moveTo(0, cardWidth * 0.1);
      ctx.lineTo(0, cardWidth * 0.32);
      ctx.stroke();
    }
    ctx.restore();
  }

  for (let line = 0; line < 5; line += 1) {
    ctx.beginPath();
    for (let x = 0; x <= width; x += 7) {
      const y = height * (0.77 + line * 0.042) + Math.sin(x * 0.025 + time * 1.2 + line) * 6;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(86, 196, 207, ${0.42 - line * 0.055})`;
    ctx.stroke();
  }

  const flameX = width * (seed % 2 ? 0.13 : 0.87);
  const flameY = height * 0.8;
  ctx.beginPath();
  ctx.moveTo(flameX, flameY);
  ctx.quadraticCurveTo(flameX - 22, flameY - 48, flameX + Math.sin(time * 2.8) * 8, flameY - 88);
  ctx.quadraticCurveTo(flameX + 30, flameY - 44, flameX, flameY);
  ctx.fillStyle = "rgba(242, 139, 54, 0.86)";
  ctx.fill();
}

function drawEnergy(ctx, width, height, time, seed) {
  const baseColors = ["#e45b5b", "#ef9947", "#e4c34f", "#55a967", "#4ab8c1", "#497aca", "#9d62cf"];
  const colors = seed % 2 ? baseColors : [...baseColors].reverse();
  const centerX = width * (0.5 + ((seed % 9) - 4) * 0.012);
  const startY = height * 0.72;
  const spacing = height * 0.078;
  const flowDirection = seed % 3 === 0 ? -1 : 1;

  for (let index = 0; index < colors.length; index += 1) {
    const y = startY - index * spacing + Math.sin(time * 0.8 + index) * 2;
    const x = centerX + Math.sin(time * 0.42 + index + seed) * 9 * flowDirection;
    const pulse = 9 + Math.sin(time * 1.1 + index * 0.7) * 2;
    const glow = ctx.createRadialGradient(x, y, 0, x, y, pulse * 3.5);
    glow.addColorStop(0, colors[index]);
    glow.addColorStop(0.24, `${colors[index]}99`);
    glow.addColorStop(1, `${colors[index]}00`);
    fillCircle(ctx, x, y, pulse * 3.5, glow);
    fillCircle(ctx, x, y, pulse, colors[index]);
  }

  ctx.beginPath();
  ctx.moveTo(centerX, startY + 18);
  for (let index = 0; index < colors.length; index += 1) {
    const y = startY - index * spacing;
    ctx.lineTo(centerX + Math.sin(time * 0.45 + index) * 14, y);
  }
  ctx.strokeStyle = "rgba(245, 228, 171, 0.7)";
  ctx.lineWidth = 2;
  ctx.stroke();

  for (let ring = 0; ring < 5; ring += 1) {
    ctx.save();
    ctx.translate(centerX, height * 0.83);
    ctx.scale(1.8, 0.42);
    strokeCircle(ctx, 0, 0, 36 + ring * 24 + Math.sin(time + ring) * 4, `rgba(80, 184, 194, ${0.5 - ring * 0.075})`);
    ctx.restore();
  }
}

function drawConnectedField(ctx, width, height, time, seed, variant) {
  const centerX = width * 0.5;
  const centerY = height * 0.49;
  const radius = Math.min(width, height) * 0.3;
  const count = variant === "legal" ? 6 : 5;

  for (let ring = 1; ring <= 3; ring += 1) {
    strokeCircle(ctx, centerX, centerY, radius * ring * 0.36 + Math.sin(time * 0.45 + ring) * 3, `rgba(98, 28, 160, ${0.38 - ring * 0.06})`);
  }

  for (let index = 0; index < count; index += 1) {
    const angle = (index / count) * TAU + time * (variant === "contact" ? 0.1 : 0.04) + (seed % 19) * 0.02;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius * 0.68;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(200, 158, 46, 0.38)";
    ctx.stroke();
    fillCircle(ctx, x, y, 7 + Math.sin(time + index) * 1.5, index % 2 ? "#461373" : "#c89e2e");
  }

  const sides = variant === "legal" ? 4 : 8;
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(time * 0.07);
  ctx.beginPath();
  for (let index = 0; index <= sides; index += 1) {
    const angle = (index / sides) * TAU;
    const x = Math.cos(angle) * radius * 0.42;
    const y = Math.sin(angle) * radius * 0.42;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "rgba(70, 19, 115, 0.78)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
  fillCircle(ctx, centerX, centerY, 6 + Math.sin(time * 1.2) * 2, "#c89e2e");
}

const sceneTypes = [
  ["business-name-numerology", "brand"], ["baby-name-numerology", "cradle"], ["name-numerology", "name"],
  ["date-of-birth-numerology", "calendar"], ["lucky-number-consultation", "lucky"], ["personal-year-reading", "year"],
  ["mobile-number-numerology", "phone"], ["signature-correction", "signature"],
  ["commercial-vastu", "store"], ["office-vastu", "office"], ["plot-vastu", "plot"], ["flat-vastu", "flat"],
  ["vastu-remedies", "remedies"], ["business-vastu", "business"], ["wealth-vastu", "wealth"], ["home-vastu", "house"],
  ["kundli-reading", "kundli"], ["career-astrology", "career"], ["marriage-astrology", "rings"],
  ["love-compatibility", "compatibility"], ["dasha-analysis", "timeline"], ["transit-reading", "transit"],
  ["muhurat-selection", "muhurat"], ["birth-time-rectification", "birth-clock"],
  ["love-relationship", "heart"], ["career-tarot", "card-career"], ["yes-no-tarot", "yes-no"],
  ["decision-making", "fork"], ["monthly-tarot", "moon-cycle"], ["spiritual-guidance", "lotus"],
  ["third-party-reading", "three-fields"], ["life-path-tarot", "life-path"],
  ["chakra-healing", "chakra"], ["aura-cleansing", "aura"], ["cord-cutting", "cord"],
  ["emotional-release", "release"], ["reiki-healing", "hands"], ["distance-healing", "distance"],
  ["protection-healing", "shield"], ["meditation-healing", "meditation"],
  ["all-consultation-paths", "modalities"], ["auric-core-team-philosophy", "team"],
  ["private-consultation-reservation", "booking"], ["care-desk-worldwide", "contact"],
  ["privacy policy", "lock"], ["consultation terms", "scales"]
];

const lightCanvasScenes = new Set([
  "house", "office", "store", "plot", "flat", "vastu-hub", "remedies", "business", "wealth",
  "name", "brand", "calendar", "lucky", "year", "cradle", "phone", "signature", "numerology-hub",
  "modalities", "team", "booking", "contact", "lock", "scales"
]);

function resolveScene(seed) {
  const normalized = seed.toLowerCase();
  const match = sceneTypes.find(([key]) => normalized.includes(key));
  if (match) return match[1];
  if (normalized.includes("vastu")) return "vastu-hub";
  if (normalized.includes("numerology")) return "numerology-hub";
  if (normalized.includes("astrology")) return "astrology-hub";
  if (normalized.includes("tarot")) return "tarot-hub";
  if (normalized.includes("energy-healing")) return "energy-hub";
  return "modalities";
}

function motifLine(ctx, color = "rgba(246, 211, 112, 0.9)", width = 2) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
}

function drawPolygon(ctx, points, close = true) {
  ctx.beginPath();
  points.forEach(([x, y], index) => index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
  if (close) ctx.closePath();
  ctx.stroke();
}

function drawSceneMotif(ctx, width, height, time, scene) {
  const unit = Math.min(width, height);
  const x = width * 0.5;
  const y = height * 0.46;
  const r = unit * 0.2;
  const pulse = 1 + Math.sin(time * 1.15) * 0.035;

  ctx.save();
  ctx.translate(x, y);
  ctx.scale(pulse, pulse);
  motifLine(ctx, lightCanvasScenes.has(scene) ? "rgba(70, 19, 115, 0.82)" : "rgba(246, 211, 112, 0.9)", 2.4);

  if (["house", "office", "store", "plot", "flat", "vastu-hub"].includes(scene)) {
    if (scene === "house") {
      drawPolygon(ctx, [[-r, -r * 0.08], [0, -r * 0.86], [r, -r * 0.08], [r, r * 0.78], [-r, r * 0.78]]);
      ctx.strokeRect(-r * 0.72, 0, r * 1.44, r * 0.52);
      ctx.strokeRect(-r * 0.18, r * 0.28, r * 0.36, r * 0.5);
      fillCircle(ctx, 0, r * 0.68, 4 + Math.sin(time * 2) * 1.5, "#f2ce69");
    } else if (scene === "office") {
      ctx.strokeRect(-r, -r * 0.72, r * 2, r * 1.44);
      for (let row = -1; row <= 1; row += 1) for (let col = -1; col <= 1; col += 1) {
        ctx.strokeRect(col * r * 0.55 - r * 0.18, row * r * 0.42 - r * 0.12, r * 0.36, r * 0.24);
        fillCircle(ctx, col * r * 0.55, row * r * 0.42, 3 + Math.sin(time + row + col) * 0.8, "#d9b24d");
      }
      ctx.beginPath(); ctx.moveTo(-r * 0.82, r * 0.58); ctx.lineTo(r * 0.8, -r * 0.55); ctx.stroke();
    } else if (scene === "store") {
      ctx.strokeRect(-r, -r * 0.52, r * 2, r * 1.2);
      for (let index = 0; index < 5; index += 1) {
        ctx.beginPath(); ctx.moveTo(-r + index * r * 0.4, -r * 0.52); ctx.lineTo(-r * 0.8 + index * r * 0.4, -r * 0.2); ctx.stroke();
      }
      ctx.strokeRect(-r * 0.65, 0, r * 0.55, r * 0.68); ctx.strokeRect(r * 0.18, 0, r * 0.55, r * 0.46);
    } else if (scene === "plot") {
      ctx.rotate(Math.sin(time * 0.35) * 0.03);
      drawPolygon(ctx, [[-r, -r * 0.55], [r * 0.75, -r * 0.82], [r, r * 0.48], [-r * 0.62, r * 0.85]]);
      ctx.beginPath(); ctx.moveTo(0, r * 0.68); ctx.lineTo(0, -r * 0.68); ctx.lineTo(-r * 0.12, -r * 0.48); ctx.moveTo(0, -r * 0.68); ctx.lineTo(r * 0.12, -r * 0.48); ctx.stroke();
    } else if (scene === "flat") {
      ctx.strokeRect(-r * 0.72, -r, r * 1.44, r * 2);
      for (let row = 0; row < 4; row += 1) for (let col = -1; col <= 1; col += 1) ctx.strokeRect(col * r * 0.38 - r * 0.12, -r * 0.75 + row * r * 0.42, r * 0.24, r * 0.2);
      ctx.strokeRect(-r * 0.15, r * 0.62, r * 0.3, r * 0.38);
    } else {
      ctx.strokeRect(-r, -r, r * 2, r * 2);
      ctx.strokeRect(-r * 0.65, -r * 0.65, r * 1.3, r * 1.3);
      ctx.rotate(time * 0.08); drawPolygon(ctx, [[0, -r * 0.82], [r * 0.24, -r * 0.24], [r * 0.82, 0], [r * 0.24, r * 0.24], [0, r * 0.82], [-r * 0.24, r * 0.24], [-r * 0.82, 0], [-r * 0.24, -r * 0.24]]);
    }
  } else if (["remedies", "business", "wealth"].includes(scene)) {
    if (scene === "remedies") {
      const colors = ["#d75a53", "#de9f42", "#d8c15b", "#4f9b6c", "#4ea4af"];
      colors.forEach((color, index) => {
        const angle = index / colors.length * TAU + time * 0.12;
        fillCircle(ctx, Math.cos(angle) * r * 0.72, Math.sin(angle) * r * 0.55, r * 0.13, color);
      });
      strokeCircle(ctx, 0, 0, r * 0.34, "rgba(246, 211, 112, 0.9)", 2);
    } else {
      for (let index = 0; index < 5; index += 1) ctx.strokeRect(-r * 0.85 + index * r * 0.38, r * 0.65 - index * r * (scene === "wealth" ? 0.28 : 0.2), r * 0.2, r * (0.25 + index * 0.2));
      ctx.beginPath(); ctx.moveTo(-r, r * 0.72); ctx.quadraticCurveTo(0, -r * 0.2 + Math.sin(time) * 5, r, -r * 0.72); ctx.lineTo(r * 0.78, -r * 0.66); ctx.moveTo(r, -r * 0.72); ctx.lineTo(r * 0.9, -r * 0.5); ctx.stroke();
      if (scene === "wealth") for (let index = 0; index < 3; index += 1) strokeCircle(ctx, r * 0.42 + index * r * 0.18, r * 0.36 - index * r * 0.12, r * 0.12, "rgba(246, 211, 112, 0.72)");
    }
  } else if (["name", "brand", "calendar", "lucky", "year", "cradle", "phone", "signature", "numerology-hub"].includes(scene)) {
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "rgba(70, 19, 115, 0.9)";
    if (scene === "name" || scene === "brand") {
      const chars = scene === "name" ? ["A", "U", "R", "I", "C"] : ["N", "A", "M", "E"];
      chars.forEach((char, index) => { ctx.font = `${r * 0.34}px Georgia`; ctx.fillText(char, (index - (chars.length - 1) / 2) * r * 0.38, Math.sin(time + index) * 8); });
      ctx.beginPath(); ctx.moveTo(-r, r * 0.48); ctx.bezierCurveTo(-r * 0.3, r * 0.18, r * 0.25, r * 0.8, r, r * 0.38); ctx.stroke();
    } else if (scene === "calendar") {
      ctx.strokeRect(-r, -r * 0.72, r * 2, r * 1.5); ctx.beginPath(); ctx.moveTo(-r, -r * 0.35); ctx.lineTo(r, -r * 0.35); ctx.stroke();
      for (let row = 0; row < 3; row += 1) for (let col = 0; col < 5; col += 1) fillCircle(ctx, -r * 0.72 + col * r * 0.36, -r * 0.08 + row * r * 0.3, col === 2 && row === 1 ? 6 : 3, col === 2 && row === 1 ? "#f2ce69" : "rgba(246,211,112,.55)");
    } else if (scene === "lucky") {
      [3, 6, 9].forEach((number, index) => { strokeCircle(ctx, (index - 1) * r * 0.72, Math.sin(time + index) * 8, r * 0.3, "rgba(246,211,112,.75)", 2); ctx.font = `${r * 0.38}px Georgia`; ctx.fillText(String(number), (index - 1) * r * 0.72, Math.sin(time + index) * 8); });
    } else if (scene === "year" || scene === "numerology-hub") {
      for (let index = 0; index < 12; index += 1) { const angle = index / 12 * TAU + time * 0.05; fillCircle(ctx, Math.cos(angle) * r * 0.82, Math.sin(angle) * r * 0.82, index % 3 === 0 ? 5 : 3, "#f2ce69"); }
      ctx.font = `${r * 0.65}px Georgia`; ctx.fillText(scene === "year" ? String(new Date().getFullYear()).slice(2) : "9", 0, 0);
    } else if (scene === "cradle") {
      ctx.beginPath(); ctx.arc(0, -r * 0.1, r * 0.72, 0.15, Math.PI - 0.15); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-r * 0.55, -r * 0.1); ctx.quadraticCurveTo(0, r * 0.7, r * 0.55, -r * 0.1); ctx.stroke(); fillCircle(ctx, 0, r * 0.12, r * 0.15, "rgba(246,211,112,.78)");
    } else if (scene === "phone") {
      ctx.strokeRect(-r * 0.55, -r, r * 1.1, r * 2); for (let row = 0; row < 3; row += 1) for (let col = 0; col < 3; col += 1) { ctx.font = `${r * 0.2}px sans-serif`; ctx.fillText(String(row * 3 + col + 1), (col - 1) * r * 0.32, -r * 0.35 + row * r * 0.32); } strokeCircle(ctx, 0, r * 0.72, r * 0.08, "#f2ce69");
    } else {
      ctx.beginPath(); ctx.moveTo(-r, r * 0.2); ctx.bezierCurveTo(-r * 0.55, -r, -r * 0.15, r, r * 0.15, -r * 0.35); ctx.bezierCurveTo(r * 0.5, -r, r * 0.55, r * 0.65, r, -r * 0.1); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-r * 0.85, r * 0.6); ctx.lineTo(r * 0.9, r * 0.6); ctx.stroke();
    }
  } else if (["kundli", "career", "rings", "compatibility", "timeline", "transit", "muhurat", "birth-clock", "astrology-hub"].includes(scene)) {
    if (scene === "kundli") {
      ctx.rotate(Math.PI / 4 + time * 0.025); ctx.strokeRect(-r * 0.72, -r * 0.72, r * 1.44, r * 1.44); ctx.strokeRect(-r * 0.36, -r * 0.36, r * 0.72, r * 0.72); ctx.beginPath(); ctx.moveTo(-r * 0.72, 0); ctx.lineTo(r * 0.72, 0); ctx.moveTo(0, -r * 0.72); ctx.lineTo(0, r * 0.72); ctx.stroke();
    } else if (scene === "career") {
      for (let index = 0; index < 5; index += 1) { ctx.beginPath(); ctx.moveTo(-r + index * r * 0.35, r * 0.72 - index * r * 0.32); ctx.lineTo(-r + (index + 1) * r * 0.35, r * 0.72 - index * r * 0.32); ctx.lineTo(-r + (index + 1) * r * 0.35, r * 0.4 - index * r * 0.32); ctx.stroke(); } fillCircle(ctx, r * 0.78, -r * 0.74, r * 0.14, "#f2ce69");
    } else if (scene === "rings" || scene === "compatibility") {
      strokeCircle(ctx, -r * 0.28, 0, r * 0.55, "rgba(246,211,112,.9)", 3); strokeCircle(ctx, r * 0.28, 0, r * 0.55, scene === "compatibility" ? "rgba(93,198,205,.9)" : "rgba(246,211,112,.9)", 3);
      if (scene === "compatibility") { fillCircle(ctx, -r * 0.28, 0, 6, "#f2ce69"); fillCircle(ctx, r * 0.28, 0, 6, "#58b7c0"); }
    } else if (scene === "timeline") {
      ctx.beginPath(); ctx.moveTo(-r, 0); ctx.lineTo(r, 0); ctx.stroke(); for (let index = 0; index < 5; index += 1) { const px = -r + index * r * 0.5; strokeCircle(ctx, px, 0, r * (0.08 + index * 0.025), "rgba(246,211,112,.8)"); }
    } else if (scene === "transit" || scene === "astrology-hub") {
      for (let ring = 1; ring <= 4; ring += 1) { ctx.save(); ctx.scale(1, 0.55); strokeCircle(ctx, 0, 0, r * ring * 0.28, `rgba(246,211,112,${0.85-ring*0.13})`); ctx.restore(); const angle = time * (0.08 + ring * 0.03) + ring; fillCircle(ctx, Math.cos(angle) * r * ring * 0.28, Math.sin(angle) * r * ring * 0.15, 3 + ring, ring % 2 ? "#f2ce69" : "#58b7c0"); }
    } else {
      strokeCircle(ctx, 0, 0, r * 0.82, "rgba(246,211,112,.88)", 3); for (let index = 0; index < 12; index += 1) { const angle = index / 12 * TAU; ctx.beginPath(); ctx.moveTo(Math.cos(angle) * r * 0.7, Math.sin(angle) * r * 0.7); ctx.lineTo(Math.cos(angle) * r * 0.82, Math.sin(angle) * r * 0.82); ctx.stroke(); }
      const angle = scene === "birth-clock" ? -time * 0.32 : time * 0.18; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(angle) * r * 0.58, Math.sin(angle) * r * 0.58); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(angle * 0.38) * r * 0.38, Math.sin(angle * 0.38) * r * 0.38); ctx.stroke();
    }
  } else if (["heart", "card-career", "yes-no", "fork", "moon-cycle", "lotus", "three-fields", "life-path", "tarot-hub"].includes(scene)) {
    if (scene === "heart") {
      ctx.beginPath(); ctx.moveTo(0, r * 0.75); ctx.bezierCurveTo(-r * 1.25, 0, -r * 0.65, -r, 0, -r * 0.42); ctx.bezierCurveTo(r * 0.65, -r, r * 1.25, 0, 0, r * 0.75); ctx.stroke();
    } else if (scene === "yes-no") {
      ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(0, r); ctx.stroke(); fillCircle(ctx, -r * 0.45, 0, r * 0.34, "rgba(242,206,105,.75)"); strokeCircle(ctx, r * 0.45, 0, r * 0.34, "rgba(88,183,192,.9)", 3); fillCircle(ctx, r * 0.54, -r * 0.08, r * 0.31, "#180626");
    } else if (scene === "fork" || scene === "life-path") {
      ctx.beginPath(); ctx.moveTo(0, r); ctx.quadraticCurveTo(-r * 0.08, 0, scene === "fork" ? -r * 0.75 : r * 0.3, -r); if (scene === "fork") { ctx.moveTo(0, r); ctx.quadraticCurveTo(r * 0.08, 0, r * 0.75, -r); } ctx.stroke(); for (let index = 0; index < 5; index += 1) fillCircle(ctx, Math.sin(index + time * 0.2) * r * 0.12, r - index * r * 0.4, 3, "#f2ce69");
    } else if (scene === "moon-cycle") {
      for (let index = 0; index < 7; index += 1) { const px = (index - 3) * r * 0.32; strokeCircle(ctx, px, 0, r * 0.16, "rgba(246,211,112,.8)"); ctx.save(); ctx.beginPath(); ctx.arc(px + (index - 3) * r * 0.025, 0, r * 0.16, 0, TAU); ctx.clip(); ctx.fillStyle = `rgba(246,211,112,${0.18 + Math.abs(3-index)*0.12})`; ctx.fillRect(px-r*.16,-r*.16,r*.32,r*.32); ctx.restore(); }
    } else if (scene === "lotus") {
      for (let index = 0; index < 8; index += 1) { ctx.save(); ctx.rotate(index / 8 * TAU + Math.sin(time * 0.4) * 0.04); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(r * 0.25, -r * 0.28, 0, -r * 0.9); ctx.quadraticCurveTo(-r * 0.25, -r * 0.28, 0, 0); ctx.stroke(); ctx.restore(); }
    } else if (scene === "three-fields") {
      [-0.7, 0, 0.7].forEach((offset, index) => { strokeCircle(ctx, offset * r, 0, r * 0.28, index === 1 ? "rgba(246,211,112,.9)" : "rgba(88,183,192,.8)", 2); fillCircle(ctx, offset * r, 0, 4 + Math.sin(time + index), index === 1 ? "#f2ce69" : "#58b7c0"); });
    } else {
      const count = scene === "card-career" ? 4 : 3; for (let index = 0; index < count; index += 1) { ctx.save(); ctx.translate((index - (count - 1) / 2) * r * 0.62, Math.sin(time * 0.7 + index) * 5); ctx.rotate((index - 1) * 0.05); ctx.strokeRect(-r * 0.22, -r * 0.5, r * 0.44, r); strokeCircle(ctx, 0, 0, r * 0.12, "rgba(246,211,112,.7)"); ctx.restore(); }
    }
  } else if (["chakra", "aura", "cord", "release", "hands", "distance", "shield", "meditation", "energy-hub"].includes(scene)) {
    if (scene === "aura" || scene === "shield") {
      for (let ring = 1; ring <= 4; ring += 1) { ctx.save(); ctx.scale(0.72, 1); strokeCircle(ctx, 0, 0, r * ring * 0.25 + Math.sin(time + ring) * 3, `rgba(${scene === "shield" ? "246,211,112" : "88,183,192"},${0.8-ring*.12})`, 2); ctx.restore(); } ctx.beginPath(); ctx.moveTo(0, -r * 0.5); ctx.quadraticCurveTo(-r * 0.35, 0, 0, r * 0.7); ctx.quadraticCurveTo(r * 0.35, 0, 0, -r * 0.5); ctx.stroke();
    } else if (scene === "cord") {
      fillCircle(ctx, -r * 0.75, 0, r * 0.18, "#58b7c0"); fillCircle(ctx, r * 0.75, 0, r * 0.18, "#f2ce69"); for (let line = -1; line <= 1; line += 1) { ctx.beginPath(); ctx.moveTo(-r * 0.55, line * r * 0.08); ctx.bezierCurveTo(-r * 0.2, -r * 0.3, r * 0.2, r * 0.3, r * 0.55, line * r * 0.08); ctx.stroke(); } fillCircle(ctx, Math.sin(time) * r * 0.05, 0, 6 + Math.sin(time * 2) * 2, "#180626");
    } else if (scene === "release") {
      for (let line = 0; line < 5; line += 1) { ctx.beginPath(); ctx.moveTo(-r, -r * 0.55 + line * r * 0.26); ctx.bezierCurveTo(-r * 0.4, -r + line * r * 0.2 + Math.sin(time + line) * 8, r * 0.35, r * 0.75 - line * r * 0.12, r, -r * 0.3 + line * r * 0.22); ctx.stroke(); }
    } else if (scene === "hands") {
      ctx.beginPath(); ctx.moveTo(-r, r * 0.3); ctx.quadraticCurveTo(-r * 0.35, -r * 0.35, -r * 0.05, r * 0.05); ctx.moveTo(r, r * 0.3); ctx.quadraticCurveTo(r * 0.35, -r * 0.35, r * 0.05, r * 0.05); ctx.stroke(); const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.45); glow.addColorStop(0, "rgba(246,211,112,.8)"); glow.addColorStop(1, "rgba(246,211,112,0)"); fillCircle(ctx, 0, 0, r * 0.45, glow);
    } else if (scene === "distance") {
      strokeCircle(ctx, 0, 0, r * 0.72, "rgba(88,183,192,.9)", 2); ctx.beginPath(); ctx.arc(0, 0, r * 0.72, -Math.PI * 0.85, -Math.PI * 0.15); ctx.stroke(); fillCircle(ctx, -r * 0.62, -r * 0.32, 6, "#f2ce69"); fillCircle(ctx, r * 0.62, -r * 0.32, 6, "#f2ce69");
    } else if (scene === "meditation") {
      fillCircle(ctx, 0, -r * 0.62, r * 0.14, "rgba(246,211,112,.82)"); ctx.beginPath(); ctx.moveTo(0, -r * 0.42); ctx.quadraticCurveTo(-r * 0.18, r * 0.15, 0, r * 0.48); ctx.quadraticCurveTo(r * 0.18, r * 0.15, 0, -r * 0.42); ctx.moveTo(-r * 0.78, r * 0.62); ctx.quadraticCurveTo(0, r * 0.15, r * 0.78, r * 0.62); ctx.stroke();
    } else {
      const colors = ["#d75a53", "#de9f42", "#d8c15b", "#4f9b6c", "#4ea4af", "#4f77c8", "#9c62cf"]; colors.forEach((color, index) => fillCircle(ctx, 0, r * 0.75 - index * r * 0.25 + Math.sin(time + index) * 2, r * 0.075, color));
    }
  } else {
    if (scene === "lock") {
      ctx.strokeRect(-r * 0.68, -r * 0.05, r * 1.36, r * 0.95); ctx.beginPath(); ctx.arc(0, -r * 0.05, r * 0.45, Math.PI, TAU); ctx.stroke(); fillCircle(ctx, 0, r * 0.35, r * 0.09, "#f2ce69");
    } else if (scene === "scales") {
      ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(0, r); ctx.moveTo(-r * 0.85, -r * 0.55); ctx.lineTo(r * 0.85, -r * 0.55); ctx.moveTo(-r * 0.62, -r * 0.55); ctx.lineTo(-r * 0.86, r * 0.15); ctx.moveTo(r * 0.62, -r * 0.55); ctx.lineTo(r * 0.86, r * 0.15); ctx.stroke(); ctx.beginPath(); ctx.arc(-r * 0.86, r * 0.15, r * 0.32, 0, Math.PI); ctx.moveTo(r * 0.54, r * 0.15); ctx.arc(r * 0.86, r * 0.15, r * 0.32, 0, Math.PI); ctx.stroke();
    } else if (scene === "booking" || scene === "contact") {
      ctx.strokeRect(-r, -r * 0.72, r * 2, r * 1.44); if (scene === "booking") { for (let row = 0; row < 3; row += 1) for (let col = 0; col < 4; col += 1) fillCircle(ctx, -r * 0.66 + col * r * 0.44, -r * 0.28 + row * r * 0.34, row === 1 && col === 2 ? 6 : 3, row === 1 && col === 2 ? "#f2ce69" : "rgba(246,211,112,.5)"); } else { ctx.beginPath(); ctx.moveTo(-r * 0.72, r * 0.35); ctx.lineTo(-r * 0.18, -r * 0.1); ctx.lineTo(r * 0.2, r * 0.18); ctx.lineTo(r * 0.76, -r * 0.38); ctx.stroke(); [-.72,-.18,.2,.76].forEach((px,index)=>fillCircle(ctx, px*r, [0.35,-0.1,0.18,-0.38][index]*r, 5, "#f2ce69")); }
    } else {
      const count = scene === "team" ? 5 : 5; for (let index = 0; index < count; index += 1) { const angle = index / count * TAU + time * 0.05; fillCircle(ctx, Math.cos(angle) * r * 0.78, Math.sin(angle) * r * 0.58, r * 0.12, index % 2 ? "#58b7c0" : "#f2ce69"); } strokeCircle(ctx, 0, 0, r * 0.32, "rgba(246,211,112,.9)", 2);
    }
  }

  ctx.restore();
}

export default function AuricHeroArt({ variant = "services", seed = "auric-saga", title }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const seedValue = hashString(`${variant}:${seed}`);
    const scene = resolveScene(seed);
    const random = createRandom(seedValue);
    const stars = Array.from({ length: 78 }, () => ({
      xRatio: random(),
      yRatio: random(),
      size: 0.45 + random() * 1.5,
      speed: 0.45 + random() * 1.2
    }));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      stars.forEach((star) => {
        star.x = star.xRatio * width;
        star.y = star.yRatio * height;
      });
    };

    const render = (timestamp = 0) => {
      const time = (timestamp / 1000) * 1.45;
      const isCategoryHub = scene.endsWith("-hub");
      context.clearRect(0, 0, width, height);
      drawBackground(context, width, height, variant);
      drawStars(context, stars, time, ["astrology", "tarot-reading", "energy-healing"].includes(variant));

      // Category hubs have a broad discipline animation. Every other route draws
      // only its own scene so subpages never look like variants of one base artwork.
      if (isCategoryHub) {
        if (variant === "vastu") drawVastu(context, width, height, time, seedValue);
        else if (variant === "numerology") drawNumerology(context, width, height, time, seedValue);
        else if (variant === "astrology") drawAstrology(context, width, height, time, seedValue);
        else if (variant === "tarot-reading") drawTarot(context, width, height, time, seedValue);
        else if (variant === "energy-healing") drawEnergy(context, width, height, time, seedValue);
      }

      drawSceneMotif(context, width, height, time, scene);

      if (!reduceMotion) frameId = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) render(0);
    });
    resizeObserver.observe(canvas);
    resize();
    render(0);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [seed, variant]);

  return (
    <figure className={`auric-hero-art auric-hero-art--${variant}`}>
      <canvas ref={canvasRef} role="img" aria-label={`${title || "Auric Saga"}: ${artLabels[variant] || artLabels.services}`} />
      <figcaption>
        <span>{title || "Auric Saga"}</span>
        <small>{artLabels[variant] || artLabels.services}</small>
      </figcaption>
    </figure>
  );
}
