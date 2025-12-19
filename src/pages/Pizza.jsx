import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then(res => res.json())
      .then(data => setPizza(data));
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} width="300" />
      <p>{pizza.desc}</p>
      <p>🍕 Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;

