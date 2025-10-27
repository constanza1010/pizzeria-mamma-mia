const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg bg-danger p-3 d-flex justify-content-between align-items-center text-white">
      <div>
        <button className="btn btn-outline-light me-2">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light me-2">🔓 Profile</button>
            <button className="btn btn-outline-light me-2">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light me-2">🔐 Login</button>
            <button className="btn btn-outline-light me-2">🔐 Register</button>
          </>
        )}
      </div>

      <button className="btn btn-light text-dark">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </button>
    </nav>
  );
};

export default Navbar;
