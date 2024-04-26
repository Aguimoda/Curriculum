// EntradaEducacion.jsx
import React from "react";

const EntradaEducacion = ({ title, institution, duration }) => {
  return (
    <div className="education-entry">
      <h3>{title}</h3>
      <p>{institution}</p>
      <p>{duration}</p>
    </div>
  );
};

export default EntradaEducacion;
