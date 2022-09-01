import { useEffect, useState } from "react";

export default function Item(props) {
  const [cantidad, setCantidad] = useState();

  useEffect(() => {
    setCantidad(props.stock);
    console.log("Cantidad inicial ", cantidad);
  }, []);

  const comprarItem = () => {
    setCantidad(cantidad - 1);
    props.comprarItem();
  };

  return (
    <div className="producto">
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>
        {"En stock:"}
        <span>{cantidad > 0 ? cantidad : "agotado"}</span>
      </h5>
      <button disabled={cantidad === 0} onClick={comprarItem}>
        {"Comprar"}
      </button>
    </div>
  );
}
