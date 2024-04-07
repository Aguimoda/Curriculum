import React from "react";
import "../../../styles/componentes/modelos/Modelo2.css"; // Asegúrate de que el archivo CSS exista
import SeccionExperiencia from "./SeccionExperiencia"; // Asegúrate de que la ruta de importación sea correcta
import SeccionEducacion from "./SeccionEducacion"; // Asegúrate de que la ruta de importación sea correcta
import curriculumData from "../../../utils/JSON/curriculumData.json";
import perfilImage from "../../../utils/images/perfil.jpg"; // Import the image
import SeccionConocimientos from "./SeccionConocimientos"; // Asegúrate de que la ruta de importación sea correcta

const Modelo3 = () => {
  const {
    nombre,
    descripcion,
    experiencia,
    educacion,
    conocimientos,
    idiomas,
  } = curriculumData;

  // Transformando la experiencia del JSON para adaptarse a SeccionExperiencia
  const experiences = experiencia.map((exp) => ({
    title: exp.puesto,
    period: exp.duracion,
    details: exp.labores,
  }));

  // Transformando la educación del JSON para adaptarse a SeccionEducacion
  const educationEntries = educacion.map((edu) => ({
    title: edu.titulo,
    institution: edu.institucion,
    duration: edu.duracion,
  }));

  return (
    <main class="container">
      <header>
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
        {experiences.map((exp, index) => (
          <SeccionExperiencia
            key={index}
            title={exp.title}
            period={exp.period}
            details={exp.details}
          />
        ))}{" "}
      </section>

      <section id="education">
        <h2>Ausbildung</h2>
        <div className="grid">
          <SeccionEducacion educationEntries={educationEntries} />
        </div>
      </section>

      <section>
        <h2>Kenntnisse</h2>
        <ul class="skills-list">
          <SeccionConocimientos conocimientos={conocimientos} />
        </ul>
      </section>

      <section>
        <h2>Sprachen</h2>
        <ul class="languages-list">
          <p>{idiomas.join(", ")}</p>
        </ul>
      </section>
    </main>
  );
};

export default Modelo3;
