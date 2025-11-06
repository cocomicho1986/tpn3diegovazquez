// src/components/Navbar.jsx
// Barra de navegación persistente que aparece en todas las páginas.
// Usa componentes de React Router para enlaces y un botón de modo oscuro/claro.

import { Link } from 'react-router-dom';


import DarkModeToggle from './DarkModeToggle';


export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg">
      
      
      <div className="container">
        
        
        <Link className="navbar-brand" to="/">Seres magicos</Link>
        
       
        <div className="navbar-nav">
         
          <Link className="nav-link" to="/proyectos">Seres</Link>
          <Link className="nav-link" to="/lugares">Lugares Mágicos</Link>
          <Link className="nav-link" to="/leyendas">Leyendas</Link>
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </div>
        
        
        <DarkModeToggle />
      </div>
    </nav>
  );
}