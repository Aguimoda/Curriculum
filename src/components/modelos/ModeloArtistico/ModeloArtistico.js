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
  const [isVertical, setIsVertical] = useState(false);

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
      }
    };

    loadData();
  }, [language]);

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
    if (isVertical === true) {
      if (activeSection === id) {
        setIsVertical(false);
        setActiveSection(null);
      }
    } else {
      setActiveSection(id);
      setIsVertical(true);
    }
    // Activa la disposición vertical para todos los círculos
  };

  return (
    <div className="modelo-artistico">
      <h1>{nombre}</h1>
      <div className={`circles-container ${isVertical ? "vertical" : ""}`}>
        {sections.map((section) => (
          <Circulo
            key={section.id}
            title={section.title}
            isActive={section.id === activeSection}
            isLeft={section.id !== activeSection}
            stayInPlace={section.id === activeSection}
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
