import React from "react";
import Header from "../components/Header";

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Divider,
} from "@mui/material";

import Next from "../images/next.png";
import BGDocs from "../images/bg-dc.jpg"


const CyberSecurityTips = () => {
  return (
    <div>
      <Header />

      <Box
          component="img"
          sx={{
            width: "100%",
          }}
          alt="The house from the offer."
          src={BGDocs}
        />

        <Box
          justifyContent="flex-start"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: 4,
            marginLeft: 2,
          }}
        >
          <Divider
            sx={{ height: 4, width: 100, marginLeft: 0, background: "red" }}
          />
          <Box sx={{width: 900}}>
          <Typography variant="h3" sx={{ color: "#16417F", marginTop: 3 }}>
          CYBER SECURITY TIPS 
          </Typography>
          </Box>

      <Box
        justifyContent="flex-start"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: 4,
          marginLeft: 0,
        }}
      >     
        <List>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Password protect the mobile phone having your banking application. It is recommended to set the maximum number of incorrect password submissions no more than three.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
            Choose a strong password to keep your account and data safe
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Review your account statements frequently to check for any unauthorized transactions
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Report a lost or stolen phone immediately to your service provider and law enforcement authorities
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Never give your PIN or confidential information over the phone or internet. Never share these details with anyone
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Don’t transfer funds without due validation of the recipient, as funds once transferred cannot be reversed
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Don’t store sensitive information such as credit card details, mobile banking password and user ID in a separate folder on your phone
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Don’t forget to inform the bank of changes in your mobile number to ensure that SMS notifications are not sent to someone else
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      </Box>
    </div>
  );
};

export default CyberSecurityTips;
