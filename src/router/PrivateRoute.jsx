import { useAuth } from "../stores/Auth";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
};

export default PrivateRoute;
