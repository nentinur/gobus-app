import * as React from "react";
import {
  Box,
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
import { BackButton } from "../Navigation/BackButton";
import { BookingTicket } from "../../page/BookingPage";

export const FilterBus = () => {
  const [jurusan, setJurusan] = React.useState("");
  const PilihJurusan = (event) => {
    setJurusan(event.target.value);
  };
  const dataJurusan = ListBus.filter((bus) => bus.jurusan === jurusan);
  return (
    <div>
      <BackButton />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
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
      </Box>
    </div>
  );
};

const FilteredBus = (props) => {
  return (
    <div>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.dataJurusan?.map((ListBus) => (
          <ListItem key={ListBus.jurusan} value={ListBus.jurusan}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <DirectionsBus />
                </Avatar>
              </ListItemAvatar>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                noValidate
                autoComplete="off"
              >
                <ListItemText
                  primary={ListBus.jurusan}
                  secondary={
                    "Jam: " +
                    ListBus.keberangkatan +
                    " | Kursi Kosong: " +
                    ListBus.kursiKosong.length
                  }
                />
                <BookingTicket
                  jam={ListBus.keberangkatan}
                  jurusan={ListBus.jurusan}
                />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
