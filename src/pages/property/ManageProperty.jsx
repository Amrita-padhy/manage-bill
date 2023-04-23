import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";
import axios from "axios";
import { getProperty } from "../../api/property/property";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const Item = styled(Paper)(() => ({
  backgroundColor: "white",
  padding: "8px",
  border: "1px solid #DBDDDF",
  borderRadius: "8px",
  width: "90%",
  height: "92px",
  margin: "auto",
  cursor: "pointer",
}));
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
const overViewCard = [
  { id: 1, label: "Properties", value: "00" },
  { id: 2, label: "Units", value: "00" },
  { id: 3, label: "Residents", value: "00" },
  { id: 4, label: "Billable Residents", value: "0%" },
  { id: 5, label: "Properties", value: "00" },
  { id: 6, label: "Units", value: "00" },
  { id: 7, label: "Residents", value: "00" },
  { id: 8, label: "Billable Residents", value: "0%" },
];

function ManageProperty() {
  const [propertyData, setPropertyData] = useState([]);
  // console.log(propertyData);
  const [activeTab, setActiveTab] = useState(0);
  const [sort, setSort] = useState("");
  const [isLading, setIsLoading] = useState(false);
  const [showProperty, setShowProperty] = useState(4);
  const handleShowItem = () => {
    if (showProperty === propertyData.length) {
      setShowProperty(4);
    } else {
      setShowProperty(propertyData.length);
    }
  };
  const handleTabChange = (e, val) => {
    // console.log(val);
    setActiveTab(val);
  };

  const handleSortProperty = (event) => {
    setSort(event.target.value);
  };
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const getPropertyList = async () => {
    const uid = user?.uid;
    // console.log(uid);
    setIsLoading(true);
    const result = await getProperty(uid);
    setIsLoading(false);

    // console.log(result.data);
    setPropertyData(result.data);
  };
  useEffect(() => {
    getPropertyList();
  }, []);

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Header heading=" Properties:" title="Manage Properties" />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "184px",
            height: "40px",
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
          }}
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => navigate("/add-property")}
        >
          Add New Property
        </Button>
      </Stack>
      {/* property card */}
      <Box justifyContent={"center"}>
        <Card
          sx={{
            height: "auto",
            mt: "35px",
            padding: "24px",
          }}
        >
          {/* Overview */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              fontSize={"20px"}
              fontWeight="700"
              color={"gray900.main"}
            >
              Overview
            </Typography>
            <IconButton>
              <KeyboardArrowUpIcon />
            </IconButton>
          </Box>
          {/* Overview card main */}
          <Box width={"100%"} marginTop="16px">
            {/* <Grid container rowGap={"15px"}>
              <Grid >
                <Item xs={6} md={3}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "gray600.main",
                    }}
                  >
                    label
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "gray900.main",
                      mt: "6px",
                    }}
                  >
                    value
                  </Typography>
                </Item>
              </Grid>

              
            </Grid> */}
          </Box>
        </Card>
        {/* tab card */}
        <Card
          variant="outlined"
          sx={{
            mt: "32px",
            bgcolor: "transparent",
            height: "auto",
            mb: "40px",
          }}
        >
          {/* tab  */}
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
          <CardActions
            sx={{
              px: "26px",
              py: "20px",

              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            {/* search button */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              gap={1}
            >
              <Typography
                sx={{
                  color: "gray600.main",
                  fontSize: "16px",
                  fontWeight: "400",
                  whiteSpace: "nowrap",
                }}
              >
                Find Property
              </Typography>
              <TextField
                fullWidth
                id="input-with-icon-textfield"
                placeholder="Search"
                size="small"
                margin="normal"
                sx={{
                  bgcolor: "white.main",
                  border: "0.5px solid gray",
                  borderRadius: "8px",
                  p: "10px",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Stack>
            {/* sort button */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              gap={1}
            >
              <Typography
                sx={{
                  color: "gray600.main",
                  fontSize: "16px",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                }}
              >
                Sort By
              </Typography>

              <FormControl
                fullWidth
                size="small"
                margin="normal"
                variant="standard"
                sx={{
                  bgcolor: "white.main",
                  borderRadius: "8px",
                  p: "6px",
                  border: "0.5px solid gray",
                }}
              >
                <Select
                  autoWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="A-Z"
                  onChange={handleSortProperty}
                >
                  <MenuItem value={10}>A-Z</MenuItem>
                  <MenuItem value={20}>Z-A</MenuItem>
                  <MenuItem value={30}>LOW-HIGH</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </CardActions>
          <Divider />

          <CardContent>
            <TabPanel value={activeTab} index={0}>
              <Stack justifyContent={"center"} alignItems="center">
                {isLading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <Stack justifyContent={"center"} alignItems="center">
                    {propertyData.slice(0, showProperty).map((item, index) => (
                      <PropertyCard key={index} item={item} />
                    ))}
                    <Button
                      variant="contained"
                      onClick={handleShowItem}
                      color={"secondary"}
                      disableElevation
                      sx={{
                        textTransform: "none",
                        mt: "20px",
                        width: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {showProperty === propertyData.length
                        ? "Show Less"
                        : "Load More"}
                    </Button>
                  </Stack>
                )}
              </Stack>
              {/*  */}
              <Stack justifyContent={"center"} alignItems="center">
                {!propertyData.length && (
                    <Typography
                      sx={{
                        color: "gray600.main",
                        fontSize: "20px",
                        fontWeight: "500",
                        width: "340px",
                      }}
                    >
                      Currently, No properties are added.
                    </Typography>
                  ) && (
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        width: "184px",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: "500",
                        textTransform: "none",
                        mt: "20px",
                      }}
                      startIcon={<AddCircleOutlineIcon />}
                      onClick={() => navigate("/add-property")}
                    >
                      Add New Property
                    </Button>
                  )}
              </Stack>
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
              Inactive Properties
            </TabPanel>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default ManageProperty;
