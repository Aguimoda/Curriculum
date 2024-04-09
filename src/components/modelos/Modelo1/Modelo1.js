import React from "react";
import "../../../styles/componentes/modelos/Modelo1.scss";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import SeccionConocimientos from "./SeccionConocimientos";
import SeccionIdiomas from "./SeccionIdiomas";
import curriculumData from "../../../utils/JSON/curriculumData.json";
import perfilImage from "../../../utils/images/perfil.jpg";

const Modelo1 = () => {
  const {
    nombre,
    descripcion,
    experiencia,
    educacion,
    conocimientos,
    idiomas,
  } = curriculumData;

  const experiences = experiencia.map((exp) => ({
    title: exp.puesto,
    period: exp.duracion,
    details: exp.labores,
  }));

  const educationEntries = educacion.map((edu) => ({
    title: edu.titulo,
    institution: edu.institucion,
    duration: edu.duracion,
  }));

  return (
    <div className="modelo1">
      <nav class="container-fluid">
        <ul>
          <li>
            <strong>{nombre}</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#experience">Berufserfahrung</a>
          </li>
          <li>
            <a href="#education">Ausbildung</a>
          </li>
          <li>
            <a href="#skills">Kenntnisse</a>
          </li>
          <li>
            <a href="#languages">Sprachen</a>
          </li>
        </ul>
      </nav>

      <main class="container">
        <div class="grid">
          <section id="experience">
            <h2>Berufserfahrung</h2>
            {experiences &&
              experiences.map((exp, index) => (
                <SeccionExperiencia
                  key={index}
                  title={exp.title}
                  period={exp.period}
                  details={exp.details}
                />
              ))}
          </section>

          <section id="education">
            <h2>Ausbildung</h2>
            {educacion &&
              educacion.map((edu, index) => (
                <SeccionEducacion key={index} {...edu} />
              ))}
          </section>

          <section id="skills">
            <h2>Kenntnisse</h2>
            <SeccionConocimientos conocimientos={conocimientos} />
          </section>

          <section id="languages">
            <h2>Sprachen</h2>
            <SeccionIdiomas idiomas={idiomas} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Modelo1;
