// src/hooks/useCardToggle.js
import { useState } from 'react';

export default function useCardToggle(initialState = false) {
  const [isTextView, setIsTextView] = useState(initialState);
  
  const toggleView = () => {
    setIsTextView(prev => !prev);
  };
  
  return { isTextView, toggleView };
}