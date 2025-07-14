import React from 'react';
import './Project.css';
import viberr from '../../assets/viberr.png'
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
        </div>
    </section>
  )
}

export default Project
