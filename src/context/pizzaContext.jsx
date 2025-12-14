/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const PizzaContext = createContext();
export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const res = await fetch("/pizzas.json");
      const data = await res.json();
      setPizzas(data);
    };

    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};

