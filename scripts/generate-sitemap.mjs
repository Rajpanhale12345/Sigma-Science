import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ROUTES } from "../src/seo/routes.js";

const SITE_URL = process.env.SITE_URL || "https://sigmascienceacademyedu.com";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const now = new Date().toISOString();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), xml, "utf8");
console.log("✅ Generated public/sitemap.xml");
console.log("🌐 SITE_URL:", SITE_URL);
