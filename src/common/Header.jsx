import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function Header(prop) {
  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} sx={{ mt: "6px" }}>
        <Box
          sx={{
            fontSize: "	1.875rem",
            fontWeight: "700",
            color: "gray900.main",
          }}
        >
          {prop.heading}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "	1.875rem",
            fontWeight: "700",
            color: "gray600.main",
          }}
        >
          {prop.title}

          <StarOutlineIcon fontSize="20px" color="gray900" />
        </Box>
      </Stack>
    </>
  );
}

export default Header;
