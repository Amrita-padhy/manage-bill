import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import OnBoardPage from "./pages/OnBoardPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SingUpPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/onboard" element={<OnBoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
