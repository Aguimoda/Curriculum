import React, { useState } from "react";
import Circulo from "./Circulo";
import curriculumData from "../../../utils/JSON/curriculumData.json";

import "../../../styles/componentes/modelos/ModeloArtistico.scss"; // Asegúrate de crear este archivo de estilos

const ModeloArtistico = () => {
  const [activeSection, setActiveSection] = useState(null);
  const {
    experiencia,
    educacion,
    conocimientos,
    idiomas,
    nombre,
    descripcion,
  } = curriculumData;

  const sections = [
    { id: "descripcion", title: "Descripción", content: descripcion },
    {
      id: "experiencia",
      title: "Experiencia",
      content: experiencia.map((e) => e.puesto).join(", "),
    },
    {
      id: "educacion",
      title: "Educación",
      content: educacion.map((e) => e.titulo).join(", "),
    },
    {
      id: "habilidades",
      title: "Habilidades",
      content: conocimientos.join(", "),
    },
    { id: "idiomas", title: "Idiomas", content: idiomas.join(", ") },
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
