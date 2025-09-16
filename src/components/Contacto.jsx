import React from "react";
import { motion } from "framer-motion";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo: mensaje enviado (aquí podrías integrar Formspree o backend).");
    e.target.reset();
  };

  return (
    <motion.section
      id="contacto"
      className="contacto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="seccion-titulo">Contacto</div>
      <div className="contacto-container">
        <div className="contacto-info">
          <h3>Trabajemos juntos</h3>
          <p>
            ¿Listo para dar vida a tus ideas? Estoy aquí para ayudarte a crear
            algo increíble.
          </p>

          <div className="contacto-datos">
            <div>
              <span className="dato-num">24h</span>
              <span className="dato-texto">Tiempo de respuesta</span>
            </div>
            <div>
              <span className="dato-num">100%</span>
              <span className="dato-texto">Satisfacción del cliente</span>
            </div>
          </div>

          <div className="contacto-lista">
            <p>
              <strong>Qué puedes esperar</strong>
            </p>
            <ul>
              <li>Comunicación rápida y confiable</li>
              <li>Soluciones modernas y limpias</li>
              <li>Entrega puntual</li>
            </ul>
          </div>

          <div className="contacto-redes">
            <a
              href="https://wa.me/3434676232?text=Hola%20quiero%20más%20información"
              aria-label="Whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
            <a
              href="https://github.com/Brian13b"
              aria-label="Github"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/brian-battauz-75691a217/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="mailto:brian.nbattauz@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <label>
            Nombre <span>*</span>
          </label>
          <input type="text" placeholder="Tu nombre" required />

          <label>
            Correo electrónico <span>*</span>
          </label>
          <input type="email" placeholder="tu.email@ejemplo.com" required />

          <label>
            Asunto <span>*</span>
          </label>
          <input
            type="text"
            placeholder="¿Sobre qué te gustaría hablar?"
            required
          />

          <label>
            Mensaje <span>*</span>
          </label>
          <textarea
            placeholder="Cuéntame sobre tu proyecto o lo que te gustaría discutir..."
            required
          ></textarea>

          <button type="submit" className="btn">
            <i className="fa-solid fa-paper-plane"></i> Enviar mensaje
          </button>
        </form>
      </div>
    </motion.section>
  );
}
