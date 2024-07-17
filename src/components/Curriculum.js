import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Modelo1 from "./modelos/Modelo1/Modelo1";
import Modelo2 from "./modelos/Modelo2/Modelo2";
import "../styles/componentes/Curriculum.scss";

const Curriculum = ({
  currentModel,
  language,
  animationType,
  isFlipping,
  direccion,
  onAnimationComplete,
}) => {
  const modelRef = useRef();

  const getModelComponent = (modelName) => {
    return modelName === "full" ? (
      <Modelo1 language={language} ref={modelRef} />
    ) : (
      <Modelo2 language={language} ref={modelRef} />
    );
  };

  useEffect(() => {
    if (isFlipping) {
      const animation = { duration: 0.3, ease: "power2.inOut" };
      const slideDirection = direccion === "adelante" ? 900 : -900;

      switch (animationType) {
        case "fade":
          gsap.to(modelRef.current, {
            opacity: 0,
            ...animation,
            onComplete: () => {
              onAnimationComplete(); // Notify parent to change model
              gsap.to(modelRef.current, { opacity: 1, ...animation });
            },
          });
          break;
        case "slide":
          gsap.to(modelRef.current, {
            x: slideDirection,
            opacity: 0,
            ...animation,
            onComplete: () => {
              onAnimationComplete(); // Notify parent to change model
              gsap.set(modelRef.current, { x: -slideDirection, opacity: 0 });
              gsap.to(modelRef.current, { x: 0, opacity: 1, ...animation });
            },
          });
          break;
        case "zoom":
          gsap.fromTo(
            modelRef.current,
            { scale: 1, opacity: 1 },
            {
              scale: 0.1,
              opacity: 0,
              ...animation,
              onComplete: () => {
                onAnimationComplete(); // Notify parent to change model
                gsap.to(modelRef.current, {
                  scale: 1,
                  opacity: 1,
                  ...animation,
                });
              },
            }
          );
          break;
        default:
          onAnimationComplete();
          break;
      }
    }
  }, [isFlipping, animationType, direccion, onAnimationComplete]);

  return <div ref={modelRef}>{getModelComponent(currentModel)}</div>;
};

export default Curriculum;
