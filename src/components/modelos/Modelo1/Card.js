import React, { useState, useRef, useEffect } from "react";
import "../../../styles/componentes/Card.scss";

const Card = ({ section, data, title }) => {
  const [flipped, setFlipped] = useState(false);
  const [expandedSubsection, setExpandedSubsection] = useState({});
  const [scrollHover, setScrollHover] = useState(false);

  const frontRef = useRef(null);
  const backRef = useRef(null);
  const cardRef = useRef(null);

  const handleFlip = (e) => {
    if (!e.target.classList.contains("show-more-button")) {
      setFlipped(!flipped);
    }
  };

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
        threshold: 1.0,
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

  const handleExpandSubsection = (index) => {
    setExpandedSubsection((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderContent = (item, index) => {
    switch (section) {
      case "experience":
        return (
          <div>
            <h3>{item.puesto}</h3>
            <p>{item.duracion}</p>
            <div
              className={`wrapper ${
                expandedSubsection[index] ? "is-open" : ""
              }`}
            >
              <div className="inner">
                <ul>
                  {item.labores.map((labor, i) => (
                    <li key={i}>{labor}</li>
                  ))}
                </ul>
              </div>
              {item.labores.length > 1 && (
                <button
                  className="show-more-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExpandSubsection(index);
                  }}
                >
                  {expandedSubsection[index] ? "Mostrar menos" : "Mostrar más"}
                </button>
              )}
            </div>
          </div>
        );
      case "education":
        return (
          <div>
            <h3>{item.titulo}</h3>
            <p>{item.institucion}</p>
            <p>{item.duracion}</p>
            <div
              className={`wrapper ${
                expandedSubsection[index] ? "is-open" : ""
              }`}
            >
              <div className="inner">
                <p>{item.descripcion}</p>
              </div>
              {item.descripcion && (
                <button
                  className="show-more-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExpandSubsection(index);
                  }}
                >
                  {expandedSubsection[index] ? "Mostrar menos" : "Mostrar más"}
                </button>
              )}
            </div>
          </div>
        );
      case "skills":
        return (
          <div>
            <h3>{item.nombre}</h3>
          </div>
        );
      case "languages":
        return (
          <div>
            <h3>{item.nombre}</h3>
            <p>{item.nivel}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`card ${flipped ? "flipped" : ""} ${
        scrollHover ? "hover" : ""
      }`}
      onClick={handleFlip}
      ref={cardRef}
    >
      <div className="card-inner">
        <div
          className={`card-front ${flipped ? "" : "is-open"}`}
          ref={frontRef}
        >
          <div className={`wrapper ${flipped ? "" : "is-open"}`}>
            <h2
              className={`inner item ${section} ${scrollHover ? "hover" : ""}`}
            >
              {title}
            </h2>
          </div>
        </div>
        <div
          className={`card-back ${flipped ? "is-open" : ""}`}
          ref={backRef}
          onClick={(e) => {
            if (!e.target.classList.contains("show-more-button")) {
              handleFlip(e);
            }
            e.stopPropagation();
          }}
        >
          <div className={`wrapper ${flipped ? "is-open" : ""}`}>
            <div className="inner">
              {data.map((item, index) => (
                <div key={index}>{renderContent(item, index)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
