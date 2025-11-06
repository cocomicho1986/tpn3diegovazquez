// src/store/useThemeStore.js
import { create } from 'zustand';

const useThemeStore = create((set, get) => ({
  isDarkMode: false,

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
    const { isDarkMode } = get();
    if (isDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
    }
  },
}));

export default useThemeStore;