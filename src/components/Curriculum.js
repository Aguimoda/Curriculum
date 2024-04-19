import React from "react";
import Modelo1 from "./modelos/Modelo1/Modelo1";
import Modelo2 from "./modelos/Modelo2/Modelo2";
import Modelo3 from "./modelos/Modelo3/Modelo3";
import ModeloArtistico from "./modelos/ModeloArtistico/ModeloArtistico";
import "../styles/componentes/Curriculum.scss";

const Curriculum = ({
  currentModel,
  nextModel,
  isFlipping,
  direccion,
  language,
}) => {
  // Función para obtener el componente del modelo correspondiente basado en el idioma
  const getModelComponent = (modelName) => {
    switch (modelName) {
      case "modelo1":
        return <Modelo1 language={language} />;
      case "modelo2":
        return <Modelo2 language={language} />;
      case "modelo3":
        return <Modelo3 language={language} />;
      case "modeloA":
        return <ModeloArtistico language={language} />;
      default:
        return null;
    }
  };

  // Clase de animación basada en la dirección del flip
  const flipClass = isFlipping
    ? direccion === "adelante"
      ? "flipping-adelante"
      : "flipping-atras"
    : "";

  return (
    <div className="curriculum">
      <div className={`flip-container`}>
        <div className={`flipper ${flipClass}`}>
          <div className="front">{getModelComponent(currentModel)}</div>
          <div className="back">{getModelComponent(nextModel)}</div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
