import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { residentFees } from "../pages/utilities/Utilies";

function ResidentFeesCard() {
  const [cards, setCards] = useState(residentFees);

  const Item = styled(Paper)(() => ({
    width: "95%",
    height: "100px",
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  }));
  const navigate = useNavigate();

  return (
    <>
      <Card
        variant="elevation"
        sx={{ width: "100%", height: "auto", mt: "16px", p: "24px" }}
      >
        <Box display={"flex"} justifyContent="space-between">
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "gray900.main",
            }}
          >
            Resident Fees
          </Typography>
          <Button
            variant="outlined"
            startIcon={<BorderColorOutlinedIcon />}
            color="secondary"
            sx={{
              fontWeight: "500",
              borderRadius: "8px",
              textTransform: "none",
            }}
            onClick={() => navigate("/add-utility")}
          >
            Edit
          </Button>
        </Box>

        <Grid
          container
          width={"100%"}
          columns={{ xs: 4, sm: 8, md: 8 }}
          justifyContent={"space-around"}
          alignItems="center"
          marginTop="24px"
          rowGap={"10px"}
        >
          {cards.map((item, index) => (
            <Grid
            item
              xs={2}
              sm={4}
              md={1}
              key={index}
              justifyContent="center"
              alignItems={"center"}
            >
              <Item key={index}>
                <Box>{item.icon}</Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  {item.label}
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
}

export default ResidentFeesCard;
