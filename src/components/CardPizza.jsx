import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>Ingredientes:</p>

      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>🍕 {ingredient}</li>
        ))}
      </ul>

      <p>
        <strong>${pizza.price}</strong>
      </p>

      <div className="buttons">
        <Link to={`/pizza/${pizza.id}`}>
          <button>Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default CardPizza;
