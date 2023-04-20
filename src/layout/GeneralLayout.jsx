import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { Button, Stack } from "@mui/material";
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
import ManageProperty from "../pages/property/ManageProperty";
import { useAuth } from "../context/authContext";

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

function GeneralLayout() {
  // const { logout } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [mobMenu, setMobMenu] = useState(false);
  const [open, setOpen] = React.useState(false);

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

  const [menu, SetMenu] = useState(null);
  const Open = Boolean(menu);
  const handleMenuOpen = (e) => {
    console.log("hi");
    SetMenu(e.currentTarget);
  };
  const handleClose = () => {
    SetMenu(null);
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
            // onClick={() => logout()}
          >
            Sign Out
          </Button>
        </Drawer>
        <main className={classes.content}>
          {/* <Toolbar /> */}

          <Toolbar />
          {/* menu bar */}
          <Box height="55px" sx={{ bgcolor: "white.main" }} width="100%">
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box width={"100%"}>
                <Button
                  fullWidth
                  sx={{
                    "&:hover": { backgroundColor: "#ffffff" },
                    padding: "15px",
                  }}
                  variant="contained"
                  disableElevation
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleMenuOpen}
                  aria-controls={Open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={Open ? "true" : undefined}
                >
                  ACCOUNTS
                </Button>
                <Menu menu={menu} open={Open} onClose={handleClose}>
                  <MenuItem>minu</MenuItem>
                  <MenuItem>jinu</MenuItem>
                  <MenuItem>riya</MenuItem>
                </Menu>
              </Box>

              <Button
                fullWidth
                disableElevation
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  "&:hover": { backgroundColor: "#ffffff" },
                  padding: "15px",
                }}
              >
                Properties
              </Button>
              <Button
                fullWidth
                disableElevation
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  "&:hover": { backgroundColor: "#ffffff" },
                  padding: "15px",
                }}
              >
                BILLS
              </Button>
              <Button
                fullWidth
                disableElevation
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  "&:hover": { backgroundColor: "#ffffff" },
                  padding: "15px",
                }}
              >
                PAYMENTS
              </Button>
            </Stack>
          </Box>
          {/* <ManageProperty /> */}
          <Box
            sx={{
              px: "48px",
              py: "40px",
              bgcolor: "#F3F4F4",
              justifyContent: "center",
            }}
          >
            <Outlet />
          </Box>
        </main>
      </div>
    </>
  );
}

export default GeneralLayout;
