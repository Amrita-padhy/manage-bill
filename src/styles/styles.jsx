import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

export const useStyles = makeStyles({
  root: {
    backgroundColor: "#E5E5E5",
    height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: "100%",
    fontSize: "16px",
    lineheight: "24px",
    fontWeight: "400",
    borderRadius: "8px",
    height: 40,
    border: " 1px solid ",
    padding: "10px 14px",
    marginBottom: "10px",
  },
});

export const MyLabel = styled(Box)({
  border: 0,
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "20px",
  marginBottom: "6px",
});

export const ButtonMain = styled(Button)({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  marginTop: "6px",
  padding: "10px 18px",
  textTransform: "none",
  color: "#495057",
  "&:hover": {
    backgroundColor: "#FBE122",
  },
});
