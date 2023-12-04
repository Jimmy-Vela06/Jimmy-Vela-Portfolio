import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ParticlesContainer from './components/Particles/ParticlesContainer';
import AboutMe from './components/About/AboutMe';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='heroSection'>
          {/* <ParticlesContainer /> */}
          <ParticlesContainer />
          <Hero />
        </div>
        <AboutMe />
        <div>hi</div>
      </main>
    </>
  );
}

export default App;
