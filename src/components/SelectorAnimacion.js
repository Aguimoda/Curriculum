import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faSearchPlus,
  faArrowsAltH,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/componentes/SelectorAnimacion.scss";

function AnimationSelector({ animationType, setAnimationType }) {
  const animationOptions = [
    { name: "fade", icon: faAdjust },
    { name: "zoom", icon: faSearchPlus },
    { name: "slide", icon: faArrowsAltH },
    { name: "none", icon: faBan },
  ];

  return (
    <div className="animation-selector-container">
      <div className="header">Transiciones</div>
      {animationOptions.map((option) => (
        <button
          key={option.name}
          onClick={() => setAnimationType(option.name)}
          className={`option-button ${
            animationType === option.name ? "selected" : ""
          }`}
        >
          <FontAwesomeIcon icon={option.icon} size="lg" />
        </button>
      ))}
    </div>
  );
}

export default AnimationSelector;
