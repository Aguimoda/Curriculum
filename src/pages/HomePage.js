import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Curriculum from "../components/Curriculum";
import BotonCambiar from "../components/BotonCambiar";
import "../styles/paginas/HomePage.css";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1); // Estado para el índice del siguiente modelo
  const [isFlipping, setIsFlipping] = useState(false);
  const [direccionActual, setDireccionActual] = useState("adelante"); // Estado para la dirección actual del giro
  const modelos = ["modelo1", "modelo2", "modelo3"];

  const updateIndices = (nuevoIndice, direccion) => {
    setCurrentIndex(nuevoIndice);
    if (direccion === "adelante") {
      setNextIndex((nuevoIndice + 1) % modelos.length);
    } else {
      setNextIndex((nuevoIndice - 1 + modelos.length) % modelos.length);
    }
  };

  const handleFlip = (direccion) => {
    setDireccionActual(direccion);
    setIsFlipping(true);

    setTimeout(() => {
      const nuevoIndice =
        direccion === "adelante"
          ? (currentIndex + 1) % modelos.length
          : (currentIndex - 1 + modelos.length) % modelos.length;
      updateIndices(nuevoIndice, direccion);
      setIsFlipping(false);
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
          nextModel={modelos[nextIndex]}
          isFlipping={isFlipping}
          direccion={direccionActual} // Asegúrate de manejar y pasar esta variable
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
