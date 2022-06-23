import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3050/preguntas/");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
      {data.map((item) => (
        <div>{item.pregunta}</div>
      ))}
    </ul>
  );
}

export default App;
