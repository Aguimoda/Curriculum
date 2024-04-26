// SeccionIdiomas.jsx
import React from "react";
import { useDrag } from "react-dnd";
import { motion } from "framer-motion";

const SeccionIdiomas = ({ idiomas, tituloSeccion }) => {
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
      className="section idiomas"
      drag
      dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      dragElastic={0.5}
    >
      <h2>{tituloSeccion}</h2>
      <p>{idiomas.join(", ")}</p>
    </motion.div>
  );
};

export default SeccionIdiomas;
