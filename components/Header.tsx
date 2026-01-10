import React, { useState } from 'react';
import { Menu, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Cabeçalho Mobile*/}
      <header className="md:hidden bg-[#7cb342] text-white p-4 sticky top-0 z-50 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 fill-current" />
          <span className="font-bold text-lg tracking-wide">Descarte Aqui</span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Cabeçalho Desktop*/}
      <header className="hidden md:flex bg-white text-gray-800 py-6 px-8 lg:px-16 justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 text-green-600">
          <Leaf className="w-6 h-6 fill-current" />
          <span className="font-bold text-xl tracking-tight text-gray-700">Descarte Aqui Wyden</span>
        </div>
        
        <div className="flex items-center gap-4 text-green-700 font-medium text-sm">
          <span>Junte-se a Nós. Participe do Futuro Verde.</span>
        </div>

        <nav>
          <ul className="flex gap-8 text-sm font-medium text-gray-500">
            <li className="hover:text-green-600 cursor-pointer text-green-600">Educacional</li>
            <li className="hover:text-green-600 cursor-pointer">Pontos de Coleta</li>
            <li className="hover:text-green-600 cursor-pointer">Sobre Nós</li>
          </ul>
        </nav>
      </header>

      {/* Menu Suspenso Mobile*/}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4 absolute w-full z-40 top-[60px]">
          <ul className="flex flex-col gap-3 text-gray-700">
            <li className="py-2 border-b border-gray-100">Educacional</li>
            <li className="py-2 border-b border-gray-100">Pontos de Coleta</li>
            <li className="py-2">Sobre Nós</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;