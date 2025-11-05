// src/App.jsx
import React from 'react'; 
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Leyenda from './pages/Leyendas';
import Contacto from './pages/Contacto';
import Lugares from './pages/Lugares';
import useThemeStore from './store/useThemeStore'; 
import Leyendas from './pages/Leyendas';

export default function App() {
  // ✅ Inicializa el tema global al cargar la app
  const initializeTheme = useThemeStore(state => state.initializeTheme);
  
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
      </div>
    </BrowserRouter>
  );
}