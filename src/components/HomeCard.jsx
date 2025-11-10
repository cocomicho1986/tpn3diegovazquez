// src/components/HomeCard.jsx
import React, { useEffect } from 'react';
import styles from '../styles/HomeCard.module.css';

export default function HomeCard() {
  useEffect(() => {
    // Verifica que las variables existan
    const bodyColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--bs-body-color');
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--bs-primary');
    
    console.log('🎨 --bs-body-color:', bodyColor);
    console.log('🎨 --bs-primary:', primaryColor);
  }, []);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.textSide}>
          <h1 className={styles.homeTitle}>Bienvenido</h1>
          <p className={styles.homeDescription}>
            Visita las diferentes secciones
          </p>
        </div>
      </div>
    </div>
  );
}