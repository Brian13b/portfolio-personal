const projects = [
  {
    id: 1,
    title: "Quico Basquet - RESERVAS",
    cover: "/assets/images/proyecto1.jpg",
    shortDesc: "Sistema fullstack (FastAPI + React) para reservas de cancha.",
    longDesc: `
Aplicación integral para la gestión de reservas, suscripciones y administración del club Quico Básquet.

📦 Estructura del proyecto
    quico_basquet_frontend/ → Aplicación web desarrollada en React + Vite para la gestión de reservas, suscripciones y administración por parte de usuarios y staff.
    quico_basquet_backend/ → API REST construida con FastAPI, integra autenticación, pagos, notificaciones y persistencia en Firebase y PostgreSQL.

🚀 Funcionalidades principales
 🔹 Registro e inicio de sesión (email/Google)
 🔹 Reserva de turnos para básquet o vóley
 🔹 Suscripciones mensuales
 🔹 Notificaciones automáticas
 🔹 Panel administrativo para gestión de usuarios, reservas y suscripciones

 🛠️ Tecnologías utilizadas
 🔹 Frontend → React, Vite, JavaScript, CSS
 🔹 Backend → Python, FastAPI, SQLAlchemy
 🔹 Base de datos → PostgreSQL, Firebase
    `,
    images: [
      "/assets/images/proyecto1.jpg",
      "/assets/images/proyecto1/quicobasquet1.png",
      "/assets/images/proyecto1/quicobasquet2.png",
      "/assets/images/proyecto1/quicobasquet3.png",
      "/assets/images/proyecto1/quicobasquet4.png"
    ],
    demo: "https://quicobasquet.vercel.app/",
    github: "https://github.com/Brian13b/QuicoBasquetProject"
  },
  {
    id: 2,
    title: "Sistema Gestión Logístico",
    cover: "/assets/images/proyecto2.jpg",
    shortDesc: "Plataforma fullstack para transporte de carga y flota.",
    longDesc: `
El Sistema Logístico es un conjunto de microservicios diseñados para la gestión completa de flotas, viajes, facturación y rastreo en tiempo real.
Está diseñado bajo una arquitectura de microservicios, integrados a través de un API Gateway, garantizando escalabilidad, seguridad y flexibilidad.

🔧 Tecnologías principales
  🔹 Backend → FastAPI (Python), PostgreSQL, JWT
  🔹 Frontend → React, Redux, Leaflet, TailwindCSS
  🔹 Facturación → SOAP (AFIP / ARCA Argentina)
  🔹 Tracking → TCP Socket Server + FastAPI
  🔹 Gateway → FastAPI + JWT
    `,
    images: [
      "/assets/images/proyecto2.jpg",
      "/assets/images/proyecto2/dashboard.jpg",
      "/assets/images/proyecto2/Conductores.jpg",
      "/assets/images/proyecto2/Seguimiento.jpg"
    ],
    demo: "https://blogistica.vercel.app/",
    github: "https://github.com/Brian13b/SistemaLogistico"
  },
  {
    id: 3,
    title: "Task API",
    cover: "/assets/images/proyecto3.jpg",
    shortDesc: "API Rest de lista de tareas con autenticación.",
    longDesc: `
Backend de una aplicación ToDo diseñada para organizar tareas y gestionar usuarios con seguridad y eficiencia.

📋 Funcionalidades principales
 🔹 Crear, editar, eliminar y marcar tareas como completadas
 🔹 Registro y autenticación de usuarios con JWT
 🔹 Rutas protegidas para manejo personalizado de tareas
 🔹 Validación de datos mediante DTOs
 🔹 Base de datos relacional con persistencia robusta

🛠️ Tecnologías utilizadas
 🔹 Lenguaje → Java
 🔹 Framework → Spring Boot
 🔹 Seguridad → Spring Security + JWT
 🔹 Base de datos → PostgreSQL
 🔹 Arquitectura → Patrón DTO para separación de lógica
    `,
    images: [
      "/assets/images/proyecto3.jpg"
    ],
    demo: "https://github.com/Brian13b/tasks-api",
    github: "https://github.com/Brian13b/tasks-api"
  },
  {
    id: 4,
    title: "Charity - Landing Page",
    cover: "/assets/images/proyecto4.png",
    shortDesc: "Landing moderna para organización benéfica.",
    longDesc: `
Landing page moderna y responsiva desarrollada con React, Vite y TailwindCSS, diseñada para una organización benéfica ficticia como proyecto final del curso Fullstack de UTN.

El diseño fue proporcionado en Figma y la implementación se realizó cuidando cada detalle visual, priorizando la fidelidad del diseño, el código limpio y la estructura escalable.

✨ Características principales
 🔹 Componentes reutilizables y optimizados
 🔹 Diseño limpio, profesional y adaptable a cualquier dispositivo
 🔹 Estilizado con Tailwind CSS para un desarrollo rápido
 🔹 Secciones de campañas, estadísticas, equipo y testimonios

📂 Estructura del proyecto
 🔹 Frontend → React + Vite
 🔹 Estilos → Tailwind CSS
 🔹 src/components → Componentes principales organizados modularmente
 🔹 public/ → Imágenes y recursos estáticos

    `,
    images: [
      "/assets/images/proyecto4.png",
      "/assets/images/proyecto4/landing1.png",
      "/assets/images/proyecto4/landing2.png",
      "/assets/images/proyecto4/landing3.png",
      "/assets/images/proyecto4/landing4.png",
      "/assets/images/proyecto4/landing5.png"
    ],
    demo: "https://charity-landing-page-gold.vercel.app/",
    github: "https://github.com/Brian13b/charity-landing-page"
  }
];

export default projects;
