import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { selectUser } from "../store/user/userStore";
import { useSelector } from "react-redux";
import { SIGNIN } from "../constants/routes";

export const ProtectedRoute = ({ children }) => {
  const { user } = useSelector(selectUser);

  if (!user) {
    return <Navigate to={SIGNIN} />;
  }
  return children;
};
