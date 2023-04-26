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
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { InputBase, InputLabel } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { getPropertyList } from "../../store/property/propertyReducer";

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
  const { propertyList } = useSelector((state) => state.property);

  const [activeTab, setActiveTab] = useState(0);
  const [sort, setSort] = useState("");
  const [isLading, setIsLoading] = useState(false);
  const [showProperty, setShowProperty] = useState(4);
  const dispatch = useDispatch();

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

  const getData = async () => {
    const uid = user?.uid;
    setIsLoading(true);
    const { data } = await getProperty(uid);
    setIsLoading(false);
    // console.log(data);
    dispatch(getPropertyList(data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box sx={{ p: "20px", mt: "50px" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          textAlign={"center"}
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
            variant="outlined"
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
                alignItems={{ sm: "flex-start", md: "center" }}
                gap={1}
                mb={"20px"}
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
                <Box
                  component="form"
                  sx={{
                    padding: "5px",
                    border: "1.5px solid #FBE122",
                    borderRadius: "10px",
                  }}
                >
                  <InputBase
                    placeholder="Search property…"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Stack>
              {/* sort button */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems={{ sm: "flex-start", md: "center" }}
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
                <Select
                  sx={{
                    border: "1.5px solid #FBE122",
                    borderRadius: "10px",
                    p: "4px",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  onChange={handleSortProperty}
                >
                  <MenuItem value={10}>A-Z</MenuItem>
                  <MenuItem value={20}>Z-A</MenuItem>
                  <MenuItem value={30}>LOW-HIGH</MenuItem>
                </Select>
              </Stack>
            </CardActions>
            <Divider />

            <CardContent>
              <TabPanel value={activeTab} index={0}>
                <Stack justifyContent={"center"} alignItems="center">
                  {isLading ? (
                    <CircularProgress color="secondary" />
                  ) : (
                    <Stack
                      width={"100%"}
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      {propertyList
                        ?.slice(0, showProperty)
                        .map((item, index) => (
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
                        {showProperty === propertyList.length
                          ? "Show Less"
                          : "Load More"}
                      </Button>
                    </Stack>
                  )}
                </Stack>
                {/*  */}
                <Stack justifyContent={"center"} alignItems="center">
                  {!propertyList.length && (
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
                  )}
                  {!isLading && !propertyList.length && (
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
      </Box>
    </>
  );
}

export default ManageProperty;
