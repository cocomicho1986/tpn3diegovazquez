// src/components/Maquina.jsx
import React from 'react';
import useMaquina from '../hooks/useMaquina';

/**
 * Componente de máquina de escribir SIMPLE (sin cursor)
 * Usa el hook useTypewriter para la lógica de animación
 * 
 * @param {string} text - Texto a mostrar con efecto de escritura
 * @param {number} speed - Velocidad de escritura en milisegundos
 * @returns {JSX.Element} Span con el texto animado
 */
export default function Maquina({ text, speed = 50 }) {
  // 🔹 Usa el hook para obtener el texto animado
  const displayText = useMaquina(text, speed);

  // 🔹 Solo se encarga de renderizar
  return <span>{displayText}</span>;
}