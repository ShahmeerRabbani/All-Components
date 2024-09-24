import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('userID');
    localStorage.removeItem('userInformation');
    localStorage.removeItem('StaffID');
    localStorage.removeItem('StaffInformation');
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: 'rgba(255, 255, 255, 0.5)',
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10.3px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: '#000'
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hotel Management System
          </Typography>

          <ul className="Nav-list">
            <li>Home</li>
            <li>Room</li>
            <li>Facility</li>
            <li>Contact Us</li>
            <li>
              <Button color="error" variant="contained" onClick={logOut}>
                LogOut
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
