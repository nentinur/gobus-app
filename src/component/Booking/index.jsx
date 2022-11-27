import React, { useState } from "react";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
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
  const [selectPosition, setSelectPosition] = useState(null);
  console.log("titik naik: " + selectPosition);
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
      <Button onClick={handleClickOpen}>Pilih Lokasi</Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
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
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
        <GObusMaps />
      </Dialog>
    </div>
  );
};
