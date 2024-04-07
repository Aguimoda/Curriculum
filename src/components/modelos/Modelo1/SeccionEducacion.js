import React from "react";

const SeccionEducacion = ({ titulo, institucion, duracion }) => {
  return (
    <div className="education-section">
      <h3>{titulo}</h3>
      <p className="institution">{institucion}</p>
      <p className="duration">{duracion}</p>
    </div>
  );
};

export default SeccionEducacion;
