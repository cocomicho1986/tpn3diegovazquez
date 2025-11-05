// src/hooks/useMagicPlaces.js
import { useState, useEffect } from 'react';

export default function useLeyenda() {
  const [lugares, setLugares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeyenda = async () => {
      try {
        const response = await fetch('/data/leyenda.json');
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

    fetchLeyenda();
  }, []);

  return { lugares, loading, error };
}