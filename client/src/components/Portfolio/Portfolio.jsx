import React from 'react';

import './portfolio.css';

import Works from './Works';

const Portfolio = () => {
  return (
    <section class='work section' id='portfolio'>
      <h2 class='section__title'>Portfolio</h2>
      <span class='section__subtitle'>Projects that highlight skillset</span>
      <Works />
    </section>
  );
};

export default Portfolio;
