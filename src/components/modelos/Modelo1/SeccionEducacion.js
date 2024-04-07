import React from "react";

const EducationSection = ({ institution, period, details = [] }) => {
  // El valor predeterminado de details es un array vacío
  return (
    <div className="education-section">
      <h3>{institution}</h3>
      <p className="period">{period}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationSection;
