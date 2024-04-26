// Modelo3.jsx
import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { motion } from "framer-motion";
import "../../../styles/componentes/modelos/Modelo3.scss";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import SeccionConocimientos from "./SeccionConocimientos";
import SeccionIdiomas from "./SeccionIdiomas";

const floatVariants = {
  float1: {
    y: ["-15%", "15%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  },
  float2: {
    x: ["-5%", "5%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
        ease: "easeInOut",
      },
    },
  },
  float3: {
    rotate: [-2, 2],
    transition: {
      rotate: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      },
    },
  },
};

const Modelo3 = ({ language }) => {
  const [curriculumData, setCurriculumData] = useState({
    experiencia: [],
    educacion: [],
    conocimientos: [],
    idiomas: [],
    secciones: [],
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(
          `../../../utils/JSON/curriculumData_${language}.json`
        );
        setCurriculumData(data.default);
      } catch (error) {
        console.error("Failed to load curriculum data:", error);
        setError(true);
      }
    };
    loadData();
  }, [language]);

  if (error) {
    return <div>Error al cargar los datos del currículum.</div>;
  }

  const {
    experiencia,
    educacion,
    conocimientos,
    idiomas,
    descripcion,
    secciones,
  } = curriculumData;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="modelo3">
        <div className="content-container">
          <header className="header">
            <h1>{curriculumData.nombre}</h1>
            <p>{descripcion}</p>
          </header>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SeccionExperiencia
              experiencia={experiencia}
              tituloSeccion={secciones[1]}
              floatVariant="float1" // Corrección aquí para pasar la cadena correcta de la variante
            />
            <SeccionEducacion
              educacion={educacion}
              tituloSeccion={secciones[2]}
              floatVariant="float2" // Corrección aquí
            />
            <SeccionConocimientos
              conocimientos={conocimientos}
              tituloSeccion={secciones[3]}
              floatVariant="float3" // Corrección aquí
            />
            <SeccionIdiomas
              idiomas={idiomas}
              tituloSeccion={secciones[4]}
              floatVariant="float1" // Corrección aquí
            />
          </motion.div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Modelo3;
