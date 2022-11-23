import { Typography, Box, AppBar, Toolbar, IconButton } from "@mui/material";

import TrackBus from "../GObusMaps/TrackBus";
import { BackButton } from "../Navigation/BackButton";

export default function DetailHistory() {
  return (
    <div>
      <BackButton />
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
