import React, { useState, useEffect } from "react";
import "../../../styles/componentes/modelos/Modelo2.scss";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import perfilImage from "../../../utils/images/perfil.jpg";

const Modelo2 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState({
    nombre: "",
    descripcion: "",
    experiencia: [],
    educacion: [],
    conocimientos: [],
    idiomas: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(
          `../../../utils/JSON/curriculumData_${language}.json`
        );
        setCurriculumData(data.default);
      } catch (error) {
        console.error("Failed to load curriculum data:", error);
        // Maneja el caso de error, por ejemplo, mostrando un mensaje al usuario
        setCurriculumData({ experiencia: [], educacion: [] }); // Inicializa con estructuras vacías
      }
    };

    loadData();
  }, [language]);

  const {
    nombre,
    descripcion,
    experiencia,
    educacion,
    conocimientos,
    idiomas,
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
          <section id="languages">
            <h2>Sprachen</h2>
            <p>{idiomas?.join(", ")}</p>
          </section>
        </div>
        <div className="column">
          <section id="education">
            <h2>Ausbildung</h2>
            {educacion.map((edu, index) => (
              <SeccionEducacion
                key={index}
                titulo={edu.titulo}
                institution={edu.institucion}
                duration={edu.duracion}
              />
            ))}
          </section>
          <section id="skills">
            <h2>Kenntnisse</h2>
            <p>{conocimientos?.join(", ")}</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Modelo2;
