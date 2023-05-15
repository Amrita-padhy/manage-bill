import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BackButton from "../../common/BackButton";
import Header from "../../common/Header";
import { useParams } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import PetsIcon from "@mui/icons-material/Pets";
import StorageIcon from "@mui/icons-material/Storage";
import NoteTextArea from "../../components/common/NoteTextArea";
import { useForm, Controller } from "react-hook-form";
import { basicSchema } from "@/common/validators";
import { useFormik } from "formik";

function AddResident() {
  const { propertyId } = useParams();
const[unitNumbers,setUnitNumbers] = useState('')
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        residentInformation: {
          unitNumbers: unitNumbers,
          NoOfOccupants: "",
          amount: "",
          moveInDate: "",
          moveOutDate: "",
        },
        primaryResident :{
          residentsId:"",
          residentsFirstName:"",
          residentsLastName:"",
          residentsEmail:"",
          residentsMobileNumber:"",

        }
      },
      validationSchema: basicSchema,
    });
  const onResidentFormSubmit = (data) => {
    console.log(data);
  };

  const handleChangeAdministrativeFee = (event) => {
    setAdministrativeFeeChecked(event.target.checked);
  };
  const handleChangeBillableCheckBox = (event) => {
    setBillableCheckBox(event.target.checked);
  };
  const [administrativeFeeChecked, setAdministrativeFeeChecked] =
    useState(false);
  const [billableCheckBox, setBillableCheckBox] = useState(true);
  return (
    <>
      <Box width="100%" height="auto" padding="20px">
        <BackButton />
        <Header heading=" Properties:" title=" Add Residents" />
        {/* property card */}
        {/* <PropertyCard/> */}
        {/* tabs */}
        {/* <Card
          variant="outlined"
          sx={{
            mt: "32px",
            bgcolor: "transparent",
            height: "auto",
            mb: "40px",
          }}
        > */}
        <form
          style={{
            width: "100%",
            height: "auto",
            bgcolor: "white.main",
          }}
        >
          {/* resident card */}
          <Card variant="outlined" sx={{ my: "20px" }}>
            <Typography fontSize={"16px"} fontWeight={"600"} padding={"10px"}>
              Resident Information
            </Typography>

            <Grid container spacing={2} padding={"10px"}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  select
                  size="medium"
                  label="Unit Number"
                  variant="outlined"
                  color="gray600"
                  bordercolor="gray200"
                  name="unitNumbers"
                  id="unitNumbers"
                  value={values.unitNumbers}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.unitNumbers && touched.unitNumbers}
                  helpertext={touched.unitNumbers ? errors.unitNumbers : null}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  size="medium"
                  label="No of Occupants"
                  variant="outlined"
                  color="gray600"
                  bordercolor="gray200"
                  id="NoOfOccupants"
                  value={values.NoOfOccupants}
                  onChange={(e) => {
                    setUnitNumbers(e.target.value)
                  }}
                  onBlur={handleBlur}
                  error={errors.NoOfOccupants && touched.NoOfOccupants}
                  helpertext={
                    touched.NoOfOccupants ? errors.NoOfOccupants : null
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl
                  fullWidth
                  size="medium"
                  color="gray600"
                  bordercolor="gray200"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Amount
                  </InputLabel>
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    type="number"
                    label="Amount"
                    id="amount"
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.amount && touched.amount}
                    helpertext={touched.amount ? errors.amount : null}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <label style={{ color: "gray" }}> Move-in date</label>
                <TextField
                  fullWidth
                  required
                  type="date"
                  size="medium"
                  variant="outlined"
                  color="gray600"
                  bordercolor="gray200"
                  id="moveInDate"
                  value={values.moveInDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.moveInDate && touched.moveInDate}
                  helpertext={touched.moveInDate ? errors.moveInDate : null}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <label style={{ color: "gray" }}> Move-out date</label>
                <TextField
                  fullWidth
                  size="medium"
                  type="date"
                  variant="outlined"
                  label=""
                  color="gray600"
                  bordercolor="gray200"
                  id="moveOutDate"
                  value={values.moveOutDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.moveOutDate && touched.moveOutDate}
                  helpertext={touched.moveOutDate ? errors.moveOutDate : null}
                />
              </Grid>
            </Grid>
          </Card>
          {/* primary Resident */}
          <Card variant="outlined">
            <Typography fontSize={"16px"} fontWeight={"600"} padding={"10px"}>
              Primary Resident
            </Typography>

            <Grid container spacing={2} padding={"10px"}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  size="medium"
                  label="Residents Id/Account Number"
                  variant="outlined"
                  color="gray600"
                  bordercolor="gray200"
                  id="residentsId"
                  value={values.residentsId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.residentsId && touched.residentsId}
                  helpertext={touched.residentsId ? errors.residentsId : null}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  size="medium"
                  label="First Name"
                  variant="outlined"
                  color="gray600"
                  bordercolor="gray200"
                  id="residentsFirstName"
                  value={values.residentsFirstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.residentsFirstName && touched.residentsFirstName}
                  helpertext={touched.residentsFirstName ? errors.residentsFirstName : null}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  size="medium"
                  label="Last Name"
                  variant="outlined"
                  color="gray600"
                  bordercolor="gray200"
                  id="residentsLastName"
                  value={values.residentsLastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.residentsLastName && touched.residentsLastName}
                  helpertext={touched.residentsLastName ? errors.residentsLastName : null}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="email"
                  size="medium"
                  label="Email"
                  variant="outlined"
                  color="gray600"
                  bordercolor="gray200"
                  id="residentsEmail"
                  value={values.residentsEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.residentsEmail && touched.residentsEmail}
                  helpertext={touched.residentsEmail ? errors.residentsEmail : null}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="number"
                  size="medium"
                  label="Mobile Number"
                  variant="outlined"
                  color="gray600"
                  bordercolor="gray200"
                  id="residentsMobileNumber"
                  value={values.residentsMobileNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.residentsMobileNumber && touched.residentsMobileNumber}
                  helpertext={touched.residentsMobileNumber ? errors.residentsMobileNumber : null}
                />
              </Grid>
            </Grid>
          </Card>
          {/* Resident Billing Information */}
          <Card variant="outlined" sx={{ mt: "15px", padding: "15px" }}>
            <Typography fontSize={"16px"} fontWeight={"600"} gutterBottom>
              Resident Billing Information
            </Typography>
            {/*Administrative fee waiver  */}
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={administrativeFeeChecked}
                    onChange={handleChangeAdministrativeFee}
                    color="secondary"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Administrative fee waiver"
              />

              <FormHelperText>
                By checking this box, I acknowledge,I am a complaince with local
                regulation regration passing utility billing fees on to my
                registants.{" "}
              </FormHelperText>

              <Box mt={"10px"}>
                <Box display={"flex"} alignItems={"center"}>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    Admin fee*
                  </Typography>
                  <span>
                    <HelpOutlineRoundedIcon fontSize="20px" color="gray600" />
                  </span>
                </Box>

                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <IconButton
                    aria-label="remove"
                    disabled={!administrativeFeeChecked}
                  >
                    <RemoveCircleOutlineOutlinedIcon fontSize="small" />
                  </IconButton>
                  <Box width={"100px"} textAlign={"center"} color={"grey"}>
                    $0.00
                  </Box>
                  <IconButton
                    aria-label="add"
                    disabled={!administrativeFeeChecked}
                  >
                    <ControlPointOutlinedIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Box>

            {/* billing */}

            <Box mt={"10px"}>
              <FormControlLabel
                control={
                  <Checkbox
                    inputProps={{ "aria-label": "controlled" }}
                    checked={billableCheckBox}
                    onChange={handleChangeBillableCheckBox}
                    color="secondary"
                  />
                }
                label="Billable"
              />
              <Box>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Box width={"300px"}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        Billing Start Date*
                      </Typography>
                      <span>
                        <HelpOutlineRoundedIcon
                          fontSize="20px"
                          color="gray600"
                        />
                      </span>
                    </Box>
                    <TextField
                      fullWidth
                      required
                      type="date"
                      size="medium"
                      variant="outlined"
                      color="gray600"
                      bordercolor="gray200"
                      disabled={!billableCheckBox}
                    />
                  </Box>
                  <Box width={"300px"}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        Billing Delivery Method*
                      </Typography>
                      <span>
                        <HelpOutlineRoundedIcon
                          fontSize="20px"
                          color="gray600"
                        />
                      </span>
                    </Box>
                    <TextField
                      fullWidth
                      color="gray600"
                      bordercolor="gray200"
                      size="medium"
                      variant="outlined"
                      disabled={!billableCheckBox}
                    />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Card>
          {/* Resident fees */}
          <Card variant="outlined" sx={{ mt: "15px", p: "6px" }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              padding={"0px"}
              marginLeft={"15px"}
              mb={"20px"}
            >
              <Typography fontSize={"16px"} fontWeight={"600"}>
                Resident fees
              </Typography>
              <span>
                <HelpOutlineRoundedIcon fontSize="20px" color="gray600" />
              </span>
            </Box>
            <Typography
              color={"gray"}
              fontSize={"11px"}
              fontWeight={"300"}
              padding={"0px"}
              letterSpacing={"0.5px"}
              marginLeft={"15px"}
            >
              Enter the fee amount for all aditional amenities or services you
              wish to charge this residebt each month.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }}>
              {/*amenity card  */}
              <Card
                variant="outlined"
                sx={{
                  width: "120px",
                  height: "150px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px",
                  cursor: "pointer",
                }}
              >
                <PetsIcon color="Success600" fontSize="medium" />
                <Typography
                  fontSize={"14px"}
                  fontWeight={"500"}
                  color={"gray700.main"}
                >
                  Pet
                </Typography>
                <Divider />
                <Typography
                  fontSize={"14px"}
                  fontWeight={"500"}
                  color={"gray700.main"}
                >
                  <span color="black">$</span> 0.00
                </Typography>
                <Divider />

                <FormControlLabel
                  control={<Checkbox defaultChecked color="secondary" />}
                  label="Active"
                />
              </Card>
              <Card
                variant="outlined"
                sx={{
                  width: "120px",
                  height: "150px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px",
                  cursor: "pointer",
                }}
              >
                <StorageIcon color="gray600" fontSize="medium" />
                <Typography
                  fontSize={"14px"}
                  fontWeight={"500"}
                  color={"gray700.main"}
                >
                  Storage
                </Typography>
                <Divider />
                <Typography
                  fontSize={"14px"}
                  fontWeight={"500"}
                  color={"gray700.main"}
                >
                  <span color="black">$</span> 0.00
                </Typography>
                <Divider />

                <FormControlLabel
                  disabled
                  control={<Checkbox defaultChecked color="secondary" />}
                  label="Active"
                />
              </Card>
            </Stack>
          </Card>
          {/*  Additional notes card */}
          <NoteTextArea />
        </form>
        {/* save button */}

        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform:"none" }}
          >
            Save
          </Button>
        </Box>
        {/* </Card> */}
      </Box>
    </>
  );
}

export default AddResident;


