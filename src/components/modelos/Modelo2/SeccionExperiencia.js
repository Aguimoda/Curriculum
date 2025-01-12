import React from "react";

const SeccionExperiencia = ({ title, period, details }) => (
  <div className="experience-item">
    <h3>{title}</h3>
    <p>{period}</p>
    {Array.isArray(details) ? (
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    ) : (
      <p>{details}</p>
    )}
  </div>
);

export default SeccionExperiencia;
