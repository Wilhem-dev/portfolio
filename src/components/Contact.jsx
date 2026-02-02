import React from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Me Contacter</h2>
      <p className="contact-text">
        Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de
        projets ou d'opportunités professionnelles !
      </p>

      <div className="contact-card">
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>hao-xuan-wilhem.ho@efrei.net</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>06 95 90 06 56</span>
          </div>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/wilhem-ho-informatique"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Wilhem-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
