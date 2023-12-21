import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ParticlesContainer from './components/Particles/ParticlesContainer';
import AboutMe from './components/About/AboutMe';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='heroSection'>
          <ParticlesContainer />
          <Hero />
        </div>
        <div className='divider'></div>
        <AboutMe />
        <Skills />
        <Portfolio />

        <div>hi</div>
      </main>
    </>
  );
}

export default App;
