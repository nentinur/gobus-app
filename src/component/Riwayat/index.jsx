import * as React from "react";
import { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import DirectionsIcon from "@mui/icons-material/Directions";

const Riwayat = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("lacak-bus");
  };
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Indramayu-Bandung" secondary="Today" />
          <ListItemIcon>
            <DirectionsIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary="Bandung-Indramayu"
            secondary="20 October 2022"
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
export default Riwayat;
