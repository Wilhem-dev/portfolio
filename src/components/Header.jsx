import React from "react";
import "../css/Header.css";
import profileImg from "../assets/img1.png";

export default function Header() {
  return (
    <header className="site-header" id="home">
      <div className="header-content">
        <div className="header-text">
          <h1>HO Wilhem</h1>
          <h2>Développeur Fullstack</h2>
          <p>
            Étudiant à EFREI - Grande école du numérique, Actuellement en 3ᵉ
            année de Bachelor ingénierie numérique , je souhaite mettre en
            pratique mes compétences dans des projet réelles et relever des
            défis stimulants.
          </p>

          <a href="#contact" className="cta-button">
            Me contacter
          </a>
        </div>

        <div className="header-photo">
          <img src={profileImg} alt="HO Wilhem" />
        </div>
      </div>
    </header>
  );
}
