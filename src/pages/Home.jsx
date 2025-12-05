import CardPizza from "../components/CardPizza";
import { usePizzas } from "../context/PizzaContext";

const Home = () => {
  const { pizzas } = usePizzas();

  return (
    <div className="home">
      <h1>🍕 Nuestras Pizzas</h1>

      <div className="cards">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;

