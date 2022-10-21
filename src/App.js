import { GObusAppBar } from "./component/GObusAppBar";
import { GObusNavBar } from "./component/GObusNavBar";
import { MapDisplay } from "./component/GObusMaps";
import { BookingKursi } from "./component/BookingKursi";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const App = () => {
  return (
    <>
      <GObusAppBar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h5">Halo, Pengguna</Typography>
        <Typography variant="h6">mau kemana hari ini?</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <BookingKursi />
      </Box>
      <MapDisplay />
      <GObusNavBar />
    </>
  );
};

export default App;
