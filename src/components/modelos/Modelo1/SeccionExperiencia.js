import React from "react";

const SeccionExperiencia = ({ data }) => (
  <div className="seccion-experiencia">
    {data.map((item, index) => (
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
  </div>
);

export default SeccionExperiencia;
