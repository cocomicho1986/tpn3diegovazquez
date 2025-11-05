// src/pages/Leyendas.jsx
import React from 'react';
import LeyendaCard from '../components/LeyendaCard';
import useLeyenda from '../hooks/useLeyendas';

import cardDuende from '../assets/images/domovoi.jpg';
import Rübezahl from '../assets/images/rübezahl.jpg';
import cardImage from '../assets/images/card-image.jpg';

const imageMap = {
  'domovoi.jpg': cardDuende,
  'rübezahl.jpg': Rübezahl,
  'card-image.jpg': cardImage
};

export default function Leyendas() {
  const { leyendas, loading, error } = useLeyenda();

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
      <h2 className="mb-4 text-center">Leyenda</h2>
      <div className="row g-4">
        {leyendas.map((leyenda) => {
          const imagenSrc = imageMap[leyenda.imagen];
          if (!imagenSrc) return null;

          return (
            <div 
              className="col-12 col-sm-6 col-md-4" 
              key={leyenda.id}
            >
              {/* 🔑 Envoltorio clave para altura y alineación */}
              <div className="h-100 d-flex flex-column">
                <LeyendaCard lugar={leyenda} imagenSrc={imagenSrc} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}