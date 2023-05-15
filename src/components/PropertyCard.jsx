import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PROPERTY_DETAILS } from "@/constants/routes";
import { useSelector } from "react-redux";
 property-utility-functionality
import property_image from '../assets/property_image.jpg'


const menuItems = [
  { label: "Edit Property Details", url: "/add-property" },
  { label: "Edit Utilities & Fees Details" },
  { label: "Edit Resident Details" },
];
const ITEM_HEIGHT = 140;

function PropertyCard({ item }) {
  const navigate = useNavigate();
  const [menuEl, setMenuEl] = useState(null);
  const openMenu = Boolean(menuEl);
  const handleMenuClick = (event) => {
    setMenuEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <Card
        onClick={() => navigate(`/property-details/${item.id}`)}
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", lg: "center" },
          flexDirection: {
            xs:"column",sm:"row"
          },
          width: "100%",
          height: "auto",
          padding: "18px",
          borderRadius: "8px",
          gap: "24px",
          mt: "6px",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          sx={{
 property-utility-functionality
            
            maxWidth:"300px",

            width: { xs: "100%", md: "100%" },

            height: "136px",
            maxWidth:"300px",
            borderRadius: "8px",
          }}
          image={property_image}
          alt="Live from space album cover"
        />
        <CardContent sx={{ flex: "1", p: "0px" }}>
          {/* heading */}
          <Stack
            direction={{ xs: "column", lg: "row" }}
            justifyContent="space-between"
            display={"flex"}
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
                {item.propertyName}
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
                {item.address}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent="center"
              alignContent={"center"}
            >
              {/* btn */}

              <Button
                variant="contained"
                color="gray50"
                disableElevation
                sx={{
                  color: "gray600.main",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "none",
                  width: { xs: "100%", lg: "auto" },
                }}
              >
                Property ID {item.propertyId}
              </Button>

              {/* menu icon */}
              <Box
                onClick={(e) => e.stopPropagation()}
                display={{ xs: "none", md: "block" }}
              >
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? true : undefined}
                  // aria-haspopup=true
                  onClick={handleMenuClick}
                >
                  <MoreVertIcon fontSize="medium" color="gray600" />
                </IconButton>
                <Menu
                  anchorEl={menuEl}
                  open={openMenu}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT,
                      width: "25ch",
                      borderRadius: "8px",
                    },
                  }}
                >
                  {menuItems.map((menuItem, index) => (
                    <Link
                      key={index}
                      to={menuItem.url}
                      style={{
                        textDecoration: "none",
                        color: "#495057",
                      }}
                    >
                      <MenuItem key={index}>{menuItem.label}</MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Stack>
          {/*  */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
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
                {/* Apartment */}
                {item.propertyType}
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
                {item.units}
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
    </>
  );
}

export default PropertyCard;
