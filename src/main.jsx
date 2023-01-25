import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";

import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/auth/SigninPage";
import SignUp from "./pages/auth/SingupPage";
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AuthContextProvider>
        <CssBaseline />
        <ThemeProvider theme={customTheme}>
          <BrowserRouter>
            {/* Auth layout route */}
            <Routes>
              <Route element={<AuthLayout />}>
                <Route index element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/Onboard" element={<OnBoardPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthContextProvider>
    </Provider>
  </QueryClientProvider>
);
