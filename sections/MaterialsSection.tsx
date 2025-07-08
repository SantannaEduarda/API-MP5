'use client';
import { useEffect, useState } from 'react';
import api from '../lib/api';
import MaterialCard from '../components/MaterialCard';

type Material = {
  id: string;
  title: string;
  type: string;
  url: string;
  language: string;
  category: string;
};

export default function MaterialsSection() {
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    api.get('/materiais')
      .then(res => setMaterials(res.data.list))
      .catch(err => console.error('Erro ao buscar materiais:', err));
  }, []);

  return (
    <section id="materiais" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Materiais de Apoio</h2>

      {materials.length > 0 ? (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {materials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Carregando materiais...</p>
      )}
    </section>
  );
}
