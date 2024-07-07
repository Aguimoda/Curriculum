// SeccionEducacion.jsx
import React from "react";
import SeccionBase from "./SeccionBase";
import EntradaEducacion from "./EntradaEducacion";

const SeccionEducacion = ({ educacion, tituloSeccion }) => {
  return (
    <SeccionBase>
      <h2>{tituloSeccion}</h2>
      {educacion.map((entry, index) => (
        <EntradaEducacion
          key={index}
          title={entry.titulo}
          institution={entry.institucion}
          duration={entry.duracion}
        />
      ))}
    </SeccionBase>
  );
};

export default SeccionEducacion;
