// SeccionExperiencia.jsx
import React from "react";
import { useDrag } from "react-dnd";
import { motion } from "framer-motion";

const SeccionExperiencia = ({ experiencia, tituloSeccion }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "section",
    item: { name: tituloSeccion },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <motion.div
      ref={dragRef}
      className="section experiencia"
      drag
      dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      dragElastic={0.5}
    >
      <h2>{tituloSeccion}</h2>
      {experiencia.map((item, index) => (
        <div key={index}>
          <h3>{item.puesto}</h3>
          <p>{item.empresa}</p>
          <p>{item.duracion}</p>
          <ul>
            {item.labores.map((labor, idx) => (
              <li key={idx}>{labor}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default SeccionExperiencia;
