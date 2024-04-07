import React from "react";
import "../styles/componentes/BotonCambiar.css";

const BotonCambiar = ({ onFlip, direccion, clase }) => {
  return (
    <button class={clase} onClick={onFlip}>
      {direccion === "adelante" ? "Siguiente" : "Anterior"}
    </button>
  );
};

export default BotonCambiar;
