// src/hooks/useToggleView.js
// Hook personalizado que conecta un componente con el store global de Zustand.
// Permite que cada tarjeta controle su estado de forma individual DENTRO de un estado global.

import useCardStore from '../store/useCardStore';
// 🔹 Importamos el store global de Zustand
//    - Este store contiene el estado de TODAS las tarjetas en un solo objeto
//    - Ejemplo: { 1: false, 2: true, 3: false }

// 🔹 Parámetro:
//    - cardId: identificador único de la tarjeta (ej: 1, 2, 3)
//    - Este ID permite que el hook sepa qué tarjeta está gestionando
export default function useToggleView(cardId) {
  
  // 🔹 Extraemos del store de Zustand:
  //    - cardStates: objeto con el estado de todas las tarjetas
  //        Ej: { 1: false, 2: true, 3: false }
  //    - toggleCardView: función para alternar el estado de una tarjeta específica
  const { cardStates, toggleCardView } = useCardStore();

  // 🔹 Devolvemos un objeto con:
  //    - isTextView: estado actual de ESTA tarjeta (cardId)
  //        • cardStates[cardId] → obtiene el valor booleano de esta tarjeta
  //        • || false → valor por defecto si el ID no existe aún
  //    - toggleView: función que llama a toggleCardView con el cardId de esta tarjeta
  return {
    isTextView: cardStates[cardId] || false,
    toggleView: () => toggleCardView(cardId),
  };
}