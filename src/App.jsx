import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero'
import Preloader from './components/Preloader';

import MissionServices from './components/MissionServices';
import SelectedWork from './components/SelectedWork';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-screen overflow-y-scroll snap-container bg-[#fbf9ef] relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <BackgroundGrid className="fixed inset-0 z-0 pointer-events-none" />
      <Hero startAnimation={!isLoading} />
      <MissionServices />

      <SelectedWork />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
