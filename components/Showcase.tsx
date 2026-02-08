import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Showcase: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Calculate active index based on scroll position center
      const index = Math.round(scrollLeft / (clientWidth * 0.85)); // 0.85 matches card width
      setActiveIndex(Math.min(Math.max(0, index), 2)); // Clamp to 0-2
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 1,
      title: t.showcase.card1Title,
      desc: t.showcase.card1Desc,
      // Restored Unsplash Link: Urban Architecture/Street
      img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 2,
      title: t.showcase.card2Title,
      desc: t.showcase.card2Desc,
      // Restored Unsplash Link: Aerial/Drone
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 3,
      title: t.showcase.card3Title,
      desc: t.showcase.card3Desc,
      // Restored Unsplash Link: Cinematic/Light
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <section id="showcase" className="py-24 md:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="block text-dji-blue text-xs font-dji font-bold uppercase tracking-[0.3em] mb-6">
              {t.showcase.inspiration}
            </span>
            <h2 className="text-5xl md:text-6xl font-dji font-bold tracking-tight text-white">{t.showcase.title}</h2>
          </div>
          <button className="group flex items-center gap-3 text-white/60 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
            {t.showcase.button}
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="relative group/carousel">
          {/* Mobile Controls */}
          <button
            onClick={() => scroll('left')}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-dji-blue/80 p-2 text-white hover:bg-dji-blue backdrop-blur-sm rounded-r-lg shadow-lg border-y border-r border-white/10"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-dji-blue/80 p-2 text-white hover:bg-dji-blue backdrop-blur-sm rounded-l-lg shadow-lg border-y border-l border-white/10"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:grid-cols-3 gap-8 pb-8 md:pb-0 scrollbar-hide"
            role="region"
            aria-label="Showcase Gallery Carousel"
          >
            {cards.map((card) => (
              <div key={card.id} className="group relative flex-shrink-0 w-[85vw] md:w-full snap-center h-[500px] md:h-[600px] overflow-hidden bg-charcoal cursor-pointer">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Decorative Line on Hover */}
                  <div className="h-[2px] w-12 bg-dji-blue mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <h3 className="text-3xl font-dji font-bold mb-4 leading-tight text-white">{card.title}</h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Indicators (Dots) */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-dji-blue' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default Showcase;