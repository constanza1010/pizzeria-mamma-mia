import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <nav>
      <button>Home</button>

      {token ? (
        <>
          <button>Profile</button>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button>Login</button>
          <button>Register</button>
        </>
      )}

      <button>Total $...</button>
    </nav>
  );
};

export default Navbar;

