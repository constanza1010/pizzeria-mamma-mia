import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
  const { id } = useParams(); // 👈 obtiene el id de la URL
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await res.json();
      setPizza(data);
    };

    getPizza();
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>${pizza.price}</p>
    </div>
  );
};

export default Pizza;

