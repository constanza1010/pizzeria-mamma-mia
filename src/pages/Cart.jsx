import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();

  return (
    <div className="cart-page">
      <h2>🛒 Carrito</h2>

      {cart.length === 0 && <p>El carrito está vacío.</p>}

      {cart.map((p) => (
        <div key={p.id} className="cart-item">
          <h4>{p.name}</h4>
          <p>${p.price}</p>

          <button onClick={() => removeFromCart(p.id)}>−</button>
          <span>{p.quantity}</span>
          <button onClick={() => addToCart(p)}>+</button>
        </div>
      ))}

      <h2>Total: ${total.toLocaleString()}</h2>
    </div>
  );
};

export default Cart;

