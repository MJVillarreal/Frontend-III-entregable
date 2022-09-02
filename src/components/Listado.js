import React from "react";
import Item from "./Item";
import data from "./data.json";

export default function Listado(props) {
  return (
    <div className="container">
      {data.map(({ id, producto, stock }) => (
        <Item
          key={id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          stock={stock}
          comprarItem={props.aumentarCantidad}
        />
      ))}
    </div>
  );
}
