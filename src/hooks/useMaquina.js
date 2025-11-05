// src/hooks/useMaquina.js
import { useState, useEffect } from 'react';

/**
 * Hook personalizado para efecto de máquina de escribir
 * 
 * @param {string} text - Texto a animar
 * @param {number} speed - Velocidad en milisegundos (por defecto 50)
 * @returns {string} - Texto animado actual
 */
export default function useMaquina(text = '', speed = 50) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    // Reinicia el texto cuando cambia la entrada
    setDisplayText('');
    
    // Si el texto está vacío, no hace nada
    if (!text) return;

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        // Detiene el intervalo cuando termina
        clearInterval(timer);
      }
    }, speed);

    // Cleanup: limpia el intervalo al desmontar o cambiar props
    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
}
