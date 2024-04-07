import React from "react";

const ExperienceSection = ({ title, period, details }) => {
  return (
    <div className="experience-section">
      <h3>{title}</h3>
      <p className="period">{period}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
