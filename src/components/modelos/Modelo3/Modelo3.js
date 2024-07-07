// Modelo3.jsx
import React, { useState, useEffect } from "react";
import Chincheta from "./Chincheta";
import SeccionBase from "./SeccionBase";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DndProvider } from "react-dnd";

const Modelo3 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const data = await import(
        `../../../utils/JSON/curriculumData_${language}.json`
      );
      setCurriculumData(data.default);
    };
    loadData();
  }, [language]);

  const handlePinChange = (pinned) => {
    console.log(`Pin status changed: ${pinned}`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      78
      <div>
        {curriculumData.secciones &&
          curriculumData.secciones.map((sec, index) => (
            <SeccionBase
              key={index}
              onTogglePinned={handlePinChange} // Asegurarse de pasar esta prop correctamente
            >
              <h2>{sec.titulo}</h2>
              <p>{sec.contenido}</p>
            </SeccionBase>
          ))}
        <Chincheta
          id={1}
          onDrop={(name, id) =>
            console.log(`Chincheta ${id} dropped on ${name}`)
          }
        />
      </div>
    </DndProvider>
  );
};

export default Modelo3;
