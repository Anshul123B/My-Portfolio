import React from 'react';
import './Hero.css'; 
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='colorModeContainer'>
        <img className='hero' src={heroImg} alt="Hero" />
        <img className='comorMode' src={themeIcon} alt="mode icon" />
      </div>
    </section>
  );
};

export default Hero;
