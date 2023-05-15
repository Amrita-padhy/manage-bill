import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@emotion/react';
import { useState ,useEffect,useRef} from 'react';
import {  useMediaQuery } from '@material-ui/core';
import { Button, Divider, Typography } from '@mui/material';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
const drawerWidth = 280;

function AppNavbar() {
  const inputRef = useRef(null);
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
};
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  

  return (
    <Box sx={{ display: 'flex' }}>
property-utility-functionality
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: { lg: `calc(100% - ${drawerWidth}px)` },

          ml: { sm: `${drawerWidth}px` }, }} color='gray700' >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display:{sm:"block",md:"none"} }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="form" sx={{borderBottom:"1px solid #FBE122", width:{xs:"200px",md:"300px"}, display:"flex"}}  >
          <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
      style={{color:"#FBE122"}}
        placeholder="Search something here..."
        inputProps={{ 'aria-label': 'search' }}
      />
     
    </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          display: { xs: 'block', md: 'block' },
        }}
        variant={isMdUp ? "permanent" : "temporary"}
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
       
      >
     <Toolbar sx={{bgcolor:"gray700.main"}}>
     <Typography color="primary.main" margin={'auto'}>MANAGE BILL</Typography>
        </Toolbar>
       <Box sx={{ bgcolor: "gray700.main", height: "232px",}}>
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
              border:"0.5px solid gray"

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
              border:"0.5px solid gray"

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
            sx={{ margin: "auto", textTransform: "none", color: "gray700",
            justifyContent: 'flex-end', bottom:"0px"
             }}
            endIcon={<SubdirectoryArrowRightIcon color="gray700" />}
          >
            Sign Out
          </Button>
      </Drawer>
    </Box>
    
   
  );
}

export default AppNavbar;
