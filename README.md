# 🚀 Portfolio de Brian Battauz

Este es mi portfolio personal creado con **React + Vite**, adaptado para ser **responsivo** y con
**dark mode**.

## 📂 Estructura

    src/
     ├─ components/
     │   ├─ Header.jsx
     │   ├─ Perfil.jsx
     │   ├─ Proyectos.jsx
     │   ├─ SobreMi.jsx
     │   ├─ Contacto.jsx
     │   └─ Footer.jsx
     ├─ App.jsx
     ├─ main.jsx
     └─ styles.css
    public/
     └─ assets/ (imágenes, CV, favicon)

## ▶️ Cómo correr el proyecto

``` bash
# Instalar dependencias
npm install

# Levantar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

------------------------------------------------------------------------

## ✅ Checklist de mejoras / Roadmap

-   [✅] **Optimizar proyectos**: mover la data de proyectos a
    `src/data/projects.js` y mapear dinámicamente.
-   [✅] **Mejorar formulario de contacto**: integrar con Formspree,
    EmailJS o backend propio (FastAPI).
-   [✅] **SEO & Metadatos**: agregar `react-helmet` o etiquetas `<meta>`
    personalizadas.
-   [✅] **Animaciones**: incorporar Framer Motion para transiciones más
    fluidas.
-   [ ] **Internacionalización**: permitir traducción EN/ES.
-   [ ] **Tests básicos**: con Vitest/React Testing Library para
    asegurar estabilidad.
-   [ ] **Deploy**: configurar deploy automático en GitHub Pages, Vercel
    o Netlify.
-   [ ] **Refactorizar estilos**: migrar a CSS Modules o Tailwind para
    escalabilidad.
-   [ ] **Accesibilidad**: mejorar etiquetas ARIA, contraste y soporte
    de teclado.
-   [ ] **Lazy loading** de imágenes de proyectos para optimizar
    rendimiento.

------------------------------------------------------------------------

## 🌙 Dark Mode

La preferencia se guarda en `localStorage` y se aplica automáticamente
en la próxima visita.

------------------------------------------------------------------------

## ✨ Autor

**Brian Nicolas Battauz**\
- [GitHub](https://github.com/Brian13b)\
- [LinkedIn](https://www.linkedin.com/in/brian-battauz/)
