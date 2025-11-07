// src/App.jsx
import React from 'react'; 
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Leyendas from './pages/Leyendas';
import Contacto from './pages/Contacto';
import Lugares from './pages/Lugares';
import useThemeStore from './store/useThemeStore'; 


export default function App() {
  // ✅ Inicializa el tema global al cargar la app
  const initializeTheme = useThemeStore(state => state.initializeTheme);
  
  {/*          
    A continuación, se detalla su funcionamiento:

    React.useEffect(...): Este Hook de React se utiliza para manejar "efectos secundarios" (operaciones que interactúan con el mundo exterior, como la inicialización del tema, llamadas a API, o manipulación directa del DOM) en componentes funcionales.
    () => { initializeTheme(); }: Es la función que contiene la lógica del efecto. En este caso, simplemente llama a otra función llamada initializeTheme para configurar el tema de la aplicación.
    [initializeTheme]: Este es el array de dependencias. React monitoriza los valores dentro de este array entre renderizaciones.
        Cuando el componente se renderiza inicialmente, el efecto se ejecuta.
        En renderizaciones posteriores, React compara la referencia de la función initializeTheme con la que tenía en la renderización anterior.
        Si la función initializeTheme es la misma que antes (misma referencia), el efecto no se vuelve a ejecutar.
        Si la función initializeTheme es diferente (nueva referencia), el efecto se vuelve a ejecutar.
    */}

  React.useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <main className="flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/lugares" element={<Lugares />} />
            <Route path="/leyendas" element={<Leyendas />} />
            <Route path="/contacto" element={<Contacto />} />
            
          </Routes>
        </main>
         <Footer />
      </div>
    </BrowserRouter>
  );
}