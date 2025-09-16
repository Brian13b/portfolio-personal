import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Perfil from './components/Perfil';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const secciones = Array.from(document.querySelectorAll('section'));
    const onScroll = () => {
      let current = '';
      secciones.forEach(seccion => {
        const seccionTop = seccion.offsetTop - 80;
        if (window.scrollY >= seccionTop) {
          current = seccion.getAttribute('id');
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); 
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Brian Battauz | Portfolio</title>
        <meta name="description" content="Portfolio personal de Brian Battauz, desarrollador Full Stack con experiencia en React, FastAPI y PostgreSQL." />
        <meta name="keywords" content="Portfolio, React, FastAPI, PostgreSQL, Backend, Frontend" />
        <meta property="og:title" content="Brian Battauz | Portfolio" />
        <meta property="og:description" content="Descubre mis proyectos en React, FastAPI, Java, y más." />
        <meta property="og:image" content="/assets/images/foto_perfil.png" />
        <meta property="og:url" content="https://tu-dominio.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      <main>
        <Perfil />
        <Proyectos />
        <SobreMi />
        <Contacto />
      </main>

      <Footer />
    </>
  );
}
