import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />

      <h3>{pizza.name}</h3>

      <Link to={`/pizza/${pizza.id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
};

export default CardPizza;

