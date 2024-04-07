import React from "react";

const EntradaEducacion = ({ title, institution, duration }) => {
  return (
    <div className="education-entry">
      <span className="education-title">{title}</span>
      <br />
      <span className="education-institution">{institution}</span>
      <br />
      <span className="education-duration">{duration}</span>
    </div>
  );
};

export default EntradaEducacion;
