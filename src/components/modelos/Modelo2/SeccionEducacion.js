import React from "react";

const SeccionEducacion = ({ titulo, institution, duration, description }) => (
  <div className="education-item">
    <h3>{titulo}</h3>
    <p>{institution}</p>
    <p>{duration}</p>
    <p>{description}</p>
  </div>
);

export default SeccionEducacion;
