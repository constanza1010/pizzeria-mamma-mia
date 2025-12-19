/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { usePizzas } from "../context/PizzaContext";

const Cart = () => {
  const { token } = useUser();
  const { cart, total } = usePizzas();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) {
        throw new Error("Error en la compra");
      }

      setSuccess(true);
    } catch (err) {
      setError("No se pudo realizar la compra");
    }
  };

  return (
    <div>
      <h2>🛒 Carrito</h2>

      {cart.length === 0 && <p>El carrito está vacío</p>}

      {cart.map((pizza) => (
        <div key={pizza.id}>
          <p>
            {pizza.name} x {pizza.count}
          </p>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button onClick={handleCheckout} disabled={!token || cart.length === 0}>
        Pagar
      </button>

      {/* ✅ MENSAJES */}
      {success && <p style={{ color: "green" }}>✅ Compra realizada con éxito</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!token && <p>Debes iniciar sesión para pagar</p>}
    </div>
  );
};

export default Cart;

