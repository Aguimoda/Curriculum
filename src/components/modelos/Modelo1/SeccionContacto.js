import React from "react";

const SeccionContacto = ({ data }) => (
  <div className="seccion-contacto">
    <p>Teléfono: {data.telefono}</p>
    <p>Email: {data.email}</p>
    <p>Dirección: {data.direccion}</p>
    <p>
      GitHub: <a href={data.github}>{data.github}</a>
    </p>
    <p>
      LinkedIn: <a href={data.linkedin}>{data.linkedin}</a>
    </p>
  </div>
);

export default SeccionContacto;
