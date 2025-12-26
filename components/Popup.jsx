import React, { useEffect, useState } from "react";
import "./Popup.css";

import img1 from "../images/popup1.webp";
import img2 from "../images/popup2.webp";
import img3 from "../images/popup3.webp";

const Popup = () => {
  const [open, setOpen] = useState(false);

  // Auto-open on page load
  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        <button className="popup-close" onClick={() => setOpen(false)}>
          ✕
        </button>

        <div className="popup-images">
          <img src={img1} alt="Popup 1" />
          <img src={img2} alt="Popup 2" />
          <img src={img3} alt="Popup 3" />
        </div>

      </div>
    </div>
  );
};

export default Popup;
