import React from "react";

const SeccionIdiomas = ({ idiomas }) => {
  return (
    <div className="languages-section">
      <h3>Idiomas</h3>
      <ul>
        {idiomas.map((idioma, index) => (
          <li key={index}>{idioma}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeccionIdiomas;
