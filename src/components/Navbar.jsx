// src/components/Navbar.jsx
// Barra de navegación persistente que aparece en todas las páginas.
// Usa componentes de React Router para enlaces y un botón de modo oscuro/claro.

import { Link } from 'react-router-dom';
// 🔹 Link: componente de React Router para navegar SIN recargar la página
//    - Reemplaza las etiquetas <a> tradicionales
//    - Mantiene la SPA (Single Page Application) fluida

import DarkModeToggle from './DarkModeToggle';
// 🔹 Componente reutilizable para alternar entre modo claro y oscuro
//    - Usa el hook useDarkMode internamente
//    - Se sincroniza automáticamente con el estado global del tema

export default function Navbar() {
  return (
    // 🔹 <nav className="navbar navbar-expand-lg">
    //    - navbar: clase base de Bootstrap para barras de navegación
    //    - navbar-expand-lg: colapsa el menú en pantallas pequeñas (<992px)
    //    - ¡NO usamos navbar-light ni bg-light! → así respeta el tema actual (claro/oscuro)
    <nav className="navbar navbar-expand-lg">
      
      {/* 
        🔹 container: centra y limita el ancho del contenido (responsive)
        - En pantallas grandes: ancho fijo (~1200px)
        - En móviles: ocupa el 100% del ancho
      */}
      <div className="container">
        
        {/* 
          🔹 navbar-brand: estilo para el logo o nombre de la app
          - to="/": navega a la página de inicio al hacer clic
          - Usa Link de React Router (no <a href>), así no se recarga la página
        */}
        <Link className="navbar-brand" to="/">Mi App</Link>
        
        {/* 
          🔹 navbar-nav: contenedor para los enlaces de navegación
          - En escritorio: muestra los enlaces horizontalmente
          - En móvil: se colapsan en un menú (aunque no tenemos botón de toggle aquí)
        */}
        <div className="navbar-nav">
          {/* 
            🔹 Cada Link representa una ruta de la app
            - className="nav-link": estilo de Bootstrap para enlaces de navbar
            - to="/ruta": define la URL a la que navega
            - React Router actualiza la URL y renderiza el componente correspondiente
          */}
          <Link className="nav-link" to="/proyectos">Proyectos</Link>
          <Link className="nav-link" to="/lugares">Lugares Mágicos</Link>
          <Link className="nav-link" to="/leyendas">Leyendas</Link>
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </div>
        
        {/* 
          🔹 Botón de alternar modo oscuro/claro
          - Está alineado a la derecha gracias al flexbox de .container
          - Es un componente reutilizable → fácil de mover o personalizar
        */}
        <DarkModeToggle />
      </div>
    </nav>
  );
}