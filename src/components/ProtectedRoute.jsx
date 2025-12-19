import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useUser();

  if (!token) {
    // Si no hay token, redirige a login
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

