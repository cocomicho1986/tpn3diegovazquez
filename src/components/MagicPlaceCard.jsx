// src/components/MagicPlaceCard.jsx
// Corresponde a Lugares.jsx
import React from 'react';
// 🔑 IMPORTA EL CSS MODULE CORRECTO
import styles from '../styles/MagicPlaceCard.module.css';
import Maquina from './Maquina';

export default function MagicPlaceCard({ lugar, imagenSrc }) {
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
         <Maquina text= {lugar.description} speed = {80}/>
          </p>
      </div>
    </div>
  );
}