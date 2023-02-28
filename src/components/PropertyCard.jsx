import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";

function PropertyCard() {
  const navigate = useNavigate();

  return (
    <>
      <Card
        onClick={() => navigate("/detail-property-card")}
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          padding: "24px",
          borderRadius: "8px",
          gap: "24px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", md: "200px" },
            height: "136px",
            borderRadius: "8px",
          }}
          image="live-from-space.jpg"
          alt="Live from space album cover"
        />
        <CardContent sx={{ flex: "1", p: "0px" }}>
          {/* heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },

              justifyContent: {
                xs: "flex-start",
                md: "space-between",
              },
              alignItems: { xs: "flex-start", md: "center" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "gray900.main",
                  fontSize: "24px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                Colonial Gardens
              </Typography>
              {/* subheading */}
              <Typography
                sx={{
                  color: "gray600.main",
                  fontSize: "14px",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                }}
              >
                123 B Street, San Diego, CA 92101
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
              gap={"10px"}
            >
              <Button
                variant="contained"
                color="gray50"
                disableElevation
                sx={{
                  color: "gray600.main",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "none",
                }}
              >
                Property ID 123456
              </Button>
              {/*  */}
              <MoreVertIcon fontSize="medium" color="gray600" />
            </Box>
          </Box>
          {/*  */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "24px",
            }}
          >
            <Box width={"100%"} m="6px">
              <Typography
                sx={{
                  color: "gray700.main",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Property Type
              </Typography>
              <Typography
                sx={{
                  color: "gray900.main",
                  fontSize: "16px",
                  fontWeight: "900",
                }}
              >
                Apartment
              </Typography>
            </Box>
            <Box width={"100%"} m="6px">
              <Typography
                sx={{
                  color: "gray700.main",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Number of Units
              </Typography>
              <Typography
                sx={{
                  color: "gray900.main",
                  fontSize: "16px",
                  fontWeight: "900",
                }}
              >
                {" "}
                100
              </Typography>
            </Box>
            <Box width={"100%"} m="6px">
              <Typography
                sx={{
                  color: "gray700.main",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Deposit Bank Account
              </Typography>
              <Typography
                sx={{
                  color: "gray900.main",
                  fontSize: "16px",
                  fontWeight: "900",
                }}
              >
                xxxxxx3234
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default PropertyCard;
