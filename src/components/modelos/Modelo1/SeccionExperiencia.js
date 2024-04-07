import React from "react";

const SeccionExperiencia = ({ puesto, empresa, duracion, labores }) => {
  return (
    <div className="experience-item">
      <h3>
        {puesto} - {empresa}
      </h3>
      <p>{duracion}</p>
      <ul>
        {labores.map((labor, index) => (
          <li key={index}>{labor}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeccionExperiencia;
