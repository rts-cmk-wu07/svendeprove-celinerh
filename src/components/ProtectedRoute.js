import { useToken } from "../contexts/TokenProvider";
import GoToLogin from "../features/calendar/components/GoToLogin";

function ProtectedRoute({ children }) {
  const { token } = useToken();

  return token ? children : <GoToLogin />;
}

export default ProtectedRoute;
