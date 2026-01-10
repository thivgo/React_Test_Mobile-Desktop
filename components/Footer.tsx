import React from 'react';
import { Leaf, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="hidden md:flex w-full bg-white py-8 px-8 lg:px-16 justify-between items-center border-t border-gray-200 mt-12">
      <div className="flex items-center gap-2 text-green-700">
        <Leaf className="w-5 h-5 fill-current" />
        <span className="font-semibold text-gray-700">Descarte Aqui Wyden</span>
      </div>
      
      <div className="text-gray-400 text-sm">
        © 2025 Todos a direitos reservdo.
      </div>

      <div className="flex gap-4 text-gray-400">
        <Facebook className="w-5 h-5 hover:text-green-600 cursor-pointer" />
        <Twitter className="w-5 h-5 hover:text-green-600 cursor-pointer" />
        <Youtube className="w-5 h-5 hover:text-green-600 cursor-pointer" />
        <Instagram className="w-5 h-5 hover:text-green-600 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;