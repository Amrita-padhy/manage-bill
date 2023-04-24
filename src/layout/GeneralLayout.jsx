import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import AppNavbar from "../components/common/AppNavbar";

function GeneralLayout() {
  
  return (
    <>
      <div >
       <AppNavbar/>
      </div>
      <Box sx={{marginLeft:{sm:"0px",md:"280px"}, mt:{sm:"50px",md:"80px"}}}>
<Outlet />
</Box>
    </>
  );
}
export default GeneralLayout;

