import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  Tabs,
  Tab,
  CardMedia,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Header from "../common/Header";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from "../common/Footer";
// import { TabPanel } from "@mui/lab";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#FBE122",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "150px",
    borderBottom: "1px solid yellow",
    [theme.breakpoints.up("sm")]: {
      width: "300px",
    },
  },
}));
const Item = styled(Paper)(() => ({
  backgroundColor: "white",
  padding: "8px",
  border: "1px solid #DBDDDF",
  borderRadius: "8px",
  width: { xs: "115px", md: "240px" },
  height: "92px",
  margin: "auto",
}));

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "auto",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#495057",
    boxShadow: "0px 0px 0px 0px",
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  menu: {
    backgroundColor: "lightblue",
    "& .MuiMenu-paper": {
      backgroundColor: "yellow",
    },
  },
}));
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
function GeneralLayout() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (e, val) => {
    console.log(val);
    setActiveTab(val);
  };
  const [sort, setSort] = useState("");

  const handleSortProperty = (event) => {
    setSort(event.target.value);
  };
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const [mobMenu, setMobMenu] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  const handleMenuToggle = () => {
    setMobMenu(!mobMenu);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="gray700.main"
          boxShadow="0px"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              className={classes.menuButton}
              sx={{
                display: { xs: "inline-block", sm: "inline-block", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              variant="inherit"
              color={"primary.main"}
              fontWeight="700"
            >
              MANAGE-BILL
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon color="primary" />
              </SearchIconWrapper>
              <StyledInputBase
                color="primary"
                placeholder="Welcome, Ranger Bill. Ask me anything."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant={isMdUp ? "permanent" : "temporary"}
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
          open={open}
          onClose={toggleDrawer}
        >
          <div className={classes.toolbar} />

          {/* Increase in NOI YTD */}
          <Box sx={{ bgcolor: "gray700.main", height: "232px" }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
              padding={"16px"}
            >
              <Box
                display={"flex"}
                gap="10px"
                justifyContent={"center"}
                alignItems="center"
                marginBottom={"4px"}
              >
                <Typography color="white.main">Increase in NOI YTD</Typography>
                <InfoOutlinedIcon color="white" fontSize="small" />
              </Box>
              <Button
                variant="contained"
                color="white"
                fullWidth
                sx={{ height: "48px", padding: "8px" }}
              >
                $ 1,000.00
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
              padding={"16px"}
            >
              <Box
                display={"flex"}
                gap="10px"
                justifyContent={"center"}
                alignItems="center"
                marginBottom={"4px"}
              >
                <Typography color="white.main">% of bills recovered</Typography>
                <InfoOutlinedIcon color="white" fontSize="small" />
              </Box>
              <Button
                variant="contained"
                color="white"
                fullWidth
                sx={{ height: "48px", padding: "8px" }}
              >
                50%
              </Button>
            </Box>
          </Box>
          <Divider />
          {/* card */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "white",
                height: "120px",
                width: "248px",
                borderRadius: "8px",
                mt: "46px",
                boxShadow: 1,
              }}
            >
              <Box
                sx={{
                  height: "40px",
                  bgcolor: "primary.main",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  fontSize={"12px"}
                  fontWeight="500"
                  color="gray700.main"
                >
                  START IT
                </Typography>
                <AddCircleOutlineIcon fontSize="small" color="gray700" />
              </Box>
              <Box
                sx={{
                  height: "40px",
                  bgcolor: "white",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "10px",
                  gap: "8px",
                }}
              >
                <StarIcon fontSize="small" color="primary" />
                <Typography
                  fontSize={"12px"}
                  fontWeight="500"
                  color="gray700.main"
                >
                  Manage Properties
                </Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  height: "40px",
                  bgcolor: "white",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "10px",
                  gap: "8px",
                }}
              >
                <StarIcon fontSize="small" color="primary" />
                <Typography
                  fontSize={"12px"}
                  fontWeight="500"
                  color="gray700.main"
                >
                  Add Units
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* account info card */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "transparent",
                height: "70px",
                width: "248px",
                borderRadius: "8px",
                mt: "60px",
                boxShadow: 1,
              }}
            >
              <Box
                sx={{
                  height: "30px",
                  bgcolor: "primary.main",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  fontSize={"12px"}
                  fontWeight="500"
                  color="gray700.main"
                >
                  RANGER
                </Typography>
              </Box>

              <Divider />
              <Box
                sx={{
                  height: "35px",
                  bgcolor: "white",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  gap: "8px",
                }}
              >
                <Typography
                  fontSize={"12px"}
                  fontWeight="500"
                  color="gray700.main"
                >
                  Bill Wattson
                </Typography>
              </Box>
            </Box>
          </Box>
          {/*  Sign Out  */}
          <Button
            variant="outlined"
            color="gray700"
            sx={{ margin: "30px", textTransform: "none", color: "gray700" }}
            endIcon={<SubdirectoryArrowRightIcon color="gray700" />}
          >
            Sign Out
          </Button>
        </Drawer>
        <main className={classes.content}>
          {/* <Toolbar /> */}

          <Toolbar />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            width="100%"
            height={"50px"}
            bgcolor="primary.main"
          >
            {/* accounts */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "312px",
                },
                bgcolor: "white.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                fullWidth
                onClick={handleMenuClick}
                id="basic-button"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                color="gray700"
                sx={{
                  bgcolor: "primary.main",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                endIcon={
                  openMenu ? (
                    <KeyboardArrowUpIcon fontSize="large" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="large" />
                  )
                }
              >
                ACCOUNTS
              </Button>
              <Box
                onClick={handleMenuToggle}
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                    md: "none",
                  },
                }}
              >
                {mobMenu ? <CloseIcon /> : <MenuIcon />}
              </Box>
              {/* menu */}

              <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "top",
                }}
                transformOrigin={{ horizontal: "right", vertical: "bottom" }}
                PaperProps={{
                  style: {
                    maxHeight: "300px",
                    width: "200px",
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>minu</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </Box>

            {/* menu box */}

            {/* properties */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "312px",
                },
              }}
            >
              <Button
                fullWidth
                id="basic-button"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleMenuClick}
                color="gray700"
                sx={{
                  bgcolor: "primary.main",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                endIcon={
                  openMenu ? (
                    <KeyboardArrowUpIcon fontSize="large" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="large" />
                  )
                }
              >
                PROPERTIES
              </Button>
            </Box>
            {/* bills */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "312px",
                },
              }}
            >
              <Button
                fullWidth
                id="basic-button"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleMenuClick}
                color="gray700"
                sx={{
                  bgcolor: "primary.main",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                endIcon={
                  openMenu ? (
                    <KeyboardArrowUpIcon fontSize="large" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="large" />
                  )
                }
              >
                BILLS
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </Box>
            {/* PAYMENTS */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "312px",
                },
              }}
            >
              <Button
                fullWidth
                id="basic-button"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleMenuClick}
                color="gray700"
                sx={{
                  bgcolor: "primary.main",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                endIcon={
                  openMenu ? (
                    <KeyboardArrowUpIcon fontSize="large" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="large" />
                  )
                }
              >
                PAYMENTS
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Stack>
          <Box
            sx={{
              px: "48px",
              py: "40px",
              bgcolor: "#F3F4F4",
              justifyContent: "center",
            }}
          >
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
                    <Card
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
                    >
                      Add New Property
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </main>
      </div>
      <Outlet />
    </>
  );
}

export default GeneralLayout;
