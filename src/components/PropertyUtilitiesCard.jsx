import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ShowerIcon from "@mui/icons-material/Shower";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PestControlIcon from "@mui/icons-material/PestControl";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { residentUtilities } from "../pages/utilities/Utilies";

function PropertyUtilitiesCard(prop) {
  const Item = styled(Paper)(() => ({
    width: "95%",
    height: "100px",
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  }));
  const navigate = useNavigate();
  return (
    <>
      <Card
        variant="elevation"
        sx={{ width: "100%", height: "auto", mt: "16px", p: "24px" }}
      >
        {/* heading */}
        <Stack direction={"row"} justifyContent="space-between">
          <Typography
            sx={{ fontSize: "20px", fontWeight: "700", color: "gray900.main" }}
          >
            Property Utilities
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
        </Stack>
        {/* utility grid */}
        <Grid
          container
          columns={{ xs: 4, sm: 12, md: 12 }}
          justifyContent={"space-around"}
          alignItems="center"
          marginTop="24px"
          rowGap={"10px"}
        >
          {residentUtilities.map((item, index) => (
            <Grid
              xs={2}
              sm={4}
              md={1}
              key={index}
              justifyContent="center"
              alignItems={"center"}
            >
              <Item>
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

export default PropertyUtilitiesCard;
