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
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#languages">Languages</a>
          </li>
        </ul>
      </nav>

      <main className="container">
        <div className="grid">
          <section id="experience">
            <h2>Experience</h2>
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
            <h2>Education</h2>
            {educacion.map((edu, index) => (
              <SeccionEducacion key={index} {...edu} />
            ))}
          </section>

          <section id="skills">
            <h2>Skills</h2>
            <SeccionConocimientos conocimientos={conocimientos} />
          </section>

          <section id="languages">
            <h2>Languages</h2>
            <SeccionIdiomas idiomas={idiomas} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Modelo1;
