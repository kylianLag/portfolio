import Brightness2Icon from '@material-ui/icons/Brightness2';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation interne
import { ThemeContext } from '../../contexts/theme';
import { contact, projects, skills } from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  // Utilisation correcte du useContext pour obtenir themeName et toggleTheme
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {/* Ajout du bouton Accueil */}
        <li className='nav__list-item'>
          <Link
            to="/" // Utilisation de Link pour rediriger vers la page d'accueil
            onClick={toggleNavList}
            className='link link--nav'
          >
            Accueil
          </Link>
        </li>

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Compétences
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}

export default Navbar;
