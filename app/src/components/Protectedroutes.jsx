import { useAuth } from "../pages/Auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  return auth.user ? children : <Navigate to={"/SignIn"} />;
};

export default ProtectedRoute;
