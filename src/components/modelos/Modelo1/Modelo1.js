import React, { useState, useEffect } from "react";
import "../../../styles/componentes/modelos/Modelo1.scss";
import Card from "./Card";

const Modelo1 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(
          `../../../utils/JSON/curriculumData_${language}.json`
        );
        setCurriculumData(data.default);
      } catch (error) {
        console.error("Failed to load curriculum data:", error);
      }
    };

    loadData();
  }, [language]);

  if (!curriculumData) {
    return <div>Loading...</div>; // O algún otro indicador de carga o error.
  }

  const { experiencia, educacion, conocimientos, idiomas, secciones } =
    curriculumData;

  return (
    <div className="modelo1">
      <main className="container">
        {secciones.length > 1 && (
          <Card section="experience" data={experiencia} title={secciones[1]} />
        )}
        {secciones.length > 2 && (
          <Card section="education" data={educacion} title={secciones[2]} />
        )}
        {secciones.length > 3 && (
          <Card
            section="skills"
            data={conocimientos.map((conocimiento) => ({
              nombre: conocimiento,
            }))}
            title={secciones[3]}
          />
        )}
        {secciones.length > 4 && (
          <Card
            section="languages"
            data={idiomas.map((idioma) => ({
              nombre: idioma.idioma,
              nivel: idioma.nivel,
            }))}
            title={secciones[4]}
          />
        )}
      </main>
    </div>
  );
};

export default Modelo1;
