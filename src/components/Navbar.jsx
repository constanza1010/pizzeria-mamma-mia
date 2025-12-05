import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">🍕 Pizzería Mamma Mia</Link>

      <Link to="/cart" className="cart-btn">
        🛒 Total: ${total.toLocaleString()}
      </Link>
    </nav>
  );
};

export default Navbar;

