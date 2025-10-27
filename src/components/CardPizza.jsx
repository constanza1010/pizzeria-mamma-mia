const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>🍕 Ingredientes: {ingredients.join(", ")}</p>
        <h6>💰 Precio: ${price.toLocaleString("es-CL")}</h6>
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-primary">Ver más 👀</button>
          <button className="btn btn-danger">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

