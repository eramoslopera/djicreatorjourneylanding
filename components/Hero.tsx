import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [netStatus, setNetStatus] = useState<'idle' | 'testing' | 'result'>('idle');
  const [netData, setNetData] = useState<{ latency: number, quality: string } | null>(null);

  useEffect(() => {
    // Force muted attribute on mount to ensure autoplay works in all browsers
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 0.8; // Slightly slow down for cinematic feel

      // Try to play immediately
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented:", error);
          // Autoplay might be blocked, the poster or background image will show
        });
      }
    }
  }, []);

  const testConnection = async () => {
    setNetStatus('testing');
    const start = performance.now();
    try {
      // Cache buster to force network request on a small asset to simulate loading
      await fetch(`https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=100&t=${Date.now()}`);
      const end = performance.now();
      const latency = Math.round(end - start);

      let quality = 'SD';
      if (latency < 150) quality = '4K ULTRA';
      else if (latency < 400) quality = '1080p HD';
      else quality = '720p HD';

      setNetData({ latency, quality });
      setNetStatus('result');

      // Auto reset
      setTimeout(() => setNetStatus('idle'), 8000);
    } catch (err) {
      setNetStatus('idle'); // Fail silently back to idle
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-end bg-obsidian">

      {/* Fallback Background Image (Visible if video fails) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/3125995/pexels-photo-3125995.jpeg?auto=compress&cs=tinysrgb&w=1920")' }}
      ></div>

      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.5]"
          poster="https://images.pexels.com/photos/3125995/pexels-photo-3125995.jpeg?auto=compress&cs=tinysrgb&w=1920"
          aria-label="Cinematic time-lapse of city traffic at night from street level"
        >
          {/* Stable Direct Link: City Traffic Night */}
          <source src="/video/Dron_H02.mp4" type="video/mp4" />

          {/* Backup Source */}
          <source src="https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_24fps.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video>

        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Vertical Text */}
      <div className="absolute left-6 md:left-12 top-1/3 hidden lg:block z-10 opacity-50">
        <span className="text-vertical text-[10px] font-dji font-bold uppercase tracking-[0.4em] text-white">
          {t.hero.vertical}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-dji-blue"></div>
              <span className="text-dji-blue text-xs font-dji font-bold uppercase tracking-[0.3em]">
                {t.hero.mission}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-dji font-bold leading-none tracking-tight mb-6 text-white">
              {t.hero.titleMain} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dji-blue to-white/50">
                {t.hero.titleSub}
              </span>
            </h1>

            <p className="text-lg md:text-2xl font-light text-white/70 italic max-w-lg">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8">
            <div className="text-right hidden lg:block border-r-2 border-dji-blue pr-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">{t.hero.modalities}</p>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-white/90 font-medium tracking-wide">{t.hero.routePersonal}</p>
                <p className="text-xs text-white/90 font-medium tracking-wide">{t.hero.routePro}</p>
                <p className="text-xs text-white/60 italic">{t.hero.noDrone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#season" className="bg-dji-blue hover:bg-white hover:text-obsidian text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-dji-blue/20">
                {t.hero.start}
              </a>
              <a href="#manifesto" className="group border border-white/20 hover:border-white text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300 flex items-center gap-2 hover:bg-white/5">
                <svg className="w-3 h-3 fill-current text-white/60 group-hover:text-dji-blue transition-colors" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                {t.hero.watch}
              </a>
            </div>

            {/* System Diagnostics Section */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-between group">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${netStatus === 'testing' ? 'bg-dji-blue animate-ping' : netStatus === 'result' ? 'bg-green-500' : 'bg-white/20'}`}></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                  {t.hero.sysStatus}
                </span>
              </div>

              {netStatus === 'idle' && (
                <button
                  onClick={testConnection}
                  className="text-[10px] font-bold uppercase tracking-widest text-dji-blue hover:text-white transition-colors"
                >
                  {t.hero.runCheck}
                </button>
              )}

              {netStatus === 'testing' && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 animate-pulse">
                  {t.hero.analyzing}
                </span>
              )}

              {netStatus === 'result' && netData && (
                <div className="flex items-center gap-3 animate-fadeIn">
                  <span className="text-[10px] font-bold text-white/80">{netData.latency}ms</span>
                  <span className="text-[10px] font-bold text-dji-blue border border-dji-blue/30 px-1">{netData.quality}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;