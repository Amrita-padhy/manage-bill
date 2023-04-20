import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectUser } from "./store/user/userStore";
import { useEffect } from "react";
import { MANAGE_PROPERTY } from "./constants/routes";
import { SIGNIN } from "./constants/routes";

export const App = () => {
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(MANAGE_PROPERTY);
    } else {
      navigate(SIGNIN);
    }
  }, [user]);
  return <Outlet />;
};
