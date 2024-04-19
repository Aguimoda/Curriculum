import React, { useState, useEffect } from "react";
import "../../../styles/componentes/modelos/Modelo3.scss";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import SeccionConocimientos from "./SeccionConocimientos";

const Modelo3 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState({
    experiencia: [],
    educacion: [],
    conocimientos: [],
    idiomas: [],
    secciones: [],
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Asegúrate de que el nombre del archivo y la ruta sean correctos y reflejen cómo quieres gestionar los datos de idiomas
        const data = await import(
          `../../../utils/JSON/curriculumData_${language}.json`
        );
        setCurriculumData(data.default);
        setError(false);
      } catch (error) {
        console.error("Failed to load curriculum data:", error);
        setError(true);
        // Puedes optar por no establecer valores vacíos aquí si prefieres renderizar un mensaje de error en su lugar.
        setCurriculumData({
          experiencia: [],
          educacion: [],
          conocimientos: [],
          idiomas: [],
          secciones: [],
        });
      }
    };

    loadData();
  }, [language]);

  if (error) {
    return <div>Error al cargar los datos del currículum.</div>;
  }

  const {
    experiencia,
    educacion,
    conocimientos,
    idiomas,
    descripcion,
    secciones,
  } = curriculumData;

  return (
    <div className="modelo3">
      <div className="content-container">
        <header className="header">
          <h1>Daniel Moreno</h1>
          <p>{descripcion}</p>
        </header>

        <section id="experience">
          <h2>{secciones[1]}</h2>
          {experiencia.map((exp, index) => (
            <SeccionExperiencia
              key={index}
              title={exp.puesto}
              period={exp.duracion}
              details={exp.labores}
            />
          ))}
        </section>

        <section id="education">
          <h2>{secciones[2]}</h2>
          <SeccionEducacion educationEntries={educacion} />
        </section>

        <section id="skills">
          <h2>{secciones[3]}</h2>
          <SeccionConocimientos conocimientos={conocimientos} />
        </section>

        <section id="languages">
          <h2>{secciones[4]}</h2>
          <p>{idiomas.join(", ")}</p>
        </section>
      </div>
    </div>
  );
};

export default Modelo3;
