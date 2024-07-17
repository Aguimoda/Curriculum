import React from "react";
import "../styles/componentes/DesktopControlPanel.scss";
import enFlag from "../utils/images/enFlag.png";
import esFlag from "../utils/images/esFlag.jpg";
import deFlag from "../utils/images/deFlag.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faSearchPlus,
  faArrowsAltH,
} from "@fortawesome/free-solid-svg-icons";

const DesktopControlPanel = ({
  toggleModel,
  isExpanded,
  toggleControls,
  language,
  setLanguage,
  animationType,
  setAnimationType,
  currentModel,
  t,
}) => {
  return (
    <div className={`control-panel ${isExpanded ? "expanded" : ""}`}>
      <div className="control-header">
        <button
          className="view-toggle-button"
          onClick={(e) => {
            e.stopPropagation();
            toggleModel();
          }}
        >
          {currentModel === "sections"
            ? t("view_complete")
            : t("view_sections")}
        </button>
        <button
          className="expand-button"
          onClick={(e) => {
            e.stopPropagation();
            toggleControls();
          }}
        >
          {isExpanded ? t("close") : t("more_options")}
        </button>
      </div>
      {isExpanded && (
        <div className="control-content">
          <div className="language-selector">
            <div className="flags">
              <img
                src={enFlag}
                alt="English"
                className={`flag ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
              />
              <img
                src={esFlag}
                alt="Español"
                className={`flag ${language === "es" ? "active" : ""}`}
                onClick={() => setLanguage("es")}
              />
              <img
                src={deFlag}
                alt="Deutsch"
                className={`flag ${language === "de" ? "active" : ""}`}
                onClick={() => setLanguage("de")}
              />
            </div>
          </div>
          <div className="animation-selector">
            <div className="animations">
              <FontAwesomeIcon
                icon={faAdjust}
                size="lg"
                alt="Fade"
                className={`icon ${animationType === "fade" ? "active" : ""}`}
                onClick={() => setAnimationType("fade")}
                title={t("fade")}
              />
              <FontAwesomeIcon
                icon={faArrowsAltH}
                size="lg"
                alt="Slide"
                className={`icon ${animationType === "slide" ? "active" : ""}`}
                onClick={() => setAnimationType("slide")}
                title={t("slide")}
              />
              <FontAwesomeIcon
                icon={faSearchPlus}
                size="lg"
                alt="Zoom"
                className={`icon ${animationType === "zoom" ? "active" : ""}`}
                onClick={() => setAnimationType("zoom")}
                title={t("zoom")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopControlPanel;
