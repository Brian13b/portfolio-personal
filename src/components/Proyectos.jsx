import React, { useState } from "react";
import projects from "../data/projects";
import { motion } from 'framer-motion'; 

export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="proyectos">
      <div className="seccion-titulo">Proyectos</div>
      <div className="proyectos">
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            className="proyecto-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            onClick={() => setSelectedProject(p)}
          >
            <img src={p.cover} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.shortDesc}</p>
            <p>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-eye"></i>
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-square-github"></i>
                </a>
              )}
            </p>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>

            <h2>{selectedProject.title}</h2>

            {/* Carrusel */}
            <div className="modal-carousel">
              <button
                className="carousel-btn prev"
                onClick={() =>
                  setSelectedProject((prev) => {
                    const index = prev.currentIndex || 0;
                    const newIndex =
                      (index - 1 + prev.images.length) % prev.images.length;
                    return { ...prev, currentIndex: newIndex };
                  })
                }
              >
                &#10094;
              </button>

              <img
                src={
                  selectedProject.images[selectedProject.currentIndex || 0]
                }
                alt={`${selectedProject.title}`}
              />

              <button
                className="carousel-btn next"
                onClick={() =>
                  setSelectedProject((prev) => {
                    const index = prev.currentIndex || 0;
                    const newIndex = (index + 1) % prev.images.length;
                    return { ...prev, currentIndex: newIndex };
                  })
                }
              >
                &#10095;
              </button>
            </div>

            {/* Descripción */}
            <div
              className="modal-desc"
              dangerouslySetInnerHTML={{
                __html: selectedProject.longDesc
                  .replace(/\n/g, "<br/>")
              }}
            />

            {/* Links */}
            <div className="modal-links">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  🚀 Ver Demo
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  💻 Ver Código
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
