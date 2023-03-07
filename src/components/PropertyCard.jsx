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
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Edit Property Details", url: "/add-property" },
  { label: "Edit Utilities & Fees Details" },
  { label: "Edit Resident Details" },
];
const ITEM_HEIGHT = 140;
function PropertyCard() {
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
        onClick={() => navigate("/property-details")}
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          padding: "24px",
          borderRadius: "8px",
          gap: "24px",
          mt: "6px",
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
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
              gap={"10px"}
            >
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
              {/* menu icon */}
              <Box onClick={(e) => e.stopPropagation()}>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
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
                  {menuItems.map((menuItem) => (
                    <Link
                      to={menuItem.url}
                      style={{
                        textDecoration: "none",
                        color: "#495057",
                      }}
                    >
                      <MenuItem key={menuItem}>{menuItem.label}</MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
            </Box>
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
    </>
  );
}

export default PropertyCard;
