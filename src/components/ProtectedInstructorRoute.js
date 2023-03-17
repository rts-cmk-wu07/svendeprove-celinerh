import { Navigate } from "react-router-dom";
import { useToken } from "../contexts/TokenProvider";

function ProtectedInstructorRoute({ children }) {
  const { token } = useToken();

  return token.role === "instructor" ? children : <Navigate to="/404" />;
}

export default ProtectedInstructorRoute;
