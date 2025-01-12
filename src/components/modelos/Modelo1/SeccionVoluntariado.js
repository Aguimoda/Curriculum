import React from "react";

const SeccionVoluntariado = ({ data }) => (
  <div className="seccion-voluntariado">
    {data.map((voluntariado, index) => (
      <p key={index}>
        {voluntariado.organizacion}: {voluntariado.duracion}
      </p>
    ))}
  </div>
);

export default SeccionVoluntariado;
