import React from 'react';
import api from '../../assets/img/Flutter/api.png';
import detail from '../../assets/img/Flutter/detailPraticien.png';
import Liste from '../../assets/img/Flutter/listePraticien.png';
import Maquette from '../../assets/img/Flutter/maquette.pdf';
import ImageSlider from '../ImageSlider/ImageSlider'; // Assurez-vous que le chemin est correct
import './Flutter.css'; // Assurez-vous que le fichier Flutter.css existe et est bien importé

const Flutter = () => {
  // Définir le tableau d'images pour ce projet spécifique
  const imagesFlutter = [
     { src: Maquette,pdfLink: Maquette , title: "Maquette de l&apos;application mobile Flutter" },
     { src: Liste, title: "Interface client montrant la liste des praticiens" },
     { src: detail, title: "Vue détaillée des notes et commentaires d'un praticien" },
     { src: api, title: "Extrait de code de l'api crée et utilisée pour ce projet" },

  ];

  return (
    <section className="project-details">
      <h2 className="project-details__title">Description de l&apos;application mobile Flutter</h2>
      <div className="project-details__slider">
        <ImageSlider images={imagesFlutter} />
      </div>

      <p className="project-details__description">
        Afin d&apos;accroître la confiance entre les médecins et les clients, les responsables de GSB ont souhaité déployer une application mobile dédiée aux clients. 
        Cette application permet aux utilisateurs de consulter une liste des praticiens de la région, avec une note attribuée par la clientèle et une note par une équipe d&apos;experts, toutes deux sur 5.
        <br /><br />
        Les principales fonctionnalités de l&apos;application sont les suivantes :
        <br /><br />
        🔹 **Liste des praticiens** : Affichage d&apos;une liste complète des praticiens disponibles dans la région.
        <br /><br />
        🔹 **Affichage des notes** : Pour chaque praticien, deux notes sont affichées : une note de la clientèle et une note d&apos;experts, sur une échelle de 5 étoiles.
        <br /><br />
        🔹 **Détail des notes** : Un bouton &ldquo;détail&rdquo; est présent pour chaque praticien. En cliquant sur ce bouton, l&apos;utilisateur peut consulter la liste détaillée des notes des clients avec les commentaires associés.
        <br /><br />
        🔹 **Classement des praticiens** : L&apos;application permet de trier et de classer les praticiens en fonction des notes obtenues, afin de faciliter la recherche du meilleur praticien.
        <br /><br />
        🔹 **Design responsive** : L&apos;application mobile propose une interface utilisateur intuitive et adaptée à tous les appareils mobiles, assurant une expérience agréable pour l&apos;utilisateur.
        <br /><br />
        Ce projet m&apos;a permis de développer une application mobile avec une gestion dynamique des notes et commentaires, tout en améliorant l&apos;expérience utilisateur avec des fonctionnalités de classement et de filtrage des praticiens.
        <br />
      </p>

      <div className="project-details__stack">
        <h3>Tech Stack:</h3>
        <ul>
          <li>Flutter</li>
          <li>SQL</li>
          <li>API REST</li>
        </ul>
      </div>

      <div className="project-details__links">
        <h3>Links:</h3>
        <ul>
          <li><a href="https://github.com/kylianLag/ProjetFlutter" target="_blank" rel="noopener noreferrer">Lien vers le code source du projet</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Flutter;
