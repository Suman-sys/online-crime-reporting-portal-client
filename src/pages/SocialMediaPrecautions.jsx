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


const SocilaMediaPrecaution = () => {
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
          SOCIAL MEDIA PRECAUTION 
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
              Social networking should be addressed in your business's Internet Usage Policy with clear advice to employees. Here are some social networking issues that you should consider:
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
            Be clear on what information about your business can be posted and who is authorized to do so.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Refrain from including sensitive business information in the business profile or in your posts.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Be careful using applications on social networking sites. Many of these come from third parties and may not be secure. Always check on the application provider first.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              When communicating through social media, be suspicious of any messages that are asking for sensitive business information or about employees and their families.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Think before you post! What you post on social media sites is generally permanent. You may someday change your mind about what you said online, but you can't remove or change it permanently as it might have been save as screenshots by someone.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Criminals are interested in the information you post. To help your business stay safe, make sure you use the site's privacy controls and ignore requests from people you don't know.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={Next} />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: -2 }}>
              {" "}
              Review and stay up to date with the social networking site's privacy policies (most are updated frequently) and adjust personal privacy settings appropriately.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      </Box>
    </div>
  );
};

export default SocilaMediaPrecaution;
