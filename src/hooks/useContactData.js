// src/hooks/useContactData.js
import { useState, useEffect } from 'react';

export default function useContactData() {
  const [contacto, setContacto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('/data/contacto.json');
        if (!response.ok) throw new Error('Error al cargar contacto');
        const data = await response.json();
        setContacto(data);
      } catch (err) {
        setError('No se pudo cargar la información de contacto.');
        console.error('Error:', err);
        setContacto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  return { contacto, loading, error };
}