// SeccionBase.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const SeccionBase = ({ children, onTogglePinned }) => {
  const [pinned, setPinned] = useState(false);

  const handleTogglePinned = () => {
    const newPinnedState = !pinned;
    setPinned(newPinnedState);
    if (typeof onTogglePinned === "function") {
      // Asegúrate de que onTogglePinned sea una función antes de llamarla
      onTogglePinned(newPinnedState);
    }
  };

  return (
    <motion.div
      style={{
        padding: "20px",
        margin: "10px",
        backgroundColor: pinned ? "#a2fab4" : "#fab4a2",
        border: "1px solid black",
      }}
    >
      {children}
      <button onClick={handleTogglePinned}>{pinned ? "Unpin" : "Pin"}</button>
    </motion.div>
  );
};

export default SeccionBase;
