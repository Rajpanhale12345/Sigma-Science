import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Blogs.css";
import cover1 from "./Images/Hydration-Brain.jpg";
import cover2 from "./Images/Board Exam Success.jpg";

const SITE_URL = "https://sigmascienceacademyedu.com";
const PAGE_PATH = "/blogs";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const blogs = [
  {
    id: 1,
    title: "Hydration, Brain Health & Productivity: What Students Should Know",
    excerpt:
      "Hydration boosts focus, memory, and energy, making it essential for student performance.",
    image: cover1,
    category: "Student Health",
    readTime: "7 min read",
    date: "2026-02-17",
    link: "/blogs/hydration-brain-health-productivity",
  },

  {
    id: 2,
    title: "Why Relying Only on Previous Year Papers Isn't Enough for Board Exam Success",
    excerpt:
      "Previous year papers help, but concept mastery ensures true exam success.",
    image: cover2,
    category: "Board Exam",
    readTime: "7 min read",
    date: "2026-02-19",
    link: "/blogs/board-exam-success",
  },

];


function toAbsoluteUrl(img) {
  try {
    return new URL(img, SITE_URL).toString();
  } catch {
    return `${SITE_URL}/assets/Hydration-Brain-Cp6DQRGt.jpg`;
  }
}

export default function Blogs() {
  const ogImage = blogs[0]?.image ? toAbsoluteUrl(blogs[0].image) : `${SITE_URL}/assets/Hydration-Brain-Cp6DQRGt.jpg`;

  // JSON-LD: Blog/CollectionPage + ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blogs | Sigma Science Academy",
    description:
      "Read Sigma Science Academy blogs on student health, productivity, and learning strategies.",
    url: PAGE_URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}${b.link}`,
        name: b.title,
      })),
    },
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Blogs for Students: Health, Productivity & Learning | Sigma Science Academy</title>
        <meta
          name="description"
          content="Explore Sigma Science Academy blogs on student health, hydration, productivity, study strategies, and learning habits to improve academic performance."
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Robots */}
        <meta name="robots" content="index,follow,max-image-preview:large" />

        {/* Open Graph (Facebook/LinkedIn/etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sigma Science Academy" />
        <meta property="og:title" content="Blogs | Sigma Science Academy" />
        <meta
          property="og:description"
          content="Helpful articles on student wellness, productivity, learning habits, and career guidance."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs | Sigma Science Academy" />
        <meta
          name="twitter:description"
          content="Helpful articles on student wellness, productivity, learning habits, and career guidance."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="blogs-page">
        <header className="blogs-hero">
          <div className="blogs-hero-inner">
            <h1>Blogs</h1>
            <p>
              Helpful articles on student wellness, productivity, learning habits,
              and career guidance.
            </p>
          </div>
        </header>

        <section className="blogs-container">
          <div className="blogs-grid">
            {blogs.map((b) => (
              <article key={b.id} className="blog-card">
                <Link to={b.link} className="blog-card-link">
                  <div className="blog-card-imageWrap">
                    <img src={b.image} alt={b.title} />
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span className="pill">{b.category}</span>
                      <span className="dot">•</span>
                      <span>{b.readTime}</span>
                    </div>

                    <h2 className="blog-card-title">{b.title}</h2>
                    <p className="blog-card-excerpt">{b.excerpt}</p>

                    <div className="blog-card-footer">
                      <span className="blog-card-date">
                        {new Date(b.date).toLocaleDateString()}
                      </span>
                    </div>

                    <span className="blog-card-cta">Read More →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
