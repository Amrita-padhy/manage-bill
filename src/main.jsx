import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import store from "@/store/store.js";
import { customTheme } from "./styles/colorPalette";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";

import "./index.css";
import { AppRouter, router } from "./routes/Root";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
