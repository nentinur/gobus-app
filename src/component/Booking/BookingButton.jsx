import { AppBar, Toolbar, Button } from "@mui/material";
export const BookingButton = () => {
  return (
    <div>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Button autoFocus color="inherit">
            Booking
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
