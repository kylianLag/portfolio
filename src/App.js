import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'; // Assurez-vous que Route et Routes sont importés
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AMQR from './components/Projects/AMQR'; // Importation du projet AMQR
import Projects from './components/Projects/Projects';
import SAS from './components/Projects/SAS';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Skills from './components/Skills/Skills';
import { ThemeContext } from './contexts/theme';

const App = () => {
  const [themeContext] = useContext(ThemeContext);
  const { themeName } = themeContext;

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <Routes>
          {/* Route pour le projet AMQR */}
          <Route path="/project/stage-AMQR" element={<AMQR />} />
          <Route path="/project/stage-SAS" element={<SAS />} />
          {/* Ajoutez d'autres routes pour d'autres projets si nécessaire */}
          
          {/* Route par défaut pour afficher la liste des projets */}
          <Route 
            path="/" 
            element={
              <>
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>
            }
          />
        </Routes>

        <ScrollToTop />
      </main>

      <Footer />
    </div>
  );
};

export default App;
