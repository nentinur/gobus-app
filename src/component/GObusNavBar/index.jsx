import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";
import Riwayat from "../Riwayat";
import { useNavigate } from "react-router-dom";

export const GObusNavBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            value={"riwayat"}
            label="Riwayat"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            value=""
            label="Beranda"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            value="chat"
            label="Chat"
            icon={<ChatIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
