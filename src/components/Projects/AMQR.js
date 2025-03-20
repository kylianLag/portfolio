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
  ];

  return (
    <section className="project-details">
      <h2 className="project-details__title">Description de mon stage chez l’Association des Maisons de Quartiers de Raismes (AMQR)</h2>
      <div className="project-details__slider">
        <ImageSlider images={imagesAMQR} />
      </div>

      <p className="project-details__description">
        Dans le cadre de mon stage de 6 semaines chez l’Association des Maisons de Quartiers de Raismes (AMQR), 
        j’ai développé une plateforme de location d’outils en ligne permettant aux habitants d’accéder facilement 
        à un catalogue d’outillage et d’effectuer des réservations.
        <br /><br />
        Ce projet a nécessité la mise en place d’un système de gestion sous WordPress, intégrant un catalogue 
        dynamique connecté à une base de données. J’ai travaillé sur :
        <br /><br />
        🔹 La conception et le développement du site en utilisant WordPress 
        en intégrant des fonctionnalités spécifiques via PHP et JavaScript.
        <br /><br />
        🔹 La gestion de la base de données avec SQL, permettant de stocker et d’administrer les informations des outils disponibles.
        <br /><br />
        🔹 L’interface administrateur, qui permet aux gestionnaires de l’association d’ajouter, modifier et 
        supprimer des outils, ainsi que de suivre les réservations en cours.
        <br /><br />
        🔹 L’optimisation UX/UI, avec un design responsive en CSS et HTML, assurant une navigation fluide pour les utilisateurs.
        <br /><br />
        Ce stage m’a permis de renforcer mes compétences en développement web, en gestion de bases de données 
        et en expérience utilisateur. J’ai également acquis une meilleure compréhension des besoins d’un client 
        associatif et de la mise en place d’un outil numérique pour une communauté.
        <br />
      </p>



      {/* Ajouter le composant ImageSlider avec les images spécifiques à ce projet */}
      

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
