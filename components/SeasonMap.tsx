import React, { useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';

const SeasonMap: React.FC = () => {
    const { t } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            // Calculate active index based on scroll percentage roughly mapped to weeks
            const maxScroll = scrollWidth - clientWidth;
            const progress = scrollLeft / maxScroll;
            const index = Math.round(progress * (weeks.length - 1));
            setActiveIndex(Math.min(Math.max(0, index), weeks.length - 1));
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Curated Unsplash images for each week theme
    const weekImages = [
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop", // Flavors
        "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop", // Rhythms
        "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1000&auto=format&fit=crop", // Heights
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop", // Shadows (Updated)
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop", // Voices
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop", // Future
        "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=1000&auto=format&fit=crop"  // Farewell
    ];

    // Combine translation data with images
    const weeks = t.seasonMap.weeks.map((name, index) => ({
        id: `0${index + 2}`,
        name: name,
        desc: t.seasonMap.weekDescriptions[index] || '',
        img: weekImages[index]
    }));

    return (
        <section id="season" className="py-24 md:py-32 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-dji font-extrabold tracking-tight mb-4">
                            {t.seasonMap.title.split(' ').map((word, i) => i === 2 ? <span key={i}><br />{word} </span> : <span key={i}>{word} </span>)}
                        </h2>
                        <p className="text-lg text-white/50 italic font-light">
                            {t.seasonMap.subtitle}
                        </p>
                    </div>
                    <a href="#" className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-dji-blue hover:text-white transition-colors group">
                        {t.seasonMap.link}
                        <span className="h-[1px] w-8 bg-dji-blue group-hover:w-16 transition-all duration-300"></span>
                    </a>
                </div>

                {/* Featured Week - Hero Style Card */}
                <div className="relative w-full aspect-[4/5] md:aspect-[16/7] bg-charcoal mb-1 group overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2670&auto=format&fit=crop"
                        alt="Week 1 Sunrise"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/50 to-transparent"></div>

                    <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-center max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-dji-blue">{t.seasonMap.heroStatus}</span>
                            <span className="w-2 h-2 bg-dji-blue rounded-full animate-pulse"></span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-6xl font-dji font-bold mb-6 leading-none">
                            {t.seasonMap.heroTitle}
                        </h3>
                        <p className="text-white/70 italic mb-10 leading-relaxed font-light">
                            {t.seasonMap.heroDesc}
                        </p>
                        <button
                            onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-fit bg-dji-blue hover:bg-white hover:text-obsidian text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all"
                        >
                            {t.seasonMap.heroButton}
                        </button>
                    </div>
                </div>

                {/* Weeks Grid */}
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
                        className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:grid-cols-4 lg:grid-cols-7 gap-[1px] bg-white/10 border border-white/10 pb-4 md:pb-0 scrollbar-hide"
                        role="region"
                        aria-label="Weekly Themes Carousel"
                    >
                        {weeks.map((week) => (
                            <div key={week.id} className="relative flex-shrink-0 w-1/2 md:w-full snap-start aspect-square bg-obsidian p-6 flex flex-col justify-between hover:bg-white/5 transition-all cursor-pointer group overflow-hidden">
                                {/* Hover Image Background */}
                                <img
                                    src={week.img}
                                    alt={week.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <span className="text-[10px] font-bold text-white/30 tracking-widest group-hover:text-dji-blue transition-colors">W.{week.id}</span>
                                    <div>
                                        <span className="text-lg font-bold uppercase tracking-wide block mb-2">{week.name}</span>
                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                                            <div className="overflow-hidden">
                                                <p className="text-xs text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                                                    {week.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Indicators (Dots) */}
                    <div className="flex justify-center gap-2 mt-6 md:hidden">
                        {weeks.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-dji-blue' : 'w-1.5 bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SeasonMap;