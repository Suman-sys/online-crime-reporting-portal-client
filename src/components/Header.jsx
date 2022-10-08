import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TitleLogo from "../images/title-logo.png";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Menu,
  MenuItem,
} from "@mui/material";

export default function Header() {
  const isLogedIn = localStorage.getItem("isLoggedIn");
  const loggedInUser = localStorage.getItem("loggedInUser");
  const isPoliceStation = localStorage.getItem("isPoliceStation");

  const token = localStorage.getItem("token")

  const role = localStorage.getItem("role")

  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [logOutAnchorEl, setLogOutAnchorEl] = useState(null);

  const openLogout = Boolean(logOutAnchorEl);

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#000" }}>
        <Toolbar>
          <IconButton
            onClick={() => navigate("/")}
            disableRipple
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box
              component="img"
              sx={{
                width: 450,
                height: 20
              }}
              alt="Crime Reporting Reportal"
              src={TitleLogo}
            />
          </IconButton>

          <Button
            onClick={() => navigate("/")}
            color="inherit"
            sx={{ marginLeft: "auto" }}
          >
            Home
          </Button>
          <Button
            onClick={() => navigate("/report-crime")}
            color="inherit"
            sx={{ marginLeft: 0 }}
          >
            Report A Crime
          </Button>
          {role==="POLICE_STATION" ? (
            <Button
              onClick={() => navigate("/all-reported-crimes")}
              color="inherit"
              sx={{ marginLeft: 0 }}
            >
              All Reported Crimes
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/my-reported-crimes")}
              color="inherit"
              sx={{ marginLeft: 0 }}
            >
              Reported Crimes Status
            </Button>
          )}
          <Button
            onClick={() => setContactDialogOpen(true)}
            color="inherit"
            sx={{ marginLeft: 3 }}
          >
            Contact Us
          </Button>
    
          <Box sx={{ flexGrow: 0, marginTop: -5, float: "right" }}>
            {loggedInUser ? (
              <Box
                onClick={(event) => setLogOutAnchorEl(event.currentTarget)}
                sx={{
                  background: "red",
                  paddingRight: 1,
                  paddingLeft: 1,
                  borderRadius: 3,
                  marginLeft: 4,
                }}
              >
                {" "}
                <Typography
                  variant="h6"
                  sx={{ color: "ThreeDFace", marginTop: 5 }}
                >
                  {" "}
                  {loggedInUser}
                </Typography>
              </Box>
            ) : (
              <Button
                onClick={() => navigate("/login-register")}
                sx={{ color: "blue", marginTop: 5 }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Dialog
        open={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Phone Number : +91 6756437890
            <br />
            Phone Number : +91 6756437891
          </DialogContentText>
          <br />
          <br />
          <DialogContentText id="alert-dialog-description">
            Email : helpdesk@policestation.com
            <br />
            Email : policestation@gmail.com
          </DialogContentText>
          <br />
          <br />
          <DialogContentText id="alert-dialog-description">
            Address: Sarkar nagar,Police Station, Pune
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setContactDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Menu
        id="basic-menu"
        anchorEl={logOutAnchorEl}
        open={openLogout}
        onClose={() => setLogOutAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            localStorage.clear();
            setLogOutAnchorEl(null);
            navigate("/");
          }}
        >
          Log Out
        </MenuItem>
      </Menu>
    </Box>
  );
}
