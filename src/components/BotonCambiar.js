import React from "react";
import "../assets/styles/components/BotonCambiar.scss";

const BotonCambiar = ({ onFlip, direccion, clase }) => {
  return (
    <div className="botonCambiar">
      <button className={clase} onClick={onFlip}>
        {direccion === "adelante" ? "🡺" : "🡸"}
      </button>
    </div>
  );
};

export default BotonCambiar;
