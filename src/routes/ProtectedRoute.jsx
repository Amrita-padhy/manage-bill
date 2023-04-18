import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children }) => {
  const { initialUser } = useAuth();
  console.log(initialUser);
  if (!initialUser?.uid) {
    return <Navigate to="/auth" />;
  }
  return children;
};
