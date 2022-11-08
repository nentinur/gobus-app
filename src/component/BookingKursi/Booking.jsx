import PlaceIcon from "@mui/icons-material/Place";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
export const Booking = () => {
  return (
    <div>
      <TextField
        id="outlined-number"
        label="Jumlah Kursi"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined"
        label="Nama"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined"
        label="Nomor HP/WA"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-search"
        label="Titik Naik"
        type="search"
        variant="standard"
        size="small"
      />
      <IconButton aria-label="titik-naik">
        <PlaceIcon />
      </IconButton>
      <TextField
        id="standard-search"
        label="Titik Turun"
        type="search"
        variant="standard"
      />
      <IconButton aria-label="titik-turun">
        <PlaceIcon />
      </IconButton>
    </div>
  );
};
