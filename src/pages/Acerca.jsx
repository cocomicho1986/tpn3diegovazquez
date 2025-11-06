// src/pages/Lugares.jsx
import React from 'react';
import MagicPlaceCard from '../components/MagicPlaceCard';
import useMagicPlaces from '../hooks/useMagicPlaces';

import cardDuende from '../assets/images/card-duende.jpg';
//import cardDuende2 from '../assets/images/card-duende2.jpg';
//import cardImage from '../assets/images/card-image.jpg';

const imageMap = {
  'card-duende.jpg': cardDuende
  //'card-duende2.jpg': cardDuende2,
  //'card-image.jpg': cardImage,
};

export default function Lugares() {
  const { lugares, loading, error } = useMagicPlaces();

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
      <h2 className="mb-4 text-center">Acerca de</h2>
      <div className="row g-4">
        {lugares.map((lugar) => {
          const imagenSrc = imageMap[lugar.imagen];
          if (!imagenSrc) return null;

          return (
            <div 
              className="col-12 col-sm-6 col-md-4" 
              key={lugar.id}
            >
              {/* 🔑 Envoltorio clave para altura y alineación */}
              <div className="h-100 d-flex flex-column">
                <MagicPlaceCard lugar={lugar} imagenSrc={imagenSrc} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}