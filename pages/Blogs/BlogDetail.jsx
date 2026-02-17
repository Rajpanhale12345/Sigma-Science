import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../components/BlogDetail.css";
import { blogsData } from "../data/blogsData";

// Minimal markdown-ish renderer (supports headings + bullets)
// If you want perfect markdown, I’ll also give you react-markdown version.
function renderContent(raw = "") {
  const lines = raw.split("\n");

  return lines.map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return <br key={idx} />;

    if (trimmed.startsWith("### ")) return <h3 key={idx}>{trimmed.slice(4)}</h3>;
    if (trimmed.startsWith("## ")) return <h2 key={idx}>{trimmed.slice(3)}</h2>;
    if (trimmed.startsWith("# ")) return <h1 key={idx}>{trimmed.slice(2)}</h1>;

    if (trimmed.startsWith("- ")) return <li key={idx}>{trimmed.slice(2)}</li>;

    // bold **text**
    const parts = trimmed.split("**");
    if (parts.length > 1) {
      return (
        <p key={idx}>
          {parts.map((p, i) =>
            i % 2 === 1 ? <strong key={i}>{p}</strong> : <span key={i}>{p}</span>
          )}
        </p>
      );
    }

    return <p key={idx}>{trimmed}</p>;
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="blogDetail-wrap">
        <div className="blogDetail-notFound">
          <h1>Blog not found</h1>
          <p>The blog you’re looking for doesn’t exist.</p>
          <Link className="blogDetail-backLink" to="/blogs">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Sigma Science Academy</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <div className="blogDetail-wrap">
        <div className="blogDetail-container">
          <button className="blogDetail-backBtn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <header className="blogDetail-header">
            <span className="pill">{blog.category}</span>
            <h1>{blog.title}</h1>

            <div className="blogDetail-meta">
              <span>{blog.author}</span>
              <span className="dot">•</span>
              <span>{new Date(blog.date).toLocaleDateString()}</span>
              <span className="dot">•</span>
              <span>{blog.readTime}</span>
            </div>

            <div className="blogDetail-cover">
              <img src={blog.coverImage} alt={blog.title} />
            </div>
          </header>

          <main className="blogDetail-content">
            <ul className="blogDetail-ul">{renderContent(blog.content)}</ul>
          </main>

          {!!blog.tags?.length && (
            <footer className="blogDetail-tags">
              {blog.tags.map((t) => (
                <span key={t} className="tag">
                  #{t}
                </span>
              ))}
            </footer>
          )}

          <div className="blogDetail-bottomNav">
            <Link to="/blogs" className="blogDetail-backLink">
              ← All Blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
