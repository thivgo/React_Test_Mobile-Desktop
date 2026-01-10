import React from 'react';
import { Sprout, BookOpen, Users } from 'lucide-react';

const ValuesSection: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 px-2">
        {/* Alinhamento de texto */}
        <span className="md:hidden">Nosrios Valores</span> 
        <span className="hidden md:inline">Nossos Valores</span>
      </h2>
      
      {/* Container */}
      <div className="flex md:grid md:grid-cols-3 gap-4 justify-between">
        
        {/* Valor 1 */}
        <div className="flex-1 min-w-[100px] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 text-center aspect-square md:aspect-auto md:h-48 transition-all hover:shadow-md">
          <div className="p-3 bg-green-50 rounded-full text-green-600">
             <Sprout className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <span className="text-sm md:text-base font-medium text-gray-700">Sustentabilidade</span>
        </div>

        {/* Valor 2 */}
        <div className="flex-1 min-w-[100px] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 text-center aspect-square md:aspect-auto md:h-48 transition-all hover:shadow-md">
          <div className="p-3 bg-green-50 rounded-full text-green-600">
            <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <span className="text-sm md:text-base font-medium text-gray-700">Educação</span>
        </div>

        {/* Valor 3 */}
        <div className="flex-1 min-w-[100px] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 text-center aspect-square md:aspect-auto md:h-48 transition-all hover:shadow-md">
          <div className="p-3 bg-green-50 rounded-full text-green-600">
            <Users className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <span className="text-sm md:text-base font-medium text-gray-700">Comunidade</span>
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;