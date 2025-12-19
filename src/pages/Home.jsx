import CardPizza from "../components/CardPizza";
import { usePizzas } from "../context/PizzaContext";

const Home = () => {
  const { pizzas } = usePizzas();

  return (
    <div>
      <h1>Nuestras Pizzas</h1>
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;

