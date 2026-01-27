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
        {/* Brand / description */}
        <div className="footer-section">
          <img src={logo} alt="Sigma Science Academy logo" />
          <p>
           Your path to learning that moves you forward.
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
                   <h4>Social Links</h4>
       <li>  <a href="https://www.instagram.com/sigmascienceacademy.official/"> <FontAwesomeIcon icon={faInstagram}  style={{fontSize:"24px"}}/> 
       </a>
         <a href="https://www.facebook.com/p/Sigma-Science-Academy-61552666122065/"> <FontAwesomeIcon icon={faFacebook}  style={{fontSize:"24px"}}/> 
    </a></li>
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
