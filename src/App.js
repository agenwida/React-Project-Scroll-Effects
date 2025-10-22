import React from 'react';
import HeroSection from './components/HeroSection.js';
import ScrollTextSection from './components/ScrollTextSection';
import BentoGrid from './components/BentoGrid';
import MarqueeSection from './components/MarqueeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <ScrollTextSection />
      <BentoGrid />
      <MarqueeSection />
      <Footer />
    </div>
  );
}

export default App;