const header = {
  title: 'Portfolio',
};

const about = {
  name: 'Lagache Kylian',
  role: 'Étudiant en développement informatique',
  description:
    "Bonjour ! Je suis actuellement en fin de cycle de BTS SIO (Services Informatiques aux Organisations) et je suis à la recherche d’une alternance en développement informatique. Passionné par la technologie et les défis techniques, je suis motivé à mettre en pratique mes compétences pour contribuer à des projets innovants.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/kylian-lagache-497029269/',
    github: 'https://github.com/kylianLag',
  },
};

const projects = [
  {
    id: 'stage-AMQR',
    name: 'Stage chez l’Association des Maisons de Quartiers de Raismes',
    description:
      "Stage de 6 semaines : Création d'une plateforme de location d'outils en ligne avec système de panel admin.",
    stack: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'SQL', 'HTML'],
  },
  {
    id: 'stage-SAS',
    name: 'Stage chez Seb Auto Services',
    description:
      "Stage de 6 semaines : Création d'un site vitrine avec facturation automatique. Développement d'un site vitrine incluant un système de facturation automatique par email en PDF.",
    stack: ['PHP', 'CSS', 'JavaScript', 'SQL', 'HTML'],
  },
  {
    id: 'projet-Laravel',
    name: 'Site de gestion d’utilisateurs avec Laravel',
    description:
      "Création d'une plateforme permettant aux RH de gérer les utilisateurs et de modifier certains paramètres.",
    stack: ['Laravel', 'Bootstrap', 'SQL'],
  },
  {
    id: 'projet-Flutter',
    name: 'Application mobile de visualisation des notes des praticiens avec Flutter',
    description:
      "Création d'une application mobile pour la gestion et la visualisation des notes des praticiens.",
    stack: ['Flutter', 'SQL', 'API REST'],
  },
];

const skills = [
  'Bootstrap',
  'WordPress',
  'React',
  'Laravel',
  'JavaScript',
  'SQL',
  'PHP',
  'Figma',
  'Flutter',
  'Java',
  'C#',
  'Python',
];

const cv = {
  photo: '/cv_LAGACHE_KYLIAN_ASTON.pdf', // Chemin absolu pour éviter les erreurs
  resume: '/cv_LAGACHE_KYLIAN_ASTON.pdf', // Chemin absolu également
};

const contact = {
  email: 'kylian.lagache14@gmail.com',
};

export { about, contact, cv, header, projects, skills };
