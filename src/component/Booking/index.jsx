import React, { useState } from "react";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsIcon from "@mui/icons-material/Directions";
import {
  TextField,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Button,
} from "@mui/material";
import { ListBus } from "../../Data";

import CloseIcon from "@mui/icons-material/Close";
import Maps from "../GObusMaps/RouteMaps";
import GObusMaps from "../GObusMaps";
import { SearchLocation } from "../GObusMaps/SearchLocation";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const Booking = (props) => {
  const dataJurusan = ListBus.filter(
    (booking) =>
      booking.keberangkatan === props.jam && booking.jurusan === props.jurusan
  );
  const [selectTitikNaik, setSelectTitikNaik] = useState(null);
  const [selectTitikTurun, setSelectTitikTurun] = useState(null);
  const latNaik = selectTitikNaik?.lat;
  const lonNaik = selectTitikNaik?.lon;
  const latTurun = selectTitikTurun?.lat;
  const lonTurun = selectTitikTurun?.lon;
  console.log("titik naik: ", selectTitikNaik);
  console.log("titik turun: ", selectTitikTurun);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {dataJurusan.map((ListBus) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsBusIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={ListBus.jurusan}
            secondary={
              "Jam: " +
              ListBus.keberangkatan +
              " | Kursi Kosong: " +
              ListBus.kursiKosong.length
            }
          />
        </ListItem>
      ))}
      <TextField
        id="outlined-number"
        label="Jumlah Kursi"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined"
        label="Nama"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined"
        label="Nomor HP/WA"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        sx={{ margin: 2 }}
        variant="outlined"
        startIcon={<DirectionsIcon />}
        onClick={handleClickOpen}
      >
        Pilih Lokasi
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ marginBottom: 2, position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SearchLocation
          label="Titik Naik"
          selectPosition={selectTitikNaik}
          setSelectPosition={setSelectTitikNaik}
        />
        <SearchLocation
          label="Titik Turun"
          selectPosition={selectTitikTurun}
          setSelectPosition={setSelectTitikTurun}
        />
        <Button size="small" variant="contained">
          Cari Rute
        </Button>
        <Maps
          latNaik={latNaik}
          lonNaik={lonNaik}
          latTurun={latTurun}
          lonTurun={lonTurun}
        />
      </Dialog>
    </div>
  );
};
