import { useEffect, useState } from "react";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error cargando pizzas:", error);
      }
    };

    getPizzas();
  }, []);

  return (
    <div className="home-container">
      <h2>Pizzas disponibles</h2>

      <div className="card-grid">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;

