// src/pages/Proyectos.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import useProjectData from '../hooks/useProjectData'; 

// 🔹 IMPORTA TUS IMÁGENES
import cardPuck from '../assets/images/puck.jpg';
import cardPomberito from '../assets/images/pomberito.jpg';
import cardImage from '../assets/images/card-image.jpg';

// 🔹 MAPEO DE IMÁGENES
//Objeto mapa
const imageMap = {
  //Propiedades:clave(card-duende.jpg),valor(cardDuende)
  'puck.jpg': cardPuck,
  'pomberito.jpg': cardPomberito,
  'card-image.jpg': cardImage,
};

export default function Proyectos() {
  //Traigo las tres constantes de useProjectData.js
  const { proyectos, loading, error } = useProjectData();

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Conocidos y no tanto</h2>
      <div className="row g-4">
        {proyectos.map((proyecto) => {
          //imageMap definido en linea 13,proyecto es cada elemento del array
          //imagen es el nombre del campo en 'data/proyectos.json'
          //imageMap[proyecto.imagen]-->obtengo el valor del campo imagen del objeto proyecto
          const imagenSrc = imageMap[proyecto.imagen];
          
          if (!imagenSrc) {
            console.warn(`Imagen no encontrada: ${proyecto.imagen}`);
            return null;
          }

          return (
            <div 
              className="col-12 col-sm-6 col-md-4 h-100" 
              key={proyecto.id}
            >
              <ProjectCard 
                proyecto={proyecto} 
                imagenSrc={imagenSrc} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}