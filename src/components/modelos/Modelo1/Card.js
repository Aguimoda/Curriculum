import React, { useState, useEffect, useRef } from "react";
import "../../../styles/componentes/Card.scss";
import SeccionExperiencia from "./SeccionExperiencia";
import SeccionEducacion from "./SeccionEducacion";
import SeccionConocimientos from "./SeccionConocimientos";
import SeccionIdiomas from "./SeccionIdiomas";

const Card = ({ section, data, title }) => {
  const [flipped, setFlipped] = useState(false);
  const [expandedSubsection, setExpandedSubsection] = useState(null);
  const [showMore, setShowMore] = useState({});
  const [scrollHover, setScrollHover] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const cardRef = useRef(null);

  const handleFlip = (e) => {
    e.stopPropagation();
    setFlipped(!flipped);
  };

  const handleExpandSubsection = (subsection) => {
    setExpandedSubsection((prevSubsection) =>
      prevSubsection === subsection ? null : subsection
    );
  };

  const handleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [`${section}-${index}`]: !prevState[`${section}-${index}`],
    }));
  };

  useEffect(() => {
    if (flipped) {
      if (backRef.current) {
        backRef.current.style.position = "relative";
      }
    } else {
      setTimeout(() => {
        if (backRef.current) {
          backRef.current.style.position = "absolute";
        }
      }, 600);
    }
  }, [flipped]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setScrollHover(false);
      }
    };

    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 800) {
            setScrollHover(true);
          } else {
            setScrollHover(false);
          }
        });
      },
      {
        threshold: 0.9999999999999999999999, // Ajusta este valor según sea necesario
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card ${flipped ? "flipped" : ""} ${
        scrollHover ? "hover" : ""
      }`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        <div className="card-front" ref={frontRef}>
          <h2 className={`item ${section} ${scrollHover ? "hover" : ""}`}>
            {title}
          </h2>
        </div>
        <div className="card-back" ref={backRef}>
          {data.map((item, index) => (
            <div key={index} className="subsection-container">
              <div
                className={`subsection ${
                  expandedSubsection === `${section}-${index}` ? "expanded" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpandSubsection(`${section}-${index}`);
                }}
              >
                {section === "experience" && (
                  <SeccionExperiencia
                    title={item.puesto}
                    period={item.duracion}
                    details={
                      showMore[`${section}-${index}`]
                        ? Array.isArray(item.labores)
                          ? item.labores.join(", ")
                          : item.labores
                        : ""
                    }
                  />
                )}
                {section === "education" && <SeccionEducacion {...item} />}
                {section === "skills" && (
                  <SeccionConocimientos
                    conocimientos={
                      showMore[`${section}-${index}`]
                        ? item.conocimientos
                        : item.conocimientos.slice(0, 5)
                    }
                  />
                )}
                {section === "languages" && <SeccionIdiomas {...item} />}
              </div>
              <button
                className="show-more-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleShowMore(index);
                }}
              >
                {showMore[`${section}-${index}`]
                  ? "Mostrar menos"
                  : "Mostrar más"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
