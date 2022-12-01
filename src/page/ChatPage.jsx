import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import GObusAppBar from "../component/Navigation/GObusAppBar";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("detail");
  };
  return (
    <div>
      <GObusAppBar />
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        <ListItem onClick={handleClick} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Sopir" secondary="Siyap" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
}
