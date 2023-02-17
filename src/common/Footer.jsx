import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function Footer() {
  return (
    <>
      <Box
        position={"fixed"}
        width="100vw-280px"
        sx={{
          height: "50px",
          bgcolor: "wheat",
          left: "0",
          bottom: "0",
          right: "0",
        }}
      >
        hi
      </Box>
    </>
  );
}

export default Footer;
