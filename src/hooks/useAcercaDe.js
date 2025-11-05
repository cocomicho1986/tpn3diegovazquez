// src/hooks/useMagicPlaces.js
import { useState, useEffect } from 'react';

export default function useMagicPlaces() {
  const [lugares, setLugares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMagicPlaces = async () => {
      try {
        const response = await fetch('/data/lugares.json');
        if (!response.ok) throw new Error('Error al cargar lugares');
        const data = await response.json();
        setLugares(data);
      } catch (err) {
        setError('No se pudieron cargar los lugares mágicos.');
        console.error('Error:', err);
        setLugares([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMagicPlaces();
  }, []);

  return { lugares, loading, error };
}