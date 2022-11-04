import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const Riwayat = () => {
  const navigate = useNavigate();
  return (
    <List
      sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton onClick={navigate("lacak-bus")}>
          <ListItemText primary="Indramayu-Bandung" secondary="Today" />
          <ListItemIcon>
            <StarIcon />
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
