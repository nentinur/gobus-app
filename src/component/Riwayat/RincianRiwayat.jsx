import { MapsBeranda } from "../GObusMaps";
import { Typography, Box } from "@mui/material";
import LacakBus from "../GObusMaps/LacakBus";

export default function RincianRiwayat() {
  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Typography variant="h6">Jurusan: Indaramayu - bandung</Typography>
          <Typography variant="h6">Jam keberangkatan: 14:00</Typography>
        </Box>
      </div>
      <div>
        <LacakBus />
      </div>
    </div>
  );
}
