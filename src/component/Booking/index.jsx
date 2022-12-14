import React, { useState, useEffect } from "react";
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
import { SearchLocation } from "../Booking/SearchLocation";
import { BookingButton } from "../Booking/BookingButton";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const Booking = (props) => {
  // handle klik booking
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:3100/login", {
        kontak: values.kontak,
        pass: values.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.error(err));
  };

  //get list bus dari API
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3100/bus")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  // fungsi filter bus
  const dataJurusan = data.filter(
    (booking) => booking.jam === props.jam && booking.jurusan === props.jurusan
  );
  // untuk mengambil titik koordinat penumpang
  const [selectTitikNaik, setSelectTitikNaik] = useState(null);
  const [selectTitikTurun, setSelectTitikTurun] = useState(null);
  const latNaik = selectTitikNaik?.lat;
  const lonNaik = selectTitikNaik?.lon;
  const latTurun = selectTitikTurun?.lat;
  const lonTurun = selectTitikTurun?.lon;
  const [open, setOpen] = React.useState(false);

  // data pesanan
  const [values, setValues] = useState({
    nama: "",
    kontak: "",
    jumlah_kursi: 1,
    latNaik: latNaik,
    lonNaik: lonNaik,
    latTurun: latTurun,
    lonTurun: lonTurun,
  });
  console.log(values);

  // untuk membuka dan menutup dialog Pilih Rute
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
              "Jam: " + ListBus.jam + " | Kursi Kosong: " + ListBus.kursi_kosong
            }
          />
        </ListItem>
      ))}
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-number"
          label="Jumlah Kursi"
          type="number"
          onChange={(e) =>
            setValues({ ...values, jumlah_kursi: e.target.value })
          }
        />
        <TextField
          id="outlined"
          label="Nama"
          type="text"
          onChange={(e) => setValues({ ...values, nama: e.target.value })}
        />
        <TextField
          id="outlined"
          label="Nomor HP/WA"
          type="text"
          onChange={(e) => setValues({ ...values, kontak: e.target.value })}
        />
        <Button
          sx={{ margin: 2 }}
          variant="outlined"
          startIcon={<DirectionsIcon />}
          onClick={handleClickOpen}
        >
          Pilih Lokasi
        </Button>
        <BookingButton />
      </form>
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
