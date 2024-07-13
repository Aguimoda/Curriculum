import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Modelo1 from "./modelos/Modelo1/Modelo1";
import Modelo2 from "./modelos/Modelo2/Modelo2";
import Modelo3 from "./modelos/Modelo3/Modelo3";
import ModeloArtistico from "./modelos/ModeloArtistico/ModeloArtistico";
import Modelo5 from "./modelos/Modelo5/Modelo5";

import "../styles/componentes/Curriculum.scss";

const Curriculum = ({
  currentModel,
  isFlipping,
  direccion,
  language,
  animationType,
}) => {
  const modelRef = useRef();

  const getModelComponent = (modelName) => {
    switch (modelName) {
      case "modelo1":
        return <Modelo1 language={language} />;
      case "modelo2":
        return <Modelo2 language={language} />;
      case "modelo3":
        return <Modelo3 language={language} />;
      case "modeloA":
        return <ModeloArtistico language={language} />;
      case "modelo5":
        return <Modelo5 language={language} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (isFlipping) {
      // Define animations based on `animationType`
      switch (animationType) {
        case "fade":
          gsap.to(modelRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              // Introducir un retraso antes de empezar a reaparecer
              gsap.to(modelRef.current, {
                opacity: 0, // Mantiene la opacidad en 0 durante el retraso
                delay: 0.2, // Retraso para añadir dramatismo
                onComplete: () => {
                  // Comenzar a reaparecer después del retraso
                  gsap.to(modelRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                },
              });
            },
          });
          break;
        case "slide":
          if (direccion === "adelante") {
            // Mover el modelo actual hacia la derecha y desvanecer
            gsap.to(modelRef.current, {
              x: 9000, // Mover a la derecha
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => {
                // Posicionar fuera de la vista a la izquierda
                gsap.set(modelRef.current, { x: -99000, opacity: 0 });
                // Mover el siguiente modelo al centro desde la izquierda
                gsap.to(modelRef.current, {
                  x: 0,
                  opacity: 1,
                  duration: 0.3,
                  ease: "power2.out",
                });
              },
            });
          } else {
            // Mover el modelo actual hacia la izquierda y desvanecer
            gsap.to(modelRef.current, {
              x: -9000, // Mover a la izquierda
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => {
                // Posicionar fuera de la vista a la derecha
                gsap.set(modelRef.current, { x: 99000, opacity: 0 });
                // Mover el siguiente modelo al centro desde la derecha
                gsap.to(modelRef.current, {
                  x: 0,
                  opacity: 1,
                  duration: 0.3,
                  ease: "power2.out",
                });
              },
            });
          }
          break;

        case "zoom":
          gsap.fromTo(
            modelRef.current,
            { scale: 0.1, opacity: 0.9 },
            {
              scale: 1,
              opacity: 0.8,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(modelRef.current, {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              },
            }
          );
          break;
        default:
          // No animation
          break;
      }
    }
  }, [currentModel, isFlipping, animationType, direccion]);

  return (
    <div className="curriculum">
      <div ref={modelRef} className="flip-container">
        <div className="front">{getModelComponent(currentModel)}</div>
      </div>
    </div>
  );
};

export default Curriculum;
