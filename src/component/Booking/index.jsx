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
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Maps from "../GObusMaps/RouteMaps";
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

  // get titik berangat dan berhenti bus
  const [latAwal, setLatAwal] = useState();
  const [lonAwal, setLonAwal] = useState();
  const [latAkhir, setLatAkhir] = useState();
  const [lonAkhir, setLonAkhir] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:3100/posisi/rute", {
        bus: props.bus,
      })
      .then(function (response) {
        setLatAwal(response.data[0].lat_awal);
        setLonAwal(response.data[0].lon_awal);
        setLatAkhir(response.data[0].lat_akhir);
        setLonAkhir(response.data[0].lon_akhir);
        console.log("posisi awal: ", latAwal);
        console.log("posisi akhir: ", lonAkhir);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });

  //get list bus dari API
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3100/bus")
      .then(function (response) {
        // handle success
        console.log("bus: ", response.data);
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
  // const [selectTitikNaik, setSelectTitikNaik] = useState(null);
  // const [selectTitikTurun, setSelectTitikTurun] = useState(null);
  const [open, setOpen] = React.useState(false);

  // data pesanan
  const [values, setValues] = useState({
    no_bus: props.bus,
    nama: "",
    kontak: "",
    jumlah_kursi: 0,
    total_tarif: 0,
  });
  console.log(values);

  // untuk membuka dan menutup dialog Pilih Rute
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickKursi = (e) => {
    setValues({
      ...values,
      jumlah_kursi: e.target.value,
      total_tarif: e.target.value * props.tarif,
    });
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
          onChange={handleClickKursi}
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
          no_bus
        >
          Pilih Lokasi
        </Button>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Typography>Total: Rp.{values.total_tarif}</Typography>
            <Button sx={{ marginLeft: 20 }} autoFocus color="inherit">
              Booking
            </Button>
          </Toolbar>
        </AppBar>
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

        <Maps
          latAwal={latAwal}
          lonAwal={lonAwal}
          latAkhir={latAkhir}
          lonAkhir={lonAkhir}
        />
      </Dialog>
    </div>
  );
};
