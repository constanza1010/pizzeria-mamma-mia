import { createContext, useState } from "react";

export const UserContext = createContext({
  token: null,
  login: () => {},
  logout: () => {}
});

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // valor por defecto

  const login = (tokenValue) => {
    setToken(tokenValue); // debe recibir un string
  };

  const logout = () => {
    setToken(null); // debe quedar null
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

