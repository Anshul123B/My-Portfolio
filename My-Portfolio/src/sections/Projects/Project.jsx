import React from 'react';
import './Project.css';
import viberr from '../../assets/viberr.png'

const Project = () => {
  return (
    <section id="projects" className="container">
        <h1 className="sectionTitle">Projects</h1>
        <div className="projectsContainer">
            <a href="https://github.com/Anshul123B/Real-Estate-Website">
            <img className="hover" src={viberr} alt="viberr logo" />
            </a>
            <h3>EstatePro</h3>
            <p>Real estate listing platform</p>            
        </div>
    </section>
  )
}

export default Project
