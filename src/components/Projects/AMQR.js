import React from 'react';
import './AMQR.css'; // Assurez-vous que le fichier AMQR.css existe et est bien importé

const AMQR = () => (
  <section className="project-details">
    <h2 className="project-details__title">AMQR</h2>
    <p className="project-details__description">
      Stage de 6 semaines : Création d&#39;une plateforme de location d&#39;outils en ligne avec systéme de panel admin
    </p>

    <div className="project-details__stack">
      <h3>Tech Stack:</h3>
      <ul>
        <li>Wordpress</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>HTML</li>
      </ul>
    </div>

    <div className="project-details__links">
      <h3>Links:</h3>
      <ul>
        <li><a href="https://www.quartiersderaismes.fr/outillotheque/" target="_blank" rel="noopener noreferrer">Lien du site web </a></li>
      </ul>
    </div>
  </section>
);

export default AMQR;
