import React from "react";
import "./Footer.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Sigma Science Academy logo" />
          <p>
            Your path to learning that moves you forward.
          </p>
        </div>

        <div className="footer-section"    >
          <h4>Important Links</h4>
          <ul style={{ textAlign: "center" }}>
            <li>
              <a href="https://jeemain.nta.nic.in/" target="_blank" rel="noopener noreferrer">🔗 JEE-Main 2026</a>
            </li>
            <li>
              <a href="https://neet.nta.nic.in/" target="_blank" rel="noopener noreferrer">🔗 NEET-UG 2026</a>
            </li>
            <li>
              <a href="https://cetcell.mahacet.org/" target="_blank" rel="noopener noreferrer">🔗 MH-CET 2026</a>
            </li>
            <li>
              <a href="https://admissions.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">🔗 BITSAT 2026</a>
            </li>
            <li>
              <a href="https://www.aiimsexams.ac.in/" target="_blank" rel="noopener noreferrer">🔗 AIIMS 2026</a>
            </li>
            <li>
              <a href="https://vit.ac.in/" target="_blank" rel="noopener noreferrer">🔗 VIT 2026</a>
            </li>
          </ul>
        </div>

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
            <li>
              <Link to="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:9270460255" className="contact-link">9270460255</a>
            </li>
            <li>
              <a href="tel:9920707640" className="contact-link">9920707640</a>
            </li>
            <li>
              <a href="mailto:sigmascienceacademy@gmail.com" className="contact-link">
                sigmascienceacademy@gmail.com
              </a>
            </li>
          </ul>
        </div>


        <div className="footer-section">
          <h4 style={{ marginTop: "1rem" }}>Social Links</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/sigmascienceacademy.official/">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "24px" }} />
            </a>
            <a href="https://www.facebook.com/p/Sigma-Science-Academy-61552666122065/">
              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "24px" }} />
            </a>
          </div>
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
