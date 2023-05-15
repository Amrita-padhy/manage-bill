import {
  Navigate,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

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
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../store/user/userStore.js";
import { onAuthStateChanged } from "firebase/auth";
import { getUserInfo } from "../api/user/userApi.js";
import { useEffect } from "react";
import { auth } from "../boot/firebase.js";
import { App } from "../App.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import AddResident from "../pages/property/AddResident.jsx";

export const AppRouter = () => {
  const { user } = useSelector(selectUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
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
          element: (
            <ProtectedRoute>
              <GeneralLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <ManageProperty />,
            },
            {
              path: ROUTE.ADD_PROPERTY,
              element: <AddProperty />,
            },
            {
              path: ROUTE.PROPERTY_DETAILS,
              element: <PropertyDetails />,
            },
            {
              path: ROUTE.ADD_RESIDENT,
              element: <AddResident />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}>
    <ScrollRestoration getKey={(location,matches) => {
        return location.key
      }} />
  </RouterProvider>;
};


