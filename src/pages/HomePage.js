import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import BotonCambiar from "../components/BotonCambiar";
import "../styles/paginas/HomePage.scss";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modelos = ["modelo1", "modelo2", "modelo3"];
  const [isFlipping, setIsFlipping] = useState(false);
  const [direccionActual, setDireccionActual] = useState("adelante");

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
        <BotonCambiar onFlip={() => handleFlip("atras")} direccion="atras" />
        <BotonCambiar
          onFlip={() => handleFlip("adelante")}
          direccion="adelante"
        />
        <div className="curriculum-container">
          <Curriculum
            currentModel={modelos[currentIndex]}
            nextModel={nextModel}
            isFlipping={isFlipping}
            direccion={direccionActual}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
