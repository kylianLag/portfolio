import { Link } from 'react-router-dom'; // Importer Link de react-router-dom
import { projects } from '../../portfolio'; // Importer les projets depuis le fichier portfolio
import ProjectContainer from '../ProjectContainer/ProjectContainer'; // Importer le container pour chaque projet
import '../Skills/Skills.css';
import './Projects.css';

const Projects = () => {
  if (!projects.length) return null; // Si aucun projet n'existe, ne rien afficher

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          // Utiliser l'ID du projet pour créer un lien dynamique vers la page du projet
          <Link to={`/project/${project.id}`} className="project-link" key={project.id}>
            <ProjectContainer project={project} /> {/* Passer chaque projet dans le container */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
