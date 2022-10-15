import * as React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const jurusanBus = [
  {
    value: "bdg-imy",
    label: "Bandung - Indramayu",
  },
  {
    value: "imy-bdg",
    label: "Indramayu - Bandung",
  },
];
const jamKeberangkatan = [
  {
    value: "05-30",
    label: "05:30",
  },
  {
    value: "10-00",
    label: "10:00",
  },
];

export const BookingKursi = () => {
  const [value, setValue] = React.useState(dayjs());

  const PilihTanggal = (newValue) => {
    setValue(newValue);
  };
  const [jurusan, setJurusan] = React.useState("bdg-imy");
  const PilihJurusan = (event) => {
    setJurusan(event.target.value);
  };
  const [jam, setJam] = React.useState("5-30");
  const PilihJam = (event) => {
    setJam(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        size="large"
        startIcon={<BookOnlineIcon />}
      >
        Booking Kursi
      </Button>
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
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "90%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="pilih-tanggal"
              select
              label="Pilih Jurusan Bus"
              value={jurusan}
              onChange={PilihJurusan}
            >
              {jurusanBus.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <MobileDatePicker
                  label="Pilih Tanggal Keberangkatan"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={PilihTanggal}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div>
            <TextField
              id="pilih-jam"
              select
              label="Pilih Jam Keberangkatan"
              value={jam}
              onChange={PilihJam}
            >
              {jamKeberangkatan.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button onClick={handleClose}>Cari Bus</Button>
        </Box>
      </Dialog>
    </>
  );
};

const ListBus = [
  {
    noBus: "E2345EH",
    kursiKosong: 2,
    keberangkatan: ["06:30", "10:00", "14:00", "16:00"],
    jurusan: "bdg-imy",
  },
  {
    noBus: "b2345EH",
    kursiKosong: 2,
    keberangkatan: ["06:30", "10:00", "14:00", "16:00"],
    jurusan: "imy-bdg",
  },
];

function FilterBus() {
  ListBus.filter((ListBus) => ListBus.jurusan === "bdg-imy").map(
    (filteredListBus) => <li>{filteredListBus.jurusan}</li>
  );
}
