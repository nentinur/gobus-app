import * as React from "react";
import {
  Button,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  Slide,
} from "@mui/material";

import BookOnlineIcon from "@mui/icons-material/BookOnline";
import CloseIcon from "@mui/icons-material/Close";

import { FilterBus } from "./FilterBus";

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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Boooking Kursi
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Booking
            </Button>
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
          <FilterBus />
        </Box>
      </Dialog>
    </>
  );
};
