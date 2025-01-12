import React from "react";

const SeccionEducacion = ({ data }) => (
  <div className="seccion-educacion">
    {data.map((item, index) => (
      <div key={index}>
        <h3>{item.titulo}</h3>
        <p>{item.institucion}</p>
        <p>{item.duracion}</p>
        <p>{item.descripcion}</p>
      </div>
    ))}
  </div>
);

export default SeccionEducacion;
