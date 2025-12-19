import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { usePizzas } from "../context/PizzaContext";

const Navbar = () => {
  const { token, logout } = useUser();
  const { total } = usePizzas();

  return (
    <nav style={{ padding: "10px", display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>

      {/* 👉 Carrito SIEMPRE visible */}
      <Link to="/cart">🛒 Carrito (${total})</Link>

      {token ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

