import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PropertyCard from "./PropertyCard";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ShowerIcon from "@mui/icons-material/Shower";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PestControlIcon from "@mui/icons-material/PestControl";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PetsIcon from "@mui/icons-material/Pets";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import TvIcon from "@mui/icons-material/Tv";
import CompassCalibrationOutlinedIcon from "@mui/icons-material/CompassCalibrationOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
function PropertyDetailCard() {
  const [sort, setSort] = useState("");
  const handleSortProperty = (event) => {
    setSort(event.target.value);
  };

  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (e, val) => {
    console.log(val);
    setActiveTab(val);
  };
  const Item = styled(Paper)(() => ({
    width: "108px",
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
      <Box width={"100%"}>
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
        {/* property heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "	1.875rem",
            fontWeight: "700",
            color: "gray900.main",
            gap: "10px",
          }}
        >
          Colonial Gardens
          <StarOutlineIcon fontSize="20px" color="gray700.main" />
        </Box>
        {/* property card component */}
        <Box sx={{ mt: "16px" }}>
          <PropertyCard />
        </Box>
        {/* Property Utilities */}
        <Card
          variant="elevation"
          sx={{ width: "100%", height: "auto", mt: "16px", p: "24px" }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            gap={"10px"}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: "gray900.main",
              }}
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
            >
              {" "}
              Edit
            </Button>
          </Stack>
          {/*  */}
          <Grid container justifyContent={"space-between"} marginTop="24px">
            {/*1 water sewer */}
            <Grid xs={6} md={1}>
              <Item>
                <ShowerIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Water Sewer
                </Typography>
              </Item>
            </Grid>
            {/* 2 water */}

            <Grid xs={6} md={1}>
              <Item>
                <OpacityOutlinedIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Water
                </Typography>
              </Item>
            </Grid>
            {/*3 water */}

            <Grid xs={6} md={1}>
              <Item>
                <WaterDamageOutlinedIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Sewer
                </Typography>
              </Item>
            </Grid>
            {/* 4 trace */}
            <Grid xs={6} md={1}>
              <Item>
                <DeleteOutlineOutlinedIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Trash
                </Typography>
              </Item>
            </Grid>
            {/* 5-Electricity */}
            <Grid xs={6} md={1}>
              <Item>
                <PowerOutlinedIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Electricity
                </Typography>
              </Item>
            </Grid>
            {/* gas */}
            <Grid xs={6} md={1}>
              <Item>
                <LocalFireDepartmentIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Gas
                </Typography>
              </Item>
            </Grid>
            {/* Pest */}
            <Grid xs={6} md={1}>
              <Item>
                <PestControlIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Pest
                </Typography>
              </Item>
            </Grid>
            {/* other */}
            <Grid xs={6} md={1}>
              <Item>
                <MoreHorizIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Other
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Card>
        {/* Resident Fees */}
        <Card
          variant="elevation"
          sx={{ width: "100%", height: "auto", mt: "16px", p: "24px" }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            gap={"10px"}
          >
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
            >
              {" "}
              Edit
            </Button>
          </Stack>
          {/*  */}
          <Grid container justifyContent={"space-between"} marginTop="24px">
            {/*1PetsIcon */}
            <Grid xs={6} md={1}>
              <Item>
                <PetsIcon fontSize="medium" color="green" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Pet
                </Typography>
              </Item>
            </Grid>
            {/* 2 Storage */}

            <Grid xs={6} md={1}>
              <Item>
                <Inventory2OutlinedIcon fontSize="medium" color="#74C0FC" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Storage
                </Typography>
              </Item>
            </Grid>
            {/*3 Amenities */}

            <Grid xs={6} md={1}>
              <Item>
                <DirectionsCarFilledOutlinedIcon
                  fontSize="medium"
                  color="gray600"
                />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Amenities
                </Typography>
              </Item>
            </Grid>
            {/* 4 Other */}
            <Grid xs={6} md={1}>
              <Item>
                <SportsSoccerIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Other
                </Typography>
              </Item>
            </Grid>
            {/* 5-Cable */}
            <Grid xs={6} md={1}>
              <Item>
                <TvIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Cable
                </Typography>
              </Item>
            </Grid>
            {/* Internet */}
            <Grid xs={6} md={1}>
              <Item>
                <CompassCalibrationOutlinedIcon
                  fontSize="medium"
                  color="gray600"
                />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Internet
                </Typography>
              </Item>
            </Grid>
            {/* Phone */}
            <Grid xs={6} md={1}>
              <Item>
                <LocalPhoneOutlinedIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Phone
                </Typography>
              </Item>
            </Grid>
            {/* other */}
            <Grid xs={6} md={1}>
              <Item>
                <MoreHorizIcon fontSize="medium" color="gray600" />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#868E96",
                  }}
                >
                  Other
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Card>
        {/* table
        1-tabs
        2-search
        3-sort button
        4-table
         */}
        <Card
          variant="outlined"
          sx={{ width: "100%", height: "400px", mt: "24px" }}
        >
          {/* tabs */}
          <Box
            sx={{
              width: "100%",
              height: "48px",
              bgcolor: "white.main",
            }}
          >
            <Tabs
              variant="fullWidth"
              value={activeTab}
              onChange={handleTabChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab
                label="Active Properties"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
              />
              <Tab
                label=" Inactive Properties"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
              />
            </Tabs>
          </Box>
          <Divider />
          {/* search and sort */}

          <Box
            padding={"20px"}
            direction={{ xs: "column", row: "row" }}
            display={{ xs: "block", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* search */}
            <Box
              direction={{ xs: "column", row: "row" }}
              display="flex"
              alignItems={"center"}
              gap={"10px"}
            >
              <Typography>Search Unit or Resident</Typography>
              <TextField
                label="Search"
                color="secondary"
                sx={{ width: { xs: "100%", md: "300px" } }}
                placeholder="Search"
              />
            </Box>
            {/* sort */}
            <Box
              direction={{ xs: "column", row: "row" }}
              display="flex"
              alignItems={"center"}
              gap={"10px"}
            >
              <Typography>Sort By</Typography>

              <Select
                margin="normal"
                variant="outlined"
                sx={{
                  bgcolor: "white.main",
                  borderRadius: "8px",
                  p: "6px",
                  border: "0.5px solid gray",
                }}
                autoWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                onChange={handleSortProperty}
              >
                <MenuItem value={10}>A - Z Resident Name</MenuItem>
                <MenuItem value={20}>Z - A Resident Name</MenuItem>
                <MenuItem value={30}>Ascending Unit Number</MenuItem>
                <MenuItem value={40}>Descending Unit Number</MenuItem>
              </Select>
            </Box>
          </Box>
          <Divider />
        </Card>
      </Box>
    </>
  );
}

export default PropertyDetailCard;
