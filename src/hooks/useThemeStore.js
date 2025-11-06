// src/store/useThemeStore.js
import { create } from 'zustand';

const useThemeStore = create((set, get) => ({
  isDarkMode: false,

  // ✨ Paleta mágica de duendes
  colors: {
    light: {
      primary: '#2e7d32',      // Verde bosque
      secondary: '#6b4f3d',    // Marrón tierra
      accent: '#1976d2',       // Azul cristalino
      background: '#f8f9fa',   // Fondo claro
      text: '#1b5e20',         // Texto verde oscuro
      cardBg: '#ffffff'        // Fondo de tarjetas
    },
    dark: {
      primary: '#66bb6a',      // Verde duende brillante
      secondary: '#a1887f',    // Marrón suave
      accent: '#4fc3f7',       // Azul estelar
      background: '#0a1929',   // Fondo oscuro (noche en el bosque)
      text: '#e8f5e9',         // Texto verde claro
      cardBg: '#12263a'        // Fondo de tarjetas oscuro
    }
  },

  initializeTheme: () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      set({ isDarkMode: saved === 'dark' });
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      set({ isDarkMode: systemPrefersDark });
    }
    get().applyTheme();
  },

  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return { isDarkMode: newMode };
    });
    get().applyTheme();
  },

  applyTheme: () => {
    const { isDarkMode, colors } = get();
    const theme = isDarkMode ? colors.dark : colors.light;
    
    // ✨ Aplica variables CSS personalizadas
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
    document.documentElement.style.setProperty('--color-bg', theme.background);
    document.documentElement.style.setProperty('--color-text', theme.text);
    document.documentElement.style.setProperty('--color-card-bg', theme.cardBg);
    
    // 🌙 Aplica tema de Bootstrap
    if (isDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
      document.body.classList.remove('bg-dark', 'text-light');
    }
    
    // ✨ Transición suave
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  },
}));

export default useThemeStore;