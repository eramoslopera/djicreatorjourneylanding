import React from 'react';
import { useLanguage } from './LanguageContext';

interface GearModalProps {
    isOpen: boolean;
    onClose: () => void;
    featureId: 'verification' | 'community' | 'upgrades';
}

const GearModal: React.FC<GearModalProps> = ({ isOpen, onClose, featureId }) => {
    const { t } = useLanguage();

    if (!isOpen) return null;

    const content = t.gearModal[featureId];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-lg bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-dji-blue/10 blur-[50px] pointer-events-none"></div>

                <div className="p-8 md:p-10 relative">
                    {/* Header */}
                    <div className="mb-6">
                        <span className="text-dji-blue text-[10px] uppercase tracking-[0.2em] font-bold block mb-2">
                            {content.subtitle}
                        </span>
                        <h3 className="text-3xl font-dji font-bold text-white leading-tight">
                            {content.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-8 border-l-2 border-dji-blue pl-4">
                        {content.desc}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3 mb-10">
                        {content.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-sm text-white/90">
                                <svg className="w-4 h-4 text-dji-blue mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {benefit}
                            </li>
                        ))}
                    </ul>

                    {/* Action */}
                    <button
                        onClick={onClose}
                        className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors"
                    >
                        {t.gearModal.close}
                    </button>

                    {/* Close Icon (Top Right) */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GearModal;
