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
import React, { useState } from "react";
import Header from "../../common/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";

const Item = styled(Paper)(() => ({
  backgroundColor: "white",
  padding: "8px",
  border: "1px solid #DBDDDF",
  borderRadius: "8px",
  width: { xs: "115px", md: "240px" },
  height: "92px",
  margin: "auto",
}));
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
function ManageProperty() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (e, val) => {
    console.log(val);
    setActiveTab(val);
  };
  const [sort, setSort] = useState("");

  const handleSortProperty = (event) => {
    setSort(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <>
      {/* Manage Properties */}

      {/* heading */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
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
          onClick={() => navigate("/add-property          ")}
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
            <KeyboardArrowUpIcon fontSize="medium" color="gray900,main" />
          </Box>
          {/* Overview card main */}
          <Box width={"100%"} marginTop="16px">
            <Grid container>
              {/* Properties */}
              <Grid xs={6} md={3}>
                <Item>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "gray600.main",
                    }}
                  >
                    Properties
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "gray900.main",
                      mt: "6px",
                    }}
                  >
                    00
                  </Typography>
                </Item>
              </Grid>

              {/* Units */}
              <Grid xs={6} md={3}>
                <Item>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "gray600.main",
                    }}
                  >
                    Units
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "gray900.main",
                      mt: "6px",
                    }}
                  >
                    00
                  </Typography>
                </Item>
              </Grid>
              {/* Residents */}

              <Grid xs={6} md={3}>
                <Item>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "gray600.main",
                    }}
                  >
                    Residents
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "gray900.main",
                      mt: "6px",
                    }}
                  >
                    00
                  </Typography>
                </Item>
              </Grid>

              {/* Billable Residents */}
              <Grid xs={6} md={3}>
                <Item>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "gray600.main",
                    }}
                  >
                    Billable Residents
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "gray900.main",
                      mt: "6px",
                    }}
                  >
                    0%
                  </Typography>
                </Item>
              </Grid>
            </Grid>
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
            <Stack justifyContent={"center"} alignItems="center">
              {/* property card */}

              <PropertyCard />

              <TabPanel value={activeTab} index={0}>
                Active Properties
              </TabPanel>
              <TabPanel value={activeTab} index={1}>
                Inactive Properties
              </TabPanel>
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
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "184px",
                  height: "40px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "none",
                  mt: "40px",
                }}
                startIcon={<AddCircleOutlineIcon />}
                onClick={() => navigate("/add-property          ")}
              >
                Add New Property
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>

      {/*Save button  */}
      <Box display={"flex"} justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          sx={{
            textTransform: "none",
          }}
        >
          Save
        </Button>
      </Box>
    </>
  );
}

export default ManageProperty;
