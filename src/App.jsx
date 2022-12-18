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
        <Route path="/sign-in-page" element={<SignInPage />} />
        <Route path="/sign-up-page" element={<SignUpPage />} />
        <Route path="/onboard-page" element={<OnBoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
