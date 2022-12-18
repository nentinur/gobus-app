import * as React from "react";
import {
  Button,
  Box,
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Booking } from "../component/Booking";
import { BookingButton } from "../component/Booking/BookingButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const BookingTicket = (props) => {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={handleClickOpen} variant="contained" size="medium">
        Booking
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
              <ArrowBackIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Boooking Kursi
            </Typography>
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
          <Booking jam={props.jam} jurusan={props.jurusan} bus={props.bus} />
          <BookingButton tarif={props.tarif} />
        </Box>
      </Dialog>
    </>
  );
};
