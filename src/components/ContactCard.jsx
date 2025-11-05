// src/components/ContactCard.jsx
import React from 'react';
import styles from '../styles/Card.module.css';

export default function ContactCard({ contacto }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.textSide}>
          <h3>{contacto.title}</h3>
          <div className="mb-3">
            <h6 className="text-muted">Nombre</h6>
            <p className="mb-0">{contacto.nombre}</p>
          </div>
          <div className="mb-3">
            <h6 className="text-muted">Email</h6>
            <a 
              href={`mailto:${contacto.email}`} 
              className="text-decoration-none link-primary"
            >
              {contacto.email}
            </a>
          </div>
          <div className="mb-3">
            <h6 className="text-muted">Teléfono</h6>
            <a 
              href={`tel:${contacto.telefono.replace(/\s+/g, '')}`} 
              className="text-decoration-none link-primary"
            >
              {contacto.telefono}
            </a>
          </div>
          <div>
            <h6 className="text-muted">Dirección</h6>
            <p className="mb-0">{contacto.direccion}</p>
          </div>
        </div>
      </div>
      {/* ❌ SIN BOTÓN DE ALTERNANCIA */}
    </div>
  );
}