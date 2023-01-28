import React, { useState } from "react";
import { MdWaterDrop } from "react-icons/md";
import { CiPercent, CiDollar } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import OpacityIcon from "@mui/icons-material/Opacity";
import PercentIcon from "@mui/icons-material/Percent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function CommanderCard({ selectSubscription, ...props }) {
  return (
    <>
      <Box
        sx={{
          width: { xs: "307px", sm: "227px" },
        }}
        border={props.isSelected ? "1px solid grey" : ""}
      >
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          sx={{
            width: { xs: "307px", sm: "227px" },
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
            {props?.name}
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
            {props?.highlight}
          </Typography>
        </Stack>
        {/* 2 */}
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          sx={{
            width: { xs: "307px", sm: "225px" },
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
            {props?.costDetails}
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
              ${props?.costPerUnit}
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
            width: { xs: "307px", sm: "225px" },
            bgcolor: "gray700.main",
          }}
        >
          {props?.planFeatures?.map((feature, index) => (
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
              {index === 0 && <OpacityIcon color="primary" fontSize="small" />}
              {index === 1 && <PercentIcon color="primary" fontSize="small" />}
              {index === 2 && (
                <AttachMoneyIcon color="primary" fontSize="small" />
              )}
              {index === 3 && (
                <AttachMoneyIcon color="primary" fontSize="small" />
              )}
              {index === 4 && (
                <AttachMoneyIcon color="primary" fontSize="small" />
              )}

              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "400",
                  lineHeight: "14px",
                }}
                color="white.main"
                component="div"
              >
                {feature.details}
              </Typography>
            </Stack>
          ))}
        </Box>
        <Box
          sx={{
            width: { xs: "305px", sm: "225px" },
            bgcolor: "white.main",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            component={Button}
            variant="contained"
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "15px",
              borderRadius: "22px",
              textAlign: "center",
              "&:hover": { backgroundColor: "transparent" },
            }}
            onClick={() => selectSubscription(props.name)}
          >
            GO {props?.name}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CommanderCard;
