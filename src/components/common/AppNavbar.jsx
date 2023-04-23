import React from "react";
import { makeStyles, styled, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/material";

const drawerWidth = 280;
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


function AppNavbar() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
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
  return (
   
 <Box bgcolor="#495057" position="fixed" sx={{width:"100vw",ml:"280px"}}>
          <Toolbar>
          <IconButton aria-label="menu" onClick={toggleDrawer}>
  <MenuIcon sx={{
    display:{sm:"block",md:"none"}
  }}
   />
</IconButton>
            <Typography>
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
        </Box>
    
   
  );
}

export default AppNavbar;
