import React from "react";
import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <motion.section
      id="sobre-mi"
      className="sobre-mi"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="seccion-titulo">Habilidades</div>
      <div className="habilidades">
        <div className="habilidad-card">
          <h4>Frontend</h4>
          <div className="habilidad-items">
            <div className="imagen-container">
              <img src="/assets/logos/javascript_original_logo_icon_146455.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/react_original_logo_icon_146374.svg" alt="ReactJS" />
              <span>ReactJS</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/file_type_tailwind_icon_130128.svg" alt="TailwindCSS" />
              <span>TailwindCSS</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/css.svg" alt="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/html_original_wordmark_logo_icon_146478.svg" alt="HTML5" />
              <span>HTML5</span>
            </div>
          </div>
        </div>

        <div className="habilidad-card">
          <h4>Backend</h4>
          <div className="habilidad-items">
            <div className="imagen-container">
              <img src="/assets/logos/python_original_logo_icon_146381.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/fastapi_logo_icon_248575.svg" alt="FastApi" />
              <span>FastApi</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/java_original_wordmark_logo_icon_146459.svg" alt="Java" />
              <span>Java</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/springboot_logo_icon_249540.svg" alt="SpringBoot" />
              <span>SpringBoot</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/csharp.svg" alt="C#" />
              <span>C#</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/dot_net_logo_icon_145329.svg" alt=".NET" />
              <span>.NET</span>
            </div>
          </div>
        </div>

        <div className="habilidad-card">
          <h4>Bases de Datos</h4>
          <div className="habilidad-items">
            <div className="imagen-container">
              <img src="/assets/logos/postgresql_original_wordmark_logo_icon_146392.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/dbs-sqlserver_icon-icons.com_50903.png" alt="SQL Server" />
              <span>SQL Server</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/mysql_original_wordmark_logo_icon_146417.svg" alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/mongodb_original_wordmark_logo_icon_146425.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <div className="habilidad-card">
          <h4>Despliegue & Herramientas</h4>
          <div className="habilidad-items">
            <div className="imagen-container">
              <img src="/assets/logos/vercel_logo_icon_249276.svg" alt="Vercel" />
              <span>Vercel</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/docker.svg" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/github_original_wordmark_logo_icon_146506.svg" alt="Github" />
              <span>Github</span>
            </div>
            <div className="imagen-container">
              <img src="/assets/logos/git_original_wordmark_logo_icon_146510.svg" alt="Git" />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion-titulo">Experiencia</div>
      <div className="experiencia experiencia-list">
        <div className="compania">Freelance</div>
        <div>
          <div className="rol">Desarrollador</div>
          <ul>
            <li>Desarrollo de aplicaciones web para clientes reales.</li>
            <li>Creación de APIs REST con FastAPI y Spring Boot.</li>
            <li>Implementación de interfaces con React y TailwindCSS.</li>
            <li>Integración de login y notificaciones.</li>
            <li>Despliegue en producción con Vercel y Docker.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
