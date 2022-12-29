import { Typography, Box, Button } from "@mui/material";
import GObusMaps from "../GObusMaps";
import GObusAppBar from "./GObusAppBar";
import { useNavigate } from "react-router-dom";
import TrackMaps from "../GObusMaps/TrackMaps";
import { useState } from "react";

export const HomePageDriver = () => {
  const login = localStorage.getItem("login");
  const bus = localStorage.getItem("bus");
  const dataBus = JSON.parse(bus);
  return (
    <div>
      <GObusAppBar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h6">
          Jumlah Kursi Kosong: {dataBus.kursi_kosong}
        </Typography>
      </Box>
      <div>
        <TrackMaps />
      </div>
    </div>
  );
};
