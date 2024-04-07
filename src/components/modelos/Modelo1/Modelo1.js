import React from "react";
import "../../../styles/componentes/modelos/Modelo1.scss";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import curriculumData from "../../../utils/JSON/curriculumData.json";

const Modelo1 = () => {
  const { experiencia, educacion } = curriculumData;

  return (
    <div className="modelo1">
      {/* ...código anterior... */}

      <main className="container">
        <div className="grid">
          <section id="experience">
            <h2>Berufserfahrung</h2>
            {experiencia.map((exp, index) => (
              <SeccionExperiencia
                key={index}
                puesto={exp.puesto}
                empresa={exp.empresa}
                duracion={exp.duracion}
                labores={exp.labores}
              />
            ))}
          </section>

          <section id="education">
            <h2>Ausbildung</h2>
            {educacion.map((edu, index) => (
              <SeccionEducacion
                key={index}
                titulo={edu.titulo}
                institucion={edu.institucion}
                duracion={edu.duracion}
              />
            ))}
          </section>

          {/* ...código para las secciones de conocimientos e idiomas... */}
        </div>
      </main>
    </div>
  );
};

export default Modelo1;
