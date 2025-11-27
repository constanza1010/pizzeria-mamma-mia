import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#eee",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>

      {/* El carrito */}
      <Link
        to="/cart"
        style={{ marginLeft: "auto", fontWeight: "bold" }}
      >
        🛒 Total: $0
      </Link>
    </nav>
  );
}

