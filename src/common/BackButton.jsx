import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="text"
        color="secondary"
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none" }}
        onClick={() => {
          navigate("/main");
        }}
      >
        Back
      </Button>
    </>
  );
}

export default BackButton;
