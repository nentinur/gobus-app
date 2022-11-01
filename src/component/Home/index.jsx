import { MapDisplay } from "../GObusMaps";
import { BookingKursi } from "../BookingKursi";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Beranda = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h5">Halo, Pengguna</Typography>
        <Typography variant="h6">mau kemana hari ini?</Typography>
      </Box>
      <div>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <BookingKursi />
        </Box>
        <MapDisplay />
      </div>
    </div>
  );
};
