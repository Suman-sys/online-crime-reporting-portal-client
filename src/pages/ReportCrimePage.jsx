import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import Header from "../components/Header";



const BASE_URL = "http://localhost:8000/api/v1";

const theme = createTheme();

export default function ReportCrimePage() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role")

  const token = localStorage.getItem("token")

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [reportType, setReportType] = useState();
  const [crimeCategory, setCrimeCategory] = useState();
  const [crimeLocation, setCrimeLocation] = useState(null);
  const [crimeDate, setCrimeDate] = useState(null);
  const [crimeTitle, setCrimeTitle] = useState(null);
  const [crimeDescription, setCrimeDescription] = useState(null);
  const [evidences, setEvidences] = useState(null);
  const [reportTypeError, setReportTypeError] = useState(false);
  const [crimeCategoryError, setCrimeCategoryError] = useState(false);
  const [crimeLocationError, setCrimeLocationError] = useState(false);
  const [crimeDateError, setCrimeDateError] = useState(false);
  const [crimeTitleError, setCrimeTitleError] = useState(false);
  const [crimeDescriptionError, setCrimeDescriptionError] = useState(false);
  const [evidencesError, setEvidencesError] = useState(false);
  const [formInValid, setFormInValid] = useState(false)

  const handleReportCrime = async (event) => {
    // event.preventDefault();

    // eslint-disable-next-line no-console

    let formInvalid = false;
    if(reportType===undefined) {
      formInvalid = true;
      setReportTypeError(true);
      
      console.log("Report Type", reportTypeError)
      console.log("formInValid:", formInValid)
    }else{
      setReportTypeError(false)
    }

    if(crimeCategory===undefined) {
      setCrimeCategoryError(true);
      formInvalid = true;
    }else{
      setCrimeCategoryError(false)
    }

    if(crimeLocation===null) {
      setCrimeLocationError(true);
      formInvalid = true;
    }else{
      setCrimeLocationError(false)
    }

    if(crimeTitle===null) {
      setCrimeTitleError(true);
      formInvalid = true;
    }else{
      setCrimeTitleError(false)
    }

    if(crimeDate===null) {
      setCrimeDateError(true);
      formInvalid = true;
    }else{
      setCrimeDateError(false)
    }

    if(crimeDescription===null) {
      setCrimeDescriptionError(true);
      formInvalid = true;
    }else{
      setCrimeDescriptionError(false)
    }
    if(evidences===null) {
      setEvidencesError(true);
      formInvalid = true;
    }else{
      setEvidencesError(false)
    }

    if(formInValid) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      setFormInValid(false)
      return} 
    console.log("Form InvalidValid", formInValid)

   

    const formData = new FormData();
    for (let i = 0; i < evidences.length; i++) {
      formData.append(`files[${i}]`, evidences[i])
  }
    formData.append("reportType", reportType);
    formData.append("crimeCategory", crimeCategory);
    formData.append("crimeLocation", crimeLocation);
    formData.append("crimeDate", crimeDate);
    formData.append("crimeDescription", crimeDescription);
    // formData.append("files", evidences);
    formData.append("crimeTitle", crimeTitle);


    try {
      const response = await axios({
        method: "post",
        url: BASE_URL + "/crime-report/report",
        data: formData,
        headers: { "content-type": "multipart/form-data",
      "Authorization": "Bearer "+localStorage.getItem("token") },
      });
      if (response.data) {
        setSuccess(true);
        if(token){
          if(role==="POLICE_STATION"){
            navigate("/all-reported-crimes")
          }else{
            navigate("/my-reported-crimes")
          }
        }else{
          navigate("/")
        }
        
        
      }else{
        throw "Error occured while reporting crime."
      }
      console.log("Response status", response.data);

      // setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container style={{ marginTop: 90 }} component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {error && (
            <Alert severity="error">Error occured, while reporting crimw</Alert>
          )}
          {success && (
            <Alert severity="success">Crime reported successfully</Alert>
          )}
          <Typography component="h1" variant="h5">
            Report A Crime
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Report Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={reportType}
                    error={reportTypeError}
                    label="Report Type"
                    onChange={(e) => { setReportType(e.target.value)
                      setReportTypeError(false)
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Anonymous"}>Anonymous</MenuItem>
                    {token && <MenuItem value={"Non-Anonymous"}>Non-Anonymous</MenuItem>}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Crime Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={crimeCategory}
                    label="Crime Category"
                    error={crimeCategoryError}
                    onChange={(e) => {setCrimeCategory(e.target.value)
                      setCrimeCategoryError(false)
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"VIOLENT_CRIME"}>Violent Crime</MenuItem>
                    <MenuItem value={"CORPORATE_CRIME"}>
                      Corporate Crime
                    </MenuItem>
                    <MenuItem value={"PROPERTY_CRIME"}>Property Crime</MenuItem>
                    <MenuItem value={"CONSENSUAL_CRIME"}>
                      Consensual Crime
                    </MenuItem>
                    <MenuItem value={"ORGANIZED_CRIME"}>
                      Organized Crime
                    </MenuItem>
                    <MenuItem value={"WHITE_COLLAR_CRIME"}>
                      White Collar Crime
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="crimeLocation"
                  label="Crime Location"
                  name="crimeLocation"
                  error={crimeLocationError}
                  onChange={(e) => {setCrimeLocation(e.target.value)
                    setCrimeLocationError(false)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  error={crimeDateError}
                  id="crimeDate"
                  label="Crime Date"
                  name="crimeDate"
                  type="date"
                  focused
                  InputLabelProps={{ shrink: true, required: true }}
                  onChange={(e) =>{ setCrimeDate(e.target.value)
                    setCrimeDateError(false)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  error={crimeTitleError}
                  id="crimeTitle"
                  label="Crime Title"
                  name="crimeTitle"
                  sx={{ minWidth: "100%" }}
                  onChange={(e) => {setCrimeTitle(e.target.value)
                    setCrimeTitleError(false)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={crimeDescriptionError}
                  required
                  fullWidth
                  name="crimeDescription"
                  label="Crime Description"
                  multiline
                  maxRows={4}
                  rows={4}
                  onChange={(e) => {setCrimeDescription(e.target.value)
                    setCrimeDescriptionError(false)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Attach Evidences</Typography>
                <TextField
                  multiple
                  fullWidth
                  name="evidence"
                  label=""
                  type="file"
                  error={evidencesError}
                  inputProps={{ multiple: true }}
                  onChange={(e) => {setEvidences(e.target.files)
                    setEvidencesError(false)
                  }}
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleReportCrime}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Report
            </Button>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}
