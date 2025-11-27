import { useState } from "react";
import { pizzaCart } from "./pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <div className="cart">
      <h2>🛒 Carrito de Compras</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} className="cart-img" />
          <p>{pizza.name}</p>
          <p>${pizza.price}</p>

          <div className="controls">
            <button onClick={() => decrease(pizza.id)}>-</button>
            <span>{pizza.count}</span>
            <button onClick={() => increase(pizza.id)}>+</button>
          </div>
        </div>
      ))}

      <h3>Total: ${total}</h3>
      <button className="pay-btn">Pagar</button>
    </div>
  );
};

export default Cart;
