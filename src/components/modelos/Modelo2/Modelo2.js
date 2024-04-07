import React from "react";
import "../../../styles/componentes/modelos/Modelo2.css"; // Asegúrate de que el archivo CSS exista
import SeccionExperiencia from "./SeccionExperiencia"; // Asegúrate de que la ruta de importación sea correcta
import SeccionEducacion from "./SeccionEducacion"; // Asegúrate de que la ruta de importación sea correcta
import curriculumData from "../../../utils/JSON/curriculumData.json";
import perfilImage from "../../../utils/images/perfil.jpg"; // Import the image

const Modelo2 = () => {
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
    <div className="document">
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
          <section id="languages">
            <h2>Sprachen</h2>
            <p>{idiomas.join(", ")}</p>
          </section>
        </div>
        <div className="column">
          <section id="education">
            <h2>Ausbildung</h2>
            <div className="grid">
              <SeccionEducacion educationEntries={educationEntries} />
            </div>
          </section>
          <section id="skills">
            <h2>Kenntnisse</h2>
            <p>{conocimientos.join(", ")}</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Modelo2;
