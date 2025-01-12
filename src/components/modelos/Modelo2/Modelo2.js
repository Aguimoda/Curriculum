import React, { useState, useEffect } from "react";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import perfilImage from "../../../utils/images/perfil.jpg";
import "../../../styles/componentes/modelos/Modelo2.scss";

import "../../../styles/componentes/modelos/Modelo2-estandar.scss";
import "../../../styles/componentes/modelos/Modelo2-modern.scss";

const Modelo2 = ({ language, isFullViewStyle }) => {
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
    secciones = [], // Asegurarse de que `secciones` tenga un valor por defecto si no está definido
  } = curriculumData;

  const filteredSecciones = secciones.filter(
    (seccion) => seccion.titulo.toLowerCase() !== "sobre mí" && seccion.titulo.toLowerCase() !== "about me" && seccion.titulo.toLowerCase() !== "über mich"
  );

  return (
    <div className={`modelo2 ${isFullViewStyle ? "full-view-style" : "standard"}`}>
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
        {filteredSecciones.map((seccion, index) => (
          <div className="column" key={index}>
            <section
              id={seccion.titulo.toLowerCase().replace(/\s+/g, "-")}
              className={`animated-section ${
                hoveredSection === seccion.titulo ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(seccion.titulo)}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-content">{seccion.titulo}</h2>
              {Array.isArray(seccion.contenido) ? (
                seccion.contenido.map((item, idx) => (
                  <div key={idx} className="text-content">
                    {typeof item === "string" ? (
                      <p>{item}</p>
                    ) : (
                      <>
                        {item.puesto && (
                          <SeccionExperiencia
                            title={item.puesto}
                            period={item.duracion}
                            details={item.labores}
                          />
                        )}
                        {item.titulo && (
                          <SeccionEducacion
                            titulo={item.titulo}
                            institution={item.institucion}
                            duration={item.duracion}
                            description={item.descripcion}
                          />
                        )}
                        {item.idioma && (
                          <p>{`${item.idioma} - ${item.nivel}`}</p>
                        )}
                        {item.organizacion && (
                          <p>{`${item.organizacion} - ${item.duracion}`}</p>
                        )}
                      </>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-content">
                  {typeof seccion.contenido === "string" ? (
                    <p>{seccion.contenido}</p>
                  ) : (
                    <>
                      {seccion.contenido.telefono && (
                        <p>Teléfono: {seccion.contenido.telefono}</p>
                      )}
                      {seccion.contenido.email && (
                        <p>Email: {seccion.contenido.email}</p>
                      )}
                      {seccion.contenido.direccion && (
                        <p>Dirección: {seccion.contenido.direccion}</p>
                      )}
                      {seccion.contenido.github && (
                        <p>
                          GitHub: <a href={seccion.contenido.github}>{seccion.contenido.github}</a>
                        </p>
                      )}
                      {seccion.contenido.linkedin && (
                        <p>
                          LinkedIn: <a href={seccion.contenido.linkedin}>{seccion.contenido.linkedin}</a>
                        </p>
                      )}
                    </>
                  )}
                </div>
              )}
            </section>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Modelo2;
