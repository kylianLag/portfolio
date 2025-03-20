// src/App.js
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './components/ProjectContainer/ProjectContainer.css';
import AMQR from './components/Projects/AMQR';
import './components/Projects/AMQR.css';
import Projects from './components/Projects/Projects';
import SAS from './components/Projects/SAS';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Skills from './components/Skills/Skills';
import { ThemeContext } from './contexts/theme'; // Import du ThemeContext

const App = () => {
  const { themeName } = useContext(ThemeContext); // Accès au themeName depuis le contexte

  return (
    <div id="top" className={`${themeName} app`}> {/* Applique le thème */}
      <Header />
      <main>
        <Routes>
          <Route path="/project/stage-AMQR" element={<AMQR />} />
          <Route path="/project/stage-SAS" element={<SAS />} />
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
