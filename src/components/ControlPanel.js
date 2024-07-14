import React from "react";
import BotonCambiar from "../components/BotonCambiar";
import LanguageSelector from "../components/SelectorLenguaje";
import AnimationSelector from "../components/SelectorAnimacion";
import "../styles/componentes/ControlPanel.scss";

const ControlPanel = ({
  onFlipNext,
  onFlipPrevious,
  isExpanded,
  toggleControls,
  language,
  setLanguage,
  animationType,
  setAnimationType,
}) => {
  const handlePanelClick = (e) => {
    // Prevenir la expansión del panel si se hace clic en los botones de flecha
    if (e.target.closest(".boton-cambiar")) {
      return;
    }
    toggleControls();
  };

  const handleFlip = (direction, e) => {
    e.stopPropagation(); // Prevenir la expansión del panel
    if (direction === "atras") {
      onFlipPrevious();
    } else {
      onFlipNext();
    }
  };

  return (
    <div
      className={`control-panel ${isExpanded ? "expanded" : ""}`}
      onClick={handlePanelClick}
    >
      <div className="fixed-controls">
        <BotonCambiar
          onFlip={(e) => handleFlip("atras", e)}
          direccion="atras"
          className="boton-cambiar"
        />
        <BotonCambiar
          onFlip={(e) => handleFlip("adelante", e)}
          direccion="adelante"
          className="boton-cambiar"
        />
      </div>
      {isExpanded && (
        <div className="controls">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <AnimationSelector
            animationType={animationType}
            setAnimationType={setAnimationType}
          />
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
