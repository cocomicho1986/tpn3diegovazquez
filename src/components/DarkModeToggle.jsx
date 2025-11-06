// src/components/DarkModeToggle.jsx
import React from 'react';
import useThemeStore from '../store/useThemeStore';
import UIButton from './UIButton';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <UIButton
      onClick={toggleDarkMode}
       variant="outline"
        size="small"
        fullWidth={false}
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </UIButton>
  );
}