import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";

import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/auth/SignInPage";
import SignUp from "./pages/auth/SingUpPage";
import ForgetPasswordPage from "./pages/auth/ForgetPasswordPage";
import ForgetPasswordEmailSentPage from "./pages/auth/ForgetPasswordEmailSentPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

import SetNewPasswordPage from "./pages/auth/SetNewPasswordPage";
import OnBoardPage from "./pages/OnBoardPage";
import { customTheme } from "./styles/colorPalette";
import { CssBaseline } from "@mui/material";
import store from "@/store/store.js";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthContextProvider from "./context/authContext";
import PaymentDetailsCard from "./components/onboardPage/plan&PaymentDetails/PaymentDetailsCard";
import ProfileDetailsCard from "./components/onboardPage/profile&companyDetails/ProfileDetailsCard";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <AuthContextProvider>
          <CssBaseline />
          <ThemeProvider theme={customTheme}>
            {/* Auth layout route */}
            <Routes>
              <Route element={<AuthLayout />}>
                <Route index element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/onboard" element={<OnBoardPage />}></Route>
              </Route>
              <Route path="/main" element={GeneralLayout}></Route>
            </Routes>
          </ThemeProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
