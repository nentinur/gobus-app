import * as React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useLocation } from "react-router-dom";
import { PeopleAlt } from "@mui/icons-material";

export const NavbarDriver = () => {
  // untuk routing
  const navigate = useNavigate();
  const [value, setValue] = React.useState("driver");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  // untuk mengambil path di URL
  const location = useLocation();

  switch (location.pathname.split("/")[1]) {
    case "profile-driver":
      if (value !== "profile-driver") {
        setValue("profile-driver");
      }
      break;
    case "penumpang":
      if (value !== "penumpang") {
        setValue("penumpang");
      }
      break;
    case "driver-driver":
      if (value !== "driver-driver") {
        setValue("driver-driver");
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
            value="penumpang"
            label="Penumpang"
            icon={<PeopleAlt />}
          />
          <BottomNavigationAction
            value="driver"
            label="Beranda"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            value={"profile-driver"}
            label="Profil"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
