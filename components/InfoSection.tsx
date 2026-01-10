import React from 'react';
import { Leaf, Eye, Search } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4">
        
        {/* Cartão de Missão */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-6 h-6 text-green-500" />
            <h2 className="text-xl font-bold text-gray-800">Nossa Missão</h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
            Capacitar indivíduos para um futuro sustentável através de reciclagem e educação ambiental.
          </p>
          <p className="hidden md:block text-gray-500 text-sm md:text-base leading-relaxed">
            Incomodados com a dificuldade de encontrar locais adequados para resíduos em nossa cidade, desenvolvemos esse projeto para conectar pontos e ser mais sustentável.
          </p>
        </div>

        {/* Cartão de Visão (Apenas Mobile) */}
        <div className="md:hidden bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
          <div className="absolute top-6 right-6 text-green-600">
            <Search className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-green-500" />
            <h2 className="text-xl font-bold text-gray-800">Visão</h2>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed text-justify">
            Este projeto é uma iniciativa do Laboratório de Tecnologia e Desenvolvimento (LTD) em um espaço de inovação da Wyden. Unimos ideias, tecnologia, coletamos dados e criamos comunidades para teris o sentido quando restos destina; a utilidade publica as conviccoes que conecta de efetivo no impacto social alem do cenario mais futuro para a realidade.
          </p>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;