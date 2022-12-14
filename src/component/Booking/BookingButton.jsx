import { AppBar, Toolbar, Button, Typography } from "@mui/material";
export const BookingButton = (props) => {
  return (
    <div>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography>Total: Rp.{props.tarif}</Typography>
          <Button sx={{ marginLeft: 20 }} autoFocus color="inherit">
            Booking
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
