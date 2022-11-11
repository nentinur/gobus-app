import PlaceIcon from "@mui/icons-material/Place";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import {
  TextField,
  IconButton,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { ListBus } from "../../Data";
export const Booking = (props) => {
  const dataJurusan = ListBus.filter(
    (booking) =>
      booking.keberangkatan === props.jam && booking.jurusan === props.jurusan
  );
  return (
    <div>
      {dataJurusan.map((ListBus) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsBusIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={ListBus.jurusan}
            secondary={
              "Jam: " +
              ListBus.keberangkatan +
              " | Kursi Kosong: " +
              ListBus.kursiKosong.length
            }
          />
        </ListItem>
      ))}
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
