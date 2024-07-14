import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import ControlPanel from "../components/ControlPanel";
import "../styles/paginas/HomePage.scss";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("sections");
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

  const handleToggleView = () => {
    handleFlip("adelante"); // Switch to the next model
    setViewMode((prevMode) => (prevMode === "sections" ? "full" : "sections"));
  };

  return (
    <div className="homepage">
      <ControlPanel
        onToggleView={handleToggleView}
        isExpanded={isExpanded}
        toggleControls={toggleControls}
        language={language}
        setLanguage={setLanguage}
        animationType={animationType}
        setAnimationType={setAnimationType}
        viewMode={viewMode}
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
            viewMode={viewMode}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
