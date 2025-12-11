import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // requisito del hito
  };

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {token ? (
        <>
          <Link to="/profile">
            <button>Profile</button>
          </Link>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </>
      )}

      <button>Total $...</button>
    </nav>
  );
};

export default Navbar;

