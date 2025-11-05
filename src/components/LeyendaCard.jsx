// src/components/MagicPlaceCard.jsx
import React from 'react';
// 🔑 IMPORTA EL CSS MODULE CORRECTO
import styles from '../styles/leyenda.module.css';
import TypewriterText from './TypewriterText';

export default function leyendaCard({ lugar, imagenSrc }) {
  return (
    <div className={styles.magicCard}>
      <img 
        src={imagenSrc} 
        alt={lugar.title} 
        className={styles.imageSide}
      />
      <div className={styles.scrollableText}>
        <h3 className={styles.cardTitle}>{lugar.title}</h3>
        <p className={styles.cardDescription}>
          <TypewriterText text={lugar.description} speed={80}/>
          </p>
      </div>
    </div>
  );
}