import React, { useState, useEffect } from "react";
import "../../../styles/componentes/modelos/ModeloArtistico.scss";
import Circulo from "./Circulo";

const ModeloArtistico = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState({
    experiencia: [],
    educacion: [],
    conocimientos: [],
    idiomas: [],
    nombre: "",
    descripcion: "",
    secciones: [],
  });
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(
          `../../../utils/JSON/curriculumData_${language}.json`
        );
        setCurriculumData(data.default);
      } catch (error) {
        console.error(
          "Failed to load curriculum data for language:",
          language,
          error
        );
        // Manejo de error, opcionalmente resetear datos o mostrar mensaje de error
      }
    };

    loadData();
  }, [language]); // Dependencia en `language` para recargar datos al cambiar el idioma

  const {
    experiencia,
    educacion,
    conocimientos,
    idiomas,
    nombre,
    descripcion,
    secciones,
  } = curriculumData;

  const sections = [
    { id: "descripcion", title: secciones[0], content: descripcion },
    {
      id: "experiencia",
      title: secciones[1],
      content: experiencia.map((e) => e.puesto).join(", "),
    },
    {
      id: "educacion",
      title: secciones[2],
      content: educacion.map((e) => e.titulo).join(", "),
    },
    {
      id: "habilidades",
      title: secciones[3],
      content: conocimientos.join(", "),
    },
    { id: "idiomas", title: secciones[4], content: idiomas.join(", ") },
  ];

  const handleClick = (id) => {
    setActiveSection(id === activeSection ? null : id);
  };

  return (
    <div className="modelo-artistico">
      <h1>{nombre}</h1>
      <div className="circles-container">
        {sections.map((section) => (
          <Circulo
            key={section.id}
            title={section.title}
            isActive={section.id === activeSection}
            onClick={() => handleClick(section.id)}
          />
        ))}
      </div>
      {activeSection && (
        <div className="section-content">
          {sections.find((section) => section.id === activeSection).content}
        </div>
      )}
    </div>
  );
};

export default ModeloArtistico;
