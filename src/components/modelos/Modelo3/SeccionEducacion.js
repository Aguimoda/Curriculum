// SeccionEducacion.jsx
import React from "react";
import EntradaEducacion from "./EntradaEducacion";
import { useDrag } from "react-dnd";
import { motion } from "framer-motion";

const floatVariants = {
  float: {
    y: ["-3%", "3%"],
    x: ["-3%", "3%"],
    rotate: [0, 1],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 2.5,
        ease: "easeInOut",
      },
      x: {
        yoyo: Infinity,
        duration: 2.7,
        ease: "easeInOut",
      },
      rotate: {
        yoyo: Infinity,
        duration: 3.5,
        ease: "easeInOut",
      },
    },
  },
};

const SeccionEducacion = ({ educacion, tituloSeccion }) => {
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
      className="section educacion"
      drag
      dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      dragElastic={0.5}
      variants={floatVariants}
      initial="float"
      animate="float"
    >
      <h2>{tituloSeccion}</h2>
      {educacion.map((entry, index) => (
        <EntradaEducacion
          key={index}
          title={entry.titulo}
          institution={entry.institucion}
          duration={entry.duracion}
        />
      ))}
    </motion.div>
  );
};

export default SeccionEducacion;
