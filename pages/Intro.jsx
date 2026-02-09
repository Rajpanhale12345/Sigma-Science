
import React, { useEffect, useState } from "react";
import "./Intro.css";

const fonts = [
  "Playfair Display",

  "Poppins",
  "Great Vibes",
  "Dancing Script",
];

export default function Intro({ onFinish }) {
  const [fontIndex, setFontIndex] = useState(0);

  // Font loop animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  // Auto exit after 4 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="intro-container">
      <h1
        className="intro-title"
        style={{ fontFamily: fonts[fontIndex], color:"#025070" }}
        
      >
        Sigma Science Academy
      </h1>
    </div>
  );
}
