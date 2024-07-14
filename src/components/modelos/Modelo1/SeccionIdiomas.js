import React from "react";

const SeccionIdiomas = ({ idioma, nivel }) => (
  <div className="idiomas-section">
    <h3>{idioma}</h3>
    <p>{nivel}</p>
  </div>
);

export default SeccionIdiomas;
