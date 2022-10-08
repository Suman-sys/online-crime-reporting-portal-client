import React from "react";
import Header from "../components/Header";
import BGDocs from "../images/bg-dc.jpg";
import { Box, Typography, Button, Divider, List, ListItemIcon, ListItemText, ListItem } from "@mui/material";
import Next from "../images/next.png";

const Documents = () => {
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: -8, marginLeft: -1, marginRight: -1 }}>
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
            DOCUMENTS REQUIRED TO MAKE A COMPLAINT
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
            <Typography variant="h5" sx={{marginLeft: 3, color: '#16417F'}}>In Email related Complaints</Typography>

            <List>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>A written Complaint explaining the complete incidence</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Copy of the alleged Email</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Email should be taken from the original reciever. Copy of the forwarded email should be avoided</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Full Header of the alleged Email</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Copy of email and header should be in both hard & soft forms</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Soft copy should be given in a CD-R only</ListItemText>
              </ListItem>
            </List>


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
            <Typography variant="h5" sx={{marginLeft: 3, color: '#16417F'}}>In Social Media related Complaints</Typography>
            <List>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Copy/screenshot of alleged contents/profile</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Screenshot copy of URL of alleged contents</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> Contents should be in both hard & soft forms</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> Soft copy should be given in CD-R only</ListItemText>
              </ListItem>
            </List>
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
            <Typography variant="h5" sx={{marginLeft: 3, color: '#16417F'}}>In Mobile Apps related complaints</Typography>
            <List>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>screenshot of the malicious app and the location from where it downloaded.</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> Bank statement from the victim’s account if any transactions made.</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> soft copy of all above mentioned documents in soft form</ListItemText>
              </ListItem>
            </List>
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
            <Typography variant="h5" sx={{marginLeft: 3, color: '#16417F'}}>In Business Email Compromise complaints</Typography>
            <List>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Brief description of the incident, and consider providing the following financial information:</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> 1. Originating Name</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>  2. Originating Location</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>3. Originating Bank Name</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> 4. Originating Bank Account Number</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>  5. Recipient Name</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> 6. Recipient Bank Name</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>  7. Recipient Bank Account Number</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>  8. Recipient Bank Location (if available)</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>  9. Date</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>  10. Amount of Transaction</ListItemText>
              </ListItem>
            </List>
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
            <Typography variant="h5" sx={{marginLeft: 3, color: '#16417F'}}>In Net banking/ATM Complaints</Typography>
            <List>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> Bank statement from the concerned bank of last six months.</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> Copy of SMSs received related to the alleged transactions.</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> Copy of your ID proof and address proof as shown in the bank records.</ListItemText>
              </ListItem>
            </List>
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
            <Typography variant="h5" sx={{marginLeft: 3, color: '#16417F'}}>  In Online Transactions related Complaints</Typography>
            <List>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}> Bank statement from the concerned bank of last six months.</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>Make a copy of SMSs received related to the alleged transactions.</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><img src={Next}/></ListItemIcon>
                <ListItemText sx={{marginLeft: -2}}>  Copy of your ID proof and address proof as shown in the bank records.</ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Documents;
