import React from "react";
import "../css/Projet.css";

const Projet = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projet professionnel</h2>

      <div className="project-card">
        <h3>Challenge Web</h3>
        <p>
          Création d’un site web de voyage <strong>dynamique</strong> en PHP en
          suivant l’architecture <strong>MVC</strong>. Intégration d’une base de
          données <strong>MySQL</strong> pour la gestion des données.
        </p>
      </div>

      <div className="project-card">
        <h3>Projet Node.js – Site de films</h3>
        <p>
          Développement d’un site web sur les films avec un backend en
          <strong> Node.js</strong>. Utilisation d’une <strong>API REST</strong>{" "}
          pour récupérer et afficher les données.
        </p>
      </div>

      <div className="project-card">
        <h3>APU – Kuala Lumpur</h3>
        <p>
          Échange universitaire de <strong>6 semaines</strong> à l’université
          APU en Malaisie <em>(26/04/2025 – 07/06/2025)</em>. Projet mené en
          collaboration avec une entreprise locale autour du
          <strong> digital</strong>, de l’
          <strong> intelligence artificielle</strong> et de la
          <strong> business intelligence</strong>.
        </p>
        <p>
          Durant cet échange universitaire, j’ai conçu et développé un
          <strong> site web interactif intégrant un chatbot</strong> afin de
          présenter un <strong>jeu traditionnel malaisien, le Congkak</strong>.
          Ce projet avait pour objectif de valoriser la culture locale à travers
          une expérience digitale ludique, en combinant
          <strong> développement web</strong> et
          <strong> intelligence artificielle</strong>.
        </p>

        <a
          href="https://wilhem-dev.github.io/congkakChatbot-web/congkak/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          Voir le site – Chatbot Congkak
        </a>
      </div>
    </section>
  );
};

export default Projet;
