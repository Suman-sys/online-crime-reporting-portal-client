import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/system";
import BackgroundMain from "../images/bg-main.jpg";
import { Divider, Button, Typography } from "@mui/material";
import Next from "../images/next.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: 8, marginLeft: -1, marginRight: -1 }}>
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          alt="The house from the offer."
          src={BackgroundMain}
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
          <Typography variant="h4" sx={{ color: "blue", marginTop: 3 }}>
            WHERE TO MAKE A COMPLAINT
          </Typography>
          <Button
            onClick={() => navigate("/documents")}
            variant="text"
            sx={{ color: "#676667", marginTop: 5 }}
            startIcon={<img src={Next} />}
          >
            Documents Required to make a complaint
          </Button>
          <Button
            onClick={()=> navigate("/report-crime")}
            variant="text"
            sx={{ color: "#676667", marginTop: 3 }}
            startIcon={<img src={Next} />}
          >
            Lodge Online Complaint
          </Button>
          <Button
            onClick={()=> navigate("/cyber-security-tips")}
            variant="text"
            sx={{ color: "#676667", marginTop: 3 }}
            startIcon={<img src={Next} />}
          >
            Cyber Security Tips
          </Button>
          <Button
            onClick={()=>navigate("/social-media-precaution")}
            variant="text"
            sx={{ color: "#676667", marginTop: 3 }}
            startIcon={<img src={Next} />}
          >
            SOCIAL MEDIA PRECAUTION 
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
