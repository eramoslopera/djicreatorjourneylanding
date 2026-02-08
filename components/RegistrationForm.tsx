import React from 'react';
import { useLanguage } from './LanguageContext';

const RegistrationForm: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="registro" className="py-24 md:py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-dji-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    <div className="lg:col-span-5">
                        <span className="block text-dji-blue text-xs font-dji font-bold uppercase tracking-[0.3em] mb-8">
                            {t.registration.label}
                        </span>
                        <h2 className="text-6xl md:text-7xl font-dji font-extrabold tracking-tight leading-none mb-8">
                            {t.registration.title}
                        </h2>
                        <p className="text-xl text-white/60 font-light italic max-w-sm">
                            {t.registration.subtitle}
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <form className="bg-charcoal/50 border border-white/10 p-8 md:p-12 shadow-2xl backdrop-blur-sm relative">
                            <div className="absolute top-0 left-0 w-2 h-2 bg-dji-blue"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2 group-focus-within:text-dji-blue transition-colors">{t.registration.nameLabel}</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-dji-blue transition-all" />
                                </div>
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2 group-focus-within:text-dji-blue transition-colors">{t.registration.emailLabel}</label>
                                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-dji-blue transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-dji-blue transition-colors">{t.registration.cityLabel}</label>
                                    <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-dji-blue transition-all [&>option]:bg-obsidian">
                                        <option>Madrid</option>
                                        <option>Barcelona</option>
                                        <option>Valencia</option>
                                        <option>Otra</option>
                                    </select>
                                </div>
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-dji-blue transition-colors">{t.registration.profileLabel}</label>
                                    <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-dji-blue transition-all [&>option]:bg-obsidian">
                                        <option>Starter</option>
                                        <option>Narrador Visual</option>
                                        <option>Cineasta</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-10">
                                <div className="relative flex items-center">
                                    <input type="checkbox" id="terms" className="peer h-4 w-4 cursor-pointer appearance-none border border-white/20 bg-transparent checked:border-dji-blue checked:bg-dji-blue transition-all" />
                                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <label htmlFor="terms" className="text-xs text-white/60 leading-relaxed cursor-pointer select-none">
                                    {t.registration.terms}
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-dji-blue hover:bg-white hover:text-obsidian text-white text-[11px] font-bold uppercase tracking-[0.3em] py-5 transition-all duration-300 shadow-[0_10px_20px_rgba(0,163,224,0.2)] hover:shadow-none">
                                {t.registration.button}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;