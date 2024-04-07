import React from "react";
import Conocimiento from "./Conocimiento.js";

const SeccionConocimientos = ({ conocimientos }) => {
  // Verificar que conocimientos es un array
  if (!Array.isArray(conocimientos)) {
    return null; // O puedes renderizar algún mensaje de error o componente de fallback
  }

  return (
    <div className="skills-section">
      {conocimientos.map((skill, index) => (
        <Conocimiento key={index} titulo={skill} />
      ))}
    </div>
  );
};

export default SeccionConocimientos;
