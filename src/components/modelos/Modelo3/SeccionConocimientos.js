// SeccionConocimientos.jsx
import React from "react";
import { useDrag } from "react-dnd";
import { motion } from "framer-motion";
import Conocimiento from "./Conocimiento";

const SeccionConocimientos = ({ conocimientos, tituloSeccion }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "section",
    item: { tituloSeccion },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <motion.div
      ref={dragRef}
      className="section conocimientos"
      drag
      dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      dragElastic={0.5}
    >
      <h2>{tituloSeccion}</h2>
      {conocimientos.map((skill, index) => (
        <Conocimiento key={index} titulo={skill} />
      ))}
    </motion.div>
  );
};

export default SeccionConocimientos;
