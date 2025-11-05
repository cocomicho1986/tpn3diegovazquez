// src/hooks/useProjectData.js
import { useState, useEffect } from 'react';

export default function useProjectData() {
  //Estas tres constantes las va tomar Proyectos.jsx
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        //Traigo los datos de proyectos.json desde su ruta
        const response = await fetch('/data/proyectos.json');
        //Si la respuesta es opuesta a la constante da error
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        //Guardo en data lo que trajo response
        const data = await response.json();
        //Seteo utilizando el primer hook, que contiene los datos de proyectos.json
        setProyectos(data);
      } catch (err) {
        //Utilizo el 3er hook
        setError('No se pudieron cargar los proyectos.');
        console.error('Error al cargar proyectos.json:', err);
        // Datos de respaldo si falla
        setProyectos([
          { id: 1, title: "Proyecto 1", description: "Descripción de respaldo 1", imagen: "card-duende.jpg" },
          { id: 2, title: "Proyecto 2", description: "Descripción de respaldo 2", imagen: "card-duende2.jpg" },
          { id: 3, title: "Proyecto 3", description: "Descripción de respaldo 3", imagen: "card-image.jpg" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  return { proyectos, loading, error };
}