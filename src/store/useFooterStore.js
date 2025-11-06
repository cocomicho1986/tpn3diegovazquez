// src/store/useFooterStore.js
import { create } from 'zustand';

const useFooterStore = create((set) => ({
  // ✅ Solo texto del footer
  footerText: '© 2025 Bestiario de Duendes. Todos los derechos mágicos reservados.',

  // ✅ Función para actualizar el texto
  updateFooterText: (text) => {
    set({ footerText: text });
  }
}));

export default useFooterStore;