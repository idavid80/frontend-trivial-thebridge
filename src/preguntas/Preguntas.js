import React, { useState, useEffect } from "react";

function Preguntas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [setData]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3050/preguntas/");
    const json = await res.json();
    setData(json);
  };

  return (
    <ul>
      {data.map((item) => (
        <div>{item.pregunta}</div>
      ))}
    </ul>
  );
}

export default Preguntas;
