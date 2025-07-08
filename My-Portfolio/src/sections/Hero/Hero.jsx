import React from 'react';
import './Hero.css'; 
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import leetcodeDark from '../../assets/Leetcode-dark.png';
import leetcodeLight from '../../assets/Leetcode-light.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/Resume.pdf'
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  
  //toggling icons according to light and dark theme
  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const leetcodeIcon = theme === 'light' ? leetcodeDark : leetcodeLight;

  return ( 
    <section id='hero' className='container'>
      <div className='colorModeContainer'>
        <img className='hero' src={heroImg} alt="Hero" />
        <img className='colorMode' src={themeIcon} alt="Color mode icon"
        onClick={toggleTheme} />
      </div>
      <div className="info">
        <h1>Anshul
            <br />
            Bhatt
        </h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://www.linkedin.com/in/anshul-bhatt001/" target="_blank">
               <img className="linkedin-icon" src={linkedinIcon} alt="linkedin-icon" />
            </a>
            <a href="https://github.com/Anshul123B" target="_blank">
               <img className="github-icon" src={githubIcon} alt="leetcode-icon" />
            </a>
            <a href="https://leetcode.com/u/Anshul123B/" target="_blank">
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
