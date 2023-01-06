import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "../layout/AuthLayout";
import SignIn from "../pages/auth/SignInPage";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
