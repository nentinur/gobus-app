import { Typography, Box, Button } from "@mui/material";
import GObusMaps from "../GObusMaps";
import GObusAppBar from "./GObusAppBar";
import { useNavigate } from "react-router-dom";
import TrackBus from "../GObusMaps/TrackBus";
import { useState } from "react";

export const HomePageDriver = () => {
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
        <Typography variant="h6">Jumlah Kursi Kosong:</Typography>
      </Box>
      <div>
        <GObusMaps />
      </div>
    </div>
  );
};
