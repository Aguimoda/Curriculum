import React, { useState, useEffect } from "react";
import "../../../styles/componentes/modelos/Modelo1.scss";
import Card from "./Card";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import SeccionIdiomas from "./SeccionIdiomas";
import SeccionLenguajes from "./SeccionLenguajes";
import SeccionVoluntariado from "./SeccionVoluntariado";
import SeccionIntereses from "./SeccionIntereses";
import SeccionContacto from "./SeccionContacto";
import SeccionSobreMi from "./SeccionSobreMi";

const Modelo1 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState(null);

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

  const { nombre, descripcion, secciones = [] } = curriculumData;

  const renderSectionComponent = (seccion) => {
    switch (seccion.titulo.toLowerCase()) {
      case "sobre mí":
      case "about me":
      case "über mich":
        return <SeccionSobreMi data={seccion.contenido} />;
      case "experiencia relevante":
      case "relevant experience":
      case "relevante erfahrung":
        return <SeccionExperiencia data={seccion.contenido} />;
      case "educación":
      case "education":
      case "bildung":
        return <SeccionEducacion data={seccion.contenido} />;
      case "idiomas":
      case "languages":
      case "sprachen":
        return <SeccionIdiomas data={seccion.contenido} />;
      case "lenguajes de programación":
      case "programming languages":
      case "programmiersprachen":
        return <SeccionLenguajes data={seccion.contenido} />;
      case "voluntariado":
      case "volunteering":
      case "freiwilligenarbeit":
        return <SeccionVoluntariado data={seccion.contenido} />;
      case "intereses y proyectos":
      case "interests and projects":
      case "interessen und projekte":
        return <SeccionIntereses data={seccion.contenido} />;
      case "contacto":
      case "contact":
      case "kontakt":
        return <SeccionContacto data={seccion.contenido} />;
      default:
        return <p>{seccion.contenido}</p>;
    }
  };

  return (
    <div className="modelo1">
      <header className="header">
        <h1>{nombre}</h1>
      </header>
      <main className="container">
        {secciones.map((seccion, index) => (
          <Card
            key={index}
            section={seccion.titulo.toLowerCase().replace(/\s+/g, "-")}
            title={seccion.titulo}
            data={Array.isArray(seccion.contenido) ? seccion.contenido : [seccion.contenido]}
          >
            {renderSectionComponent(seccion)}
          </Card>
        ))}
      </main>
    </div>
  );
};

export default Modelo1;
