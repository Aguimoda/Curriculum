import React from "react";
import "../../../styles/componentes/modelos/Modelo3.scss";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import SeccionConocimientos from "./SeccionConocimientos";
import curriculumData from "../../../utils/JSON/curriculumData.json";

const Modelo3 = () => {
  const { experiencia, educacion, conocimientos, idiomas } = curriculumData;

  return (
    <div className="modelo3">
      <div className="content-container">
        <header className="header">
          <h1>Daniel Moreno</h1>
          <p>
            24 Jahre alt, Front-End Student mit Erfahrung als Freiberuflicher in
            der Entwicklung von Websites und Kenntnissen in mehreren
            Programmiersprachen. Ich bin eine sehr neugierige, analytische und
            kreative Person.
          </p>
        </header>

        <section id="experience">
          <h2>Berufserfahrung</h2>
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
          <h2>Ausbildung</h2>
          <SeccionEducacion educationEntries={educacion} />
        </section>

        <section id="skills">
          <h2>Kenntnisse</h2>
          <SeccionConocimientos conocimientos={conocimientos} />
        </section>

        <section id="languages">
          <h2>Sprachen</h2>
          <p>{idiomas.join(", ")}</p>
        </section>
      </div>
    </div>
  );
};

export default Modelo3;
