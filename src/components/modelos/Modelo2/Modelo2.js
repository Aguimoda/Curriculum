import React, { useState, useEffect } from "react";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import perfilImage from "../../../utils/images/perfil.jpg";
import TigerSpots from "./TigerSpots"; // Asegúrate de que la ruta es correcta
import "../../../styles/componentes/modelos/Modelo2.scss";

const Modelo2 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState({
    nombre: "",
    descripcion: "",
    experiencia: [],
    educacion: [],
    conocimientos: [],
    idiomas: [],
    secciones: [],
  });
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
        setCurriculumData({ experiencia: [], educacion: [] });
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

  const {
    nombre,
    descripcion,
    experiencia,
    educacion,
    conocimientos,
    idiomas,
    secciones,
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
          <section
            id="experience"
            className="animated-section"
            onMouseEnter={() => handleMouseEnter("experience")}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="text-content">{secciones[1]}</h2>
            {experiencia.map((exp, index) => (
              <SeccionExperiencia
                key={index}
                title={exp.puesto}
                period={exp.duracion}
                details={exp.labores}
                className="text-content"
              />
            ))}
            <TigerSpots hovered={hoveredSection === "experience"} />
          </section>
          <section
            id="languages"
            className="animated-section"
            onMouseEnter={() => handleMouseEnter("languages")}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="text-content">{secciones[4]}</h2>
            <p className="text-content">{idiomas?.join(", ")}</p>
            <TigerSpots hovered={hoveredSection === "languages"} />
          </section>
        </div>
        <div className="column">
          <section
            id="education"
            className="animated-section"
            onMouseEnter={() => handleMouseEnter("education")}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="text-content">{secciones[2]}</h2>
            {educacion.map((edu, index) => (
              <SeccionEducacion
                key={index}
                titulo={edu.titulo}
                institution={edu.institucion}
                duration={edu.duracion}
                className="text-content"
              />
            ))}
            <TigerSpots hovered={hoveredSection === "education"} />
          </section>
          <section
            id="skills"
            className="animated-section"
            onMouseEnter={() => handleMouseEnter("skills")}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="text-content">{secciones[3]}</h2>
            <p className="text-content">{conocimientos?.join(", ")}</p>
            <TigerSpots hovered={hoveredSection === "skills"} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Modelo2;
