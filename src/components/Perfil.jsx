import { motion } from 'framer-motion';

export default function Perfil() {
  return (
    <section id="inicio" className="perfil">
      <motion.div
        className="perfil-info"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>Hola, soy <span className="highlight">Brian </span>👋🏼</p>
        <h1>Desarrollador Backend & Frontend</h1>
        <p>Soy desarrollador freelance Full Stack Junior. Me apasiona crear sitios web modernos y funcionales que ayuden a los usuarios y empresas a destacar.</p>
        <button className="btn" onClick={() => window.open('/assets/cv/CV_Brian_Battauz_Programador.pdf', '_blank')}>Ver CV</button>
        <button className="btn" onClick={(e)=>{ e.preventDefault(); document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }) }}>Contactar</button>
      </motion.div>

      <motion.img
        src="/assets/images/foto_perfil.png"
        alt="Foto de perfil"
        className="perfil-img"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </section>
  );
}
