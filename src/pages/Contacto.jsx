// src/pages/Contacto.jsx
import React from 'react';
import ContactCard from '../components/ContactCard';
import useContactData from '../hooks/useContactData';

export default function Contacto() {
  const { contacto, loading, error } = useContactData();

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

  if (!contacto) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-warning" role="alert">
          No hay información de contacto disponible.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Contacto</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <ContactCard contacto={contacto} />
        </div>
      </div>
    </div>
  );
}