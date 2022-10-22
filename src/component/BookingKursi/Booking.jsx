import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DirectionsBus from "@mui/icons-material/DirectionsBus";
import { ListBus } from "../../Data";
import { ListItemButton } from "@mui/material";

export default function FolderList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {ListBus.map((ListBus) => (
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <DirectionsBus />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Jurusan: " + ListBus.jurusan}
            secondary={"Kursi Kosong: " + ListBus.kursiKosong}
          />
        </ListItemButton>
      ))}
    </List>
  );
}
