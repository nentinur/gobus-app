import {
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { BubbleChat } from "./BubbleChat";
import PhoneIcon from "@mui/icons-material/Phone";
import { BackButton } from "../Navigation/BackButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Chat = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <AppBar
        position="static"
        color="primary"
        sx={{
          display: "flex",
          flexDirection: "row",
          top: 0,
          bottom: "auto",
          padding: 1,
        }}
      >
        <IconButton
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="close"
        >
          <ArrowBackIcon />
        </IconButton>
        <Box>
          <Avatar>S</Avatar>
        </Box>
        <Typography sx={{ margin: 1, paddingRight: 25 }}>Sopir</Typography>
        <IconButton color="inherit">
          <PhoneIcon />
        </IconButton>
      </AppBar>
      <div>
        <BubbleChat />
      </div>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Tulis Pesan.."
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "white", borderRadius: 2 }}
          />
          <IconButton color="inherit">
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
