import React from "react";
import Modelo1 from "./modelos/Modelo1/Modelo1";
import Modelo2 from "./modelos/Modelo2/Modelo2";
import Modelo3 from "./modelos/Modelo3/Modelo3";
import "../styles/componentes/Curriculum.scss";

const Curriculum = ({ currentModel, nextModel, isFlipping, direccion }) => {
  // Determinar la clase de animación basada en la dirección
  const flipClass = isFlipping
    ? direccion === "adelante"
      ? "flipping-adelante"
      : "flipping-atras"
    : "";

  // Función para obtener el componente del modelo correspondiente
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
    <div className="curriculum">
      <div className="flip-container">
        <div className={`flipper ${flipClass}`}>
          {/* Cara frontal mostrando el modelo actual */}
          <div className="front">{getModelComponent(currentModel)}</div>

          {/* Cara trasera mostrando el siguiente modelo */}
          <div className="back">{getModelComponent(nextModel)}</div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
