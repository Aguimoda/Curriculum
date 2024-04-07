import React from "react";
import Conocimiento from "./Conocimiento.js";

const SeccionConocimientos = ({ conocimientos }) => {
  return (
    <div className="skills-section">
      {conocimientos.map((skill, index) => (
        <Conocimiento key={index} titulo={skill} />
      ))}
    </div>
  );
};

export default SeccionConocimientos;
