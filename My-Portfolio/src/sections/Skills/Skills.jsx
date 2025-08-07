import React, { useEffect, useRef } from 'react';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import './Skills.css';

const SkillList = ({ src, skill }) => {
  return (
    <div className="skillItem">
      <img src={src} alt="checkmark" />
      <span>{skill}</span>
    </div>
  );
};

const Skills = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('showSkills');
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillSection = skillRef.current;
    if (skillSection) observer.observe(skillSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skillsContainer" ref={skillRef}>
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
