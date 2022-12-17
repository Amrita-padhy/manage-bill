import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SingUp";
import Home from "./components/Home";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
