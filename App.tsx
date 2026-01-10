import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f4f6] pb-24 md:pb-0">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto md:px-8 lg:px-16 flex flex-col">
        <Hero />

        {/* Layout */}
        <div className="flex flex-col gap-8 md:gap-12 mt-8 md:mt-12 px-4 md:px-0">
            {/* Seção de Missão */}
            <div className="w-full">
                <InfoSection />
            </div>

            {/* Seção de Valores */}
            <div className="w-full">
                <ValuesSection />
            </div>
        </div>

        <div className="px-4 md:px-0">
          <TeamSection />
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default App;