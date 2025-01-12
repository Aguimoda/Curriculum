import React from "react";

const SeccionIdiomas = ({ data }) => (
  <div className="seccion-idiomas">
    {data.map((idioma, index) => (
      <p key={index}>
        {idioma.idioma}: {idioma.nivel}
      </p>
    ))}
  </div>
);

export default SeccionIdiomas;
