import * as React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
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
