import { Navigate } from "react-router-dom";
import { useToken } from "../contexts/TokenProvider";

function ProtectedRoute({ children }) {
  const { token } = useToken();

  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
