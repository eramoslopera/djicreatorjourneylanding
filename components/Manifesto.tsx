import React from 'react';
import { useLanguage } from './LanguageContext';

const Manifesto: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="manifesto" className="py-24 md:py-32 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="block text-dji-blue text-xs font-dji font-bold uppercase tracking-[0.3em] mb-6">
              {t.manifesto.label}
            </span>
            <h2 className="text-4xl md:text-6xl font-dji font-bold mb-8">{t.manifesto.title}</h2>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
              {t.manifesto.subtitle}
            </p>
          </div>

          {/* Right Content Grid */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-24">

            <div className="space-y-6">
              <h3 className="text-white text-sm font-dji font-bold uppercase tracking-widest border-t border-white/10 pt-6">
                {t.manifesto.card1Title}
              </h3>
              <p className="text-tech-gray leading-relaxed text-sm md:text-base">
                {t.manifesto.card1Desc}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest border-t border-white/10 pt-6">
                {t.manifesto.card2Title}
              </h3>
              <p className="text-tech-gray leading-relaxed text-sm md:text-base">
                {t.manifesto.card2Desc}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest border-t border-white/10 pt-6">
                {t.manifesto.card3Title}
              </h3>
              <p className="text-tech-gray leading-relaxed text-sm md:text-base">
                {t.manifesto.card3Desc}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;