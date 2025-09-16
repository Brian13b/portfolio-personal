import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

export default function Header({ darkMode, setDarkMode, menuOpen, setMenuOpen, activeSection, onNavClick }) {
  return (
    <header>
      <div className="logo">BrianBattauz</div>

      {/* AnimatePresence solo en mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="nav"
            className="open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#inicio" className={activeSection === 'inicio' ? 'activo' : ''} onClick={(e)=>onNavClick(e,'inicio')}>Inicio</a>
            <a href="#proyectos" className={activeSection === 'proyectos' ? 'activo' : ''} onClick={(e)=>onNavClick(e,'proyectos')}>Proyectos</a>
            <a href="#sobre-mi" className={activeSection === 'sobre-mi' ? 'activo' : ''} onClick={(e)=>onNavClick(e,'sobre-mi')}>Sobre mí</a>
            <a href="#contacto" className={activeSection === 'contacto' ? 'activo' : ''} onClick={(e)=>onNavClick(e,'contacto')}>Contacto</a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Nav permanente para desktop */}
      <nav className="desktop-nav">
        <a href="#inicio" className={activeSection === 'inicio' ? 'activo' : ''} onClick={(e)=>onNavClick(e,'inicio')}>Inicio</a>
        <a href="#proyectos" className={activeSection === 'proyectos' ? 'activo' : ''} onClick={(e)=>onNavClick(e,'proyectos')}>Proyectos</a>
        <a href="#sobre-mi" className={activeSection === 'sobre-mi' ? 'activo' : ''} onClick={(e)=>onNavClick(e,'sobre-mi')}>Sobre mí</a>
        <a href="#contacto" className={activeSection === 'contacto' ? 'activo' : ''} onClick={(e)=>onNavClick(e,'contacto')}>Contacto</a>
      </nav>

      <div className="header-controls">
        <button className="btn-mode" onClick={() => setDarkMode(prev => !prev)}>
          <i className={darkMode ? 'fa fa-sun' : 'fa fa-moon'}></i>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(prev => !prev)}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </header>
  );
}