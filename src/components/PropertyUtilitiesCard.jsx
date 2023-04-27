import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { residentUtilities } from "../pages/utilities/Utilies";
import { useSelector } from "react-redux";


function PropertyUtilitiesCard(prop) {

  const {selectedProperty} = useSelector((state) => state.property)
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
            onClick={() => navigate(`/property-details/${selectedProperty.id}/add-utility`)}
          >
            Edit
          </Button>
        </Stack>
        {/* utility grid */}
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 8 }}
          justifyContent={"space-around"}
          alignItems="center"
          marginTop="24px"
          rowGap={"10px"}
          item
        >
          {residentUtilities.map((item, index) => (
            <Grid
            item
              xs={2}
              sm={4}
              md={1}
              key={index}
              justifyContent="center"
              alignItems={"center"}
            >
              <Item >
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
