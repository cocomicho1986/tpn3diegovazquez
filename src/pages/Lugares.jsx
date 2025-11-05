// src/pages/Lugares.jsx
import React from 'react';
import MagicPlaceCard from '../components/MagicPlaceCard';
import useMagicPlaces from '../hooks/useMagicPlaces';

import cardPokaini from '../assets/images/pokaini.jpg';
import cardBlackness from '../assets/images/blackness.jpg';
import cardRecoleta from '../assets/images/recoleta.jpg';

const imageMap = {
  'pokaini.jpg': cardPokaini,
  'blackness.jpg': cardBlackness,
  'recoleta.jpg': cardRecoleta,
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
      <h2 className="mb-4 text-center">Lugares Mágicos</h2>
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