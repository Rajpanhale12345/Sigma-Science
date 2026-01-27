import React from "react";
import { useSelector, useDispatch } from "react-redux";
import papersData from "../data/papersData";
import { toggleBookmark } from "../features/bookmarksSlice";
import "../components/BookmarkedPapers.css";

const BookmarkedPapers = () => {
  const dispatch = useDispatch();
  const bookmarkedIds = useSelector((state) => state.bookmarks.bookmarkedIds);

  const bookmarkedPapers = papersData.filter((p) => bookmarkedIds.includes(p.id));

  return (
    <div>
      <h2>Bookmarked Papers</h2>

      {bookmarkedPapers.length === 0 ? (
        <p>No bookmarked papers yet.</p>
      ) : (
        bookmarkedPapers.map((paper) => (
          <div key={paper.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 10 }}>
            <h3>{paper.title}</h3>
            <a href={paper.pdfUrl} target="_blank" rel="noreferrer">
              Open PDF
            </a>

            <div style={{ marginTop: 10 }} className="like">
              <button onClick={() => dispatch(toggleBookmark(paper.id))}>
                🗑️ Remove Bookmark
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookmarkedPapers;
