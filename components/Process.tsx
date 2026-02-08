import React from 'react';
import { useLanguage } from './LanguageContext';

const Process: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32 bg-obsidian border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    <div className="lg:col-span-4">
                        <span className="block text-dji-blue text-xs font-dji font-bold uppercase tracking-[0.3em] mb-8">
                            {t.process.label}
                        </span>
                        <h2 className="text-5xl font-dji font-extrabold tracking-tight leading-none mb-8">
                            {t.process.title}
                        </h2>
                        <div className="w-16 h-1 bg-dji-blue"></div>
                    </div>

                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
                        {t.process.steps.map((step) => (
                            <div key={step.id} className="flex gap-6 group">
                                <span className="text-5xl font-bold text-white/10 group-hover:text-dji-blue transition-colors duration-300">
                                    {step.id}
                                </span>
                                <div className="pt-2">
                                    <h3 className="text-lg font-dji font-bold uppercase tracking-widest mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-tech-gray text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;