import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BASE_URL = "http://localhost:8000/api/v1";

export default function ReportedCrime({ crimeReport }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [showReportedBy, setShowReportedBy] = useState(false);
  const [status, setStatus] = useState();

  const [open, setOpen] = useState(false);
  const [openRevoked, setOpenRevoked] = useState(false);
  const [openRevokedError, setOpenRevokedError] = useState(false);
  const [openUpdateStatus, setOpenUpdateStatus] = useState(false);
  const [openUpdateStatusError, setOpenUpdateStatusError] = useState(false);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const {
    reportCrimeId,
    caseNumber,
    reportType,
    crimeLocation,
    crimeCategory,
    crimeDate,
    crimeTitle,
    crimeDescription,
    crimeReportStatus,
    evidences,
  } = crimeReport.reportCrime;

  
  // const {
  //   userName,
  //   email,
  //   contactNumber,
  //   gender,
  //   dob,
  //   userId,
  //   address,
  //   aadhar,
  // } = crimeReport.user;


  const updateStatus = async (status) => {
    try {
      const response = await axios({
        method: "put",
        url: BASE_URL + "/crime-report/update-status/" + reportCrimeId,
        data: JSON.stringify({ status: status }),
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (response.data) {
        console.log("status", response.data);
        if (status === "REVOKED") {
          setOpenRevoked(true);
        } else {
          setOpenUpdateStatus(true);
        }
        navigate("/my-reported-crimes");
        setOpen(false);
      }
    } catch (err) {
      if (status === "REVOKED") {
        setOpenRevokedError(true);
      } else {
        setOpenUpdateStatusError(true);
      }
      console.log(err);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpdateStatus = () => {
    setOpen(true);
    updateStatus(status);
  };

  const handleRevokeReport = () => {
    updateStatus("REVOKED");
  };

  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update status of the Crime Report</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ marginTop: 5 }}>
            <InputLabel id="demo-simple-select-label">
              Crime Report Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Crime Report Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={"APPROVED"}>Approved</MenuItem>
              <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
              <MenuItem value={"CLOSED"}>Closed</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdateStatus}>Update</Button>
        </DialogActions>
      </Dialog>

      <Card sx={{ maxWidth: "100%", border: "1px solid black", marginTop: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {crimeTitle.substring(0, 1)}
            </Avatar>
          }
          title={
            <Box display="flex">
              <Typography sx={{}}>{crimeTitle}</Typography>

              {role === "POLICE_STATION" ? (
                <Button
                  onClick={() => setOpen(true)}
                  variant="contained"
                  sx={{ marginLeft: "auto" }}
                >
                  Update Status
                </Button>
              ) : (
                <Button
                  onClick={handleRevokeReport}
                  variant="contained"
                  sx={{ marginLeft: "auto" }}
                >
                  Revoke Report
                </Button>
              )}
            </Box>
          }
          subheader={crimeDate}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {crimeDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Case Number : {caseNumber}</Typography>
            <Typography paragraph>Crime Location : {crimeLocation}</Typography>
            <Typography paragraph>Report Type : {reportType}</Typography>
            <Typography paragraph>Crime Category : {crimeCategory}</Typography>
            <Typography>Crime Report Status : {crimeReportStatus}</Typography>
            <Box sx={{ marginTop: 1 }}>
              <Typography>Evidences</Typography>
              {evidences.map((evidence, i) => (
                <Box sx={{ marginTop: 1 }}>
                  <a target="_blank" href={evidence}>
                    Evidence {i + 1}
                  </a>
                </Box>
              ))}
            </Box>

            {crimeReport.user && <CardActions disableSpacing>
              <ExpandMore
                expand={showReportedBy}
                onClick={() => setShowReportedBy(!showReportedBy)}
                aria-expanded={showReportedBy}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>}
          </CardContent>
        </Collapse>
        {crimeReport.user && <Collapse in={showReportedBy} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="h5" sx={{marginBottom: 3, color: "red"}}>Reported By</Typography>
            <Typography paragraph>User Name : {crimeReport.user.userName}</Typography>
            <Typography paragraph>User Id : {crimeReport.user.userId}</Typography>
            <Typography paragraph>Contact Number : {crimeReport.user.contactNumber}</Typography>
            <Typography paragraph>Email : {crimeReport.user.email}</Typography>
            <Typography>Aadhar Number : {crimeReport.user.aadhar}</Typography>
            <Typography>Gender : {crimeReport.user.gender}</Typography>
            <Typography>Address : {crimeReport.user.address}</Typography>
            <Typography>Date of Birth : {crimeReport.user.dob}</Typography>
            
          </CardContent>
        </Collapse>}
      </Card>
      <Snackbar
        open={openRevoked}
        autoHideDuration={6000}
        onClose={() => setOpenRevoked(false)}
      >
        <Alert
          onClose={() => setOpenRevoked(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully revoked!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openRevokedError}
        autoHideDuration={6000}
        onClose={() => setOpenRevokedError(false)}
      >
        <Alert
          onClose={() => setOpenRevokedError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Error occured while revoking!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openUpdateStatus}
        autoHideDuration={6000}
        onClose={() => setOpenUpdateStatus(false)}
      >
        <Alert
          onClose={() => setOpenUpdateStatus(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Updated the status successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openUpdateStatusError}
        autoHideDuration={6000}
        onClose={() => setOpenUpdateStatusError(false)}
      >
        <Alert
          onClose={() => setOpenUpdateStatusError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Error occured while updating the status!
        </Alert>
      </Snackbar>
    </Box>
  );
}
