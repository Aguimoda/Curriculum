import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import ControlPanel from "../components/ControlPanel";
import "../styles/paginas/HomePage.scss";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modelos = ["modelo1", "modelo2"];
  const [isFlipping, setIsFlipping] = useState(false);
  const [direccionActual, setDireccionActual] = useState("adelante");
  const [language, setLanguage] = useState("en");
  const [animationType, setAnimationType] = useState("fade");
  const [isExpanded, setIsExpanded] = useState(false);

  const curriculumRef = useRef();

  const getNextIndex = (index, direccion) => {
    return direccion === "adelante"
      ? (index + 1) % modelos.length
      : (index - 1 + modelos.length) % modelos.length;
  };

  const handleFlip = (direccion) => {
    setIsFlipping(true);
    setDireccionActual(direccion);
    const nuevoIndice = getNextIndex(currentIndex, direccion);
    setTimeout(() => {
      setCurrentIndex(nuevoIndice);
      setIsFlipping(false);
    }, 600);
  };

  const toggleControls = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="homepage">
      <ControlPanel
        onFlipNext={() => handleFlip("adelante")}
        onFlipPrevious={() => handleFlip("atras")}
        isExpanded={isExpanded}
        toggleControls={toggleControls}
        language={language}
        setLanguage={setLanguage}
        animationType={animationType}
        setAnimationType={setAnimationType}
      />
      <div className="homepage-container" ref={curriculumRef}>
        <Header />
        <div className="curriculum-container">
          <Curriculum
            currentModel={modelos[currentIndex]}
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
