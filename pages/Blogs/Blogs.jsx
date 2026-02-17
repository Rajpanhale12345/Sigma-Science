import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Blogs.css";
import cover1 from "./Images/banner.webp";

const blogs = [
  {
    id: 1,
    title: "Hydration, Brain Health & Productivity: What Students Should Know",
    excerpt:
      "Hydration is often ignored—but even mild dehydration can reduce focus, memory, and productivity. Here’s what students should know.",
    image: cover1,
    category: "Student Health",
    readTime: "7 min read",
    date: "2026-02-17",
    link: "/blogs/hydration-brain-health-productivity",
  },

  // Add more separate blogs here later...
];

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs | Sigma Science Academy</title>
        <meta
          name="description"
          content="Read Sigma Science Academy blogs on student health, productivity, and learning strategies."
        />
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
