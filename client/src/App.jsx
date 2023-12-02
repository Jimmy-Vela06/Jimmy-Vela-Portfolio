import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='heroSection'>
          <Hero />
        </div>

        <div>hi</div>
      </main>
    </>
  );
}

export default App;
