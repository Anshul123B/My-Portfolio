import React from 'react';
import './Hero.css'; 
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';

const Hero = () => {
  return (
    <section id='hero' className='container'>
      <div className='colorModeContainer'>
        <img className='hero' src={heroImg} alt="Hero" />
        <img className='comorMode' src={themeIcon} alt="mode icon" />
      </div>
      <div className="info">
        <h1>Anshul
            <br />
            Bhatt
        </h1>
        <h2>Frontend Developer</h2>
        <span>
            
        </span>

      </div>
    </section>
  );
};

export default Hero;
