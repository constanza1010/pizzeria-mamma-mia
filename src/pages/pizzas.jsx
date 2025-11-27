import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error cargando pizza:", error);
      }
    };

    getPizza();
  }, []);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="pizza-detail">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} />

      <p>{pizza.desc}</p>

      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <p className="price">Precio: ${pizza.price}</p>

      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
