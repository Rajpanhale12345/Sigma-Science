import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import papersData from "../data/papersData";
import { toggleBookmark } from "../features/bookmarksSlice";
import "../components/papers.css";
import SEO from "../components/SEO";

const Papers = () => {
  const dispatch = useDispatch();
  const bookmarkedIds = useSelector((state) => state.bookmarks.bookmarkedIds);

  // ✅ Your real domain
  const SITE_URL = "https://sigmascienceacademyedu.com";

  // ✅ JSON-LD: CollectionPage + ItemList (best for list pages)
  const papersJsonLd = useMemo(() => {
    const itemList = papersData.map((paper, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: paper.title,
        description: paper.description,
        // If your pdfUrl is relative, it becomes absolute here.
        url: paper.pdfUrl?.startsWith("http")
          ? paper.pdfUrl
          : `${SITE_URL}${paper.pdfUrl}`,
        // Helps classification
        about: paper.subject,
        educationalLevel: paper.class,
      },
    }));

    return [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Papers | Sigma Science Academy",
        description:
          "Access subject-wise papers and PDFs for Sigma Science Academy students. Browse papers by subject and class.",
        url: `${SITE_URL}/papers`,
        isPartOf: {
          "@type": "WebSite",
          name: "Sigma Science Academy",
          url: SITE_URL,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: itemList,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Papers", item: `${SITE_URL}/papers` },
        ],
      },
    ];
  }, [SITE_URL]);

  return (
    <>
    
      <SEO
        title="Papers | Sigma Science Academy"
        description="Browse and download subject-wise papers and PDFs for Sigma Science Academy students. Filter by subject and class to find the right paper quickly."
        canonicalPath="/papers"
        jsonLd={papersJsonLd}
      />


    <div className="papers-page">

   <br /><br />
<h1>Papers</h1><br />
<span className="down">⌵</span>
<br /><br /><br />
      <div className="papers-wrap">
        {papersData.map((paper) => {
          const isBookmarked = bookmarkedIds.includes(paper.id);

          return (
            <div key={paper.id} className="paper-card">
              <div className="paper-card-top">
                <div className="paper-title-area">
                  <h2 className="paper-title">{paper.title}</h2>
                  <p className="paper-meta">
                    <span className="chip">{paper.subject}</span>
                    <span className="dot">•</span>
                    <span className="chip">{paper.class}</span>
                   
        
                  </p>
                </div>

                <button
                  className={`bookmark-btn ${isBookmarked ? "active" : ""}`}
                  onClick={() => dispatch(toggleBookmark(paper.id))}
                  aria-label="Bookmark paper"
                >
                  {isBookmarked ? "👍 Bookmarked" : "🔖 Bookmark"}
                </button>
              </div>

              <p className="paper-desc">{paper.description}</p>

              <div className="paper-actions">
                <a
                  className="pdf-link"
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Papers;
