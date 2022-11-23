import * as React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useLocation } from "react-router-dom";

export const GObusNavBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  const location = useLocation();
  console.log(location.pathname.split("/"));
  switch (location.pathname.split("/")[1]) {
    case "profile":
      if (value !== "profile") {
        setValue("profile");
      }
      break;
    case "chat":
      if (value !== "chat") {
        setValue("chat");
      }
      break;
  }
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            value="chat"
            label="Chat"
            icon={<ChatIcon />}
          />
          <BottomNavigationAction
            value=""
            label="Beranda"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            value={"profile"}
            label="Profil"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
