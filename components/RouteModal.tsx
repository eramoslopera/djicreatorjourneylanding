import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

interface RouteModalProps {
    isOpen: boolean;
    onClose: () => void;
    routeId: string; // 'starter' | 'cinematic' | 'fpv'
}

const RouteModal: React.FC<RouteModalProps> = ({ isOpen, onClose, routeId }) => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => {
                document.body.style.overflow = 'unset';
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen && !isVisible) return null;

    // Placeholder data - in a real app, this would come from the language context or a data file
    const getRouteDetails = (id: string) => {
        switch (id) {
            case 'explorer':
                return {
                    ...t.routeModal.explorer,
                    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
                };
            case 'storyteller':
                return {
                    ...t.routeModal.storyteller,
                    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop"
                };
            default:
                return {
                    title: "",
                    subtitle: "",
                    desc: "",
                    steps: [],
                    equipment: "",
                    image: ""
                };
        }
    };

    const details = getRouteDetails(routeId);

    return (
        <div className={`fixed inset-0 z-[60] flex items-center justify-center px-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-obsidian/90 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className={`relative bg-charcoal border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-dji-blue text-white rounded-full transition-colors"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Side */}
                    <div className="relative h-64 md:h-auto">
                        <img
                            src={details.image}
                            alt={details.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent md:bg-gradient-to-r"></div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12">
                        <span className="text-dji-blue text-xs font-dji font-bold uppercase tracking-[0.2em] mb-2 block">
                            {details.equipment}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-dji font-bold text-white mb-4 uppercase tracking-wide">
                            {details.title}
                        </h2>
                        <h3 className="text-white/60 text-lg font-light italic mb-6">
                            {details.subtitle}
                        </h3>

                        <p className="text-white/80 leading-relaxed mb-8 border-l-2 border-dji-blue/30 pl-4">
                            {details.desc}
                        </p>

                        <div className="mb-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
                                {t.routeModal.keyPoints}
                            </h4>
                            <ul className="space-y-3">
                                {details.steps.map((step, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm text-white/90">
                                        <div className="w-1.5 h-1.5 bg-dji-blue rounded-full"></div>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <button className="bg-dji-blue hover:bg-white hover:text-charcoal text-white text-xs font-bold uppercase tracking-widest px-8 py-3 transition-colors">
                                {t.routeModal.startRoute}
                            </button>
                            <button onClick={onClose} className="border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors">
                                {t.routeModal.close}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteModal;
