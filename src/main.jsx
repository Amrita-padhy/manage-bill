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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        {/* Auth layout route */}
        <Routes>
          <Route element={<AuthLayout />}>
            <Route index element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
            <Route
              path="/forgetPasswordEmailSentPage"
              element={<ForgetPasswordEmailSentPage />}
            />
            <Route
              path="/setNewPasswordPage"
              element={<SetNewPasswordPage />}
            />
            <Route path="/resetPasswordPage" element={<ResetPasswordPage />} />
            <Route path="/Onboard" element={<OnBoardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
