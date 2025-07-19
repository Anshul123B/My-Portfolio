import React from 'react';

const SkillList = ({ src, skill }) => {
  return (
    <span className="skillItem">
      <img src={src} alt="Checkmark icon" />
      <p style={{ margin: 0 }}>{skill}</p>
    </span>
  );
};

export default SkillList;
