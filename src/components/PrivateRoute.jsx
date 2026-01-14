import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = true; // TEMP (will replace with Firebase)

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
}
