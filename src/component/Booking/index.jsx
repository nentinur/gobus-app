import React, { useState, useEffect } from "react";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsIcon from "@mui/icons-material/Directions";
import {
  TextField,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Maps from "../GObusMaps/RouteMaps";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const Booking = (props) => {
  // handle klik booking
  const [open, setOpen] = useState();
  const handleBooking = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3100/pesanan", {
        id_user: values.id_user,
        id_jadwal: values.id_jadwal,
        tanggal: values.tanggal,
        nama: values.nama,
        kontak: values.kontak,
        jumlah_kursi: values.jumlah_kursi,
        lat_naik: values.lat_awal,
        lon_naik: values.lon_awal,
        lat_turun: values.lat_akhir,
        lon_turun: values.lon_akhir,
        tarif: values.total_tarif,
      })
      .then((res) => {
        console.log(res);
        setOpen(true);
      })
      .catch((err) => console.error(err));
  };

  // menangkap id_jadwal yang dikirim melalui router
  const { state } = useLocation();
  const { id } = state;

  //get list bus dari API
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3100/bus")
      .then(function (response) {
        // handle success
        setData(response.data);
        console.log("bus: ", response.data);
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
  const dataBus = data.filter((booking) => booking.id_jadwal === id);
  console.log("data bus: ", dataBus);
  // mengambil titik koordinat
  const [latAwal, setLatAwal] = useState();
  const [lonAwal, setLonAwal] = useState();
  const [latAkhir, setLatAkhir] = useState();
  const [lonAkhir, setLonAkhir] = useState();

  // mengambil data dari local storage
  const user = localStorage.getItem("user");
  const login = localStorage.getItem("login");
  const dataUser = JSON.parse(user);

  // mendapatkan tanggal sekarang
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // data pesanan

  const [values, setValues] = useState({
    id_user: dataUser.id_user,
    id_jadwal: id,
    tanggal: date,
    nama: "",
    kontak: "",
    jumlah_kursi: 0,
    total_tarif: 0,
    lat_awal: "",
    lon_awal: "",
    lat_akhir: "",
    lon_akhir: "",
  });

  console.log(values);

  const handleClickKursi = (e) => {
    setValues({
      ...values,
      jumlah_kursi: e.target.value,
      total_tarif: e.target.value * tarif,
    });
  };

  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  const handleOk = () => {
    navigate("/history");
  };

  const close = () => {
    setOpen(false);
  };

  const [tarif, setTarif] = useState();
  useEffect(() => {
    dataBus.map((bus) => {
      setValues({
        ...values,
        lat_awal: bus.lat_awal,
        lon_awal: bus.lon_awal,
        lat_akhir: bus.lat_akhir,
        lon_akhir: bus.lon_akhir,
      });
    });
  }, []);
  useEffect(() => {
    dataBus.map((bus) => {
      setTarif(bus.tarif);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleBooking}>
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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Booking Kursi
            </Typography>
            <Button type="submit" autoFocus color="inherit">
              Booking
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "90%" },
          }}
        >
          {dataBus.map((ListBus) => (
            <ListItem key={ListBus.id_jadwal} value={ListBus.id_jadwal}>
              <ListItemAvatar>
                <Avatar>
                  <DirectionsBusIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={ListBus.jurusan}
                secondary={
                  "Jam: " +
                  ListBus.jam +
                  " | Kursi Kosong: " +
                  ListBus.kursi_kosong
                }
              />
            </ListItem>
          ))}

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
        </Box>
        {/* <Maps
          latAwal={values.lat_awal}
          lonAwal={values.lon_awal}
          latAkhir={values.lat_akhir}
          lonAkhir={values.lon_akhir}
        /> */}
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Typography>Total: Rp.{values.total_tarif}</Typography>
          </Toolbar>
        </AppBar>
        <Dialog open={open} onClose={close}>
          <DialogTitle id="alert-dialog-title">
            Pemesanan Tiket Berhasil
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Lihat rincian pemesanan?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOk}>Ya</Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};
