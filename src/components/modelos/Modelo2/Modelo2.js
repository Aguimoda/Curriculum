import React, { useState, useEffect } from "react";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import perfilImage from "../../../utils/images/perfil.jpg";
import "../../../styles/componentes/modelos/Modelo2.scss";

const Modelo2 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(
          `../../../utils/JSON/curriculumData_${language}.json`
        );
        setCurriculumData(data.default);
      } catch (error) {
        console.error("Failed to load curriculum data:", error);
        setCurriculumData(null);
      }
    };

    loadData();
  }, [language]);

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  if (!curriculumData) {
    return <div>Loading...</div>; // O algún otro indicador de carga o error.
  }

  const {
    nombre,
    descripcion,
    experiencia,
    educacion,
    conocimientos,
    idiomas,
    secciones = [], // Asegurarse de que `secciones` tenga un valor por defecto si no está definido
  } = curriculumData;

  return (
    <div className="modelo2">
      <header className="header">
        <img src={perfilImage} alt="Daniel Moreno" className="profile-photo" />
        <div>
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
        </div>
      </header>
      <div className="horizontal-bars">
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <main className="content">
        <div className="column">
          {secciones.length > 1 && (
            <section
              id="experience"
              className={`animated-section ${
                hoveredSection === "experience" ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("experience")}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-content">{secciones[1]}</h2>
              {experiencia.map((exp, index) => (
                <div key={index} className="text-content">
                  <SeccionExperiencia
                    title={exp.puesto}
                    period={exp.duracion}
                    details={exp.labores}
                  />
                </div>
              ))}
            </section>
          )}
          {secciones.length > 4 && (
            <section
              id="languages"
              className={`animated-section ${
                hoveredSection === "languages" ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("languages")}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-content">{secciones[4]}</h2>
              <ul className="text-content">
                {idiomas.map((idioma, index) => (
                  <li key={index}>{`${idioma.idioma} - ${idioma.nivel}`}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
        <div className="column">
          {secciones.length > 2 && (
            <section
              id="education"
              className={`animated-section ${
                hoveredSection === "education" ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("education")}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-content">{secciones[2]}</h2>
              {educacion.map((edu, index) => (
                <div key={index} className="text-content">
                  <SeccionEducacion
                    titulo={edu.titulo}
                    institution={edu.institucion}
                    duration={edu.duracion}
                    description={edu.descripcion}
                  />
                </div>
              ))}
            </section>
          )}
          {secciones.length > 3 && (
            <section
              id="skills"
              className={`animated-section ${
                hoveredSection === "skills" ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("skills")}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-content">{secciones[3]}</h2>
              <ul className="text-content">
                {conocimientos.map((conocimiento, index) => (
                  <li key={index}>{conocimiento}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Modelo2;
