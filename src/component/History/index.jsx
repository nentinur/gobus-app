import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DirectionsIcon from "@mui/icons-material/Directions";

const Riwayat = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("detail-history");
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
