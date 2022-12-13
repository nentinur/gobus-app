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

import { BackButton } from "../Navigation/BackButton";
import { BookingTicket } from "../../page/BookingPage";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const FilterBus = () => {
  const [jurusan, setJurusan] = React.useState("");
  const PilihJurusan = (event) => {
    setJurusan(event.target.value);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3100/bus")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  // pilihan jurusan
  const jurusanBus = [
    {
      value: "bdg-imy",
      label: "Bandung - Indramayu",
    },
    {
      value: "imy-bdg",
      label: "Indramayu - Bandung",
    },
    {
      value: "bdg-kng",
      label: "Bandung - Kuningan",
    },
    {
      value: "imy-tsk",
      label: "Indramayu - Tasikmalaya",
    },
  ];

  // filter jurusan bus
  // const dataJurusan = ListBus.filter((bus) => bus.kode_jurusan === jurusan);
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
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FilteredBus data={data} />
      </Box>
    </div>
  );
};

const FilteredBus = (props) => {
  return (
    <div>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.data?.map((ListBus) => (
          <ListItem key={ListBus.kode_jurusan} value={ListBus.kode_jurusan}>
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
                    ListBus.jam +
                    " | Kursi Kosong: " +
                    ListBus.kursi_kosong
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
