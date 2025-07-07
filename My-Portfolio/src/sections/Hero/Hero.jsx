import React from 'react';
import './Hero.css'; 
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import leetcodeIcon from '../../assets/Leetcode-dark.png';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import resume from '../../assets/Resume.pdf'

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
            <a href="https://linkedin.com/" target="_blank">
               <img className="linkedin-icon" src={linkedinIcon} alt="linkedin-icon" />
            <a href="https://github.com/" target="_blank">
               <img className="github-icon" src={githubIcon} alt="leetcode-icon" />
            </a>
            </a>
            <a href="https://leetcode.com/" target="_blank">
               <img className="leetcode-icon" src={leetcodeIcon} alt="leetcode-icon" />
            </a>
        </span>
        <p className="desription">
          Passionate Software Engineer with strong learning abilities and 
          <br/> 
          the capacity to adapt quickly to new technologies
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
