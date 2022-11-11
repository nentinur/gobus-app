import { Typography, Box, Button } from "@mui/material";
import GObusMaps from "../component/GObusMaps";
import GObusAppBar from "../component/Navigation/GObusAppBar";
import { useNavigate } from "react-router-dom";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("filter-bus");
  };
  return (
    <div>
      <GObusAppBar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h5">Halo, Pengguna</Typography>
        <Typography variant="h6">mau kemana hari ini?</Typography>
      </Box>
      <div>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Button
            onClick={handleClick}
            variant="outlined"
            size="large"
            startIcon={<BookOnlineIcon />}
          >
            Booking Tiket
          </Button>
        </Box>
        <GObusMaps />
      </div>
    </div>
  );
};
