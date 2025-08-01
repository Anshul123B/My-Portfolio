import React from 'react';
import './Skills.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

const Skills = () => {
  return (
    <section id="skills" className="skillsContainer">
      <h1>Skills</h1>
      <div className="skillList">
  <div className="skillGroup">
    <SkillList src={checkMarkIcon} skill="HTML" />
    <SkillList src={checkMarkIcon} skill="CSS" />
    <SkillList src={checkMarkIcon} skill="JavaScript" />
    <SkillList src={checkMarkIcon} skill="NodeJs" />
  </div>
  <hr />
  <div className="skillGroup">
    <SkillList src={checkMarkIcon} skill="ReactJs" />
    <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
    <SkillList src={checkMarkIcon} skill="Git" />
    <SkillList src={checkMarkIcon} skill="GitHub" />
  </div>
  <hr />
  <div className="skillGroup">
    <SkillList src={checkMarkIcon} skill="C" />
    <SkillList src={checkMarkIcon} skill="C++" />
    <SkillList src={checkMarkIcon} skill="Java" />
  </div>
</div>
    </section>
  );
};
export default Skills;
