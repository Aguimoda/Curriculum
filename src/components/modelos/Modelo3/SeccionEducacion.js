import React from "react";
import EntradaEducacion from "./EntradaEducacion"; // Asegúrate de que la ruta de importación sea correcta

const SeccionEducacion = ({ educationEntries }) => {
  return (
    <div className="education-section">
      {educationEntries.map((entry, index) => (
        <EntradaEducacion
          key={index}
          title={entry.title}
          institution={entry.institution}
          duration={entry.duration}
        />
      ))}
    </div>
  );
};

export default SeccionEducacion;
