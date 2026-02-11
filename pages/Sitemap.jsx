import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "./Sitemap.css";

export default function Sitemap() {
  const SITE_URL = "https://sigmascienceacademyedu.com";

  // ✅ Based on your App.jsx routes
  const groups = useMemo(
    () => [
      {
        title: "Main Pages",
        links: [
          { name: "Home", to: "/" },
          { name: "About", to: "/about" },
          { name: "Courses", to: "/courses" },
          { name: "Contact", to: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Blogs", to: "/blogs" },
          { name: "Papers", to: "/papers" },
          { name: "Bookmarked Papers", to: "/bookmarks" },
          { name: "New", to: "/new" },
        ],
      },
      {
        title: "Teacher",
        links: [
          { name: "Teacher Login", to: "/teacher/login" },
          { name: "Teacher Profile", to: "/teacher/me" },
        ],
      },
      {
        title: "Student",
        links: [
          { name: "Student Login", to: "/students/login" },
          { name: "Student Profile", to: "/student/me" },
        ],
      },
      {
        title: "Other",
        links: [{ name: "Popup", to: "/popup" }],
      },
    ],
    []
  );

  const allLinks = useMemo(
    () => groups.flatMap((g) => g.links.map((l) => ({ ...l, group: g.title }))),
    [groups]
  );

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allLinks;
    return allLinks.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.to.toLowerCase().includes(q) ||
        l.group.toLowerCase().includes(q)
    );
  }, [allLinks, query]);

  const sitemapJsonLd = useMemo(() => {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Sitemap",
        url: `${SITE_URL}/sitemap`,
        isPartOf: { "@type": "WebSite", url: SITE_URL, name: "Sigma Science Academy" },
      },
    ];
  }, [SITE_URL]);

  return (
    <>
      <SEO
        title="Sitemap | Sigma Science Academy"
        description="Explore all pages of Sigma Science Academy website in one place."
        canonicalPath="/sitemap"
        jsonLd={sitemapJsonLd}
      />

      <main className="sm">
        <header className="sm-hero">
          <h1 className="sm-title">Sitemap</h1>
          <p className="sm-subtitle">
            Quick access to all important pages on Sigma Science Academy.
          </p>

          <div className="sm-search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages (e.g. papers, login, about)..."
              aria-label="Search sitemap"
            />
            {query ? (
              <button className="sm-clear" onClick={() => setQuery("")} type="button">
                Clear
              </button>
            ) : null}
          </div>

          <div className="sm-meta">
            <span>{filtered.length} pages</span>
            <span className="dot">•</span>
            <a className="sm-domain" href={SITE_URL} target="_blank" rel="noreferrer">
              {SITE_URL}
            </a>
          </div>
        </header>

        {/* Grouped view */}
        {!query.trim() ? (
          <section className="sm-grid">
            {groups.map((group) => (
              <div key={group.title} className="sm-card">
                <h2 className="sm-card-title">{group.title}</h2>
                <ul className="sm-list">
                  {group.links.map((l) => (
                    <li key={l.to} className="sm-item">
                      <Link to={l.to} className="sm-link">
                        {l.name}
                      </Link>
                      <span className="sm-path">{l.to}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : (
          // Search results view
          <section className="sm-results">
            <h2 className="sm-results-title">Results</h2>
            <ul className="sm-results-list">
              {filtered.map((l) => (
                <li key={`${l.group}-${l.to}`} className="sm-results-item">
                  <div className="sm-results-left">
                    <span className="sm-badge">{l.group}</span>
                    <Link to={l.to} className="sm-link">
                      {l.name}
                    </Link>
                  </div>
                  <span className="sm-path">{l.to}</span>
                </li>
              ))}

              {filtered.length === 0 ? (
                <li className="sm-empty">No pages matched your search.</li>
              ) : null}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}
