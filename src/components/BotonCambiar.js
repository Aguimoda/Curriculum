import React from "react";
import "../styles/componentes/BotonCambiar.scss";

const BotonCambiar = ({ onFlip, direccion, clase }) => {
  return (
    <div className="botonCambiar">
      <button className={clase} onClick={onFlip}>
        {direccion === "adelante" ? "Siguiente" : "Anterior"}
      </button>
    </div>
  );
};

export default BotonCambiar;
