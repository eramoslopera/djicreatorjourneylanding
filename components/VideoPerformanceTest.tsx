import React, { useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';

const VideoPerformanceTest: React.FC = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState<'idle' | 'testing' | 'complete' | 'error'>('idle');
    const [loadTime, setLoadTime] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Use the SD video for a lightweight latency test
    const testUrl = "https://videos.pexels.com/video-files/3121459/3121459-sd_640_360_25fps.mp4";

    const startTest = () => {
        setStatus('testing');
        setLoadTime(0);
        const startTime = performance.now();

        const video = document.createElement('video');
        // Add cache buster to ensure we test actual network request
        video.src = `${testUrl}?t=${Date.now()}`;
        video.preload = "auto";
        video.muted = true;
        video.style.display = 'none';

        if (containerRef.current) {
            containerRef.current.appendChild(video);
        }

        const cleanup = () => {
            video.removeEventListener('canplaythrough', onCanPlay);
            video.removeEventListener('error', onError);
            if (video.parentNode) {
                video.parentNode.removeChild(video);
            }
        };

        const onCanPlay = () => {
            const endTime = performance.now();
            setLoadTime(Math.round(endTime - startTime));
            setStatus('complete');
            cleanup();
        };

        const onError = () => {
            setStatus('error');
            cleanup();
        }

        video.addEventListener('canplaythrough', onCanPlay);
        video.addEventListener('error', onError);

        // Explicitly call load
        video.load();
    };

    const isHighPerformance = loadTime > 0 && loadTime < 1500; // Arbitrary threshold for demo

    return (
        <section className="py-24 bg-obsidian border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-charcoal/30 border border-white/10 p-8 md:p-12 relative overflow-hidden group">

                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-dji-blue/5 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-dji-blue rounded-full animate-pulse"></div>
                                <h3 className="text-sm font-dji font-bold uppercase tracking-[0.2em] text-dji-blue">
                                    {t.videoTest.title}
                                </h3>
                            </div>
                            <p className="text-white/60 font-light mb-0">
                                {t.videoTest.desc}
                            </p>
                        </div>

                        <div className="flex flex-col items-end gap-4 min-w-[200px]">
                            {status === 'idle' && (
                                <button
                                    onClick={startTest}
                                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all hover:border-dji-blue"
                                >
                                    {t.videoTest.btnStart}
                                </button>
                            )}

                            {status === 'testing' && (
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-6 h-6 border-2 border-white/10 border-t-dji-blue rounded-full animate-spin"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t.videoTest.btnTesting}</span>
                                </div>
                            )}

                            {status === 'complete' && (
                                <div className="text-right animate-fadeIn">
                                    <div className="mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">{t.videoTest.resultLabel}</span>
                                        <span className="text-3xl font-bold text-white">{loadTime}ms</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">{t.videoTest.recLabel}</span>
                                        <span className={`text-sm font-bold uppercase tracking-wide ${isHighPerformance ? 'text-dji-blue' : 'text-yellow-500'}`}>
                                            {isHighPerformance ? t.videoTest.recHD : t.videoTest.recSD}
                                        </span>
                                    </div>
                                    <button
                                        onClick={startTest}
                                        className="mt-4 text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-white underline decoration-white/30 hover:decoration-white transition-all"
                                    >
                                        {t.videoTest.btnStart}
                                    </button>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="text-right">
                                    <span className="text-red-500 font-bold uppercase tracking-widest text-xs">{t.videoTest.error}</span>
                                    <button
                                        onClick={startTest}
                                        className="mt-2 text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-white"
                                    >
                                        Retry
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Hidden container for video element */}
                    <div ref={containerRef} className="hidden"></div>
                </div>
            </div>
        </section>
    );
};

export default VideoPerformanceTest;