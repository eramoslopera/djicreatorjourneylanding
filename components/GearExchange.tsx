import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import GearModal from './GearModal';

const GearExchange: React.FC = () => {
    const { t } = useLanguage();
    const [activeModal, setActiveModal] = useState<'verification' | 'community' | 'upgrades' | null>(null);

    return (
        <section className="py-24 bg-obsidian relative overflow-hidden border-t border-white/5">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-dji-blue/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-dji-blue text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                        Ecosystem Upgrade
                    </span>
                    <h2 className="text-3xl md:text-5xl font-dji font-bold text-white mb-6">
                        {t.gearExchange.title}
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base font-light">
                        {t.gearExchange.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1: Verification */}
                    <div
                        onClick={() => setActiveModal('verification')}
                        className="group p-8 border border-white/10 bg-charcoal/40 hover:bg-charcoal/80 transition-all duration-300 cursor-pointer hover:border-dji-blue/30"
                    >
                        <div className="w-12 h-12 mb-6 flex items-center justify-center bg-dji-blue/10 rounded-full group-hover:bg-dji-blue/20 transition-colors">
                            <svg className="w-6 h-6 text-dji-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl text-white font-bold mb-3">{t.gearExchange.feature1Title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{t.gearExchange.feature1Desc}</p>
                    </div>

                    {/* Feature 2: Community */}
                    <div
                        onClick={() => setActiveModal('community')}
                        className="group p-8 border border-white/10 bg-charcoal/40 hover:bg-charcoal/80 transition-all duration-300 cursor-pointer hover:border-dji-blue/30"
                    >
                        <div className="w-12 h-12 mb-6 flex items-center justify-center bg-dji-blue/10 rounded-full group-hover:bg-dji-blue/20 transition-colors">
                            <svg className="w-6 h-6 text-dji-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl text-white font-bold mb-3">{t.gearExchange.feature2Title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{t.gearExchange.feature2Desc}</p>
                    </div>

                    {/* Feature 3: Upgrades */}
                    <div
                        onClick={() => setActiveModal('upgrades')}
                        className="group p-8 border border-white/10 bg-charcoal/40 hover:bg-charcoal/80 transition-all duration-300 cursor-pointer hover:border-dji-blue/30"
                    >
                        <div className="w-12 h-12 mb-6 flex items-center justify-center bg-dji-blue/10 rounded-full group-hover:bg-dji-blue/20 transition-colors">
                            <svg className="w-6 h-6 text-dji-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h3 className="text-xl text-white font-bold mb-3">{t.gearExchange.feature3Title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{t.gearExchange.feature3Desc}</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-transparent border border-white/20 text-white px-8 py-3 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                    >
                        {t.gearExchange.cta}
                    </button>
                </div>
            </div>

            {/* Modal Integration */}
            {activeModal && (
                <GearModal
                    isOpen={!!activeModal}
                    onClose={() => setActiveModal(null)}
                    featureId={activeModal}
                />
            )}
        </section>
    );
};

export default GearExchange;
