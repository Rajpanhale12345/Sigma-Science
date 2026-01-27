import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // if not using react-router, replace with <a>
import "./Navbar.css";
import logo from "../Images/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/papers", label: "Papers" },
  { to: "/contact", label: "Contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClass = `nav ${isScrolled ? "nav--scrolled" : ""}`;

  return (
    <>
    <header className={navbarClass}>
      <div className="nav__inner">
        {/* Brand */}
        <NavLink to="/" className="nav__brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Sigma Science Academy Logo"
            className="nav__logo"
          />
        
        </NavLink>

        {/* Desktop navigation */}
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="nav__actions">
          <NavLink to="/bookmarks" className="nav__button">
            Bookmarked Papers
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className={`nav__toggle ${isOpen ? "nav__toggle--active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>

      {/* Backdrop for mobile */}
      <div
        className={`nav__backdrop ${isOpen ? "nav__backdrop--visible" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      {/* Mobile menu */}
      <nav
        className={`nav__mobile ${isOpen ? "nav__mobile--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="nav__mobile-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__mobile-link ${isActive ? "nav__mobile-link--active" : ""}`
              }
              onClick={closeMenu}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
          
          <NavLink
            to="/bookmarks"
            className="nav__mobile-cta"
            onClick={closeMenu}
          >
            Bookmarked Papers
          </NavLink>
        </div>
      </nav>
  
    </header>

    </>
  );
};

export default Navbar;
