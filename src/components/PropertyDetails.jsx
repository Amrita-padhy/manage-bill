import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Card,
  Divider,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PropertyCard from "./PropertyCard";
import PropertyUtilitiesCard from "./PropertyUtilitiesCard";
import ResidentFeesCard from "./ResidentFeesCard";
import BackButton from "../common/BackButton";
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

  return (
    <>
      <Box width={"100%"}>
        <BackButton />

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
        <PropertyUtilitiesCard />

        {/* Resident Fees */}
        <ResidentFeesCard />

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
              flexDirection={{ xs: "column", md: "row" }}
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
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"center"}
              gap={"10px"}
            >
              <Typography textAlign="left">Sort By</Typography>

              <Select
                variant="outlined"
                autoWidth
                sx={{
                  bgcolor: "white.main",
                  borderRadius: "8px",
                  border: "0.5px solid gray",
                }}
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
