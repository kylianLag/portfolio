
const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Lagache kylian',
  role: 'Étudiant en développement Informatique',
  description: 'Bonjour ! Je suis actuellement en fin de cycle de BTS SIO (Services Informatiques aux Organisations) et je suis à la recherche d’une alternance en développement informatique. Passionné par la technologie et les défis techniques, je suis motivé à mettre en pratique mes compétences pour contribuer à des projets innovants.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/kylian-lagache-497029269/',
    github: 'https://github.com/kylianLag',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  
  {
    id: 'stage-AMQR',
    name: 'Stage chez l’Association des Maison de Quartiers de Raismes',
    description:
      "Stage de 6 semaines : Création d'une plateforme de location d'outils en ligne avec systéme de panel admin",
    stack: ['Wordpress', 'PHP', 'JavaScript', 'CSS', 'SQL','HTML'],
  },
  {
    id: 'stage-SAS',
    name: 'Stage chez Seb Auto Services',
    description:
      "Stage de 6 semaines : Création d'un site vitrine avec facturation automatique Développement d'un site vitrine incluant un système de facturation automatique par email en PDF.",
    stack: ['PHP', 'CSS', 'Javascript', 'SQL','HTML'],
  },
  {
    id: 'projet-Laravel',
    name: 'Site de gestion d’utilisateurs avec Laravel',
    description:
     "Création d'une plateforme permettant aux RH de gérer les utilisateurs et de modifier certains paramètres.",
    stack: ['Laravel', 'BOOTSTRAP', 'SQL'],

  },
  {
    id: 'projet-Flutter',
    name: 'Application mobile de visualisation des notes des praticiens avec Flutter',
    description:
      "Création d'une application mobile pour la gestion et la visualisation des notes des praticiens.",
    stack: ['Flutter' , 'SQL'],
   
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'BOOTSTRAP',
  'Wordpress',
  'REACT',
  'LARAVEL',
  'JavaScript',
  'SQL',
  'PHP',
  'FIGMA',
  'FLUTTER',
  'JAVA',
  'C#',
  'PYTHON'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kylian.lagache14@gmail.com',
}

export { about, contact, header, projects, skills }

