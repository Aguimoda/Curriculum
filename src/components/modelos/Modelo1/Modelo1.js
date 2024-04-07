import React from "react";
import "../../../styles/componentes/modelos/Modelo1.css"; // Importa el archivo CSS correctamente
import SeccionExperiencia from "./SeccionExperiencia"; // Asegúrate de que la ruta de importación sea correcta

const Modelo1 = () => {
  const experiences = [
    {
      title: "Verkäufer/IT Specialist",
      period: "2023 bis heute",
      details: [
        "Steigerung des Umsatzes um 10% durch Optimierung der Unternehmenslogistik.",
        "Experte in Geräteverwaltung (Android, Windows) und Cloud-Diensten (Google Drive).",
        "Deutliche Produktivitätssteigerung durch Automatisierung in Cloud-Diensten.",
      ],
    },
    {
      title: "Koch/Shop Manager",
      period: "2019-2021",
      details: [
        "Verwaltung der Planung und Durchführung der Eisherstellung.",
        "Überwachung des Teams für optimale Leistung und Zusammenarbeit.",
        "Pflege von Kundenbeziehungen für Serviceexzellenz.",
      ],
    },
    // Puedes añadir más experiencias aquí
  ];

  return (
    <div>
      <nav class="container-fluid">
        <ul>
          <li>
            <strong>Daniel Moreno</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#experience">Berufserfahrung</a>
          </li>
          <li>
            <a href="#education">Ausbildung</a>
          </li>
          <li>
            <a href="#skills">Kenntnisse</a>
          </li>
          <li>
            <a href="#languages">Sprachen</a>
          </li>
        </ul>
      </nav>

      <main class="container">
        <div class="grid">
          <section id="experience">
            <hgroup>
              <h2>Berufserfahrung</h2>
            </hgroup>
            {experiences.map((exp, index) => (
              <SeccionExperiencia
                key={index}
                title={exp.title}
                period={exp.period}
                details={exp.details}
              />
            ))}{" "}
          </section>

          <section id="education">
            <hgroup>
              <h2>Ausbildung</h2>
            </hgroup>
            <p>Detail your education background here...</p>
          </section>

          <section id="skills">
            <hgroup>
              <h2>Kenntnisse</h2>
            </hgroup>
            <p>List your skills and competencies here...</p>
          </section>

          <section id="languages">
            <hgroup>
              <h2>Sprachen</h2>
            </hgroup>
            <p>Detail your language proficiency here...</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Modelo1;
