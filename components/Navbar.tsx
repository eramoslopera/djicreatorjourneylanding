import React, { useState, useEffect, useRef } from 'react';
import { useLanguage, Language } from './LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'va', label: 'Valencià' },
    { code: 'ca', label: 'Català' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'zh', label: '中文' },
  ];

  const currentLangLabel = languages.find(l => l.code === language)?.label.slice(0, 2).toUpperCase();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-obsidian/80 backdrop-blur-lg border-white/10 py-4 shadow-lg'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo - Link to Top */}
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-3 group">
            <img
              src="/img/DJI_idRJYzfUPc_2.svg"
              alt="DJI Logo"
              className="w-12 h-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hidden sm:block group-hover:text-white transition-colors">
              Creator Journey
            </span>
          </a>

          {/* Desktop Links - Reordered to match section order: Manifesto -> Routes -> Season -> Showcase */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#manifesto" onClick={(e) => scrollToSection(e, 'manifesto')} className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-dji-blue transition-colors">
              {t.nav.howWorks}
            </a>
            <a href="#routes" onClick={(e) => scrollToSection(e, 'routes')} className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-dji-blue transition-colors">
              {t.nav.challenges}
            </a>
            <a href="#season" onClick={(e) => scrollToSection(e, 'season')} className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-dji-blue transition-colors">
              {t.nav.season}
            </a>
            <a href="#showcase" onClick={(e) => scrollToSection(e, 'showcase')} className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-dji-blue transition-colors">
              {t.nav.skypixel}
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Language Switcher */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {currentLangLabel}
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-charcoal border border-white/10 shadow-xl rounded-sm py-2 animate-fadeIn">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors ${language === lang.code ? 'text-dji-blue' : 'text-white/70'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#registro"
            onClick={(e) => scrollToSection(e, 'registro')}
            className="bg-dji-blue hover:bg-dji-blue/80 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 sm:px-6 sm:py-2.5 transition-all"
          >
            {t.nav.join}
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 z-50 relative"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 bg-obsidian z-40 transform transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center items-center gap-8`}
          aria-hidden={!mobileMenuOpen}
        >
          <a href="#manifesto" onClick={(e) => { scrollToSection(e, 'manifesto'); setMobileMenuOpen(false); }} className="text-2xl font-dji font-bold uppercase text-white hover:text-dji-blue transition-colors">
            {t.nav.howWorks}
          </a>
          <a href="#routes" onClick={(e) => { scrollToSection(e, 'routes'); setMobileMenuOpen(false); }} className="text-2xl font-dji font-bold uppercase text-white hover:text-dji-blue transition-colors">
            {t.nav.challenges}
          </a>
          <a href="#season" onClick={(e) => { scrollToSection(e, 'season'); setMobileMenuOpen(false); }} className="text-2xl font-dji font-bold uppercase text-white hover:text-dji-blue transition-colors">
            {t.nav.season}
          </a>
          <a href="#showcase" onClick={(e) => { scrollToSection(e, 'showcase'); setMobileMenuOpen(false); }} className="text-2xl font-dji font-bold uppercase text-white hover:text-dji-blue transition-colors">
            {t.nav.skypixel}
          </a>
          <div className="h-px w-12 bg-white/10 my-4"></div>
          {/* Mobile Language Options */}
          <div className="flex flex-wrap justify-center gap-4 px-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setMobileMenuOpen(false); }}
                className={`text-sm font-bold uppercase tracking-widest ${language === lang.code ? 'text-dji-blue' : 'text-white/50'}`}
              >
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;