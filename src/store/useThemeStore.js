// src/store/useThemeStore.js
// Hook de Zustand para manejar el tema claro/oscuro de forma global

// 🔹 Importa la función 'create' de Zustand para crear stores
import { create } from 'zustand';

// 🔹 Crea el store usando la función 'create'
//    - 'set': función para actualizar el estado
//    - 'get': función para leer el estado actual
const useThemeStore = create((set, get) => ({
  // 🔹 Estado inicial: modo claro por defecto
  isDarkMode: false,

  // 🔹 Inicializa el tema al cargar la app
  initializeTheme: () => {
    // Obtiene la preferencia guardada en localStorage
    const saved = localStorage.getItem('theme');
    
    if (saved) {
      // Si hay preferencia guardada, usa ese valor
    // 'dark' → true, cualquier otra cosa → false
    //   Si saved = 'dark' → 'dark' === 'dark' → true
    //   Si saved = 'light' → 'light' === 'dark' → false
    //   Si saved = null → null === 'dark' → false
      set({ isDarkMode: saved === 'dark' });
    } else {
      // Si no hay preferencia, usa la del sistema operativo
      //window -> Objeto global del navegador
      //MatchMedia -> Deteccion de preferencias, (prefers-color-scheme) compara con dark
      //matches --> Booleano que puede devolver true o false (dark==true or dark==false)
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      //Setea isDarkmode ? true : false
      set({ isDarkMode: systemPrefersDark });
    }
    // Aplica el tema al DOM después de establecer el estado
    get().applyTheme();
  },

  // 🔹 Alterna entre modo claro y oscuro
  toggleDarkMode: () => {
    // Usa 'set' con una función para acceder al estado actual
    set((state) => {
      // Invierte el valor actual del modo
      const newMode = !state.isDarkMode;
      
      // Guarda la preferencia en localStorage para persistencia
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      
      // Retorna el nuevo estado
      return { isDarkMode: newMode };
    });
    // Aplica el nuevo tema al DOM
    get().applyTheme();
  },

  // 🔹 Aplica el tema al Document Object Model (DOM)
  applyTheme: () => {
    // Obtiene el estado actual del store
    const { isDarkMode } = get();
    
    if (isDarkMode) {
      // ✅ Modo oscuro:
      // - Añade el atributo 'data-bs-theme="dark"' para Bootstrap
      // - Añade clases de Bootstrap para fondo oscuro y texto claro
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      // ✅ Modo claro:
      // - Elimina el atributo de tema oscuro
      // - Elimina las clases de modo oscuro
      document.documentElement.removeAttribute('data-bs-theme');
      document.body.classList.remove('bg-dark', 'text-light');
    }
  },
}));

// 🔹 Exporta el hook para usarlo en otros componentes
export default useThemeStore;