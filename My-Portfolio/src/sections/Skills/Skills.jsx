import React from 'react'
import './Skills.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h1>Skills</h1>
      <div className="skillList">
        <span>
        <img src={checkMarkIcon} alt="Checkmark icon" />
        <p>HTML</p>
        </span>
      </div>
    </section>
  )
}

export default Skills
