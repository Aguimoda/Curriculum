import React from "react";
import Modelo1 from "./modelos/Modelo1/Modelo1";
import Modelo2 from "./modelos/Modelo2/Modelo2";
import Modelo3 from "./modelos/Modelo3/Modelo3";
import "../styles/componentes/Curriculum.css";

const Curriculum = ({ currentModel, nextModel, isFlipping, direccion }) => {
  // Aplicar clases adicionales basadas en la dirección del giro
  const flipClass = isFlipping
    ? direccion === "adelante"
      ? "flipping-adelante"
      : "flipping-atras"
    : "";

  const getModelComponent = (modelName) => {
    switch (modelName) {
      case "modelo1":
        return <Modelo1 />;
      case "modelo2":
        return <Modelo2 />;
      case "modelo3":
        return <Modelo3 />;
      default:
        return null;
    }
  };

  return (
    <div className="flip-container">
      <div className={`flipper ${flipClass}`}>
        <div className="front">{getModelComponent(currentModel)}</div>
        <div className="back">{getModelComponent(nextModel)}</div>
      </div>
    </div>
  );
};

export default Curriculum;
