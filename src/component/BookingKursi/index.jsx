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
import FolderList from "./Booking";
import { jurusanBus, jamKeberangkatan } from "../../Data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const BookingKursi = () => {
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
          <InputJurusan />
          <InputJam />
        </Box>
        <Box sx={{ border: 1, margin: 2 }}>
          <FolderList />
        </Box>
      </Dialog>
    </>
  );
};

const InputJurusan = () => {
  const [jurusan, setJurusan] = React.useState("");
  const PilihJurusan = (event) => {
    setJurusan(event.target.value);
    console.log(jurusan);
  };
  return (
    <div>
      <TextField
        id="pilih-jurusan"
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
  );
};

const InputJam = () => {
  const [jam, setJam] = React.useState("05-30");
  const PilihJam = (event) => {
    setJam(event.target.value);
  };
  return (
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
  );
};
