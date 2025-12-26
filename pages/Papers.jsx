import React from "react";
import { useDispatch, useSelector } from "react-redux";
import papersData from "../data/papersData";
import { toggleBookmark } from "../features/bookmarksSlice";
import banner from "../Images/banner.webp";
import "../components/papers.css";

const Papers = () => {
    const dispatch = useDispatch();
    const bookmarkedIds = useSelector((state) => state.bookmarks.bookmarkedIds);

    return (
        <div>

            <div className="banner">    
                <img src={banner} alt="" />

                <div className="banner-content">
                    <h1>Papers  <br /><br /> </h1>
                 
                </div>
            </div>

            {papersData.map((paper) => {
                const isBookmarked = bookmarkedIds.includes(paper.id);

                return (
                    <div key={paper.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 10 }}>
                        <h2>{paper.title}</h2>
                        <p>
                            {paper.subject} • {paper.class} • {paper.year}
                        </p>
                        <p>{paper.description}</p>

                        <a href={paper.pdfUrl} target="_blank" rel="noreferrer">
                          <h4>Click to Open PDF</h4>
                        </a>

                        <div style={{ marginTop: 10 }} className="like">
                            <button onClick={() => dispatch(toggleBookmark(paper.id))}>
                                {isBookmarked ? "👍 Bookmarked" : "🔖 Bookmark"}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Papers;
