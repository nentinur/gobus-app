import { Typography, Box, AppBar, Toolbar, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

import TrackBus from "../GObusMaps/TrackBus";

export default function RincianRiwayat() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate(-1)}
            aria-label="close"
          >
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Typography variant="h6">Jurusan: Indaramayu - bandung</Typography>
          <Typography variant="h6">Jam keberangkatan: 14:00</Typography>
        </Box>
      </div>
      <div>
        <TrackBus />
      </div>
    </div>
  );
}
