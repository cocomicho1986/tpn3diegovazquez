// src/components/ContactCard.jsx
import React from 'react';
import styles from '../styles/ContactCard.module.css';

export default function ContactCard({ contacto }) {
  return (
    <div className={styles.contactCard}>
      <h3 className={styles.cardTitle}>{contacto.title}</h3>
      <div className={styles.cardContent}>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>Nombre</div>
          <div className={styles.contactValue}>{contacto.nombre}</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>Email</div>
          <div className={styles.contactValue}>
            <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
          </div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>Teléfono</div>
          <div className={styles.contactValue}>
            <a href={`tel:${contacto.telefono.replace(/\s+/g, '')}`}>
              {contacto.telefono}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}