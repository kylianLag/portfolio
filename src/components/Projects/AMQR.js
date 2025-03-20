import React from 'react';
import audras from '../../assets/img/audras.jpg';
import myImage from '../../assets/img/LAGACHE_Kylian.jpg'; // Importer l'image depuis assets/img
import ImageSlider from '../ImageSlider/ImageSlider'; // Assure-toi que le chemin est correct
import './AMQR.css'; // Assurez-vous que le fichier AMQR.css existe et est bien importé

const AMQR = () => {
  // Définir le tableau d'images pour ce projet spécifique
  const imagesAMQR = [
    myImage,
    audras,
    'https://via.placeholder.com/500x300?text=Image+3+AMQR',
  ];

  return (
    <section className="project-details">
      <h2 className="project-details__title">AMQR</h2>
      <p className="project-details__description">
        Stage de 6 semaines : Création d&#39;une plateforme de location d&#39;outils en ligne avec systéme de panel admin
      </p>

      {/* Ajouter le composant ImageSlider avec les images spécifiques à ce projet */}
      <div className="project-details__slider">
        <ImageSlider images={imagesAMQR} />
      </div>

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
          <li><a href="https://www.quartiersderaismes.fr/outillotheque/" target="_blank" rel="noopener noreferrer">Lien du site web</a></li>
        </ul>
      </div>
    </section>
  );
};

export default AMQR;
