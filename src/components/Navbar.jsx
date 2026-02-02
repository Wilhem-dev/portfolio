import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gérer le défilement pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fermer le menu mobile quand on clique sur un lien
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="brand" onClick={closeMenu}>
          Mon Portfolio
        </a>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              A propos
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Expériences
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projets
            </a>
          </li>
          <li>
            <a href="#passion" onClick={closeMenu}>
              Passion
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
