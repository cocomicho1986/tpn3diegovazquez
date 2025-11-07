// src/components/Navbar.jsx
// Barra de navegación persistente que aparece en todas las páginas.
// Usa componentes de React Router para enlaces y un botón de modo oscuro/claro.

// Importa el componente `Link` de 'react-router-dom', que se utiliza para la navegación
// sin recargar la página, actuando como un enlace con capacidades de enrutamiento.
import { Link } from 'react-router-dom';

// Importa el componente `DarkModeToggle` desde un archivo local,
// presumiblemente un botón para cambiar entre modos oscuro y claro.
import DarkModeToggle from './DarkModeToggle';

// Define y exporta por defecto el componente `Navbar`.
// Este componente representa la barra de navegación principal de la aplicación.
export default function Navbar() {
  return (
    // Etiqueta semántica HTML5 para la barra de navegación.
    // Se aplican clases de CSS (probablemente de Bootstrap) para estilizar la barra de navegación.
    <nav className="navbar navbar-expand-lg">
      
      {/* Contenedor principal para centrar y dar espaciado al contenido de la barra de navegación. */}
      <div className="container">
        
        {/* Enlace de marca (brand) que lleva a la página de inicio ("/") cuando se hace clic. */}
        {/* El texto visible es "Seres magicos". */}
        <Link className="navbar-brand" to="/">Seres magicos</Link>
        
        {/* Contenedor para los elementos de navegación (enlaces). */}
        <div className="navbar-nav">
        {/* Este es un comentario de una sola línea dentro del JSX que no aparece en el renderizado final. */}
          {/* Enlace a la sección "Seres" (/proyectos). */}
          <Link className="nav-link" to="/proyectos">Seres</Link>
          {/* Enlace a la sección "Lugares Mágicos" (/lugares). */}
          <Link className="nav-link" to="/lugares">Lugares Mágicos</Link>
          {/* Enlace a la sección "Leyendas" (/leyendas). */}
          <Link className="nav-link" to="/leyendas">Leyendas</Link>
          {/* Enlace a la sección "Contacto" (/contacto). */}
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </div>
        
        {/* Renderiza el componente `DarkModeToggle`, que maneja la funcionalidad de cambio de tema. */}
        <DarkModeToggle />
      </div>
    </nav>
  );
}
