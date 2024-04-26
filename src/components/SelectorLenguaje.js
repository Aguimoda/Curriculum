import React from "react";
import "../styles/componentes/LanguageSelector.scss";
import esFlag from "../utils/images/esFlag.jpg";
import enFlag from "../utils/images/enFlag.jpg";
import deFlag from "../utils/images/deFlag.png";

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className="language-selector">
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "selected" : ""}
      >
        <img src={enFlag} alt="English" />
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={language === "es" ? "selected" : ""}
      >
        <img src={esFlag} alt="Español" />
      </button>
      <button
        onClick={() => setLanguage("de")}
        className={language === "de" ? "selected" : ""}
      >
        <img src={deFlag} alt="Deutsch" />
      </button>
    </div>
  );
};

export default LanguageSelector;
