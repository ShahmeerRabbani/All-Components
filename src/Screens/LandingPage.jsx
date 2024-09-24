import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import CardComp from "../Components/Cards/CardComp";
import SuperiorImg from "../assets/superior.jpg";
import DeluxeImg from "../assets/deluxe.jpeg";
import GuestImg from "../assets/guest.jpeg";
import SingleImg from "../assets/single.jpg";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolTwoToneIcon from "@mui/icons-material/PoolTwoTone";
import LocalDiningTwoToneIcon from "@mui/icons-material/LocalDiningTwoTone";
import SpaTwoToneIcon from "@mui/icons-material/SpaTwoTone";
import ModalForm from "../Components/ModalForm/ModalForm";
import { useLocation, useParams } from "react-router-dom";

const LandingPage = () => {

  const userId = localStorage.getItem('userID')

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const objIcon = {
    icon1: <NetworkWifiIcon size={20} />,
    icon2: <FitnessCenterIcon size={20} />,
    icon3: <PoolTwoToneIcon size={20} />,
    icon4: <LocalDiningTwoToneIcon size={20} />,
    icon5: <SpaTwoToneIcon size={20} />,
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "500px",
          bgcolor: "seagreen",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          padding: "50px 50px",
          bgcolor: "lightskyblue",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">
          <u>Our Room</u>
        </Typography>
        <div style={{ display: "flex", gap: 20, marginTop: "40px" }}>

          <ModalForm openModal={open} handleModalClose = {handleClose}  userId = {userId}/>

          <CardComp
          handleModalOpen = {handleOpen}
            title="Superior Room"
            image={SuperiorImg}
            icon1={objIcon.icon1}
            icon2={objIcon.icon2}
            icon3={objIcon.icon3}
            icon4={objIcon.icon4}
            icon5={objIcon.icon5}
          />
          <CardComp
          handleModalOpen = {handleOpen}
            title="Deluxe Room"
            image={DeluxeImg}
            icon1={objIcon.icon1}
            icon2={objIcon.icon2}
            icon3={objIcon.icon3}
            icon4={objIcon.icon4}
          />
          <CardComp
          handleModalOpen = {handleOpen}
            title="Guest Room"
            image={GuestImg}
            icon1={objIcon.icon1}
            icon2={objIcon.icon4}
            icon3={objIcon.icon5}
          />
          <CardComp
          handleModalOpen = {handleOpen} 
          title="Single Room" image={SingleImg} 
          icon1={objIcon.icon1}
          icon2={objIcon.icon5}
          />
        </div>
      </Box>
    </>
  );
};

export default LandingPage;
