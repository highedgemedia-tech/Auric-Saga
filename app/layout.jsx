import "./globals.css";
import AppChrome from "@/components/AppChrome";

export const metadata = {
  metadataBase: new URL("https://auricsaga.com"),
  title: {
    default: "Auric Saga | Sacred Clarity, Beautifully Delivered",
    template: "%s | Auric Saga"
  },
  description: "Private holistic consultations in Vastu Shastra, Numerology, Vedic Astrology, Tarot Reading, and Energy Healing."
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Auric Saga",
    url: "https://auricsaga.com",
    email: "care@auricsaga.com",
    logo: "https://auricsaga.com/auricsaga-final-logo.png"
  };

  return (
    <html lang="en">
      <body>
        <AppChrome>{children}</AppChrome>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
