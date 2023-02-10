import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import { Check } from "@mui/icons-material";

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
    // vertical padding + font size from searchIcon
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
}));

function GeneralLayout() {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const [mobMenu, setMobMenu] = useState(false);

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
          <Box
            onMouseLeave={handleMenuClose}
            width="100%"
            height={"50px"}
            bgcolor="primary.main"
            display={"flex"}
            alignItems={"center"}
          >
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
                onMouseOver={handleMenuClick}
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

              {/* <Box
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
              </Box> */}
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
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                width: "312px",
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
                endIcon={<KeyboardArrowDownIcon />}
              >
                PROPERTIES
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
                <MenuItem onClick={handleMenuClose}></MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                width: "312px",
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
                endIcon={<KeyboardArrowDownIcon />}
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
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                width: "312px",
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
                endIcon={<KeyboardArrowDownIcon />}
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
          </Box>

          {/* <Typography component="h2" variant="h6" gutterBottom>
            On small and extra-small screens the sidebar/drawer is temporary and
            can be opened via the menu icon in the toolbar.
          </Typography>
          <Typography component="h2" variant="h6" gutterBottom>
            On medium, large, and extra-large screens the sidebar/drawer is
            permanent and there is no menu icon in the toolbar.
          </Typography> */}
          <hr />
        </main>
      </div>
      <Outlet />
    </>
  );
}

export default GeneralLayout;
