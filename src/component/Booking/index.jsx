import React, { useState } from "react";
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
import { SearchLocation1 } from "../GObusMaps/SearchLocation";
import { SearchLocation2 } from "../GObusMaps/SearchLocation";

export const Booking = (props) => {
  const dataJurusan = ListBus.filter(
    (booking) =>
      booking.keberangkatan === props.jam && booking.jurusan === props.jurusan
  );

  const [selectPosition1, setSelectPosition1] = useState(null);
  const [selectPosition2, setSelectPosition2] = useState(null);
  console.log("titik naik: " + selectPosition1);
  console.log("titik turun: " + selectPosition2);
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
      <SearchLocation1
        selectPosition1={selectPosition1}
        setSelectPosition1={setSelectPosition1}
      />
      <SearchLocation2
        selectPosition2={selectPosition2}
        setSelectPosition2={setSelectPosition2}
      />
    </div>
  );
};
