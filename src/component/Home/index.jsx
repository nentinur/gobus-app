import { BookingKursi } from "../BookingKursi";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import GObusMaps from "../GObusMaps";

export const HomePage = () => {
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
        <GObusMaps />
      </div>
    </div>
  );
};
