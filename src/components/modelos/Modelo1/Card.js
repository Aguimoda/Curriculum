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
      case "educación":
      case "education":
      case "bildung":
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
      case "idiomas":
      case "languages":
      case "sprachen":
        return (
          <div>
            <h3>{item.idioma}</h3>
            <p>{item.nivel}</p>
          </div>
        );
      case "lenguajes-de-programación":
      case "programming-languages":
      case "programmiersprachen":
        return (
          <div>
            <h3>{item}</h3>
          </div>
        );
      case "voluntariado":
      case "volunteering":
      case "freiwilligenarbeit":
        return (
          <div>
            <p>{item.organizacion}</p>
            <p>{item.duracion}</p>
          </div>
        );
      case "intereses-y-proyectos":
      case "interests-and-projects":
      case "interessen-und-projekte":
        return (
          <div>
            <p>{item}</p>
          </div>
        );
      case "contacto":
      case "contact":
      case "kontakt":
        return (
          <div>
            <p>Teléfono: {item.telefono}</p>
            <p>Email: {item.email}</p>
            <p>Dirección: {item.direccion}</p>
            <p>
              GitHub: <a href={item.github}>{item.github}</a>
            </p>
            <p>
              LinkedIn: <a href={item.linkedin}>{item.linkedin}</a>
            </p>
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
              {data && data.map((item, index) => (
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
