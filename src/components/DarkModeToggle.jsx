// src/components/DarkModeToggle.jsx
import React from 'react';
import useThemeStore from '../store/useThemeStore';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="btn btn-sm ms-2"
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}