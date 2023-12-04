import React from 'react';

import './aboutMe.css';
import AboutPic from '../../assets/aboutMePic.jpg';

const AboutMe = () => {
  return (
    <section className='about section' id='aboutMe'>
      <div className='aboutMargin'>
        <h2 className='section__title'>About Me</h2>
        <div className='containerAbout  about__container  grid'>
          <img src={AboutPic} alt='' className='about__img' />
          <div className='data'>
            <span className='about__subtitle'>Hello</span>
            <p className='about__description'>
              {' '}
              Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with
              the projects carried out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
