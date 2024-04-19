// LanguageSelector.js
import React from "react";

const LanguageSelector = ({ setLanguage }) => {
  return (
    <div className="language-selector">
      <button onClick={() => setLanguage("en")}>EN</button>
      <button onClick={() => setLanguage("es")}>ES</button>
      <button onClick={() => setLanguage("de")}>DE</button>
    </div>
  );
};

export default LanguageSelector;
