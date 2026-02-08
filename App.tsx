import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import CreativeRoutes from './components/CreativeRoutes';
import SeasonMap from './components/SeasonMap';
import CitySpotsMap from './components/CitySpotsMap';
import Process from './components/Process';
import GearExchange from './components/GearExchange';
import Showcase from './components/Showcase';
import RegistrationForm from './components/RegistrationForm';
import VideoPerformanceTest from './components/VideoPerformanceTest';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        <main>
          <Hero />
          <Manifesto />
          <CreativeRoutes />
          <SeasonMap />
          <CitySpotsMap />
          <Process />
          <GearExchange />
          <Showcase />
          <RegistrationForm />
          <VideoPerformanceTest />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;