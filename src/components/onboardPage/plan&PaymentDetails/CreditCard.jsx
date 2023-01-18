import React from "react";
import { MdWaterDrop } from "react-icons/md";
import { CiPercent, CiDollar } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import OpacityIcon from "@mui/icons-material/Opacity";
import PercentIcon from "@mui/icons-material/Percent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function CreditCard() {
  return (
    <>
      <Card
        sx={{
          width: { xs: "311px", sm: "230px" },
          height: "392px",
        }}
      >
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          sx={{
            width: { xs: "311px", sm: "230px" },
            height: "84px",
            bgcolor: "white.main",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "22px",
              paddingX: "20px",
              paddingTop: "13px",
            }}
            color="gray700.main"
          >
            CADET
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "15px",
              textAlign: "center",
              margin: "auto",
              paddingX: "20px",
            }}
            color="gray700.main"
            component="div"
          >
            Only have 1 utility to bill residents (ex. Water/Sewer).
          </Typography>
        </Stack>
        {/* 2 */}
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          sx={{
            width: { xs: "311px", sm: "230px" },
            height: "84px",
            bgcolor: "primary.main",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "20px",
              textAlign: "center",
            }}
            color="gray700.main"
            component="div"
          >
            Free*
          </Typography>
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent="center"
            color="gray700.main"
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "36px",
                textAlign: "center",
              }}
            >
              $2
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "12px",
              }}
            >
              unit/month
            </Typography>
          </Stack>
        </Stack>
        {/* 3 */}

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent="flex-start"
          sx={{
            width: { xs: "311px", sm: "230px" },
            height: "166px",
            bgcolor: "gray700.main",
            // padding: "20px",
          }}
        >
          {/* 1 */}
          <Stack
            direction={"row"}
            justifyContent="start"
            alignItems={"center"}
            spacing={1}
            padding="5px"
            marginTop={"10px"}
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "5px",
            }}
            component="div"
          >
            <OpacityIcon color="primary" fontSize="small" />
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "14px",
              }}
              color="white.main"
              component="div"
            >
              Recover high-use unit utilities
            </Typography>
          </Stack>
          {/* 2 */}

          <Stack
            direction={"row"}
            justifyContent="start"
            alignItems={"center"}
            spacing={1}
            padding="5px"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "20px",
            }}
            component="div"
          >
            <PercentIcon color="primary" fontSize="small" />
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "14px",
              }}
              color="white.main"
              component="div"
            >
              Lower property’s utility use
            </Typography>
          </Stack>
          {/* 3 */}
          <Stack
            direction={"row"}
            justifyContent="start"
            alignItems={"center"}
            spacing={1}
            padding="5px"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "20px",
            }}
            component="div"
          >
            <AttachMoneyIcon color="primary" fontSize="small" />
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "14px",
              }}
              color="white.main"
              component="div"
            >
              Pass thru admin fee to residents*
            </Typography>
          </Stack>
          {/* 4 */}
          <Stack
            direction={"row"}
            justifyContent="start"
            alignItems={"center"}
            spacing={1}
            padding="5px"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "20px",
            }}
            component="div"
          >
            <AttachMoneyIcon color="primary" fontSize="small" />
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "14px",
              }}
              color="white.main"
              component="div"
            >
              Improve your NOI!
            </Typography>
          </Stack>
          {/* 5 */}
          <Stack
            direction={"row"}
            justifyContent="start"
            alignItems={"center"}
            spacing={1}
            padding="5px"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "20px",
            }}
            component="div"
          >
            <AttachMoneyIcon color="primary" fontSize="small" />

            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "14px",
              }}
              color="white.main"
              component="div"
            >
              Bill Boldly!
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "311px", sm: "230px" },
            height: "60px",
            bgcolor: "white.main",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "15px",
              borderRadius: "22px",
              textAlign: "center",
            }}
          >
            GO CADET
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default CreditCard;
//
