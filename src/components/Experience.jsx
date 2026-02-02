// Experience.jsx
import React, { useState } from "react";
import "../css/Experience.css";
import {
  FaCalendarAlt,
  FaBuilding,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaShoppingBag,
  FaBug,
  FaReact,
  FaDatabase,
  FaCloudUploadAlt,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null);

  const Experiences = [
    {
      id: 1,
      title: "Stage - Développeur Frontend & Data",
      company: "Hanalytics",
      period: "juin 2025 - juillet 2025",
      duration: "2 mois",
      location: "Paris, France",
      description:
        "Stage en développement frontend et data visualisation. Création de templates React pour le web tracking et affichage de données en temps réel.",
      responsibilities: [
        "Développement de templates React pour le web tracking",
        "Affichage et visualisation des données récupérées depuis BigQuery",
        "Création de dashboards interactifs pour l'analyse de données",
        "Déploiement des applications en ligne sur Vercel",
        "Intégration d'API pour la récupération des données en temps réel",
        "Optimisation des performances des applications frontend",
      ],
      technologies: [
        "React",
        "JavaScript",
        "BigQuery",
        "Vercel",
        "CSS",
        "API REST",
        "Data Visualization",
        "Git",
      ],
      icons: [<FaReact />, <FaDatabase />, <FaCloudUploadAlt />],
      color: "#3498db",
      type: "stage",
    },
    {
      id: 2,
      title: "Stage - Testeur & Développeur Frontend",
      company: "BAOBA - Open Business Agriculture",
      period: "mai 2024 - juin 2024",
      duration: "2 mois",
      location: "Île-de-France",
      description:
        "Stage dans une startup agricole innovante. Tests de sites web et applications mobiles, et développement frontend pour une nouvelle application.",
      responsibilities: [
        "Tests du site web et application mobile pour identifier bugs et vulnérabilités",
        "Reporting des anomalies aux développeurs avec documentation détaillée",
        "Développement frontend en suivant les maquettes pour une nouvelle application",
        "Intégration des interfaces utilisateur responsive",
        "Collaboration avec l'équipe de développement pour les corrections",
        "Tests de régression après les corrections",
      ],
      technologies: [
        "Testing",
        "React",
        "JavaScript",
        "HTML/CSS",
        "UI/UX",
        "Debugging",
        "Mobile Testing",
        "Documentation",
      ],
      icons: [<FaBug />, <FaReact />, <FaMobileAlt />, <FaPaintBrush />],
      color: "#27ae60",
      type: "stage",
    },
    {
      id: 3,
      title: "Coursier",
      company: "Just Eat",
      period: "févr. 2022 - avr. 2022",
      duration: "3 mois",
      location: "Paris",
      description:
        "Service de livraison de repas. Gestion optimale des tournées et relation client de qualité.",
      responsibilities: [
        "Livraison de repas dans les délais impartis",
        "Gestion des commandes via application mobile",
        "Service client de proximité",
        "Respect des protocoles sanitaires",
        "Optimisation des trajets de livraison",
        "Gestion des situations imprévues",
      ],
      technologies: [
        "Logistique",
        "Service client",
        "Gestion du temps",
        "Autonomie",
      ],
      icons: [<FaMotorcycle />],
      color: "#e74c3c",
      type: "job",
    },
    {
      id: 4,
      title: "Vendeur",
      company: "Celio",
      period: "juil. 2022 - août 2022",
      duration: "2 mois",
      location: "Paris",
      description:
        "Vente en magasin et conseil client dans une enseigne de prêt-à-porter masculin.",
      responsibilities: [
        "Accueil et conseil client personnalisé",
        "Gestion de caisse et encaissement",
        "Mise en valeur des collections et merchandising",
        "Réassort des rayons et gestion des stocks",
        "Atteinte des objectifs de vente",
        "Fidélisation de la clientèle",
      ],
      technologies: ["Vente", "Relation client", "Merchandising", "Service"],
      icons: [<FaShoppingBag />],
      color: "#9b59b6",
      type: "job",
    },
  ];

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="experience-title">Expériences Professionnelles</h1>
        <p className="experience-subtitle">
          Un parcours diversifié combinant développement web, testing et service
          client
        </p>
      </div>

      <div className="experience-timeline">
        {Experiences.map((exp) => (
          <div
            key={exp.id}
            className={`experience-card ${
              activeCard === exp.id ? "active" : ""
            } ${exp.type}`}
            onClick={() => toggleCard(exp.id)}
          >
            <div className="card-header" style={{ borderLeftColor: exp.color }}>
              <div className="card-icon" style={{ backgroundColor: exp.color }}>
                {exp.icons[0]}
              </div>
              <div className="card-main-info">
                <h3 className="card-title">{exp.title}</h3>
                <h4 className="card-company">{exp.company}</h4>
                <div className="card-icons">
                  {exp.icons.slice(1).map((icon, index) => (
                    <span key={index} className="additional-icon">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-period">
                <span className="period-text">{exp.period}</span>
                <span className="duration-badge">{exp.duration}</span>
              </div>
            </div>

            <div className="card-body">
              <div className="card-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <FaBuilding className="meta-icon" />
                  <span>{exp.company}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="card-description">{exp.description}</p>

              {activeCard === exp.id && (
                <div className="card-details">
                  <div className="responsibilities">
                    <h5>Missions principales :</h5>
                    <ul>
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h5>Technologies & Compétences :</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="card-footer">
                <span
                  className="type-badge"
                  style={{ backgroundColor: exp.color }}
                >
                  {exp.type === "stage" ? "Stage" : "Emploi étudiant"}
                </span>
                <button
                  className="toggle-details"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCard(exp.id);
                  }}
                >
                  {activeCard === exp.id ? "Voir moins" : "Voir plus"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
