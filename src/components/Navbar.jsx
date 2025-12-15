import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <nav>
      <Link to="/">Home</Link>

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

      <span>Total $...</span>
    </nav>
  );
};

export default Navbar;

