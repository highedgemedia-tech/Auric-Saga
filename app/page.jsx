import fs from "node:fs";
import path from "node:path";
import HomePageClient from "@/components/HomePageClient";

export const metadata = {
  title: "Auric Saga | Sacred Clarity, Beautifully Delivered",
  description: "Private holistic consultations in Vastu, Numerology, Astrology, Tarot Reading, and Energy Healing."
};

function getHomepageMarkup() {
  const filePath = path.join(process.cwd(), "index3.html");
  const html = fs.readFileSync(filePath, "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  return body
    .replace(/<!-- SCRIPT -->[\s\S]*?<script>[\s\S]*?<\/script>/i, "")
    .replace(/src="auricsaga-final-logo\.png"/g, 'src="/auricsaga-final-logo.png"')
    .replace(/src="rohit_srivastava\.jpg"/g, 'src="/rohit_srivastava.jpg"')
    .replace(/src="rahul\.jpg"/g, 'src="/rahul.jpg"')
    .replace(/src="lalit-singh\.jpg"/g, 'src="/lalit-singh.jpg"')
    .replace(/src="dinesh_kumar-1\.jpg"/g, 'src="/dinesh_kumar-1.jpg"')
    .replace(/src="vincent-van-ross\.jpg"/g, 'src="/vincent-van-ross.jpg"');
}

export default function HomePage() {
  return <HomePageClient html={getHomepageMarkup()} />;
}
