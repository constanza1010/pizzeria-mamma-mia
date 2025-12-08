import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { token } = useContext(UserContext);

  return (
    <div>
      <h1>Carrito</h1>

      <button disabled={!token}>
        {token ? "Pagar" : "Inicia sesión para pagar"}
      </button>
    </div>
  );
};

export default Cart;

