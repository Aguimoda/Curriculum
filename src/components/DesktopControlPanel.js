import React, { useState, useEffect, useRef } from "react";
import "../styles/componentes/DesktopControlPanel.scss";
import enFlag from "../utils/images/enFlag.png";
import esFlag from "../utils/images/esFlag.jpg";
import deFlag from "../utils/images/deFlag.jpg";
import arrowIcon from "../utils/images/expand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faSearchPlus,
  faArrowsAltH,
  faPaintBrush, // Import the new icon
} from "@fortawesome/free-solid-svg-icons";

const flags = {
  en: enFlag,
  es: esFlag,
  de: deFlag,
};

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
  toggleFullViewStyle, // Add the new prop
}) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const panelRef = useRef(null);

  const handleLanguageClick = (e) => {
    e.stopPropagation();
    setIsLanguageOpen(!isLanguageOpen);
  };

  const closeLanguageMenu = () => {
    setIsLanguageOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        closeLanguageMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageRef]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(true); // Mantener el menú abierto
  };

  const handleExpandIconClick = (e) => {
    e.stopPropagation();
    toggleControls();
  };
  const handlePanelClick = (e) => {
    // Verifica si el clic no se realizó en un botón o control específico
    if (
      !e.target.closest(".view-toggle-button") &&
      !e.target.closest(".selected-flag") &&
      !e.target.closest(".expand-icon") &&
      !e.target.closest(".flag") &&
      !e.target.closest(".icon")
    ) {
      toggleControls();
    }
  };
  return (
    <div
      className={`mobile-control-panel ${isExpanded ? "expanded" : ""}`}
      onClick={handlePanelClick}
      ref={panelRef}
    >
      <div className="mobile-control-header">
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
          className="full-view-style-toggle-button"
          onClick={(e) => {
            e.stopPropagation();
            toggleFullViewStyle();
          }}
        >
          <FontAwesomeIcon
            icon={faPaintBrush}
            size="lg"
            alt="Full View Style"
            className="icon"
          />
          Cambiar el estilo de vista
          {t("toggle_full_view_style")}
        </button>
        <div
          className={`language-selector ${isLanguageOpen ? "open" : ""}`}
          onClick={handleLanguageClick}
          ref={languageRef}
        >
          <img
            src={flags[language]}
            alt="Selected Language"
            className="selected-flag"
          />
          <div className="flag-container" onClick={(e) => e.stopPropagation()}>
            <img
              src={flags["en"]}
              alt="English"
              className={`flag ${language === "en" ? "active" : ""}`}
              onClick={() => handleLanguageChange("en")}
            />
            <img
              src={flags["es"]}
              alt="Español"
              className={`flag ${language === "es" ? "active" : ""}`}
              onClick={() => handleLanguageChange("es")}
            />
            <img
              src={flags["de"]}
              alt="Deutsch"
              className={`flag ${language === "de" ? "active" : ""}`}
              onClick={() => handleLanguageChange("de")}
            />
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Expand/Collapse"
          className="expand-icon"
          onClick={handleExpandIconClick}
        />
      </div>
      {isExpanded && (
        <div className="mobile-control-content">
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
