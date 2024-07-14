import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Modelo1 from "./modelos/Modelo1/Modelo1";
import Modelo2 from "./modelos/Modelo2/Modelo2";
import "../styles/componentes/Curriculum.scss";

const Curriculum = ({
  currentModel,
  isFlipping,
  direccion,
  language,
  animationType,
  viewMode,
}) => {
  const modelRef = useRef();

  const getModelComponent = (modelName) => {
    return modelName === "modelo1" ? (
      <Modelo1 language={language} viewMode={viewMode} ref={modelRef} />
    ) : (
      <Modelo2 language={language} viewMode={viewMode} ref={modelRef} />
    );
  };

  useEffect(() => {
    if (isFlipping) {
      switch (animationType) {
        case "fade":
          gsap.to(modelRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              gsap.to(modelRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            },
          });
          break;
        case "slide":
          const slideDirection = direccion === "adelante" ? 900 : -900;
          gsap.to(modelRef.current, {
            x: slideDirection,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(modelRef.current, { x: -slideDirection, opacity: 0 });
              gsap.to(modelRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            },
          });
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
          break;
      }
    }
  }, [isFlipping, animationType, direccion]);

  return <div ref={modelRef}>{getModelComponent(currentModel)}</div>;
};

export default Curriculum;
