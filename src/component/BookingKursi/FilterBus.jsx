import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Avatar,
  TextField,
  MenuItem,
} from "@mui/material";

import DirectionsBus from "@mui/icons-material/DirectionsBus";

import { ListBus, jurusanBus } from "../../Data";
import { Booking } from "./Booking";

export const FilterBus = () => {
  const [jurusan, setJurusan] = React.useState("");
  const PilihJurusan = (event) => {
    setJurusan(event.target.value);
  };
  const dataJurusan = ListBus.filter((bus) => bus.jurusan === jurusan);
  return (
    <div>
      <TextField
        id="pilih-jurusan"
        select
        label="Pilih Jurusan Bus"
        value={jurusan}
        onChange={PilihJurusan}
      >
        {jurusanBus.map((option) => (
          <MenuItem key={option.label} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FilteredBus dataJurusan={dataJurusan} />
      <Booking />
    </div>
  );
};

const FilteredBus = (props) => {
  return (
    <div>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.dataJurusan?.map((ListBus) => (
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <DirectionsBus />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={"Jurusan: " + ListBus.jurusan}
                secondary={
                  "Jam: " +
                  ListBus.keberangkatan +
                  " | Kursi Kosong: " +
                  ListBus.kursiKosong.length
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
