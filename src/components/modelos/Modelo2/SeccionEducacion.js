import React from "react";

const SeccionEducacion = ({ titulo, institution, duration }) => {
  return (
    <div className="education-section">
      <h3>{titulo}</h3>
      <p>{institution}</p>
      <p>{duration}</p>
    </div>
  );
};

export default SeccionEducacion;
