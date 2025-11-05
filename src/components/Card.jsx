// src/components/Card.jsx
//import React from 'react';
//import useCardToggle from '../hooks/useCardToggle';
//import styles from '../styles/Card.module.css';

//export default function Card({ imageSrc, title, description }) {
  //const { isTextView, toggleView } = useCardToggle(false);

  //return (
    //<div className={styles.cardWrapper}>
      //<div className={styles.card}>
        //{isTextView ? (
          //<div className={styles.textSide}>
            //<h3>{title}</h3>
            //<p>{description}</p>
          //</div>
        //) : (
          //<img src={imageSrc} alt={title} className={styles.imageSide} />
        //)}
      //</div>
      //<button
        //onClick={toggleView}
        //className="btn btn-sm btn-outline-primary w-100 mt-2"
      //>
        //{isTextView ? 'Ver Imagen' : 'Ver Texto'}
      //</button>
    //</div>
  //);
//}