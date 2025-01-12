import React from "react";

const SeccionIntereses = ({ data }) => (
  <div className="seccion-intereses">
    <ul>
      {data.map((interes, index) => (
        <li key={index}>{interes}</li>
      ))}
    </ul>
  </div>
);

export default SeccionIntereses;
