import React from 'react';
import Hero from './components/Hero'

import MissionServices from './components/MissionServices';
import SelectedWork from './components/SelectedWork';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-container bg-[#f9fafb] relative">
      <BackgroundGrid className="fixed inset-0 z-0 pointer-events-none" />
      <Hero />
      <MissionServices />

      <SelectedWork />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
