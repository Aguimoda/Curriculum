import React from "react";
import "../../../styles/componentes/modelos/TigerSpots.scss";

const generateRandomStyles = () => {
  const top = Math.random() * 90; // Para evitar que se salga del contenedor
  const left = Math.random() * 90; // Para evitar que se salga del contenedor
  const width = 50 + Math.random() * 50;
  const height = 30 + Math.random() * 30;
  const rotation = Math.random() * 360;
  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}px`,
    height: `${height}px`,
    transform: `rotate(${rotation}deg)`,
  };
};

const getClipPath = (index) => {
  const clipPaths = [
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
    "polygon(50% 0%, 75% 25%, 50% 100%, 25% 75%)",
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    "polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)",
    "polygon(25% 0%, 75% 0%, 100% 25%, 75% 50%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 25% 50%, 0% 25%)",
  ];
  return clipPaths[index % clipPaths.length];
};

const TigerSpots = ({ hovered }) => {
  const spots = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className={`spot`}
      style={{
        ...generateRandomStyles(),
        clipPath: getClipPath(i),
      }}
    />
  ));

  return (
    <div className={`tiger-spots ${hovered ? "hovered" : ""}`}>{spots}</div>
  );
};

export default TigerSpots;
