import React, { useState, useEffect } from "react";
import "../../../styles/componentes/modelos/Modelo1.scss";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import SeccionConocimientos from "./SeccionConocimientos";
import SeccionIdiomas from "./SeccionIdiomas";
import perfilImage from "../../../utils/images/perfil.jpg";

const Modelo1 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState(null);

  // Cargar datos del currículum según el idioma
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
    <div className="modelo1">
      <nav className="container-fluid">
        <ul>
          <li>
            <strong>{nombre}</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#experience">{secciones[1]}</a>
          </li>
          <li>
            <a href="#education">{secciones[2]}</a>
          </li>
          <li>
            <a href="#skills">{secciones[3]}</a>
          </li>
          <li>
            <a href="#languages">{secciones[4]}</a>
          </li>
        </ul>
      </nav>

      <main className="container">
        <div className="grid">
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
            {educacion.map((edu, index) => (
              <SeccionEducacion key={index} {...edu} />
            ))}
          </section>

          <section id="skills">
            <h2>{secciones[3]}</h2>
            <SeccionConocimientos conocimientos={conocimientos} />
          </section>

          <section id="languages">
            <h2>{secciones[4]}</h2>
            <SeccionIdiomas idiomas={idiomas} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Modelo1;
