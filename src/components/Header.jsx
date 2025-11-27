const Header = () => {
  return (
    <header
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1601924582971-c9e43c203f9c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: "100px 20px",
        textShadow: "2px 2px 8px rgba(0,0,0,0.8)"
      }}
    >
      <h1>🍕 Pizzería Mamma Mia</h1>
      <p>Las mejores pizzas de la costa chilena</p>
    </header>
  );
};

export default Header;

