// propos.jsx
import React from "react";
import "../css/Propos.css"; // Nous allons créer ce fichier CSS

const Propos = () => {
  return (
    <div className="propos-container">
      <h1 className="propos-title">À Propos</h1>

      <div className="cards-container">
        {/* Carte 1 : Recherche de stage */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recherche de stage de fin d'études</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Je recherche un stage en{" "}
              <span className="highlight">développement web</span> afin de
              mettre en pratique mes compétences.
            </p>
            <div className="card-details">
              <div className="detail-item">
                <span className="detail-label">Type:</span>
                <span className="detail-value">Stage de fin d'études</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Durée:</span>
                <span className="detail-value">3 à 6 mois</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Disponibilité:</span>
                <span className="detail-value">À partir de Mars 2026</span>
              </div>
            </div>
            <div className="card-tags">
              <span className="tag">Stage</span>
              <span className="tag">Ingénierie</span>
              <span className="tag">Développement Web</span>
            </div>
          </div>
        </div>

        {/* Carte 2 : Parcours académique */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Parcours Académique</h2>
          </div>
          <div className="card-body">
            {/* École d'ingénieur */}
            <div className="education-item">
              <div className="education-header">
                <h3 className="education-title">
                  Efrei PARIS (École d'ingénieur)
                </h3>
                <span className="education-years">2021-2026</span>
              </div>
              <ul className="education-details">
                <li className="education-detail">
                  <span className="degree">
                    Bachelor Ingénierie & Numérique
                  </span>
                  <span className="years">2023-2026</span>
                </li>
                <li className="education-detail">
                  <span className="degree">
                    Prépa intégrée en Biologie & Numérique
                  </span>
                  <span className="years">2021-2023</span>
                </li>
              </ul>
            </div>

            {/* Lycée */}
            <div className="education-item">
              <div className="education-header">
                <h3 className="education-title">Lycée Darius Milhaud</h3>
                <span className="education-years">2018-2021</span>
              </div>
              <ul className="education-details">
                <li className="education-detail">
                  <span className="degree">Baccalauréat Général</span>
                  <span className="years">2021</span>
                </li>
                <li className="education-detail">
                  <span className="degree">
                    Spécialité Physique-chimie et SVT
                  </span>
                </li>
                <li className="education-detail">
                  <span className="degree">
                    Option Mathématiques complémentaires
                  </span>
                </li>
              </ul>
            </div>

            <div className="card-tags">
              <span className="tag tag-education">Ingénierie</span>
              <span className="tag tag-education">Numérique</span>
              <span className="tag tag-education">Biologie</span>
              <span className="tag tag-education">Physique</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propos;
