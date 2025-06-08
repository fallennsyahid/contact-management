import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../stores/Auth";
import Loading from "../components/Loading";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
