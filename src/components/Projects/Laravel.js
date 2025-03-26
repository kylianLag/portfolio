import React from 'react';
import cahierDesCharge from '../../assets/img/Laravel/cahierDesCharges.pdf';
import connexion from '../../assets/img/Laravel/connexion.png';
import detail1 from '../../assets/img/Laravel/detail.png';
import detail2 from '../../assets/img/Laravel/detail2.png';
import InterfaceRH from '../../assets/img/Laravel/laravel_1.png';
import BarreRecherche from '../../assets/img/Laravel/laravel_2.png';
import rh from '../../assets/img/Laravel/rh.png';
import hebergement from '../../assets/img/Laravel/Screenservlaravel.png';
import trigger from '../../assets/img/Laravel/trigger.png';
import VerificationSalaire from '../../assets/img/Laravel/update.png';
import ImageSlider from '../ImageSlider/ImageSlider'; // Assurez-vous que le chemin est correct
import './Laravel.css'; // Assurez-vous que le fichier Laravel.css existe et est bien importé

const Laravel = () => {
  // Définir le tableau d'images pour ce projet spécifique
  const imagesSalaires = [
     { src: cahierDesCharge, pdfLink: cahierDesCharge, title: "Cahier des charges pour la gestion des salaires" },
     { src: rh, title: "Création d'une table pour les Ressources Humaines ( RH )" },
     { src: connexion, title: "Vue de l'interface permettant au RH de s'identifier" },
     { src: InterfaceRH, title: "Vue de l'interface RH permettant de choisir le praticien à  administrer" },
     { src: BarreRecherche, title: "Barre de recherche afin d'optimiser la le chargement de la page" },
     { src: detail1, title: "Interface de Gestion de Salaire" },
     { src: detail2, title: "Interface de Gestion de Salaire" },
     { src: trigger, title: "Trigger permettant la vérification de la régle des 10%" },
     { src: VerificationSalaire, title: "Verification de la régle coté application pour plus de sécurité" },
     { src: hebergement, title: "hebergement de l'application sur un serveur linux" },


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
        🔹 **Conception de la base de données** : Ajout du champ &quot;salaire&quot; dans la table des types de postes, avec la possibilité de gérer une variation de 10% sur le salaire des praticiens ainsi que de l&apos;ajout d&apos;une table RH.
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
          <li>Bootstrap</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="project-details__links">
        <h3>Links:</h3>
        <ul>
          <li><a href="https://github.com/kylianLag/apLaravel/tree/main/apLaravel" target="_blank" rel="noopener noreferrer">Lien vers le code source du projet</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Laravel;
