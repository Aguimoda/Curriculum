// HomePage.js
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import BotonCambiar from "../components/BotonCambiar";
import "../styles/paginas/HomePage.css";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modelos = ["modelo1", "modelo2", "modelo3"];
  const [isFlipping, setIsFlipping] = useState(false);
  const [direccionActual, setDireccionActual] = useState("adelante");

  const handleFlip = (direccion) => {
    setDireccionActual(direccion);
    setIsFlipping(true);

    setTimeout(() => {
      setIsFlipping(false);
      const nuevoIndice =
        direccion === "adelante"
          ? (currentIndex + 1) % modelos.length
          : (currentIndex - 1 + modelos.length) % modelos.length;
      setCurrentIndex(nuevoIndice);
    }, 600);
  };

  return (
    <div className="homepage-container">
      <Header />
      <BotonCambiar onFlip={() => handleFlip("atras")} direccion="atras" />
      <BotonCambiar
        onFlip={() => handleFlip("adelante")}
        direccion="adelante"
      />
      <div className="curriculum-container">
        <Curriculum
          currentModel={modelos[currentIndex]}
          nextModel={modelos[(currentIndex + 1) % modelos.length]}
          isFlipping={isFlipping}
          direccion={direccionActual}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
