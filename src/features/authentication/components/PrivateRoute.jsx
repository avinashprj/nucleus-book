import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { authToken } = useSelector((state) => state.authentication);
  const location = useLocation();
  return authToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
