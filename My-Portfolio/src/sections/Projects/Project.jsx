import React from 'react';
import './Project.css';
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/projectCard';

const Project = () => {
  return (
    <section id="projects" className="container">
        <h1 className="sectionTitle">Projects</h1>
        <div className="projectsContainer">
          <ProjectCard src={viberr} 
          link="https://github.com/Anshul123B/Real-Estate-Website" 
          h3="EstatePro"
          p="Real estate listing platform"
          />
          <ProjectCard 
            src={freshBurger} 
            link="https://github.com/Anshul123B/Shopping-Cart" 
            h3="FreshCart" 
            p="E-commerce cart app"
          />
          <ProjectCard 
            src={fitlift} 
            link="https://github.com/Anshul123B/2048-Game" 
            h3="TileTwister 2048" 
            p="2048 puzzle game"
          />
          <ProjectCard 
            src={hipsster} 
            link="https://github.com/Anshul123B/Text-To-Speech-Converter/tree/main/Text%20To%20Speech%20Converter" 
            h3="SpeakEasy" 
            p="Text-to-speech tool"
          />
        </div>
    </section>
  )
}

export default Project
