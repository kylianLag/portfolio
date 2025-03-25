import React from 'react';
import ajoutAnnonce from '../../assets/img/SAS/ajoutAnnonce.png';
import CahierDesCharge from '../../assets/img/SAS/CahierDesCharge.pdf';
import charte1 from '../../assets/img/SAS/charte1.png';
import charte2 from '../../assets/img/SAS/charte2.png';
import codeSuppressionFacture from '../../assets/img/SAS/codeSuppressionFacture.png';
import detailFacture from '../../assets/img/SAS/detailFacture.png';
import facture1 from '../../assets/img/SAS/facture1.png';
import facture2 from '../../assets/img/SAS/facture2.png';
import facture3 from '../../assets/img/SAS/facture3.png';
import facture4 from '../../assets/img/SAS/facture4.png';
import facture5 from '../../assets/img/SAS/facture5.png';
import mailFacture from '../../assets/img/SAS/mailEnvoyerFacture.png';
import notice from '../../assets/img/SAS/NoticeSiteWeb.pdf';
import accueilAnnonce from '../../assets/img/SAS/pageAccueilAnnonce.png';
import panelAdmin from '../../assets/img/SAS/panelAdmin.png';
import preVisualisationFacture from '../../assets/img/SAS/preVisualisationFacture.png';
import rechercheFacture from '../../assets/img/SAS/rechercheFacture.png';
import responsive1 from '../../assets/img/SAS/responsive1.png';
import responsive2 from '../../assets/img/SAS/responsive2.png';
import responsive3 from '../../assets/img/SAS/responsive3.png';
import trello from '../../assets/img/SAS/trello.png';
import ImageSlider from '../ImageSlider/ImageSlider'; // Assure-toi que le chemin est correct
import './AMQR.css'; // Assurez-vous que le fichier SAS.css existe et est bien importé








const SAS = () => {
  // Définir le tableau d'images pour ce projet spécifique
  const imagesSAS = [
       { src: CahierDesCharge , pdfLink: CahierDesCharge , title : "Création d'un cahier des charges suites aux explications avec l'entreprise"}, // Image avec un lien PDF
       { src: trello  , title : "Elaboration d'un trello afin de gerer les tâches"}, // Image avec un lien PDF
       { src: charte1 ,  charte1 , title : "Proposition dd'une maquette graphique "}, // Image avec un lien PDF
       { src: charte2 ,  charte2 , title : "Création d'une second maquette graphique suite au différents changement demandé"}, // Image avec un lien PDF
       { src: panelAdmin ,  panelAdmin , title : "Création d'un panel admin accessible avec une connexion"}, // Image avec un lien PDF
       { src: facture1 ,  facture1 , title : "Formulaire de la création d'une facture"}, // Image avec un lien PDF
       { src: facture2 ,  facture2 , title : "Formulaire de la création d'une facture"}, // Image avec un lien PDF
       { src: facture3 ,  facture3 , title : "Formulaire de la création d'une facture"}, // Image avec un lien PDF
       { src: facture4 ,  facture4 , title : "Formulaire de la création d'une facture"}, // Image avec un lien PDF
       { src: facture5 ,  facture5 , title : "Formulaire de la création d'une facture"}, // Image avec un lien PDF
       { src: preVisualisationFacture ,  preVisualisationFacture , title : "Pré visualisation de la facture crée avec possibilité d'envoyer par email"}, // Image avec un lien PDF
       { src: mailFacture ,  mailFacture , title : "Mail envoyé au client"}, // Image avec un lien PDF
       { src: rechercheFacture ,  rechercheFacture , title : "page permettant la recherche de facture par nom, prenom, numéro de client"}, // Image avec un lien PDF
       { src: detailFacture ,  detailFacture , title : "Détail de la facture du client choisie"}, // Image avec un lien PDF
       { src: codeSuppressionFacture ,  codeSuppressionFacture , title : "code prévue pour une tach cron"}, // Image avec un lien PDF
       { src: ajoutAnnonce ,  ajoutAnnonce , title : "Création d'un cahier des charges suites aux explications avec l'entreprise"}, // Image avec un lien PDF
       { src: accueilAnnonce ,  accueilAnnonce , title : "Création d'un cahier des charges suites aux explications avec l'entreprise"}, // Image avec un lien PDF
       { src: responsive1 ,  responsive1 , title : "Résponsivité de la page Accueil"}, // Image avec un lien PDF
       { src: responsive2 ,  responsive2 , title : "Résponsivité de la page Profil"}, // Image avec un lien PDF
       { src: responsive3 ,  responsive3 , title : "résponsivité de la navBar"}, // Image avec un lien PDF
       { src: notice ,  pdfLink: notice , title : "Elaboration d'une notice d'utilisation"}, // Image avec un lien PDF

  ];

  return (
    <section className="project-details">
      <h2 className="project-details__title">Description de mon stage chez Seb Auto Services</h2>
      
      <div className="project-details__slider">
        <ImageSlider images={imagesSAS} />
      </div>

      <p className="project-details__description">
        Dans le cadre de mon stage chez <strong>Seb Auto Services</strong>, j’ai développé un <strong>site vitrine</strong> moderne intégrant une <strong>transition numérique</strong> pour optimiser la gestion administrative.
        <br /><br />
        Ce projet comprend la mise en place d’un <strong>système de facturation automatique par email</strong>, affiché directement sur la page d’accueil, permettant aux clients de recevoir instantanément leurs factures après une intervention.
        <br /><br />
        Ce projet a nécessité la mise en place de plusieurs solutions techniques :
        <br /><br />
        🔹 La conception et le développement du site vitrine mettant en avant les services de l’entreprise.
        <br /><br />
        🔹 L’intégration d’un <strong>système de facturation automatique</strong> qui génère et envoie les factures par email.
        <br /><br />
        🔹 La mise en place d’un <strong>panel administrateur</strong> permettant de gérer les clients, interventions et factures en toute simplicité.
        <br /><br />
        🔹 L’utilisation d’une <strong>base de données sécurisée</strong> pour stocker et organiser toutes les informations des clients et transactions.
        <br /><br />
        🔹 L’optimisation UX/UI avec un design responsive en CSS et HTML, garantissant une navigation fluide.
        <br /><br />
        Ce stage m’a permis de renforcer mes compétences en <strong>développement web</strong>, <strong>gestion de bases de données</strong> et <strong>automatisation des processus</strong>, tout en contribuant à la digitalisation d’une entreprise locale.
        <br />
      </p>

      <div className="project-details__stack">
        <h3>Tech Stack:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>PHP</li>
          <li>Figma</li>
        </ul>
      </div>

      <div className="project-details__links">
        <h3>Links:</h3>
        <ul>
          <li><a href="h" target="_blank" rel="noopener noreferrer">Lien du site web</a></li>
        </ul>
      </div>
    </section>
  );
};

export default SAS;