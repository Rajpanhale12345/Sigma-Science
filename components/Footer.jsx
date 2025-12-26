import React from "react";
import "./Footer.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / description */}
        <div className="footer-section">
          <img src={logo} alt="Sigma Science Academy logo" />
          <p>
            Building modern digital experiences with style and precision.
          </p>
        </div>

        {/* Quick links – use <Link> for SPA navigation */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: sigmascienceacademy@gmail.com</li>
            <li>Phone: +1 555 234 9871</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear}{" "}
          <a
            href="https://brandbanao.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            BrandBanao.Ai
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
