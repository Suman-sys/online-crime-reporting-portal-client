import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8000/api/v1";

const theme = createTheme();

export default function Register({ handleHaveAccount }) {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [gender, setGender] = useState()
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [genderError, setGenderError] = useState(false)
  const [contactNumberError, setContactNumberError] = useState(false)
  const [adharError, setAdharError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [dobError, setDobError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    //   firstName: formData.get("firstName"),
    //   lastName: formData.get("lastName")
    // });

    let er = false;

    const data = {
        email: formData.get("email"),
        contactNumber: formData.get("contactNumber"),
        aadhar: formData.get("aadhar"),
        gender: gender,
        dob: formData.get("dob"),
        address: formData.get("address"),
      password: formData.get("password"),
      userName: formData.get("firstName") +" "+ formData.get("lastName"),
      roles: "USER"
    }

    const { email, contactNumber, aadhar, dob, address, password, userName} = data

    if(email==="" || !validateEmail(email)){
      
      er=true;
      setEmailError(true)
    }else{
      setEmailError(false)
    }
    if(formData.get("firstName")===""){
      er=true;
     
      setFirstNameError(true)
    }else{
      setFirstNameError(false)
    }

    if(formData.get("lastName")===""){
      er=true;
     
      setLastNameError(true)
    }else{
      setLastNameError(false)
    }

    if(contactNumber==="" || contactNumber.length!=10){
      er=true;
      
      setContactNumberError(true)
    }else{
      setContactNumberError(false)
    }

    if(aadhar==="" || aadhar.length!=12){
      er=true;
     
      setAdharError(true)
    }else{
      setAdharError(false)
    }

    if(address===""){
      er=true;
     
      setAddressError(true)
    }else{
      setAddressError(false)
    }

    if(dob===""){
      er=true;
     
      setDobError(true)
    }else{
      setDobError(false)
    }

    if(gender===null){
      er=true;
      
      setGenderError(true)
    }else{
      setGenderError(false)
    }

    if(password===""){
      er=true;
      
      setPasswordError(true)
    }else{
      setPasswordError(false)
    }
    // if(error){
    //   // setTimeout(()=> setError(false), 3000)
    //   return ;
    // }

    console.log(data)
    try {
      if(er) throw "Invalid form data"
      console.log("error", error)
      const response = await axios({
        method: "post",
        url: BASE_URL + "/auth/register",
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if(response.data.isActive){
          setSuccess(true)
          setTimeout(()=>  handleHaveAccount(true), 5000)
         
      }

      setTimeout(()=> setSuccess(false), 5000)
      
    } catch (err) {

        setError(true)
        setTimeout(()=> setError(false), 5000)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{marginTop: 70}} component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {error && <Alert severity="error">Error occured, while registeration</Alert>}
        {success && <Alert severity="success">Registration successful, kindly proceed with login</Alert>}
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={firstNameError}
                  helperText={firstNameError?"Enter first name":""}
                  onChange={(e)=>setFirstNameError(false)}
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                   error={lastNameError}
                   helperText={lastNameError?"Enter last name":""}
                   onChange={(e)=>setLastNameError(false)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={emailError}
                  helperText={emailError?"Enter valid email":""}
                  onChange={(e)=> setEmailError(false)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                error={contactNumberError}
                helperText={contactNumberError?"Enter valid contact number":""}
                onChange={(e)=>setContactNumberError(false)}
                  required
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  name="contactNumber"
                  autoComplete="contactNumber"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                error={dobError}
                helperText={dobError?"Enter date of birth":""}
                onChange={(e)=>setDobError(false)}
                  required
                  fullWidth
                  id="dob"
                  label="Date of Birth"
                  name="dob"
                  autoComplete="dob"
                  type="date"
                  focused
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl sx={{ minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                   Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={gender}
                    label="Report Type"
                    error={genderError}
                    onChange={(e) => { setGender(e.target.value)
                      setGenderError(false)
                    }}
                  >
                    
                    <MenuItem value={"MALE"}>Male</MenuItem>
                    <MenuItem value={"FEMALE"}>Female</MenuItem>
                    <MenuItem value={"OTHER"}>other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                error={adharError}
                helperText={addressError?"Enter valid adhar number":""}
                onChange={(e)=>setAdharError(false)}
                  required
                  fullWidth
                  name="aadhar"
                  label="Aadhar Number"
                  type="number"
                  id="aadhar"
                  autoComplete="aadhar"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                error={addressError}
                helperText={addressError?"Enter valid address":""}
                onChange={(e)=>setAddressError(false)}
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                error={passwordError}
                helperText={passwordError?"Enter valid password":""}
                onChange={(e)=>setPasswordError(false)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setShowPassword(!showPassword)}
                      value={showPassword}
                      color="primary"
                    />
                  }
                  label="Show Password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              // onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={() => handleHaveAccount(true)}>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
