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
import AppNavbar from "../components/common/AppNavbar";
import AppDrawer from "../components/common/AppDrawer";

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "auto",
  },
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  // },

}));

function GeneralLayout() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
       
       <AppNavbar/>
       <AppDrawer/>
        <main >
          <Box
            sx={{
              px: "48px",
              py: "40px",
              bgcolor: "#F3F4F4",
              justifyContent: "center",
              mt:"50px"
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
