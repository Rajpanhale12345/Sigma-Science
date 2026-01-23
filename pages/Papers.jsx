import React from "react";
import { useDispatch, useSelector } from "react-redux";
import papersData from "../data/papersData";
import { toggleBookmark } from "../features/bookmarksSlice";
import "../components/papers.css";

const Papers = () => {
  const dispatch = useDispatch();
  const bookmarkedIds = useSelector((state) => state.bookmarks.bookmarkedIds);

  return (
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
  );
};

export default Papers;
