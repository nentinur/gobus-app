import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";

export const GObusNavBar = () => {
  const [value, setValue] = React.useState(1);
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Riwayat" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Beranda" icon={<HomeIcon />} />
          <BottomNavigationAction label="Chat" icon={<ChatIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
