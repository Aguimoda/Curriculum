// Chincheta.jsx
import React from "react";
import { useDrag } from "react-dnd";

const Chincheta = ({ id, onDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "chincheta",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.name) {
        onDrop(dropResult.name, item.id);
      }
    },
  });

  return (
    <div
      ref={drag}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "red",
        position: "absolute",
        cursor: "pointer",
      }}
    />
  );
};

export default Chincheta;
