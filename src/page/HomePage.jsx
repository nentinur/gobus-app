import { Typography, Box, Button } from "@mui/material";
import GObusMaps from "../component/GObusMaps";
import GObusAppBar from "../component/Navigation/GObusAppBar";
import { useNavigate } from "react-router-dom";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import TrackBus from "../component/GObusMaps/TrackBus";
import { useState } from "react";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("filter-bus");
  };
  const user = localStorage.getItem("user");
  const login = localStorage.getItem("login");
  const dataUser = JSON.parse(user);

  return (
    <div>
      <GObusAppBar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h5">
          Halo, {login == "true" ? dataUser.nama : "Pengguna"}
        </Typography>
        <Typography variant="h6">mau kemana hari ini?</Typography>
      </Box>
      <div>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Button
            onClick={handleClick}
            variant="outlined"
            size="large"
            startIcon={<BookOnlineIcon />}
          >
            Booking Tiket
          </Button>
        </Box>
        <GObusMaps />
      </div>
    </div>
  );
};
