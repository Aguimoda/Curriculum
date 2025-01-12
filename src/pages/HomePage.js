import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import ControlPanel from "../components/ControlPanel";
import "../styles/paginas/HomePage.scss";

const HomePage = () => {
  const modelos = ["full", "sections"];
  const [currentModel, setCurrentModel] = useState(modelos[1]);
  const [language, setLanguage] = useState("en");
  const [animationType, setAnimationType] = useState("slide");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direccion, setDireccion] = useState("adelante");
  const [nextModel, setNextModel] = useState(null);
  const [isFullViewStyle, setIsFullViewStyle] = useState(false); // Add state for full view style

  const curriculumRef = useRef();

  const toggleControls = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleModel = () => {
    const next = currentModel === modelos[1] ? modelos[0] : modelos[1];
    setNextModel(next);
    setDireccion(currentModel === modelos[1] ? "adelante" : "atras");
    setIsFlipping(true);
  };

  const toggleFullViewStyle = () => {
    setIsFullViewStyle(!isFullViewStyle);
  };

  useEffect(() => {
    if (!isFlipping && nextModel !== null) {
      setCurrentModel(nextModel);
      setNextModel(null);
    }
  }, [isFlipping, nextModel]);

  const onAnimationComplete = () => {
    setIsFlipping(false);
  };

  return (
    <div className="homepage">
      <ControlPanel
        toggleModel={toggleModel}
        isExpanded={isExpanded}
        toggleControls={toggleControls}
        language={language}
        setLanguage={setLanguage}
        animationType={animationType}
        setAnimationType={setAnimationType}
        currentModel={currentModel}
        toggleFullViewStyle={toggleFullViewStyle} // Pass the toggleFullViewStyle function
      />
      <div className="homepage-container" ref={curriculumRef}>
        <Header />
        <div className="curriculum-container">
          <Curriculum
            currentModel={currentModel}
            language={language}
            animationType={animationType}
            isFlipping={isFlipping}
            direccion={direccion}
            onAnimationComplete={onAnimationComplete}
            isFullViewStyle={isFullViewStyle} // Pass the isFullViewStyle state
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
