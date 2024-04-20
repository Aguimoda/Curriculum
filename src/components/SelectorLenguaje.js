import React, { useState } from "react";
import "../styles/componentes/LanguageSelector.scss";
import selectorImage from "../utils/images/changeLanguage.png";
import esFlag from "../utils/images/esFlag.jpg";
import enFlag from "../utils/images/deFlag.jpg";
import deFlag from "../utils/images/enFlag.png";

const LanguageSelector = ({ setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector">
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={selectorImage} alt="Menu" />
      </button>
      {isOpen && (
        <div className="menu">
          <button
            onClick={() => {
              setLanguage("en");
              toggleMenu();
            }}
          >
            <img src={enFlag} alt="English" />
          </button>
          <button
            onClick={() => {
              setLanguage("es");
              toggleMenu();
            }}
          >
            <img src={esFlag} alt="Español" />
          </button>
          <button
            onClick={() => {
              setLanguage("de");
              toggleMenu();
            }}
          >
            <img src={deFlag} alt="Deutsch" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
