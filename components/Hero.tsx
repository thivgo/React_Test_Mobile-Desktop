import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full relative md:mt-6">
      <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden md:rounded-3xl shadow-lg group">
        <img 
          src="https://picsum.photos/id/1015/1200/600" 
          alt="Group of students planting" 
          className="w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/20">
          <h1 className="text-white text-2xl md:text-5xl font-bold max-w-2xl drop-shadow-lg leading-tight">
            Nosso Compromisso com o Futuro
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;