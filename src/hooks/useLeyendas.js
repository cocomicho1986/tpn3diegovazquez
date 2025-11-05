// src/hooks/useMagicPlaces.js
import { useState, useEffect } from 'react';

export default function useLeyenda() {
  const [leyendas, setLeyendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeyenda = async () => {
      try {
        const response = await fetch('/data/leyenda.json');
        if (!response.ok) throw new Error('Error al cargar leyendas');
        const data = await response.json();
        setLeyendas(data);
      } catch (err) {
        setError('No se pudieron cargar los lugares mágicos.');
        console.error('Error:', err);
        setLeyendas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeyenda();
  }, []);

  return { leyendas, loading, error };
}