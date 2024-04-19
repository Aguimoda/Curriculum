// Circulo.js
import React from "react";

const Circulo = ({ title, onClick, isActive }) => {
  const circleClass = isActive ? "circle active" : "circle";
  return (
    <div className={circleClass} onClick={onClick}>
      {title}
    </div>
  );
};

export default Circulo;
