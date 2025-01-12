import React from "react";

const SeccionLenguajes = ({ data }) => (
  <div className="seccion-lenguajes">
    <ul>
      {data.map((lenguaje, index) => (
        <li key={index}>{lenguaje}</li>
      ))}
    </ul>
  </div>
);

export default SeccionLenguajes;
