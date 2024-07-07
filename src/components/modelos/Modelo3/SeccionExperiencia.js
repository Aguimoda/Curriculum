// SeccionExperiencia.jsx
import React from "react";
import SeccionBase from "./SeccionBase";

const SeccionExperiencia = ({ experiencia, tituloSeccion }) => {
  return (
    <SeccionBase>
      <h2>{tituloSeccion}</h2>
      {experiencia.map((item, index) => (
        <div key={index}>
          <h3>{item.puesto}</h3>
          <p>{item.empresa}</p>
          <p>{item.duracion}</p>
          <ul>
            {item.labores.map((labor, idx) => (
              <li key={idx}>{labor}</li>
            ))}
          </ul>
        </div>
      ))}
    </SeccionBase>
  );
};

export default SeccionExperiencia;
