import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import RouteModal from './RouteModal';

const CreativeRoutes: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string>('starter');

  const openModal = (route: string) => {
    setSelectedRoute(route);
    setModalOpen(true);
  };

  return (
    <section id="routes" className="py-24 md:py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
      {/* Background Text Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[15vw] font-dji font-bold uppercase leading-none text-white">{t.creativeRoutes.bgText}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-dji font-bold italic tracking-tight">
            {t.creativeRoutes.title}
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 pb-2">
            {t.creativeRoutes.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Card 1: Explorador Urbano (Social/Personal) */}
          <div className="group border border-white/10 bg-charcoal/30 backdrop-blur-sm p-6 md:p-12 flex flex-col hover:border-dji-blue/30 hover:bg-charcoal/50 hover:shadow-[0_0_30px_rgba(0,163,224,0.1)] transition-all duration-300 transform">
            <div className="mb-12 flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/50">{t.creativeRoutes.card1Label}</span>
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-dji-blue/50 rounded-full animate-pulse"></span>
              </div>
            </div>
            <h3 className="text-3xl font-dji font-bold mb-6">{t.creativeRoutes.card1Title}</h3>
            <p className="text-sm text-tech-gray mb-12 flex-grow leading-relaxed">
              {t.creativeRoutes.card1Desc}
            </p>
            <div className="space-y-4 mb-10 border-t border-white/5 pt-8">
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-white/70">
                <svg className="w-4 h-4 text-dji-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                {t.creativeRoutes.card1Equipment}
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-white/70">
                <svg className="w-4 h-4 text-dji-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Diversión e Inmediatez
              </div>
            </div>
            <button
              onClick={() => openModal('explorer')}
              className="w-full py-4 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all"
            >
              {t.creativeRoutes.card1Button}
            </button>
          </div>

          {/* Card 2: Narrador Visual (Profesional) */}
          <div className="group relative border border-dji-blue/30 bg-charcoal/80 p-6 md:p-12 flex flex-col transform shadow-2xl shadow-dji-blue/5">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-dji-blue"></div>
            <div className="mb-12 flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-dji-blue">{t.creativeRoutes.card2Label}</span>
              <span className="text-dji-blue">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
              </span>
            </div>
            <h3 className="text-3xl font-dji font-bold mb-6">{t.creativeRoutes.card2Title}</h3>
            <p className="text-sm text-tech-gray mb-12 italic flex-grow leading-relaxed">
              {t.creativeRoutes.card2Desc}
            </p>
            <div className="space-y-4 mb-10 border-t border-white/5 pt-8">
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-dji-blue">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
                {t.creativeRoutes.card2Equipment}
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-dji-blue">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Calidad de Portafolio
              </div>
            </div>
            <button
              onClick={() => openModal('storyteller')}
              className="w-full py-4 bg-dji-blue text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-dji-blue transition-all"
            >
              {t.creativeRoutes.card2Button}
            </button>
          </div>

        </div>
      </div>

      <RouteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        routeId={selectedRoute}
      />
    </section>
  );
};

export default CreativeRoutes;