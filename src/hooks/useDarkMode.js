// src/hooks/useDarkMode.js
// Hook personalizado para gestionar el modo claro/oscuro de forma global.
// Usa localStorage para persistir la preferencia del usuario y respeta
// la preferencia del sistema si no hay una elección guardada.

import { useState, useEffect } from 'react';

export default function useDarkMode() {
  // 🔹 PASO 1: Determinar el tema inicial al cargar la app
  //    - Primero busca en localStorage (preferencia del usuario)
  //    - Si no existe, usa la preferencia del sistema operativo
  const getInitialTheme = () => {
    // Intenta recuperar la preferencia guardada por el usuario
    const savedTheme = localStorage.getItem('theme');
    
    // Si existe en localStorage, devuelve true si es 'dark'
    if (savedTheme) return savedTheme === 'dark';
    
    // Si no hay preferencia guardada, usa la del sistema
    // window.matchMedia('(prefers-color-scheme: dark)') 
    // → devuelve true si el sistema está en modo oscuro
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // 🔹 PASO 2: Estado local para el modo actual
  //    - Inicializa con el valor de getInitialTheme()
  //    - Este estado controlará si estamos en modo oscuro (true) o claro (false)
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  // 🔹 PASO 3: Efecto secundario que se ejecuta cuando isDarkMode cambia
  //    - Aplica los cambios visuales en el DOM
  //    - Guarda la preferencia en localStorage
  useEffect(() => {
    if (isDarkMode) {
      // ✅ Modo OSCURO:
      //    - data-bs-theme="dark": Bootstrap 5.3+ lo usa para aplicar estilos oscuros
      //    - bg-dark + text-light: clases de Bootstrap para fondo oscuro y texto claro
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      // ✅ Modo CLARO:
      //    - Elimina el atributo (Bootstrap usa el tema por defecto: claro)
      //    - Quita las clases de modo oscuro
      document.documentElement.removeAttribute('data-bs-theme');
      document.body.classList.remove('bg-dark', 'text-light');
    }

    // 🔹 PASO 4: Persistencia en localStorage
    //    - Guarda la preferencia actual para que se recuerde al recargar
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]); // ← Este efecto se ejecuta SOLO cuando isDarkMode cambia

  // 🔹 PASO 5: Función para alternar el modo
  //    - Usa el patrón "functional update" (prev => !prev)
  //    - Esto garantiza que siempre use el valor más reciente del estado
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // 🔹 Devuelve un objeto con:
  //    - isDarkMode: estado actual (true = oscuro, false = claro)
  //    - toggleDarkMode: función para cambiar el modo
  return {
    isDarkMode,
    toggleDarkMode,
  };
}