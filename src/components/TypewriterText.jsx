// src/components/TypewriterText.jsx
// Componente de máquina de escribir SIMPLE (sin cursor)
// Solo muestra el texto carácter por carácter con delay

import React, { useState, useEffect } from 'react';

export default function TypewriterText({ text, speed = 50 }) {
  // 🔹 Solo necesitamos el texto mostrado (sin estados de cursor)
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

    // 🔹 Cleanup: limpia el intervalo al desmontar o cambiar props
    return () => clearInterval(timer);
  }, [text, speed]); // ← Se reinicia si cambia el texto o la velocidad

  return <span>{displayText}</span>;
}