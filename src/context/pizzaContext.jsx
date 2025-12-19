/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  // 🔹 Obtener pizzas del backend
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error cargando pizzas:", error));
  }, []);

  // 🔹 Agregar pizza al carrito
  const addToCart = (pizza) => {
    setCart((prev) => [...prev, pizza]);
  };

  // 🔹 Total del carrito
  const total = cart.reduce((sum, pizza) => sum + pizza.price, 0);

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        cart,
        total,
        addToCart,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

// 🔹 Hook personalizado
export const usePizzas = () => {
  return useContext(PizzaContext);
};

