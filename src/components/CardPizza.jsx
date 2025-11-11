const CardPizza = ({ name, price, img, ingredients }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" />

      <h3>{name.toUpperCase()}</h3>
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {ingredients.map((ingrediente, index) => (
          <li key={index}>🍕 {ingrediente}</li>
        ))}
      </ul>

      <p className="price">Precio: ${price}</p>
    </div>
  );
};

export default CardPizza;


