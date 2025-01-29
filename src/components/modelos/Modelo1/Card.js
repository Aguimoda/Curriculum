import React, { useState, useRef, useEffect } from "react";
import "../../../styles/componentes/Card.scss";

const Card = ({
  section,
  data,
  title,
  onHover,
  onLeave,
  isSameRow,
  isSameCol,
  isHovered,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [expandedSubsection, setExpandedSubsection] = useState({});
  const [scrollHover, setScrollHover] = useState(false);
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
    if (!item) return null;

    switch (section) {
      case "sobre-mí":
      case "about-me":
      case "über-mich":
        return <p>{item}</p>;
      case "experiencia-relevante":
      case "relevant-experience":
      case "relevante-erfahrung":
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
      default:
        return <p>{item}</p>;
    }
  };

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      ref={cardRef}
      style={{
        transform: isHovered
          ? "scale(1.2)"
          : isSameRow
          ? "translateX(20px)"
          : isSameCol
          ? "translateY(20px)"
          : "none",
        zIndex: isHovered ? 10 : 1,
      }}
    >
      <div className="card-inner">
        <div className={`card-front ${flipped ? "" : "is-open"}`}>
          <h2 className="inner">{title}</h2>
        </div>
        <div className={`card-back ${flipped ? "is-open" : ""}`}>
          {data.map((item, index) => (
            <div key={index}>{renderContent(item, index)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
