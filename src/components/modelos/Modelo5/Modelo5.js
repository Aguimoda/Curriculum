import React, { useState, useEffect } from "react";
import "../../../styles/componentes/modelos/Modelo5.scss";
import perfilImage from "../../../utils/images/perfil.jpg";

const Modelo5 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState({
    nombre: "Daniel M. De Aguinaga",
    descripcion: "Web Developer Student",
    contacto: {
      email: "daniel.morenoparticular@gmail.com",
      telefono: "0176 20163265",
      direccion: "Feldbrunnenstraße, Hamburg",
    },
    experiencia: [],
    educacion: [],
    practicas: [],
    habilidades: [],
    cualidades: [],
    idiomas: [],
    secciones: {
      educacion: "AUSBILDUNG",
      experiencia: "BERUFSERFAHRUNG",
      practicas: "PRAKTIKUM",
      habilidades: "BERUFLICHE FERTIGKEIT",
      cualidades: "PERSÖNLICHE QUALITÄTEN",
      idiomas: "SPRACHEN",
    },
    sobreMi:
      "WER BIN ICH: 24 Jahre alt, Front-End Student mit Erfahrung als Freiberuflicher in der Entwicklung von Webseiten und Kenntnissen in mehreren Programmiersprachen. Ich bin eine sehr neugierige, analytische und kreative Person.",
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(
          `../../../utils/JSON/curriculumData_${language}.json`
        );
        setCurriculumData(data.default);
      } catch (error) {
        console.error("Fallo al cargar los datos del currículum:", error);
        setCurriculumData({ experiencia: [], educacion: [], practicas: [] });
      }
    };

    loadData();
  }, [language]);

  const {
    nombre,
    descripcion,
    contacto,
    experiencia,
    educacion,
    practicas,
    habilidades,
    cualidades,
    idiomas,
    secciones,
    sobreMi,
  } = curriculumData;

  return (
    <div className="modelo-nuevo">
      <header className="header">
        <div className="header-content">
          <img
            src={perfilImage}
            alt="Daniel M. De Aguinaga"
            className="profile-photo"
          />
          <div>
            <h1>{nombre}</h1>
            <h2>{descripcion}</h2>
            <p></p>
          </div>
        </div>
        <p className="about-me">{sobreMi}</p>
      </header>
      <main className="content">
        <section className="left-column">
          <div className="section">
            <h2>{secciones.educacion}</h2>
            {educacion.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.titulo}</h3>
                <p>{edu.institucion}</p>
                <p>{edu.duracion}</p>
              </div>
            ))}
          </div>
          <div className="section">
            <h2>{secciones.experiencia}</h2>
            {experiencia.map((exp, index) => (
              <div key={index} className="experience-item">
                <h3>{exp.puesto}</h3>
                <p>{exp.empresa}</p>
                <p>{exp.duracion}</p>
                <p>{exp.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="section">
            <h2>{secciones.practicas}</h2>
            {practicas.map((practica, index) => (
              <div key={index} className="practice-item">
                <h3>{practica.lugar}</h3>
                <p>{practica.puesto}</p>
                <p>{practica.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="right-column">
          <div className="section">
            <h2>{secciones.habilidades}</h2>
            <div className="skills">
              {habilidades.map((hab, index) => (
                <div key={index} className="skill-item">
                  <h3>{hab.nombre}</h3>
                  <div className="skill-level">
                    <div
                      style={{ width: `${hab.nivel * 10}%` }}
                      className="skill-bar"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2>{secciones.cualidades}</h2>
            <div className="qualities">
              {cualidades.map((cualidad, index) => (
                <div key={index} className="quality-item">
                  <h3>{cualidad.nombre}</h3>
                  <div className="quality-level">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`dot ${i < cualidad.nivel ? "filled" : ""}`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2>{secciones.idiomas}</h2>
            <div className="languages">
              {idiomas.map((idioma, index) => (
                <div key={index} className="language-item">
                  <h3>{idioma.nombre}</h3>
                  <p>{idioma.nivel}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Modelo5;
