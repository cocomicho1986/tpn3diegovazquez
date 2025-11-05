// src/components/ProjectCard.jsx
import React from 'react';
import useCardToggle from '../hooks/useCardToggle'; 
import UIButton from './UIButton';
import styles from '../styles/Card.module.css';
import Maquina from './Maquina';

export default function ProjectCard({ proyecto, imagenSrc }) {
  const { isTextView, toggleView } = useCardToggle(false);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        
        {isTextView ? (
          <div className={styles.textSide}>
            <h3>
              {/*Typewriter:Componente*/}
              {/*text:parametro que toma proyecto.title*/}
              {/*speed:parametro que define la velocidad*/}
              {proyecto.title} 
              
              </h3>
            <p>
              <Maquina text={proyecto.description} speed={80}/>
              </p>
          </div>
          //isTextView==false, muestra la imagen
        ) : (
          <img src={imagenSrc} alt={proyecto.title} className={styles.imageSide} />
        )}
      </div>
      <UIButton
        onClick={toggleView}
        variant="outline"
        size="small"
        fullWidth={true}
      >
        {isTextView ? 'Mi foto' : 'Quien soy'}
      </UIButton>
    </div>
  );
}
//Aca se define la logica de mostrar texto o imagen linea 19