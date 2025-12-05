import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>${pizza.price.toLocaleString()}</p>

      <ul>
        {pizza.ingredients.map((ing) => (
          <li key={ing}>🍕 {ing}</li>
        ))}
      </ul>

      <Link to={`/pizza/${pizza.id}`}>Ver más</Link>

      <button onClick={() => addToCart(pizza)}>Añadir 🛒</button>
    </div>
  );
};

export default CardPizza;

