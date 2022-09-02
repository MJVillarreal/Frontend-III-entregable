import React, { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {
  const [cantidad, setCantidad] = useState(0);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div className="App">
      <Cabecera cantidad={cantidad} />
      <Listado aumentarCantidad={aumentarCantidad} />
    </div>
  );
}

export default App;
