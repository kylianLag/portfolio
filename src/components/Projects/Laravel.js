import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider'; // Assurez-vous que le chemin est correct
import './Laravel.css'; // Assurez-vous que le fichier Laravel.css existe et est bien importé

const Laravel = () => {
  // Définir le tableau d'images pour ce projet spécifique
  const imagesSalaires = [
    // { src: CahierDesCharge, pdfLink: CahierDesCharge, title: "Cahier des charges pour la gestion des salaires" },
    // { src: GrilleSalaire, title: "Grille des salaires définie selon les spécialités" },
    // { src: GestionSalaires, title: "Interface de gestion des salaires pour les responsables RH" },
    // { src: InterfaceRH, title: "Vue de l&apos;interface RH permettant l&apos;attribution des salaires" },
    // { src: connexion, title: "Vue de l&apos;interface permettant au RH de s&apos;identifier" },
  ];

  return (
    <section className="project-details">
      <h2 className="project-details__title">Description du projet de gestion des salaires des praticiens</h2>
      <div className="project-details__slider">
        <ImageSlider images={imagesSalaires} />
      </div>

      <p className="project-details__description">
        Dans le cadre de la mise en place d&apos;une plateforme web pour la gestion des salaires des praticiens, j&apos;ai développé 
        une application permettant aux responsables RH de gérer et d&apos;attribuer les salaires en fonction des spécialités des praticiens.
        <br /><br />
        Ce projet a impliqué les étapes suivantes :
        <br /><br />
        🔹 **Analyse du cahier des charges** : Rédaction du cahier des charges détaillant les besoins du service RH concernant la gestion des salaires.
        <br /><br />
        🔹 **Conception de la base de données** : Ajout du champ &quot;salaire&quot; dans la table des types de postes, avec la possibilité de gérer une variation de 10% sur le salaire en fonction du poste occupé.
        <br /><br />
        🔹 **Développement de l&apos;application web** : Création de l&apos;interface RH avec le framework Laravel, permettant à l&apos;utilisateur de sélectionner un praticien, modifier son salaire et afficher les salaires minimum et maximum autorisés en fonction de la spécialité.
        <br /><br />
        🔹 **Validation des salaires** : Mise en place de vérifications côté application et SGBD pour s&apos;assurer que les salaires respectent la grille salariale définie et la règle de variation de 10%.
        <br /><br />
        🔹 **Optimisation UX/UI** : Conception d&apos;une interface utilisateur intuitive et responsive pour faciliter la gestion des salaires par les responsables RH.
        <br /><br />
        Ce projet m&apos;a permis de perfectionner mes compétences en développement avec Laravel, en gestion des bases de données, ainsi qu&apos;en conception d&apos;interfaces adaptées aux besoins des utilisateurs.
        <br />
      </p>

      <div className="project-details__stack">
        <h3>Tech Stack:</h3>
        <ul>
          <li>Laravel</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      <div className="project-details__links">
        <h3>Links:</h3>
        <ul>
          <li><a href="https://github.com/mon-portfolio/salaires" target="_blank" rel="noopener noreferrer">Lien vers le code source du projet</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Laravel;
