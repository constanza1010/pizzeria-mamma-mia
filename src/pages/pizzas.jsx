import { useParams } from "react-router-dom";
import { usePizzas } from "../context/PizzaContext";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas } = usePizzas();
  const { addToCart } = useCart();

  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>

      <h3>${pizza.price.toLocaleString()}</h3>

      <ul>
        {pizza.ingredients.map((ing) => (
          <li key={ing}>🍕 {ing}</li>
        ))}
      </ul>

      <button onClick={() => addToCart(pizza)}>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;

