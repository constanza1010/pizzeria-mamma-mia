/* eslint-disable react-refresh/only-export-components */
// src/context/UserContext.jsx

import { createContext, useState } from "react";

// Valor por defecto SIN funciones internas (evita el error de Vite)
export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(false);

  const login = () => setToken(true);
  const logout = () => setToken(false);

  const value = { token, login, logout };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}


