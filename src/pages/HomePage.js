import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import BotonCambiar from "../components/BotonCambiar";
import LanguageSelector from "../components/SelectorLenguaje";
import AnimationSelector from "../components/SelectorAnimacion"; // Asegúrate de que la ruta es correcta
import { gsap } from "gsap";
import "../assets/styles/pages/HomePage.scss";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modelos = ["modelo1", "modelo2", "modelo3", "modeloA"];
  const [isFlipping, setIsFlipping] = useState(false);
  const [direccionActual, setDireccionActual] = useState("adelante");
  const [language, setLanguage] = useState("en");
  const [animationType, setAnimationType] = useState("fade");
  const animationOptions = ["fade", "slide", "zoom", "none"];

  const curriculumRef = useRef();

  const getNextIndex = (index, direccion) => {
    return direccion === "adelante"
      ? (index + 1) % modelos.length
      : (index - 1 + modelos.length) % modelos.length;
  };

  // Asegúrate de definir nextModel en el nivel superior del componente
  const nextModel = modelos[getNextIndex(currentIndex, direccionActual)];

  const handleFlip = (direccion) => {
    setIsFlipping(true);
    setDireccionActual(direccion);
    const nuevoIndice = getNextIndex(currentIndex, direccion);
    setTimeout(() => {
      setCurrentIndex(nuevoIndice);
      setIsFlipping(false);
    }, 600); // Ensure duration matches the GSAP animation timeline
  };

  return (
    <div className="homepage">
      <div className="homepage-container">
        <Header />
        <div className="controls-card">
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
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <AnimationSelector
            animationType={animationType}
            setAnimationType={setAnimationType}
          />
        </div>
        <div className="curriculum-container" ref={curriculumRef}>
          <Curriculum
            currentModel={modelos[currentIndex]}
            nextModel={nextModel}
            isFlipping={isFlipping}
            direccion={direccionActual}
            language={language}
            animationType={animationType}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
