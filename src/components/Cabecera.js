import React from "react";

export default function Cabecera(props) {
  return (
    <header>
      <h1>{" Carrito de compras "}</h1>
      <p>
        {" Cantidad de productos "}
        <span>{props.cantidad}</span>
      </p>
    </header>
  );
}
