import { Box, Button, Divider, Drawer, Typography } from '@mui/material';
import React, { useState } from 'react'
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    drawer: {
      flexShrink: 0,
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
   
    toolbar: {
      ...theme.mixins.toolbar,
      backgroundColor:"#495057",
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
function AppDrawer() {
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };


   
const classes = useStyles();


  return (
    <>
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
          <div
           className={classes.toolbar}
            />
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
              boxshadow: 1,
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
                boxshadow: 1,
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
    </>
  )
}

export default AppDrawer
