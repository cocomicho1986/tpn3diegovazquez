/*================================================================================
 COMPONENTE UI: BOTÓN REUTILIZABLE
================================================================================*/

// src/components/UIButton.jsx
import React from 'react';
import styles from '../styles/UIButton.module.css';

/**
 * Componente de botón UI reutilizable y personalizable
 * 
 * Este componente permite crear botones consistentes en toda la aplicación
 * con diferentes variantes, tamaños y estados.
 * 
 * @param {React.ReactNode} children - Contenido del botón (texto, iconos, etc.)
 * @param {Function} onClick - Función que se ejecuta al hacer clic
 * @param {string} variant - Estilo del botón: 'primary', 'outline', 'success', 'danger'
 * @param {string} size - Tamaño del botón: 'small', 'medium', 'large'
 * @param {boolean} fullWidth - Si el botón ocupa el 100% del ancho
 * @param {boolean} disabled - Si el botón está deshabilitado
 * @returns {JSX.Element} Botón estilizado
 */
export default function UIButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  disabled = false 
}) {
  /*================================================================================
   CONSTRUCCIÓN DINÁMICA DE CLASES CSS
   =================================================================================*/
  
  // Crea un array con todas las clases que se aplicarán al botón
  const buttonClasses = [
    // 1. Clase base con estilos comunes a todos los botones
    styles.button,
    
    // 2. Clase de variante (estilo/color) basada en la prop 'variant'
    //    Usa template literals para crear el nombre dinámicamente
    //    Ej: variant="primary" → styles['variant-primary']
    styles[`variant-${variant}`],
    
    // 3. Clase de tamaño basada en la prop 'size'
    //    Ej: size="small" → styles['size-small']
    styles[`size-${size}`],
    
    // 4. Clase de ancho completo (solo si fullWidth es true)
    //    Operador ternario: si fullWidth es true, añade la clase; si no, cadena vacía
    fullWidth ? styles.fullWidth : '',
    
    // 5. Clase de estado deshabilitado (solo si disabled es true)
    //    Igual que arriba: condición ternaria
    disabled ? styles.disabled : ''
  ]
    // 6. Filtra el array para eliminar cadenas vacías ('')
    //    Boolean('') = false, así que se eliminan
    .filter(Boolean)
    
    // 7. Une todas las clases en una sola cadena separada por espacios
    //    Esto es lo que se asignará a className del botón
    .join(' ');

  /*================================================================================
   RENDERIZADO DEL COMPONENTE
   =================================================================================*/
  
  return (
    <button
      // Aplica las clases construidas dinámicamente
      className={buttonClasses}
      
      // Maneja el evento de clic (solo si no está deshabilitado)
      onClick={onClick}
      
      // Estado de deshabilitado (mejora accesibilidad)
      disabled={disabled}
    >
      {/* Renderiza el contenido pasado como children */}
      {children}
    </button>
  );
}