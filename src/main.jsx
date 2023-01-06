import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import "./index.css";

import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/auth/SignInPage";
import SignUp from "./pages/auth/SingUpPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* Auth layout route */}
        <Routes>
          <Route element={<AuthLayout />}>
            <Route index element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
