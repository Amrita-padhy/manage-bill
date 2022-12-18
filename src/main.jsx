import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { myNewTheme } from "./styles/extendTheme";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={myNewTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
