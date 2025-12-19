import { usePizzas } from "../context/PizzaContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = usePizzas();

  return (
    <div className="card h-100">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p>${pizza.price}</p>

        <button
          className="btn btn-primary"
          onClick={() => addToCart(pizza)}
        >
          Agregar 🛒
        </button>
      </div>
    </div>
  );
};

export default CardPizza;


