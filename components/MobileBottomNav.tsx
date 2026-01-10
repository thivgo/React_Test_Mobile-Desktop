import React from 'react';
import { Home, User, Settings } from 'lucide-react';

const MobileBottomNav: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 flex justify-between items-center z-50">
      <button className="p-2 text-gray-400 hover:text-green-600">
        <Home className="w-6 h-6" />
      </button>
      <button className="p-3 bg-green-800 text-white rounded-full -mt-8 border-4 border-[#f3f4f6] shadow-lg">
        <User className="w-6 h-6" />
      </button>
      <button className="p-2 text-gray-400 hover:text-green-600">
        <Settings className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MobileBottomNav;