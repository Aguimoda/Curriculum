import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import BotonCambiar from "../components/BotonCambiar";
import LanguageSelector from "../components/SelectorLenguaje"; // Nuevo componente para seleccionar el idioma
import "../styles/paginas/HomePage.scss";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modelos = ["modelo1", "modelo2", "modelo3", "modeloA"];
  const [isFlipping, setIsFlipping] = useState(false);
  const [direccionActual, setDireccionActual] = useState("adelante");
  const [language, setLanguage] = useState("en"); // Estado para el idioma actual

  const getNextIndex = (index, direccion) => {
    if (direccion === "adelante") {
      return (index + 1) % modelos.length;
    } else {
      return (index - 1 + modelos.length) % modelos.length;
    }
  };

  const handleFlip = (direccion) => {
    setDireccionActual(direccion);
    setIsFlipping(true);

    setTimeout(() => {
      const nuevoIndice = getNextIndex(currentIndex, direccion);
      setCurrentIndex(nuevoIndice);
      setIsFlipping(false);
    }, 600);
  };

  const nextModel = modelos[getNextIndex(currentIndex, direccionActual)];

  return (
    <div className="homepage">
      <div className="homepage-container">
        <Header />
        <div className="controls">
          <LanguageSelector setLanguage={setLanguage} />
          <div className="desplazamiento">
            <BotonCambiar
              onFlip={() => handleFlip("atras")}
              direccion="atras"
            />
            <BotonCambiar
              onFlip={() => handleFlip("adelante")}
              direccion="adelante"
            />
          </div>
        </div>
        <div className="curriculum-container">
          <Curriculum
            currentModel={modelos[currentIndex]}
            nextModel={nextModel}
            isFlipping={isFlipping}
            direccion={direccionActual}
            language={language} // Pasar el idioma seleccionado al componente Curriculum
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
