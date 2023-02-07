import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      {/* // navbar //menu navbar // sidebar */}
      <Outlet />
      {/* // footer */}
    </>
  );
}

export default AuthLayout;
