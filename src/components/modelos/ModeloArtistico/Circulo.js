import React from "react";

const Circulo = ({ title, onClick, isActive, isLeft }) => {
  // Configurar las clases CSS basadas en si el círculo está activo o debe moverse a la izquierda
  const circleClass = `circle ${isActive ? "active" : ""} ${
    isLeft ? "moveToLeft" : ""
  }`;

  return (
    <div className={circleClass} onClick={onClick}>
      {title}
    </div>
  );
};

export default Circulo;
