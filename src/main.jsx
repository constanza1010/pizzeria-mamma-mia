import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <PizzaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PizzaProvider>
  </CartProvider>
);

