import { RouterProvider, createBrowserRouter } from "react-router-dom";

import * as ROUTE from "../constants/routes.js";

import AuthLayout from "../layout/AuthLayout";
import GeneralLayout from "../layout/GeneralLayout";
import SignIn from "../pages/auth/SignInPage";
import SignUp from "../pages/auth/SingUpPage";
import OnBoardPage from "../pages/OnBoardPage";
import ManageProperty from "../pages/property/ManageProperty";
import AddProperty from "../pages/property/AddProperty";
import PropertyDetails from "../components/PropertyDetails";
import AddUtility from "../pages/property/AddUtility";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/userStore.js";

export const AppRouter = () => {
  const user = useSelector(selectUser);
  console.log(user);

  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          index: true,
          path: ROUTE.SIGNIN,
          element: <SignIn />,
        },
        {
          path: ROUTE.SIGNUP,
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/",
      element: <GeneralLayout />,
      children: [
        {
          index: true,
          element: <ManageProperty />,
        },
        {
          path: ROUTE.ADD_PROPERTY,
          element: <AddProperty />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
